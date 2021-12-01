import Title from "../../../components/elements/Title/Title";
import DefinitionSection from "../../../components/entities/DefinitionSection/DefinitionSection";



const Benefits = () => 
    <DefinitionSection 
        title={<Title light variant="section" center>Aðferðir okkar geta skilað <b>margvíslegum árangri</b></Title>}
        variant="secondary"
        borders
        border="both"
        definitions={[
            { 
                title: "Bætt melting", 
                content: "Stuðlum að stöðugleika í þarmaflórunni sem skilar sér í bættri heilsu, heilastarfsemi og aukinni vellíðan.", 
                icon: "recycle",
                color: "brown"
            },
            { 
                title: "Jákvæð líkamsímynd", 
                content: "Heilbrigðar fæðuvenjur hafa almennt jákvæð áhrif á það hvernig við skynjum líkama okkar og útlit.",
                icon: "like",
                color: "blue"
            },
            { 
                title: "Aukin orka og úthald", 
                content: "Þegar við nærum líkamann rétt þá starfar hann vel og er betur í stakk búinn til að takast á við verkefni dagsins.", 
                icon: "lightning",
                color: "primary"
            },
            { 
                title: "Heilbrigðara hjarta", 
                content: "Jákvæðrar áhrifa á hjarta- og æðakerfið gætir þegar við ræktum heilbrigt samband við mat og næringu.", 
                icon: "heart",
                color: "red"
            },
            { 
                title: "Minni streita", 
                content: "Viðhorf okkar til matar og á hvaða forsendum við borðum hefur mikil áhrif á andlega líðan.", 
                icon: "suitcase",
                color: "purple"
            },
            { 
                title: "Betri líðan", 
                content: "Líkamleg og andleg líðan byggist m.a. á trausti til svengdarvitundar okkar og fæðuvenja.", 
                icon: "sun",
                color: "tertiary"
            },
        ]}
    />

    

export default Benefits