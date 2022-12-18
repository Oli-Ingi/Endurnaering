import BulletList from "../../../components/elements/BulletList/BulletList";
import Link from "../../../components/elements/Link/Link";
import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";
import SubArticleSection from "../../../components/modules/ArticleSections/SubArticleSection/SubArticleSection";


const Payment = () =>
    <ArticleSection title="Greiðslur og verð">
        <SubArticleSection title="Greiðslumáti">
            <Text>
                Greiðsla er innt af hendi eftir hvert viðtal í gegnum innheimtuþjónustu Íslandsbanka eða með millifærslu. 
                Skjólstæðingur fær kvittun fyrir greiðslunni senda í tölvupósti eftir að greiðsla hefur verið framvkæmd.
                Endurnæring ehf hefur ekki aðgang að kortaupplýsingum kaupenda.
            </Text>
            <Text>
                Hægt er að nálgast kvittun hjá Endurnæringu ehf. sem hægt er framvísa til stéttarfélaga vegna greiðsluþátttöku 
                en sum stéttarfélög styrkja sína félagsmenn til að sækja veitta þjónustu.
            </Text>
        </SubArticleSection>
        <SubArticleSection title="Verð">
            <Text>
                Viðtalstími (60-90mín) hjá næringarfræðing kostar alla jafna 16 þúsund kr. Sjá nánar<Link to="/vidtol" inline permaLine inner>hér</Link>.
                Öll verð eru í íslenskum krónum og eru verð og upplýsingar um þjónustu birt með fyrirvara um innsláttarvillur. 
                Við áskiljum okkur rétt til verðbreytinga án fyrirvara. 
                <Text as="span" italic>
                    (Undantekning frá þessu er þegar þú hefur nú þegar hafið næringarmeðferð hjá Endurnæringu - Þá gildir það verð sem samið var um í upphafi meðferðar).
                </Text>
            </Text>
        </SubArticleSection>
        <SubArticleSection title="Stéttarfélög og styrkir til að sækja næringarráðgjöf">
            <Text>
                Endurnæring vekur athygli á því að nú niðurgreiða flest stéttarfélög viðtalstíma hjá næringarfræðingi gegn framvísun kvittunar.
                Endurnæring gefur út viðeigandi kvittanir sem framvísa má til stéttarfélaga. Nánari upplýsingar um slíkt veitir Endurnæring góðfúslega.
            </Text>
        </SubArticleSection>
    </ArticleSection>



export default Payment