// Write your Character component here
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Styles = styled.div `

    color: white;
    

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;  
    }

    li {
        list-style: none;
        width: 50%;
        border: 1px solid green;
        margin: .5em;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    h2 {
        font-size: 28px;
        margin-left: .5em;
        margin-right: 1vw;
    }

    button {
      margin-top: 2em;
      margin-bottom: 1em;
      margin-right: .5em;
      padding-left: 1.5em;
      padding-right: 1.5em;
      font-size: 18
      font-weight: bolder;
      border: 1px solid grey;
      background-color: grey;
      color: indigo;
      border-radius: 40px 80px 40px 80px;
    }


`

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(res => { 
            console.log(res.data)
          setCharacters(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Styles className="container">
            <ul>
                {characters.map(person => (
                    <li>
                        <h2>{person.name}</h2> 
                     <button>{person.birth_year}</button>
                    </li>
                ))}
            </ul>
        </Styles>
    )
}


export default Character;