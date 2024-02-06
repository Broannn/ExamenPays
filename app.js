const countries = [];
import Game from "./Game.js";
import Country from "./Country.js"
import shuffle from "./node_modules/lodash-es/shuffle.js";

async function Getcountry() {
    try {
        const CountryQuery = await fetch('https://restcountries.com/v3.1/all');

        const CountryData = await CountryQuery.json(); 
        
        const SortedCountry = shuffle(CountryData);

        console.log(SortedCountry);

        SortedCountry.forEach(country => {
            const newCountry = new Country(country.name, country.translations, country.flag);
            countries.push(newCountry);
            newCountry.GetAnswers();
        });
    

        } catch (error) {
            console.error("Erreur lors de la récupération de l'API", error);
        }
        }



Getcountry();
