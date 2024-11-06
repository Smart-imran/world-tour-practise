import PropTypes from 'prop-types';

const Country = ({ country }) => {

    if (!country) {
        return <p>Country data is not available.</p>;
    }
    //Destructuring
    const { name, flags, population,area } = country;

    console.log(country);
    const style = {
        border: "2px solid red",
        borderRadius: "10px",
        padding: "20px",
        margin: '20px'
    };

    console.log("Flag type:", typeof flags.png);
    console.log("population:", typeof population);
    console.log("area:", typeof area);

    return (
        <div style={style}>
            <h3>Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area : {area} km</p>
        </div>
    );
};


Country.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired,
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired,
        }).isRequired,
        population: PropTypes.number.isRequired,
        area: PropTypes.number.isRequired,
    })
};
export default Country;