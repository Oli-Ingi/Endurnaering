import BulletList from "../../../components/elements/BulletList/BulletList";
import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";


const PurposeAndAuthority = () =>
    <ArticleSection title="Tilgangur og heimild til vinnslu persónuupplýsinga">
        <Text>
            Tilgangur með vinnslu persónuupplýsinga og heimildir til vinnslu fyrrnefndra gagna er eftirfarandi:   
        </Text>
        <BulletList>
            <Text as="li">
                Vinnsla á upplýsingum um aðgangsorð og netfang eru nauðsynlegar til að beina skjólstæðingum rétt aðgengi að sérfræðing, 
                geta haft samband við viðkomandi, sent út reikninga eða fylgt eftir meðferð. 
                Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða. 
            </Text>
            <Text as="li">
                Vinnsla á heilsuupplýsingum (sjúkraskrá) er nauðsynleg til að skrá niður upplýsingar sem snúa að meðferðinni og framgangi meðferðar.
                Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða.
                Einnig veitendum heilbrigðisþjónustu skylt að halda sjúkraskrá og því er vinnsla nauðsynleg til að fullnægja lagaskyldu
                sem hvílir á þeim sem ákveður vinnsluna (ábyrgðaraðila).
            </Text>
            <Text as="li">
                Vinnsla á greiðsluupplýsingum er nauðsynleg til að skjólstæðingar geti greitt fyrir þjónustu Endurnæring ehf ef og þegar við á.
                Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða.
            </Text>
        </BulletList>
    </ArticleSection>



export default PurposeAndAuthority