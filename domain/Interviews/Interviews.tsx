import ArticleSection from "../../components/modules/ArticleSections/ArticleSection/ArticleSection"
import ArticlesPage from "../../components/templates/ArticlesPage/ArticlesPage"
import Text from "../../components/elements/Text/Text";
import BulletList from "../../components/elements/BulletList/BulletList";
import Link from "../../components/elements/Link/Link";



const InterviewsPage = () => 
    <ArticlesPage pageTitle="Einstaklingsviðtöl">
        <div>
        <Text>
            Endurnæring býður uppá næringarráðgjöf hjá löggiltum næringarfræðingi. Einstaklingsráðgjöf er persónulegur 
            og faglegur stuðningur sem miðar að því að ná fram langtímaárangri.
        </Text>
        <Text>
            Meðferðin er unnin með það að leiðarljósi að:
        </Text>
        <BulletList>
            <Text as="li">Bæta meltingu</Text>
            <Text as="li">Efla jákvæða líkamsímynd</Text>
            <Text as="li">Auka orku og úthald</Text>
            <Text as="li">Auka vellíðan</Text>
            <Text as="li">Minnka streitu</Text>
            <Text as="li">Efla líkamlega heilsu</Text>
        </BulletList>
        <Text>
            Viðtalið er 50 mínútur og kostar 12.000 kr. og hægt er að óska eftir viðtalstíma
            með því að smella á "Bóka tíma" hlekkinn hér fyrir neðan. Hlekkurinn leiðir inn
            á örugga þjónustusíðu Kara Connect þar sem útfylling nauðsynlegra upplýsinga fer fram.
            Næringarfræðingur hefur síðan samband símleiðis og bókar viðtalstíma.
        </Text>
        <Text>
            Hægt er að fá nánari upplýsingar símleiðis í s. 577-1771 (9:00 - 16:00 alla virka daga) eða
            með því að senda tölvupóst á <Link permaLine to="mailto:endurnaering@endurnaering.is">endurnaering@endurnaering.is</Link>
        </Text>
        <ArticleSection title="Fullorðnir">
            <Text>
                Um er að ræða stað- eða fjarviðtal eftir óskum hvers og eins.
            </Text>
            <Text>
                Fjarviðtöl fara fram í gegnum fjarfundabúnað Kara Connect sem er viðurkennt tæki fyrir
                fjarheilbrigðisþjónustu og má bæði nota í tölvu eða með appi í síma.
            </Text>
            <Text></Text>
        </ArticleSection>
        <ArticleSection title="Börn og unglingar">
            <Text>
                Um er að ræða staðviðtal fyrir einstaklinga sem hafa ekki náð 18 ára aldri og ávallt
                í fylgd forráðamanns.
            </Text>
        </ArticleSection>
        </div>
    </ArticlesPage>


export default InterviewsPage