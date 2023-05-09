import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {

    const [resource, setResource] = useState("people");
    const [id, setId] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://swapi.dev/api/${resource}/${id}`)
            .then(() => {
                navigate(`/${resource}/${id}`);
                setError(false);
            })
            .catch(() => {
                setError(true);
            });
    };

    return (
        <nav style={{textAlign:'center'}}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="resource">Search For: </label>
                <select
                    id="resource"
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id"> ID: </label>
                <input
                    type="number"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && (
                <div style={{marginTop:'20px'}}>
                    <img src="https://media.tenor.com/WuOwfnsLcfYAAAAC/star-wars-obi-wan-kenobi.gif" alt="Obi-Wan Kenobi" />
                    <p style={{fontSize:'20px'}}>These aren't the droids you're looking for.</p>
                </div>
            )}
        </nav>
    );
};

export default Home