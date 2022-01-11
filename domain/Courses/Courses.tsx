import Text from "../../components/elements/Text/Text";
import Title from "../../components/elements/Title/Title";
import Section from "../../components/modules/Section/Section";
import Column from "../../components/templates/Column/Column";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";
import Grid from "../../components/elements/Grid/Grid";
import CourseCard from "../../components/modules/CourseCard/CourseCard";


// TODO: Modify Hero for reusability here.
// TODO: Reusable price bar?
// TODO: námskeið: Card module.
// IDEA: randomize hero images displayed?

const CoursesPage = () => 
    <Column as="main">
        <SubPageBanner 
            title="Námskeið"
            subtitle="Fjölbreyttar lausnir"
            smSubtitle
            img="/pasta-girl-350.png"
            imgAlt="mynd-stulka-ad-borda"
        />
        <Section border="both" align="center" title={<Title variant="section"><Text as="span" size="lg">Væntanleg</Text> námskeið</Title>}>
            <Text color="dark" marginBottom="100px">Innan skamms munum við bjóða upp á námskeið.</Text>
            {/* <Grid min="280px" max="300px" gap="25px">
                <CourseCard 
                    title="Byggja upp heilbrigt"
                    subtitle="samband við mat"
                    description="Aðal námskeiðið hjá Endurnæringu til þess að byggja upp heilbrigt samband við mat."
                    lengthLabel="Lengd"
                    length="6 vikur"
                    link="/namskeid/heilbrigt-samband-vid-mat"
                    type="Staðnámskeið"
                    color="tertiary"
                />
                <CourseCard 
                    title="Samsetning máltíða:"
                    subtitle="næring og orka"
                    description="Hvernig virkar matur og næring? Hvernig er best að setja saman máltíðir mínar?"
                    lengthLabel="Lengd"
                    length="3 klst."
                    link="/namskeid/samsetning-maltida"
                    type="Fjarnámskeið"
                    color="red"
                />
                <CourseCard 
                    title="Versla í matinn"
                    subtitle="á heilbrigðan hátt"
                    description="Við lendum stundum í því að standa úti í búð og vitum ekkert hvað við eigum að kaupa."
                    lengthLabel="Lengd"
                    length="3 klst."
                    link="/namskeid/versla-i-matinn"
                    type="Vefnámskeið"
                    color="blue"
                />
            </Grid> */}
        </Section>
    </Column>


export default CoursesPage