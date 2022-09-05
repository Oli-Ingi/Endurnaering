import BulletList from "../../../components/elements/BulletList/BulletList";
import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";


const PersonalInformation = () =>
    <ArticleSection title="Persónugögn">
        <Text>
            Persónugögn eru gögn sem hægt er að tengja við einstaklinga. Endurnæring ehf.
            safnar og vinnur eftirfarandi persónugögn sem hægt er að tengja við þig:
        </Text>
        <BulletList>
            <Text as="li" bold>
                Almennar upplýsingar:
                <BulletList>
                <Text as="li">Nafn</Text>
                <Text as="li">Tölvupóstur</Text>
                <Text as="li">Heimilisfang</Text>
                <Text as="li">Símanúmer</Text>
                <Text as="li">Kennitala</Text>
                <Text as="li">Upplýsingar um tengilið skjólstæðings ef við á (Nafn, sími, heimilisfang). T.d. forráðamaður eða maki</Text>
            </BulletList>
            </Text>
            <Text as="li" bold>
                Heilbrigðisupplýsingar (sjúkraskrá):
                <BulletList>
                    <Text as="li">
                        Samkvæmt lögum um sjúkraskrá nr. 55/2009 skal heilbrigðisstarfsmaður sem fær sjúkling til meðferðar halda sjúkraskrá.
                        Heilbrigðisupplýsingar eru upplýsingar sem verða til við meðferð sjúklings og heilbrigðisstarfsmanns.
                    </Text>
                </BulletList>
            </Text>
            <Text as="li" bold>
                Greiðsluupplýsingar:
                <BulletList>
                    <Text as="li">
                        Endurnæring ehf. sér hvorki um, né geymir kortaupplýsingar hjá sér.
                        Greiðslur fara fram í gegnum innheimtuþjónustu Íslandsbanka eða með beinni millifærslu.
                    </Text>
                </BulletList>
            </Text>
        </BulletList>
    </ArticleSection>



export default PersonalInformation