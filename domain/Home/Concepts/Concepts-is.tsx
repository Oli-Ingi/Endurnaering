import Title from "../../../components/elements/Title/Title";
import Concepts from "../../../components/entities/Concepts/Concepts";
import Section from '../../../components/modules/Section/Section'

// Heilbrigt samband: Matur er meira en bara næring og orka til að mæta ákveðinni líkamlegri þörf. Matur á einnig að láta okkur líða vel, bæði andlega og líkamlega. Heilbrigt samband við mat byggir á þessari grunnhugsun og leggur áherslu á þrjá þætti: venjur, innsæi og næringu.
// Áhugahvetjandi: Endurnæring notast við aðferðafræði áhugahvetjandi samtals, sem hefur reynst afar skilvirk leið til að hjálpa fólki að takast á við erfiðar og flóknar lífsstílsbreytingar. Aðferðafræðin miðar að því að vekja upp innri hvata til breytinga sem eykur líkurnar á varanlegum árangri.


const concepts = [
    { 
        img: "/burger-guy-350.png", 
        article: { 
            title: "Heilbrigt samband við mat", 
            content: ["Heilbrigt samband við mat er lýsandi fyrir ákveðið hugarfar sem skapast þegar þú hefur tileiknað þér ákveðnar áherslur. Áhersla er lögð á að þú njótir þess að borða mat sem lætur líkama þinn starfa vel og veitir þér vellíðan. Jafnframt að þú takir eftir líkamlegum merkjum á borð við svengd og seddu."], 
            button: {
                caption: "Lesa meira",
                to: "https://worldofwarcraft.com",
                newTab: true
            } 
        }
    },
    { 
        img: "/coffee-girl-350.png", 
        article: { 
            title: "Jákvæð heilsa", 
            content: ["Jákvæð heilsa er heildræn nálgun á heilsu sem byggir á getu þinni til að takast á við líkamlegar, tilfinningalegar og félagslegar áskoranir í lífinu. Áherslan er því ekki lögð á veikindi og sjúkdóma, heldur á seiglu og hvað gefur lífi þínu tilgang."],
            button: {
                caption: "Lesa meira",
                to: "https://worldofwarcraft.com",
                newTab: true
            } 
        }
    },
    { 
        img: "/green-girl-350.png", 
        article: { 
            title: "Áhugahvetjandi samtal", 
            content: ["Við notumst við aðferðafræði áhugahvetjandi samtals sem hefur reynst afar skilvirk leið til þess að hjálpa fólki að takast á við erfiðar og flóknar lífsstílsbreytingar. Tilgangur aðferðafræðinnar er að vekja upp innri hvata til breytinga sem eykur líkurnar á varanlegum árangri."],
            button: {
                caption: "Lesa meira",
                to: "https://worldofwarcraft.com",
                newTab: true
            } 
        }
    },
]

const HeroIs = () =>
    <Concepts 
        title={<Title light variant="huge" marginBottom={70} center>Byggjum á <b>gagnreyndum</b> og <b>viðurkenndum</b> aðferðum</Title>}
        concepts={concepts} 
    />



export default HeroIs