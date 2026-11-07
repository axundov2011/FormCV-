import React, {useState} from 'react'
import {jokesList, jokerEmojis } from '../../mock/joker';

const RandomJoker = () => {
    const [jokes, setJokes] = useState([]);
      
    

    const handleAddJoke = () => {
        const text  = jokesList[jokes.length % jokesList.length];
        const emoji = jokerEmojis[Math.floor(Math.random() * jokerEmojis.length )];

        setJokes([...jokes, {id: jokes.length + 1, text, emoji}])
    }

    const handleClear = () => {
        setJokes([])
    }
    return (
    <div className="jokes">
      <div className="jokes-actions">
        <button className="btn-new" onClick={handleAddJoke}>🤡 Zarafat gətir</button>
        <button className="btn-new" onClick={handleClear}>Təmizlə</button>
      </div>
       
       

      {jokes.length === 0 && (
        <p className="jokes-empty">Hələ zarafat yoxdur. Düyməyə bas!</p>
      )}


      <ul className="jokes-list">
        {jokes.map((joke) => (
          <li className="joke-item" key={joke.id}>
            <span className="joke-emoji">{joke.emoji}</span>
            <span className="joke-text">{joke.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default RandomJoker