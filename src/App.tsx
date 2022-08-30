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
      {
            quotes.map(quote => (
              <div className='quotes'>
                  <p>{quote.author}-</p>
                    <h3>{quote.quote}</h3>
              </div>
            ))}
    </div>
  )
}

export default App
