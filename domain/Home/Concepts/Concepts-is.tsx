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
            content: ["Áhersla okkar er að veita þér ráðgjöf, stuðning og fræðslu í átt að heilbrigðu sambandi við mat. Hjá okkur lærirðu að hlusta á eigin líkama frekar en að fylgja fyrirmælum annarra. Heilbrigðar venjur, traust á eigið innsæi og þekking á næringu eru lykilþættir sem við skoðum til að byggja upp traustan grunn sem endist."], 
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
            content: ["Markmið okkar er að þú færist nær jákvæðri heilsu með því að byggja upp heilbrigt samband við mat. Jákvæð heilsa er heildræn nálgun á heilbrigði. Nálgunin er byggð á getu þinni til að takast á við líkamlegar, tilfinningalegar og félagslegar áskoranir í lífinu. Áherslan er því lögð á seiglu og hvað gefur lífi þínu tilgang í stað veikinda og sjúkdóma."],
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
            content: ["Þjónusta okkar er byggð að mestu á aðferðafræði áhugahvetjandi samtals. Aðferðafræðin hefur reynst skilvirk leið til að hjálpa einstaklingum að takast á við erfiðar og flóknar lífstílssbreytingar. Tilgangurinn er að vekja upp þína innri hvata til breytinga sem eykur líkurnar á langvarandi árangri."],
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