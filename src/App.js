import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [hitung,setHitung] = useState(0);
  const [teks,setTeks] = useState([]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hello world')

    let amount = parseInt(hitung);
    if ( amount <= 0 ){
      return amount = 1
    }

    if (amount > 8){
      return amount = 8
    }
    setTeks(data.slice(0,amount));
  }

  return (
  <section className='section-center'>
      <h3>Create Dummy Text!</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
        id='amount' name='amount' type="number" value={hitung}
        onChange={(e)=>setHitung(e.target.value)}
        />
        <button className='btn'
        type='submit'
        >
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {teks.map((item,index)=>{
          console.log(item)
          return (
            <p key={index}>{item}</p>
          );
        })}
      </article>
      
  </section>
    );
}

export default App;
