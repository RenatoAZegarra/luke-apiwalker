import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const [people, setPeople] = useState(null)
    const{id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then ((serverResponse) => {
            setPeople(serverResponse.data)})
        .catch(errorObject => { console.log(errorObject)})
    },[id])

    return (
        <div style={{textAlign:'center'}}>
            {people?(
                <>
                <h2>{people.name}</h2>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
                </>
            ):
            <p>Still Loading.....</p>
        
        }
        </div>
    )
}

export default People