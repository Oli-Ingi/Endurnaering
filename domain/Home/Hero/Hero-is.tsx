import Hero from "../../../components/entities/Hero/Hero";

const title = "Njótum þess að borða!";

const content = [
    "Veitum stuðning, ráðgjöf og fræðslu í átt að heilbrigðu sambandi við mat og jákvæða heilsu.",
    "Mætum þér þar sem þú ert í þinni vegferð og vinnum út frá áherslum sem eru sniðnar að þér."
]

const HeroIs = () =>
    <Hero intro={{ title, content }} img="/melonu_barn.png" />



export default HeroIs