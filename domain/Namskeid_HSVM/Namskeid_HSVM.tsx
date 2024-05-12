import React, { FC } from "react";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";
import Column from "../../components/templates/Column/Column";
import Section from "../../components/modules/Section/Section";
import Title from "../../components/elements/Title/Title";
import Button from "../../components/elements/Button/Button";
import Text from "../../components/elements/Text/Text";
import styled from "styled-components";
import DescCard from "../../components/modules/DescCard/DescCard";
import BulletList from "../../components/elements/BulletList/BulletList";
import Link from "../../components/elements/Link/Link";
import Line from "../../components/elements/Line/Line";

import Badge from "../../components/elements/Badge/Badge";
import Flex from "../../components/elements/Flex/Flex";
import Grid from "../../components/elements/Grid/Grid";


const StArticleSection = styled.div`
    max-width: ${p => p.theme.layout.containerWidth};
    display: flex;
    padding: 1em;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 32px 0;

    > div:first-child {
        flex: 1;

    }

    @media screen and (max-width: 850px) {
        flex-direction: column-reverse;

        > div:first-child {
            margin-top: 24px;
        }
    }
`

type SalesBoxProps = {
    badgeTitle: string;
    title: string;
    price: { key: string; value: string };
    button: {
        caption: string;
        title: string;
        onClick: () => void;
        href: string;
    } | JSX.Element;
}

const StWrapper = styled.div`
    box-shadow: ${p => p.theme.shadow};
    padding: 24px;
    background-color: ${p => p.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 5px;
`

const StSalesBox = styled.div`
    padding: 50px;
    width: 550px;
    max-width: 100%;
    opacity: .9;

    @media screen and (max-width: 600px) {
        padding: 16px;
    }
`

const SalesBox: FC<SalesBoxProps> = ({ badgeTitle, title, price, button }) => <StSalesBox>
    <StWrapper>
        <Badge color="tertiary" mb={30}>{badgeTitle}</Badge>
        <Title mb={20}>{title}</Title>
        <Text mb={12}>
            Heiðdís Snorradóttir, næringarfræðingur Endurnæringar stýrir 4ra vikna námskeiði 
            þar sem farið verður yfir grunnstoðir og leiðina til heilbrigðs sambands við mat.
        </Text>
        <Text>
            Námskeiðið er netnámskeið þar sem hópur fólks hittist í netheimum og tekur þátt í fræðslu og umræðum.
        </Text>
        <Text>
            
        </Text>
        {/* <Flex width="100%" just="between" bg="primary" $wrap>
            <Text size="lg" color="primary" bold mr="1em">{price.key} <Text as="span" color="dark" size="lg">{price.value}</Text></Text>
        </Flex> */}
    </StWrapper>
</StSalesBox>


const FlexHider = styled.div`
    width: 1280px;
    height: 800px;
    max-width: 100%;
    
    background-image: url("/hsvm-heiddis.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;
`


const HeilbrigtSambandVidMat = () => <Column as="main">
    <FlexHider>
        <SalesBox 
            badgeTitle="Netnámskeið"
            title="Heilbrigt samband við mat"
            price={{ key: "Verð:", value: "29.900 kr." }}
            button={<Button to="https://forms.office.com/Pages/ResponsePage.aspx?id=h-GhAWgFO0uFlpl3jDbQUnTLjVvQchhNqvFinXC5IhJUNUxKRTZSMldaUFEwU0dGQlRVVEVWVTMzRyQlQCN0PWcu&fbclid=IwAR0910xS1lhnPyuvdwoWSJXOF7igLsFMtg7aqCQr45sgooGnK7MAw_inOmk">Skrá mig</Button>}
        />
    </FlexHider>
    <Section asEl="div"  border="both" variant="secondary" pad="40px 1em">
        {/* <Text color="primary" bold mr="2em">Námskeið hefst: <Text as="span" color="dark">miðvikudaginn 1. mars 2023, kl. 17:30</Text></Text> */}
        <Text color="primary" bold mr="2em">Staðsetning: <Text as="span" color="dark" >Námskeiðið fer fram í gegnum netið.</Text></Text>
        {/* <Text color="primary" bold mr="2em">Staðsetning: <Text as="span" color="dark" >Heilsuklasinn - Bíldshöfða 9, Reykjavík</Text></Text> */}
        <Text color="primary" bold mr="2em">Dagsetning: <Text as="span" color="dark" >Dagsetning fyrir næsta námskeið hefur ekki verið ákveðin</Text></Text>
    </Section>
    <StArticleSection>
            <div>
                <Text mb={12}>
                    Heilbrigt samband við mat byggir á þremur grunnstoðum: venjum, innsæi og næringu. 
                    Á námskeiðinu verður farið yfir þessar grunnstoðir og hvernig þekking á þeim stuðlar
                    að jafnvægi í okkar mataræði. Námskeiðið er þannig grunnur til þess að rýna í eigin heilsu- og matarhegðun 
                    og hvernig við getum bætt okkar mataræði.
                </Text>
                <Text mb={12}>
                    Helstu verkfæri námskeiðs eru verkefnablöð, fræðsla og umræður.
                </Text>
                <Text mb={12}>
                    Farið verður yfir leiðir til þess að setja saman góðar og næringarríkar máltíðir. 
                    Jafnframt verða kynnt mikilvæg hugtök eins og máltíðargluggar og hvernig má nýta þá sem best. 
                    Þannig verður til sérútbúið mataræði sem er aðsniðið að hverjum og einu. 
                    Unnið er með fyrirlestra, umræður í hópum og verkefni leyst í hverri viku. 
                    Næringarlæsi er eflt með því að kenna álestur umbúða af matvælum og auka þannig meðvitund 
                    um hvað maturinn gefur okkur. Áhersla er lögð á að átta sig á hvað maturinn gefur 
                    líkamlega og andlega og kynnast mat á annan hátt en með því að telja hitaeiningar eða vigta. 
                    Farið er yfir helstu mýtur þegar kemur að mat og hvað það felur í sér að eiga í heilbrigðu sambandi við mat. 
                    Allt efni námskeiðsins er byggt á ritrýndum heimildum og nýjustu þekkingu hverju sinni þegar kemur að mataræði.
                </Text>
                <Text mb={0}>
                    Jafnframt er lögð áhersla á svokallaða "þyngdarhlutlausa nálgun" en í ljósi þess hve 
                    rík megrunarmenning er þá er námskeiðið ekki ætlað sem skyndikúr eða skyndilausn. 
                    Rannsóknir hafa sýnt að ef einblínt er einungis á þyngd þá geti það skapað 
                    óheilbrigðar matarvenjur og heilsubrest.
                </Text>
                <Text>
                    Önnur markmið eru möguleg og þá með tilliti til meiri orku, betri lífsgæða, betri meltingar, 
                    minni streitu og kvíða. Þannig ná einstaklingar að setja sér markmið sem endast út ævina 
                    í stað þess að þau renni út á tíma. 
                </Text>
                <Text mb={24}>
                    Námskeiðið er í gangi í 4 vikur og fer fram á Kara Connect.
                </Text>
                <Text mb={24}>Námskeiðið hentar öllu fólki sem langar að ná betri tökum á mataræði- og venjum.</Text>
                <Title variant="subsection">Helstu markmið námskeiðsins:</Title>
                <BulletList>
                    <Text as="li">
                        Setja sér raunhæf markmið sem endast til lengri tíma útfrá daglegri rútínu og heilsufari.
                    </Text>
                    <Text as="li">
                    Styrkja traust á eigið matarinnsæi sem getur leitt til minni streitu, kvíða og samviskubits sem við finnum oft fyrir í tengslum við mat.
                    </Text>
                    <Text as="li">
                        Skoðum hvernig við getum greint matarhegðun okkar og tileinkað okkur betri matarvenjur.
                    </Text>
                    <Text as="li">
                        Öðlumst aukið næringar- og matvælalæsi sem skilar sér í meðvitaðri ákvörðunum tengt fæðuvali.
                    </Text>
                </BulletList>
                {/* <Line mb={24} />
                <Title variant="subsection" mb={24}>Skilmálar og almennar upplýsingar</Title>
                <Text>
                    Námskeiðið er 4ra vikna.
                </Text>
                <Text>
                    Athugið að námskeiðið er styrkhæft hjá mörgum stéttarfélögum.
                </Text>
                <Text>
                    Þegar viðskiptavinur hefur skráð sig á námskeið verður sendur reikningur í heimabanka. 
                    Takmörkuð sæti eru í boði og einungis þegar greiðsla hefur verið innt af hendi telst viðskiptavinur öruggur með sæti á námskeiðinu.
                </Text>
                <Text>
                    Heiðdís Snorradóttir næringarfræðingur M.Sc. stýrir námskeiðinu og
                    veitir nánari upplýsingar ef þess er óskað í gegnum netfangið <Link inline to="mailto:heiddis@endurnaering.is" permaLine>heiddis@endurnaering.is</Link> eða
                    í síma <Link inline permaLine to="tel:8487407">848-7407</Link>.
                </Text> */}
            </div>
            {/* <DescCard 
                date="15. febrúar 2023, 17:00-19:00" 
                loc=" Heilsuklasanum - Bíldshöfða 9, 110 Reykjavík" 
            /> */}
        </StArticleSection>
</Column>


export default HeilbrigtSambandVidMat;

{/* <Link inline permaLine to="https://forms.office.com/Pages/ResponsePage.aspx?id=h-GhAWgFO0uFlpl3jDbQUnTLjVvQchhNqvFinXC5IhJUNUxKRTZSMldaUFEwU0dGQlRVVEVWVTMzRyQlQCN0PWcu&fbclid=IwAR0910xS1lhnPyuvdwoWSJXOF7igLsFMtg7aqCQr45sgooGnK7MAw_inOmk">skráð sig á námskeið</Link> */}