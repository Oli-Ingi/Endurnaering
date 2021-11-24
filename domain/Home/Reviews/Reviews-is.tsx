import Slider from "../../../components/entities/Slider/Slider";
import Entitled from "../../../components/modules/Entitled/Entitled";
import Section from "../../../components/modules/Section/Section";

// SSR ?
const reviews = [
    { title: "Engin boð eða bönn", content: ["“Heiðdís er góð í að hlusta og aðlaga ráðleggingar að manni sjálfum með heildarsýn á mínar venjur. Engin boð eða bönn, hvetur til heilbrigðs tengingar við mat og fær mann til að langa að gera betur og prófa sig áfram útfrá líðan.“"], subtitle: "33 ára kona" },
    { title: "Skemmtileg uppsetning", content: ["“Virkilega skemmtilega sett upp elsku Heiðdís, maður finnur alltaf hlýjuna frá þér og það er alveg einstakt.”"], subtitle: "32 ára kona" },
    { title: "Frábær þjónusta", content: ["“Fékk frábæra þjónustu hjá Endurnæringu. Engar öfgar heldur mjög heilbrigðar umræður og nálgun á matarræðinu. Mjög gott að tala við Heiðdísi sem veit greinilega um hvað hún er að tala. Mæli með þessarri þjónustu fyrir alla þá sem vilja fjárfesta í sjálfum sér og nærast á heilbrigðan hátt.”"], subtitle: "39 ára kona" },
    { title: "Mjög þægilegt viðmót", content: ["Það var mjög þægilegt að tala við næringarfræðing. Þægindi eru mér mjög mikilvæg."], subtitle: "Ólafur Ingi Guðmundsson" },
]

const ReviewsIs = () =>
    <Section title="Ummæli" variant="secondary">
        <Slider items={reviews} autoSlide autoSlideInterval={10} variant="white" />
    </Section>


export default ReviewsIs