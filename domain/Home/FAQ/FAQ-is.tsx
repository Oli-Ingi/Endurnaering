import Title from "../../../components/elements/Title/Title";
import Accordion from "../../../components/entities/Accordion/Accordion";
import Section from '../../../components/modules/Section/Section'

const fyrirHverja = "Alla þá sem langar til að bæta heilsu sína. Hvort sem það er bara að líða betur í eigin skinni, eða til að koma í veg fyrir heilsukvilla."

const questions = [
    {
        title: "Af hverju að leita til næringarfræðings frekar en í önnur úrræði?",
        content: ["Næringarfræðingar Endurnæringar hafa lokið meistaraprófi í næringarfræði og eru með starfsleyfi frá embætti landlæknis. Þeir hafa því þekkinguna sem þarf til að geta boðið upp á persónumiðaðar lausnir frekar en staðlaðar, sem eru sérsniðnar að þínum markmiðum og venjum. Slík persónumiðuð nálgun eykur líkur á langvarandi árangri."]
    },
    { 
        title: "Fyrir hverja hentar þjónusta Endurnæringar?", 
        content: ["Þjónustan hentar öllum sem eru reiðubúnir að takast á við breytingar á sínum lífsstíl. Hún er einkum miðuð að þeim sem vilja bæta meltingu, efla jákvæða líkamsímynd, auka orku, úthald og vellíðan. Jafnframt hentar þjónustan þeim sem vilja minnka streitu og efla líkamlega heilsu."]
    },
    { 
        title: "Hvernig fer bókunarferli viðtals fram?", 
        content: ['Eftir að smellt er á "Bóka viðtal" hlekk á síðunni, er farið yfir á vefsíðu Köru Connect. Þar þarf að fylla út umbeðnar upplýsingar og næringarfræðingur hefur svo samband símleiðis í kjölfarið.']
    },
    {
        title: "Er einhver munur á fjarviðtölum eða staðviðtölum?",
        content: ["Efnislega er enginn munur á þessum þjónustuleiðum, markmiðin eru þau sömu. Fjarviðtöl eru hugsuð fyrir þá sem hafa ekki tök á því að sækja þjónustuna á staðnum, eiga erfitt með það eða líður einfaldlega betur að fá þjónustuna heim til sín. Fjarviðtöl fara fram í gegnum kerfi Köru Connect sem býður upp á örugg samskipti yfir netið."]
    },
    {
        title: "Er þjónusta Endurnæringar niðurgreidd?",
        content: ["Hægt er að nálgast kvittun hjá okkur sem hægt er að framvísa til stéttarfélaga. Við hvetjum skjólstæðinga okkar til að leita til síns stéttarfélags fyrir nánari upplýsingar."]
    },
    {
        title: "Hvaða greiðsluleiðir eru í boði?",
        content: ["Greiðsla er innt af hendi eftir hvert viðtal í gegnum innheimtuþjónustu Íslandsbanka eða með millifærslu. Skjólstæðingur fær kvittun fyrir greiðslunni senda í tölvupósti eftir að greiðsla hefur verið framkvæmd."]
    },
    {
        title: "Eru einhverjar kringumstæður þar sem maður ætti ekki að leita til ykkar?",
        content: ["Einstaklingar sem hafa lagst inn á spítala á síðastliðnum 3. mánuðum eða liggja inni á heilbrigðisstofnun, t.d. á hjúkrunarheimilum, geta ekki nýtt þjónustu Endurnæringar."]
    },
    
]

const FaqIs = () =>
    <Section title={<Title light variant="section">Algengar <b>spurningar</b></Title>}>
        <Accordion items={questions} />
    </Section>


export default FaqIs