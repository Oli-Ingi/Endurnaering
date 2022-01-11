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
        <Section asEl="div" border="both" variant="secondary" pad="2em 1em" marginBottom="1em">
            <Text size="lg" color="primary">Við búum öll yfir styrk til að stýra eigin lífi, styrk sem kemur innan frá en ekki að utan.</Text>
        </Section>
        <Section border="bottom">
            <Text>
                Endurnæring ehf. var stofnað í febrúar 2021. Við sjáum fyrir okkur heilbrigt þjóðfélag 
                og einstaklinga sem nálgast heilsu á jákvæðan og uppbyggjandi hátt. Við viljum vera hluti af þessari
                ...vantar
            </Text>
        </Section>
        <div id="starfsfolk" style={{ marginBottom: 20}}></div>
        <Section titleAlign="center" title="Starfsfólk">
            <Flex just="around" marginTop="2em" $wrap reverse>
                <img src="/heiddis.png" alt="mynd-heiddis" style={{ marginBottom: 25, borderRadius: 20 }} />
                <PersonDiv>
                    <Title variant="section">Heiðdís Snorradóttir</Title>
                    <Title variant="subsection" color="dark" marginBottom="1rem">Næringarfræðingur MSc. með áherslu á lýðheilsu</Title>
                    <Text marginBottom="1.5em">Hér vantar textann um Heiðdísi</Text>
                    <StIconLine><Icon type="email" marginRight={8} /><Link to={`mailto:heiddis@endurnaering.is`}>heiddis@endurnaering.is</Link></StIconLine>
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