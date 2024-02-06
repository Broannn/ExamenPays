class Country {
    
    constructor(name, translations, flag){
        this.name = name;
        this.translations = translations;
        this.flag = flag;
        this.answers = this.GetAnswers();
        this.verifyflag = this.Getflag();
    }


    GetAnswers() {
        const translationsArray = Object.values(this.translations);
        const answersSet = new Set(translationsArray.map(translation => translation.common.toLowerCase()));
        return Array.from(answersSet);
    }


    
    VerifyAnswer(Answergiven) {
        const normalizedAnswer = Answergiven.toLowerCase();
        if (this.answers.has(normalizedAnswer)){
            return true;
        } else return false;
       
    
    }

    Getflag(){
        const html =
        `
        <div id ="flag">
        <h1>${this.flag}</h1>
        </div>
        `
       //document.querySelector('h1').append(html);
        return html;
    }
    
}


export default Country;