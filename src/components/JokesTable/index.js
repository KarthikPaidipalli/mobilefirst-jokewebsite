import React, { useState, useEffect } from 'react';

import "./index.css"
const JokesTable = props => {
  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };
  const gotologin=(e)=>{
    e.preventDefault();
    const {history}=props
    history.replace('/')
  }

  return (
    <div className="homepage">
      <h1 className='heading-joketable'>Jokes</h1>
      <div className="jokes-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke) => (
              <tr key={joke.id}>
                <td>{joke.category}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='bottom'>
      <button onClick={gotologin} className='logoutbutton'>Logout</button>
      </div>
    </div>
  );
};

export default JokesTable;
