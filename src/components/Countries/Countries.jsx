import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        setShowAll(true);
        const filtered = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    const handleClear = () => {
        setSearchTerm('');
        setFilteredCountries([]);
        setShowAll(false);
    };

    const displayedCountries = showAll ? (searchTerm ? filteredCountries : countries) : [];

    const searchBoxStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '2px solid #ccc',
        width: '250px',
        outline: 'none',
        transition: 'border-color 0.3s',
    };

    const searchBoxFocusStyle = {
        ...searchBoxStyle,
        borderColor: '#007BFF',
    };

    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <button onClick={() => setShowAll(true)}>Show All Countries</button>

            <input
                type="text"
                placeholder="Search country by name"
                value={searchTerm}
                onChange={handleSearch}
                style={searchTerm ? searchBoxFocusStyle : searchBoxStyle}
            />

            <button onClick={handleClear} style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}>Clear All</button>

            {displayedCountries.length > 0 ? (
                displayedCountries.map((country) => (
                    <Country
                        country={country}
                        key={country.cca3}
                    />
                ))
            ) : (
                <p>{showAll ? "No country found" : "Click 'Show All Countries' to display the list"}</p>
            )}
        </div>
    );
};

export default Countries;
