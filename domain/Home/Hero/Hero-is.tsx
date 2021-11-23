import Hero from "../../../components/entities/Hero/Hero";


const HeroIs = () =>
    <Hero
        title="Njótum þess"
        subtitle="að borða"
        content={["Veitum ráðgjöf, stuðning og fræðslu í átt að heilbrigðu sambandi við mat og jákvæðri heilsu."]}
        buttonCaption="Horfa á kynningarmyndband"
        onButtonClick={() => console.log("kynningarmyndband keyrt!")}
        img="/melon-child.png" 
    />



export default HeroIs