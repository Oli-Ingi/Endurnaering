import BulletList from "../../../components/elements/BulletList/BulletList";
import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";
import SubArticleSection from "../../../components/modules/ArticleSections/SubArticleSection/SubArticleSection";


const Payment = () =>
    <ArticleSection title="Greiðslur og verð">
        <SubArticleSection title="Greiðslumáti">
            <Text>
                Greiðsla er innt af hendi eftir hvert viðtal í gegnum innheimtuþjónustu Íslandsbanka eða með millifærslu. 
                Skjólstæðingur fær kvittun fyrir greiðslunni senda í tölvupósti eftir að greiðsla hefur verið framvkæmd. 
                Endurnæring ehf hefur ekki aðgang að kortaupplýsingum kaupenda. 
            </Text>
            <Text>
                Hægt er að nálgast kvittun hjá Endurnæringu ehf. sem hægt er framvísa til stéttarfélaga vegna greiðsluþátttöku 
                en sum stéttarfélög styrkja sína félagsmenn til að sækja veitta þjónustu.
            </Text>
        </SubArticleSection>
        <SubArticleSection title="Verð">
            <Text>
                Öll verð eru í íslenskum krónum og eru verð og upplýsingar um þjónustu birt með fyrirvara um innsláttarvillur. 
                Við áskiljum okkur rétt til verðbreytinga án fyrirvara. 
                <Text as="span" italic>
                    (Undantekning frá þessu er þegar þú hefur nú þegar hafið næringarmeðferð hjá Endurnæringu - Þá gildir það verð sem samið var um í upphafi meðferðar).
                </Text>
            </Text>
        </SubArticleSection>
        <SubArticleSection title="Afslættir">
            <Text>
                Endurnæring veitir meðlimum eftirtalinna samtaka 20% afslátt af þjónustu sinni gegn framvísun meðlimakorts:
            </Text>
            <BulletList>
                <Text as="li">Öryrkjabandalag Íslands</Text>
                <Text as="li">Félag eldri borgara</Text>
            </BulletList>
        </SubArticleSection>
    </ArticleSection>



export default Payment