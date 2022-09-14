import { useEffect, useState } from 'react'

type Quotes = {
    id: number,
    name:string,
    lastname:string,
    age:string,
    image:string,
    quote: string
  }
export function Home(){
    const [quotes, setQuotes] = useState<Quotes[]>([])
    useEffect(() => {
      fetch("http://localhost:4000/quotes")
        .then((resp) => resp.json())
        .then((quotesFromServer) => setQuotes(quotesFromServer));
    }, []);

    return(
        <div>
      <h2>Famous Quotes</h2>
      <h1>Add New quote</h1>
      <form onSubmit={event => 
           {event.preventDefault()
            const quotescopy = structuredClone(quotes)
        
              let newquote = {
                quote: event.target.quote.value,
                authors: event.target.authors.value
              }
              let authors = {
                
              }
              quotescopy.push(newquote);
              setQuotes(quotescopy)

              event.target.reset();
            }}>
        <div className='name-lastname'>
        <input id='name' name='name' type='text' placeholder="Author's Name?" required></input>
        <input id='lastname' name='lastname' type='text' placeholder="Author's Lastname?" required></input>
        </div>
        <div className='image-age'>
        <input type="url" name='image' id='image' placeholder="Author's Picture?" required></input>
        <input id='age' name='age' type='text' placeholder="Author's Age?" required></input>
        </div>
        <textarea id='quote' name='qoute' placeholder="Quote?" rows={3}  required></textarea>
        <button className='post-btn'onClick={(event)=>{
    fetch("http://localhost:4000/authors",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById("name")?.value,
        lastname: document.getElementById("lastname")?.value,
        image: document.getElementById("image")?.value,
        age: document.getElementById("age")?.value,
        quote: document.getElementById("quote")?.value
      }
      )
    }) .then(resp => resp.json())
    .then(quotesfromserver => setQuotes([...quotes, quotesfromserver]))
  }}> POST</button>
      </form>
      {
            quotes.map(quote => (
              <div className='quotes'>
                <div className='name'>
                  <h3>{quote.name}</h3>
                  <h3>{quote.lastname}-</h3>
                  </div>
                  <div className='image'>
                  <img src={quote.image} width="80px" />
                  </div>
                    <p>"{quote.quote}"</p>
                    <h4>{quote.age}</h4>
                    
              </div>
            ))}
    </div>
  )
}