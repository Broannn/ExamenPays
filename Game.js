import Country from "./Country.js";
class Game {
    #score = 0;
    #countryData = [];
    #countryIndex = 0;
    #currentCountry = null;

    constructor(countryData) {
        this.#countryData = countryData;
        this.#currentCountry = new Country(this.#countryData[this.#countryIndex]);
        this.#currentCountry.getFlag();
    }

    Getscore() {
        return this.#score;
    }

    AddPoint(){
        this.#score++;
        return this.#score;
    }

    IsTheGameFinished(){
        if(this.#countryIndex >= this.#countryData.length)
        {
        return true;
        } else return false;
    }



}

export default Game;
