

const Country = ({country}) => {

        console.log(country);
        const style = {
            border: "2px solid red",
            borderRadius: "10px",
            padding: "20px",
            margin:'20px'
        };

        const {name,flags } = country;

    return (
        <div style={style}>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;