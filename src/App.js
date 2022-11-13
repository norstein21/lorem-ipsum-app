import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [hitung,setHitung] = useState(0);
  const [teks,setTeks] = useState(0);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hello world')
    setTeks(data);
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
      <article>
        <p>Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. </p>
      </article>
      
  </section>
    );
}

export default App;
