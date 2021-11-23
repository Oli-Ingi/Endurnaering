import Link from "../../../components/elements/Link/Link";
import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";
import SubArticleSection from "../../../components/modules/ArticleSections/SubArticleSection/SubArticleSection";


const Attendance = () =>
    <ArticleSection title="Mæting í viðtal">
        <SubArticleSection title="Afbókanir">
            <Text>
                Geti skjólstæðingur ekki nýtt sér bókaðan viðtalstíma er mikilvægt að afboða hann með minnst 24 klst. fyrirvara.
                Forfallagjald er sem nemur 6000 kr. og áskilur Endurnæring ehf. sér rétt á innheimtu þess gjalds með innheimtuþjónustu Íslandsbanka.
                Hægt er að tilkynna afbókanir með því að senda póst á <Link inline permaLine to="mailto:endurnaering@endurnaering.is">endurnaering@endurnaering.is</Link>.
                Athuga skal að <strong>Ekki</strong> er hægt að tilkynna forföll í gegnum hugbúnaðinn Kara Connect.
            </Text>
        </SubArticleSection>
        <SubArticleSection title="Ábyrgð þín">
            <Text>
                Þú berð ábyrgð á að muna eftir að mæta í viðtalstímann þinn en þú getur séð hvenær þú átt bókaðan tíma á heimasvæðinu þínu hjá 
                <Link to="https://www.karaconnect.com/is" inline permaLine>Köru Connect</Link>.
                Þú berð sömuleiðis ábyrgð á því að þú hafir næði á meðan þú ert í viðtalstíma hjá næringarfræðingnum þínum í gegnum 
                myndfundabúnað og að netsamband þitt og tækjabúnaður sé nægilega góður.
            </Text>
        </SubArticleSection>
    </ArticleSection>



export default Attendance