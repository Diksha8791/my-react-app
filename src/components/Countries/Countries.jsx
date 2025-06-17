import {React, useState, useEffect} from "react";
import axios from "axios";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

   

    const getCountries = () => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
        .then( res => {
            console.log(res);
            let countries = res.data.map((country) => country.name.common);

            let countriesObj = res.data.map((country) => {
                return {
                    countryName: country.name.common,
                    countryDesc: country.flags.alt,
                    countryFlag: country.flags.png,
                }
            })

            //setCountries(countries.sort());
            countriesObj.sort((a,b) => a.countryName.localeCompare(b.countryName));
            setCountries(countriesObj);

        }).catch(err => {
            console.log(err);
        })
    }

     useEffect(() => {getCountries()},[]);

    //const countryData = countriesObj.filter()

    const handleSelectChange = (e) => {
        e.preventDefault();
        let country = e.target.value;
        let countryData = countries.find((c) => c.countryName==country);
        console.log(countryData);
        setSelectedCountry(countryData);
    }

    return (
        <div>
            <h2>Countries!!!!</h2>
            <button onClick={getCountries}>Get Countries</button>
            {/* <select value={selectedCountry} onChange={(e) => handleSelectChange(e)}>
                <option value="">Select a country</option>
                {
                    countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))
                }
            </select> */}
            { countries && countries.length > 0 && (
                <select value={selectedCountry.countryName} onChange={(e) => handleSelectChange(e)}>
                <option value="">Select a country</option>
                {
                    countries.map((country, index) => (
                        <option key={index} value={country.countryName}>{country.countryName}</option>
                    ))
                }
                </select>
             )}

            { selectedCountry && selectedCountry.countryFlag && (
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                <img src={selectedCountry.countryFlag} alt={`${selectedCountry.countryName} flag`} style={{ width: '100px', marginRight: '20px' }}></img>
                <p style={{maxWidth: '400px', marginRight: '10px'}}>{selectedCountry.countryDesc}</p>
            </div>
            )}

           
           
        </div>
    )
}

export default Countries;