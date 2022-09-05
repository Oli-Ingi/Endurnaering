import Text from "../../components/elements/Text/Text";
import Section from "../../components/modules/Section/Section";
import Column from "../../components/templates/Column/Column";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";
import Link from "../../components/elements/Link/Link";



const LecturesPage = () => 
    <Column as="main">
        <SubPageBanner 
            title="Fyrirlestrar"
            subtitle="Fræðsla og innblástur"
            smSubtitle
            img="/coffee-girl-350.png"
            imgAlt="mynd-stulka-ad-drekka-kaffi"
        />
        <Section asEl="div"  border="both" just="between" align="center" row pad="1em">
            <Text m="4em 1em">Endurnæring býður upp á fyrirlestra fyrir hópa og fyrirtæki. Hægt er að bóka fyrirlestur og ræða fyrirkomulag með því að senda póst á: <Link to="mailto:endurnaering@endurnaering.is" inline permaLine>endurnaering@endurnaering.is</Link></Text>
        </Section>
    </Column>


export default LecturesPage


{/* <ImgBanner img="/hrokkbraud.png" imgAlt="mynd-drengur-ad-borda" sm>
            <div style={{ marginBottom: 50 }}>
                <Title marginBottom="0.3em">Einstaklingsviðtöl</Title>
                <Text marginBottom=".7em">
                    Börnum, unglingum og fullorðnum býðst persónuleg og fagleg næringarráðgjöf, veitt af löggiltum næringarfræðing.
                </Text>
                <Text>
                    Gera má ráð fyrir að viðtalstími taki 50 mínútur hvort sem um er að ræða stað- eða fjarviðtal. Athugið að einungis
                    er boðið upp á fjarviðtöl fyrir einstaklinga sem hafa náð 18 ára aldri.
                </Text>
            </div>
        </ImgBanner> */}