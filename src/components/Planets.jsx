import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
    const [planet, setPlanet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => setPlanet(response.data))
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div style={{textAlign:"center"}}>
            {planet ? (
                <>
                    <h2>{planet.name}</h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Population: {planet.population}</p>
                </>
            ) : (
                <p>Still Loading...</p>
            )}
        </div>
    );
};

export default Planet;
