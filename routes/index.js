const Router = require('express').Router()
const fetch = require('node-fetch');

// Lat and Long
const countryCords = []
let allData;
let mapdataClone = []
const url = 'https://corona.lmao.ninja/v2/countries';
fetch('http://localhost:5000/js/countries.json')
    .then(res => res.json())
    .then(covidData => {
        covidData.forEach(data => {
            countryCords.push({code:data.countryInfo.iso2, lat:data.countryInfo.lat, long:data.countryInfo.long})
        })       
    })
    .catch(err => console.log(err));        
    fetch("http://localhost:5000/js/countries.json")
    .then(res => res.json())
    .then(data => {          
           allData = data
    })
    .catch(err => console.log(err));       
    


Router.get('/', (req, res, next) => {    
    res.render('index', {
        title:"Covid19 Updates",
        allData,
        countryCords,                
    });
})
Router.get('/api/latlong', (req, res, next) => {
    res.status(200).json(countryCords)
})

module.exports = Router