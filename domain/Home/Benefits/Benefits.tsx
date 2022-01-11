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
                content: "Meira jafnvægi og fjölbreytni í þarmaflórunni sem skilar sér í bættri heilsu, heilastarfsemi og aukinni vellíðan.", 
                icon: "recycle",
                color: "brown"
            },
            { 
                title: "Jákvæðari líkamsímynd", 
                content: "Sterkari tenging og aukin virðing fyrir eigin líkama sem stuðlar að betri sjálfsmynd og meiri líkamssátt.",
                icon: "like",
                color: "blue"
            },
            { 
                title: "Meiri orka og úthald", 
                content: "Aukinn skilningur á orku- og næringarþörf líkamans og meiri þekking á fæðuvali til að mæta þeirri þörf.", 
                icon: "lightning",
                color: "tertiary"
            },
            { 
                title: "Heilbrigðara hjarta", 
                content: "Jafnari blóðsykursstjórn, lægri blóðþrýstingur og aukið magn af góðu kólesteróli í blóði.", 
                icon: "heart",
                color: "red"
            },
            { 
                title: "Minni streita", 
                content: "Aukið traust á eigið innsæi og meira matarfrelsi sem dregur úr áhyggjum, samviskubiti og kvíða í tengslum við mat.", 
                icon: "suitcase",
                color: "purple"
            },
            { 
                title: "Aukin lífsgæði", 
                content: "Heilbrigðari fæðuvenjur og góðvild í eigin garð sem leiðir af sér betra jafnvægi á líkama og sál.", 
                icon: "sun",
                color: "primary"
            },
        ]}
    />

    

export default Benefits