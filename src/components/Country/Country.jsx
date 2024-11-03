import PropTypes from 'prop-types';

const Country = ({ country }) => {

    console.log(country);
    const style = {
        border: "2px solid red",
        borderRadius: "10px",
        padding: "20px",
        margin: '20px'
    };

    const { name, flags } = country;

    console.log("Name type:", typeof flags.png);

    return (
        <div style={style}>
            <h3>Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
        </div>
    );
};


Country.propTypes = {
    country: PropTypes.shape({
        name : PropTypes.shape({
            common : PropTypes.string.isRequired,
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired,
        }).isRequired,
    })
};




export default Country;