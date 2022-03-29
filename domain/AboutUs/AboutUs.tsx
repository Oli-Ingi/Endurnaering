import Text from "../../components/elements/Text/Text";
import Title from "../../components/elements/Title/Title";
import Section from "../../components/modules/Section/Section";
import Column from "../../components/templates/Column/Column";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";
import Grid from "../../components/elements/Grid/Grid";
import CourseCard from "../../components/modules/CourseCard/CourseCard";
import AboutPerson from "../../components/modules/AboutPerson/AboutPerson";
import PageTitle from "../../components/modules/PageTitle/PageTitle";
import styled from "styled-components"
import Flex from "../../components/elements/Flex/Flex";
import Img from "../../components/elements/Img/Img";
import Icon from "../../components/elements/Icon/Icon";
import Link from "../../components/elements/Link/Link";

const PageHead = styled.div`
    margin-top: 80px;
    margin-bottom: 60px;
    width: 100%;
    max-width: ${p => p.theme.layout.containerWidth};
    padding: 0 1em;

    @media screen and (max-width: 700px) {
        margin-bottom: 50px;
        margin-top: 60px;
    }
`

// temp
const PersonDiv = styled.div`
    margin-right: 30px;
    max-width: 100%;
    max-width: 600px;
`

const StIconLine = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`

const AboutUsPage = () => 
    <Column as="main">
        <PageHead>
            <PageTitle bold="Um okkur" light="Endurnæring" />
        </PageHead>
        <Section asEl="div" border="both" variant="secondary" pad="2em 1em" mb="1em">
            <Text size="lg" color="primary">Við búum öll yfir styrk til að stýra eigin lífi, styrk sem kemur innan frá, ekki að utan.</Text>
        </Section>
        <Section border="bottom">
            <Text mb="1em">
                Endurnæring ehf. er lýðheilsufyrirtæki sem var stofnað í febrúar 2021 og sérhæfir sig 
                í næringarráðgjöf. Félagið starfar með leyfi frá Embætti landlæknis fyrir bæði almenna 
                heilbrigðisþjónustu og fjarheilbrigðisþjónustu. Sérfræðingar okkar hafa því allir löggild starfsréttindi 
                frá Embætti landlæknis. 
            </Text>
            <Text mb="1em">
                Okkur finnst umræðan í þjóðfélaginu um næringu vera of einsleitna og skorta skilning á því hversu einstök
                við öll erum. Við einsettum okkur því að byggja upp fyrirtæki sem leggur áherslu á að fagna
                fjölbreytileikanum; bæði hvað við erum fjölbreytt og hvað matur er fjölbreyttur. 
                Okkur dreymir um að móta þjóðfélag sem einfaldlega nýtur þess að borða, en lítur ekki á mat sem óvin 
                sinn eða eitthvað sem á að telja ofan í sig. Lykillinn að slíku samfélagi er að hjálpa fólki að 
                byggja upp heilbrigt samband við mat.
            </Text>
            <Text mb="1em">
                Endurnæring er og verður ávallt staður þar sem þér er tekið eins og þú ert. Hér starfa viðurkenndir 
                sérfræðingar sem veita þér persónumiðaða þjónustu og faglegan stuðning í átt að langvarandi árangri 
                sem þú kýst að vilja ná.
            </Text>
        </Section>
        <div id="starfsfolk" style={{ marginBottom: 20}}></div>
        <Section titleAlign="center" title="Starfsfólk">
            <Flex just="around" mt="2em" $wrap reverse>
                <img src="/heiddis.png" alt="mynd-heiddis" style={{ marginBottom: 25, borderRadius: 20 }} />
                <PersonDiv>
                    <Title variant="section">Heiðdís Snorradóttir</Title>
                    <Title variant="subsection" color="dark" mb="1rem">Næringarfræðingur MSc.</Title>
                    <Text mb="1.5em">
                        Heiðdís er stofnandi og meðeigandi Endurnæringar og næringarfræðingur MSc með áherslu á lýðheilsu. 
                        Hún sérhæfir sig í að hjálpa einstaklingum að byggja upp heilbrigt sambandi við mat.
                    </Text>
                    <StIconLine><Icon type="email" mr={8} /><Link to={`mailto:heiddis@endurnaering.is`}>heiddis@endurnaering.is</Link></StIconLine>
                </PersonDiv>
            </Flex>
        </Section>
        {/* <Section marginTop= align="center" title={<Title variant="section">Starfsfólk</Title>}>
            <AboutPerson 
                title="Heiðdís Snorradóttir"
                img="/heiddis.png"
                email="heiddis@endurnaering.is"
                phone="6666666"
                subtitle="Næringarfræðingur MSc. með áherslu á lýðheilsu"
                bookLink={{
                    caption: "Bóka viðtal",
                    to: "https://app.karaconnect.com/company/1115/registration?auth=2"
                }}
            />
        </Section> */}
    </Column>


export default AboutUsPage