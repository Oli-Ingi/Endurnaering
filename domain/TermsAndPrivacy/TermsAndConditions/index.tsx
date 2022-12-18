import { FC } from "react";
import Link from "../../../components/elements/Link/Link";
import Text from "../../../components/elements/Text/Text";
import OpenArticle from "../../../components/modules/Articles/OpenArticle/OpenArticle";


const TermsAndConditions: FC<{}> = ({ children }) =>
    <OpenArticle title="Skilmálar">
        <Text>
            Þjónusta Endurnæringar ehf. er háð eftirfarandi skilmálum.
            Þegar þú notar vefsíðuna eða kaupir þjónustu samþykkir þú þessa skilmála, vinsamlegast lestu vel yfir þá. 
            Þú getur sent tölvupóst á <Link inline to="mailto:endurnaering@endurnaering.is" permaLine>endurnaering@endurnaering.is</Link> ef þú hefur spurningar um skilmálana.
            Endurnæring ehf. áskilur sér rétt til að breyta reglum og skilmálum án fyrirvara. Endurnæring ehf. notar hugbúnað frá Kara Connect 
            við veitingu fjarviðtala og finna má skilmála fjarviðtala í bókunarferli þeirra.
            Þjónustan er rekin af Endurnæringu ehf., kt. 410221-0200, Höfðinn (Heilsuklasinn/Heilsugæsla Höfða) Bíldshöfða 9, 110 Reykjavík. 
            Umhverfi fjarþjónustu er hýst af <Link inline to="https://www.karaconnect.com/" permaLine newTab>Köru Connect ehf.</Link> sem
            er vinnsluaðili gagna (sjá notkunarskilmála Köru Connect <Link inline to="https://www.karaconnect.com/is/terms-and-conditions" permaLine newTab>hér</Link>).
            Endurnæring ehf. er ábyrgðaraðili vinnslu persónuupplýsinga sem fram fer í tengslum við þjónustuna. 
            Hægt er að hafa samband með því að senda tölvupóst á <Link inline to="mailto:endurnaering@endurnaering.is" permaLine>endurnaering@endurnaering.is</Link>.
        </Text>
        {children}
    </OpenArticle>



export default TermsAndConditions