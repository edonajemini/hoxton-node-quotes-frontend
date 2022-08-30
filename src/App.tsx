import { useEffect, useState } from 'react'
import './App.css'

type Quotes = {
  id: number,
  author:string,
  quote: string
}

function App() {
  const [quotes, setQuotes] = useState<Quotes[]>([])
  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);
  return (
    <div className="App">
      <h2>Famous Quotes</h2>
      {
            quotes.map(quote => (
              <div className='quotes'>
                  <h3>{quote.author}-</h3>
                    <p>"{quote.quote}"</p>
              </div>
            ))}
    </div>
  )
}

export default App
