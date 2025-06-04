import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState<string>('')
  const [input2, setInput2] = useState<string>('')
  const [displayResult, setDisplayResult] = useState<string>('000')
  const [hasInputError, setHasInputError] = useState<boolean>(false)

  // Function to validate inputs and update error state
  const validateInputs = (value1: string, value2: string) => {
    // Check if either input has a value and is non-numeric
    const hasValue1 = value1.trim() !== ''
    const hasValue2 = value2.trim() !== ''
    const isValid1 = hasValue1 ? !isNaN(parseFloat(value1)) && isFinite(parseFloat(value1)) : true
    const isValid2 = hasValue2 ? !isNaN(parseFloat(value2)) && isFinite(parseFloat(value2)) : true
    
    setHasInputError((hasValue1 && !isValid1) || (hasValue2 && !isValid2))
  }

  const handleInput1Change = (value: string) => {
    setInput1(value)
    validateInputs(value, input2)
  }
  const handleInput2Change = (value: string) => {
    setInput2(value)
    validateInputs(input1, value)
  }  // Animation function for typing effect
  const animateResult = (targetValue: number) => {
    const targetString = targetValue.toString().padStart(3, '0')
    const duration = 300 // 0.3 seconds
    const steps = 20
    const stepDuration = duration / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      let currentDisplay = ''
      
      for (let i = 0; i < 3; i++) {
        const targetDigit = parseInt(targetString[i])
        const progress = Math.min(currentStep / steps, 1)
        const currentDigit = Math.floor(targetDigit * progress)
        currentDisplay += currentDigit.toString()
      }
      
      setDisplayResult(currentDisplay)
      
      if (currentStep >= steps) {
        clearInterval(interval)
        setDisplayResult(targetString)
      }
    }, stepDuration)
  }
  const calculateResult = () => {
    const value1 = parseFloat(input1)
    const value2 = parseFloat(input2)
    
    if (value2 === 0) {
      animateResult(0)
      return
    }
    
    const output = (value1 * 27.778) / value2
    const roundedResult = Math.round(output)
    animateResult(roundedResult)
  }

  const clearAll = () => {
    setInput1('')
    setInput2('')
    setDisplayResult('000')
    setHasInputError(false)
  }

  return (
    <div className="app">      <header className="app-header">
        <h1>MilRanger</h1>
        <p>(Target size in inches x 27.778) / observed size in mils </p>
    
      </header>
      
      <main className="calculator">
        <div className="input-group">
          <label htmlFor="input1">Target size in inches</label>          <input
            id="input1"
            type="text"
            value={input1}
            onChange={(e) => handleInput1Change(e.target.value)}
            placeholder="Enter first value"
            inputMode="decimal"
          />
        </div>        <div className="input-group">
          <label htmlFor="input2">Observed size in mils</label>          <input
            id="input2"
            type="text"
            value={input2}
            onChange={(e) => handleInput2Change(e.target.value)}
            placeholder="Enter second value"
            inputMode="decimal"
          />        </div>

        <div className="button-group">
          <button 
            onClick={clearAll}
            className="clear-btn"
          >
            Clear
          </button>          <button 
            onClick={calculateResult}
            className="calculate-btn"
            disabled={!input1 || !input2 || hasInputError}
          >
            Calculate
          </button>        </div>

        <div className="error-container">
          {hasInputError && (
            <div className="input-error">
              Enter a numeric value
            </div>
          )}

          {input1 && input2 && parseFloat(input2) === 0 && !hasInputError && (
            <div className="error">
              Error: Cannot divide by zero
            </div>
          )}
        </div>

        <div className="result">
          <div className="result-number">{displayResult}</div>
          <div className="result-unit">yards</div>
        </div>
      </main>
    </div>
  )
}

export default App
