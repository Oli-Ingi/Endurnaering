import { FC } from "react"
import Grid from "../../elements/Grid/Grid"
import Text from "../../elements/Text/Text"
import Definition from "../../modules/Definition/Definition"
import Section from "../../modules/Section/Section"


// Content should be pushed down here when we have english.

const WhyUs: FC<{}> = () => 
    <Section title="Ávinningur af þjónustu okkar">
        <Grid min="230px" max="300px" gap={50}>
            <Definition title="Betri melting" icon="recycle">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Jákvæð líkamsímynd" icon="like">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Orka og úthald" icon="lightning">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Líkamleg heilsa" icon="heart">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Minni streita" icon="suitcase">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
            <Definition title="Vellíðan" icon="sun">
                Mætum þér þar sem þú ert á þinni vegferð og finnum lausnir sem eru
                sérsniðnar að þér.
            </Definition>
        </Grid>
    </Section>


export default WhyUs