import { FC } from "react";
import Card from '../../elements/Card/Card'
import Grid from "../../elements/Grid/Grid";
import Definition from "../../modules/Definition/Definition";
import Section from "../../modules/Section/Section";
import Text from '../../elements/Text/Text'

const Services: FC<{}> = () =>
    <Section title="Þjónustuleiðir" variant="secondary">
        <Grid min="280px" max="300px" gap="25px">
            <Card shadow="hover" href="https://mbl.is" border variant="white">
                <Definition icon="person" title="Einstaklingsviðtal" iconRight>
                    <Text size="sm">
                        Fáðu einkatíma hjá næringafræðingi þar sem við förum yfir
                        þín mál. Bæði hægt að fá staðviðtal og fjarviðtal.
                    </Text>
                </Definition>
            </Card>
            <Card shadow="hover" href="https://mbl.is" border variant="white">
                <Definition icon="reward" title="Námskeið" iconRight>
                    <Text size="sm">
                        Komdu með öðrum á námskeið til að finna fyrir meðbyr
                        og hafa það nice með öðrum.
                    </Text>
                </Definition>
            </Card>
            <Card shadow="hover" href="https://mbl.is" border variant="white">
                <Definition icon="mic" title="Fyrirlestrar" iconRight>
                    <Text size="sm">
                        Bókaðu fyrirlestur, hallaðu þér aftur í sætinu og 
                        hlustaðu á Heiðdísi tala um næringu.
                    </Text>
                </Definition>
            </Card>
        </Grid>
    </Section>


export default Services