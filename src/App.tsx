import { useEffect, useState } from 'react'
import './App.css'

type Quotes = {
  id: number,
  name:string,
  lastname:string,
  age:string,
  Image:string,
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
                <div className='name'>
                  <h3>{quote.name}</h3>
                  <h3>{quote.lastname}-</h3>
                  </div>
                  <div className='image'>
                  <img src={quote.Image} width="80px" />
                  </div>
                    <p>"{quote.quote}"</p>
                    <h4>{quote.age}</h4>
              </div>
            ))}
    </div>
  )
}

export default App
