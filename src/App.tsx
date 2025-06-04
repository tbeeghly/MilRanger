import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState<string>('')
  const [input2, setInput2] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  const calculateResult = () => {
    const value1 = parseFloat(input1)
    const value2 = parseFloat(input2)
    
    if (isNaN(value1) || isNaN(value2) || value2 === 0) {
      setResult(null)
      return
    }
    
    const output = (value1 * 27.778) / value2
    setResult(Math.round(output * 100) / 100) // Round to 2 decimal places
  }

  const clearAll = () => {
    setInput1('')
    setInput2('')
    setResult(null)
  }

  return (
    <div className="app">      <header className="app-header">
        <h1>MilRanger</h1>
        <p>(Object size in inches x 27.778) / observed size in mils </p>
        <a 
          href="https://www.marksmanshiptrainingcenter.com/uploads/3/4/9/7/34971413/bc_article_-_range_estimation.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="reference-link"
        >
          Range Estimation Reference
        </a>
      </header>
      
      <main className="calculator">
        <div className="input-group">
          <label htmlFor="input1">Known size in inches</label>
          <input
            id="input1"
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Enter first value"
            inputMode="decimal"
          />
        </div>

        <div className="input-group">
          <label htmlFor="input2">Observed size in mils</label>
          <input
            id="input2"
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Enter second value"
            inputMode="decimal"
          />
        </div>        <div className="button-group">
          <button 
            onClick={clearAll}
            className="clear-btn"
          >
            Clear
          </button>
          <button 
            onClick={calculateResult}
            className="calculate-btn"
            disabled={!input1 || !input2}
          >
            Calculate
          </button>
        </div>

        {result !== null && (
          <div className="result">
            <h2>Result: {result}</h2>
          </div>
        )}

        {input1 && input2 && parseFloat(input2) === 0 && (
          <div className="error">
            Error: Cannot divide by zero
          </div>
        )}
      </main>
    </div>
  )
}

export default App
