import Accordion from "../../../components/entities/Accordion/Accordion";
import Section from '../../../components/modules/Section/Section'


const questions = [
    { title: "Fyrir hverja hentar þjónusta Endurnæringar?", content: ["Fatlafól", "Í spítthjólastól"]},
    { title: "Hvernig bóka ég tíma hjá næringarfræðingi?", content: ["Það fer eftir því hver næringarfræðingurinn er, en ef það er Heiðdís, þá seturðu X á rúðuna þína áður en þú ferð að sofa á miðvikudagskvöldi. Heiðdís hefur svo samband við þig daginn eftir."]},
    { title: "Hvað græði ég á því að tala við næringarfræðing?", content: ["Þú græðir ekkert á því þar sem það kostar pening að tala við næringarfræðing, en þú gætir fengið góða heilsu út úr því ef þú fylgir leiðbeiningum."]},
]

const FaqIs = () =>
    <Section title="Algengar spurningar">
        <Accordion items={questions} />
    </Section>


export default FaqIs