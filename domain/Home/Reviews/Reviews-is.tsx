import Title from "../../../components/elements/Title/Title";
import Slider from "../../../components/entities/Slider/Slider";
import Entitled from "../../../components/modules/Entitled/Entitled";
import Section from "../../../components/modules/Section/Section";

// SSR ?
const reviews = [
    { 
        title: "Engin boð eða bönn", 
        content: ["“Heiðdís er góð í að hlusta og aðlaga ráðleggingar að manni sjálfum með heildarsýn á mínar venjur. Engin boð eða bönn, hvetur til heilbrigðrar tengingar við mat og fær mann til að langa að gera betur og prófa sig áfram út frá líðan.“"], 
        subtitle: "33 ára kvk" 
    },
    { 
        title: "Skemmtileg uppsetning", 
        content: ["“Virkilega skemmtilega sett upp elsku Heiðdís, maður finnur alltaf hlýjuna frá þér og það er alveg einstakt.”"], 
        subtitle: "32 ára kvk" 
    },
    { 
        title: "Frábær þjónusta", 
        content: ["“Fékk frábæra þjónustu hjá Endurnæringu. Engar öfgar heldur mjög heilbrigðar umræður og nálgun á mataræðinu. Mjög gott að tala við Heiðdísi sem veit greinilega um hvað hún er að tala. Mæli með þessarri þjónustu fyrir alla þá sem vilja fjárfesta í sjálfum sér og nærast á heilbrigðan hátt.”"], 
        subtitle: "39 ára kvk" 
    },
    { 
        title: "Nálgun á matarvali breyst og streita minnkað", 
        content: ["“Ég hef tileinkað mér að spyrja sjálfa mig \"Hvað langar mig í?\" og \"Hvað finnst mér gott?\" oftar frekar en \"Hvað á ég að fá mér?\" og svörin hafa svo sannarlega orðið skemmtilegri og streitan mín gagnvart matarvali hefur minnkað svo um munar.”"], 
        subtitle: "37 ára kvk" 
    },
    {
        title: "Góð næringarráðgjöf fyrir fatlaða",
        content: ["“Heiðdís, þú ert mjög góð í næringarráðgjöf fyrir fatlaða. Þú nýttist mér vel en ég á það til að gleyma mér í mataræðinu en hef fólk til að minna mig á. Svo er gott að ekkert sé bannað og ég má fá mér smá sykur á hverjum degi. Það er skárra en að missa sig mikið á laugardegi.”"],
        subtitle: "27 ára kk"
    },
    {
        title: "Gott viðmót eftir efnaskiptaaðgerð og minni streita",
        content: ["“Þegar ég leitaði til Heiðdísar þá voru ekki nema 3 mánuðir síðan ég fór í efnaskiptaaðgerð. Næringin var byrjuð að valda mér mikilli streitu þar sem næringarþörfin var orðin allt önnur en fyrir aðgerð. Hún hjálpaði mér ekki einungis með að komast á réttu brautina heldur losnaði ég við streituna enda ekki annað hægt þegar spjallið við Heiðdísi var þægilegt og gott. Hún hefur mjög gott viðmót.”"],
        subtitle: "43 ára kvk"
    },
    {
        title: "Fagleg og gagnleg þjónusta",
        content: ["“Mæringarráðgjöfin var mjög fagleg og gagnast vel.”"],
        subtitle: "63 ára kk"
    },
    {
        title: "Hlýlegt viðmót",
        content: ["“Þú tekur alltaf hlýlega á móti mér. Hvetjandi, gefur góð ráð og sendir hjálplegt stuðningefni í tölvupósti", "Mæli eindregið með Endurnæringu”"],
        subtitle: "57 ára kvk"
    },
    {
        title: "Skynsöm og heilbrigð ráðgjöf",
        content: ["“Heiðdís veitir skynsama og heilbrigða næringarráðgjöf. Í mínu ferli voru þetta litlar breytingar yfir lengra tímabil sem gerði það að verkum að mér tókst að tileinka mér betri matarvenjur og betri líðan.”"],
        subtitle: "48 ára kk"
    },
    {
        title: "Gott viðmót og sérsniðnar hagnýtar ábendingar",
        content: ["“Mig langar bara að segja að það var gott að koma til þín, ert góð í að vinna með þær upplýsingar sem ég gaf þér og byggja ofan á og koma með uppástungur um hvað megi betur fara. Svo eru frábær heilræði sem þú gafst varðandi geymslu á matvælum, meðferð matvæla og hvernig ég gat unnið mér í haginn vitandi að ég elda ekki mat.”"],
        subtitle: "55 ára kvk"
    }
]

const ReviewsIs = () =>
    <Section 
        title={<Title light variant="section" center><b>Ummæli</b> skjólstæðinga</Title>} 
        border="bottom"
        align="center"
        xl
    >
        <Slider items={reviews} autoSlide autoSlideInterval={10} variant="white" />
    </Section>


export default ReviewsIs