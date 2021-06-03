import React, { useState, useEffect } from 'react';
import axios from 'axios';
//useEffect lets us know our component is re-rendering 
//and that some piece of information has changed.

//useEffect allows functional components to use something like lifecycle methods
//we can configure the useEffect hook to run when 1)the compoonent is rendered for the first time,
//2)the component is rendered for the first time AND whenever it re-renders, 3) the component is rendered
//for the first time and (whenever it re-renders AND some piece of data has changed).
const Search = () => {
  const [term, setTerm] = useState('chadwick boseman');
  //we're going to use debouncedTerm to track state of results
  //so we don't have that error of: 'React Hook useEffect has a missing dependency: 'results.length'. Either include it or 
  //remove the dependency array react-hooks/exhaustive-deps'
  const [debouncedTerm, setDeouncedTerm] = useState(term);
  const [results, setResults] = useState([]);


  //this runs everytime term changes, queuing up setDeouncedTerm to 
  //update debouncedTerm, which kicks off the second useEffect that
  //actually makes the request.

  //we are using debouncedTerm even b/c we were trying to do
  //initial load of data and checking to see if results.length had changed
  //but the problem is anytime you refer to a piece of data in useEffect,
  //you'll get a dependency error to add it to the array of tracked data.

  //just adding it there will cause bugs later on, so the workaround is using
  // a second useEffect instead.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeouncedTerm(term);
    }, 1000)
console.log('ere')
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);


  //this only runs once when the app first loads
  //becuase even tho the first useEffect kicks off,
  //term and debouncedTerm are the same, and the second useEffect
  //would only kick off again if the debouncedTerm changed, and it didn't.
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php?', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search)
    }

     search();
  }, [debouncedTerm]);


  //wikipedia api needs a term or it'll throw an error. so, we can either
  //provide a default search term, or do the below to make sure term is set before searching
  // const timerId = setTimeout(() => {
  //   if (term) {
  //     search();
  //   }
  // }, 500)
  //we're using the timer to wait 500ms after every keystroke
  //so we're not sending a request after every keystroke, we want
  //to wait until the user stops typing to send the request.

  //this clean up function runs after the component
  //re-renders again. So, it doesn't run the first time the 
  //component renders.
  //it runs after the first render, and useEffect is now called after it.
  // return () => {
  //   //we cancel the timer every time a user types
  //   clearTimeout(timerId) 
  // };

  //the secord argument, here, is always either: nothing, 
  //an empty array, or an array with items in it. You will never see
  //an object, only an array or nothing.

  //an empty array here means: run at initial render only; nothing means: run at
  //initial render AND run after every re-render; array with data in it means: run 
  //at initial render AND run after every re-render IF data has changed since last render

  //that array can have multiple items in it, and as long as one of the pieces of 
  //data changes, it'll re-render.

  //dangerouslySetInnerHTML is used to render HTML contained in a string.
  //try not to use this b/c of XSS attacks

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a 
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target='_blank'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input 
            className='input' 
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;