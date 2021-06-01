import styled from "styled-components";


type Props = {
    large?: boolean;
    center?: boolean;
    isGreen?: boolean;
    xl?: boolean;
}

const Pg = styled.p<Props>`
    font-size: ${props => props.xl ? '1.5em' : props.large ? '1.2em' : '1em'};
    font-weight: ${props => props.xl ? 'bold' : 'normal'};
    margin: 5px 0;
    text-align: ${props => props.center ? 'center' : 'start'};
    color: ${props => props.isGreen ? props.theme.colors.green : 'inherit'};
`

export default Pg


const words = [
    'til', 'vera', 'hafið', 'strá', 'garður', 
    'með', 'glas', 'birta', 'margur', 'þróttur', 'stafur',
    'börkur', 'verk', 'kíló', 'boli','frek', 'tunna', 'vír', 'reipi', 
    'flís', 'orgel', 'trappa', 'vara', 'lykill', 'hús', 'bíll', 'vefur',
    'hoppa', 'leiða', 'fara', 'líta', 'segja', 'gala', 'sveit', 
    'íþrótt', 'gras', 'bolti', 'ríma', 'ís', 'skeið', 'hestur', 'hundur',
    'þrá', 'vona', 'skjár', 'tól', 'fiskur', 'dós', 'úr', 'tölva',
    'mynd', 'merkja', 'himinn', 'grind', 'teymi', 'rekstur', 'orka', 
    'matur', 'ostur', 'smjör', 'borða', 'hafa', 'myrkur', 'anda',
    'vél', 'steypa', 'hjúkra', 'fræði', 'blek', 'fugl', 'hjól', 'hjarta',
    'lifur', 'fótur', 'hönd', 'leggur', 'hringur', 'hringrás', 'ormur',
    'stefna', 'vit', 'lýsi', 'buxur', 'peysa', 'skór', 'tær', 'mest', 'ofar',
    'niðri', 'uppi', 'bátur', 'skip', 'hneppa', 'laga', 'breyta', 'borð',
    'sími', 'keyra', 'draga', 'koma', 'sækja', 'tölur', 'hugsa', 'skrifa',
    'leika', 'svart', 'hvítt', 'blátt', 'gult', 'rautt', 'grænt', 'bleikt',
    'sól', 'tungl', 'hár', 'lítill', 'minni', 'stærri', 'afrek', 'þroski',
    'galdur', 'leka', 'hlæja', 'brosa', 'spýta', 'skúr', 'rigna', 'ský',
    'alda', 'eyja', 'eldur', 'snjór', 'eldfjall', 'dalur', 'sokkar', 'stafur',
    'drykkur', 'sópa', 'byggja', 'vatn', 'mosi', 'leiftur', 'snöggt', 'mál'
];

const symbols = ["!", "#", "?", "-", "_", "*", "<", ">"]

const getRandomWord = () =>
    words[Math.floor(Math.random() * (words.length))]

const getRandomSymbol =() => 
    symbols[Math.floor(Math.random() * symbols.length)]


const generate = (wordCount: number, numberCount: number) => {
    const symbol = getRandomSymbol()
    const words = Array.from({ length: wordCount }, (() => getRandomWord()));
    const numbers = Array.from({ length: numberCount }, (() => Math.floor(Math.random() * 1000)));

    let isSymbol = false;

    let numberCounter = 0; 
    let wordCounter = 0;
    let pass = "";

    // randomly define resArr indexes with word, number or symbol.
    const resArr = Array.from({ length: wordCount + numberCount + 1 }, (() => {
        if (numberCounter < numberCount && wordCounter < wordCount && !isSymbol) {
            var rand = Math.random()

            if (rand < 0.35) {
                pass += words[wordCounter];
                wordCounter++;
            } else if (rand > 0.65) {
                pass += numbers[numberCounter];
                numberCounter++;
            } else  { 
                pass += symbol;
                isSymbol = true;
            }
        } else if (numberCounter < numberCount && wordCounter < wordCount) {
            if (Math.random() < 0.5) {
                pass += words[wordCounter]
                wordCounter++;
            } else {
                pass += numbers[numberCounter];
                numberCounter++;
            }
        } else if (numberCounter < numberCount && !isSymbol) {
            if (Math.random() < 0.5) {
                pass += numbers[numberCounter];
                numberCounter++;
            } else {
                pass += symbol;
                isSymbol = true;
            }
        } else if (wordCounter < wordCount && !isSymbol) {
            if (Math.random() < 0.5) {
                pass += words[wordCounter];
                wordCounter++;
            } else {
                pass += symbol;
                isSymbol = true;
            }
            // last spot:
        } else if (!isSymbol) { 
            pass += symbol;
        } else if (numberCounter < numberCount) {
            pass += numbers[numberCounter];
        } else pass += words[wordCounter]
    }))

    // let numberCounter = 0; 
    // let wordCounter = 0;
    // let pass = "";

    // for (let i = 0; i < resArr.length; i++) {
    //     if (resArr[i] === "w") {
    //         pass += words[wordCounter]
    //         wordCounter++;
    //     } if (resArr[i] === "n") {
    //         pass += numbers[numberCounter]
    //     } else pass += symbol
    // }

    return pass;
}
