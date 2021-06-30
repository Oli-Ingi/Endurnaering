import React from 'react'
import Head from 'next/head'
import SkilmalarTemplate from '../components/templates/Skilmalar'
import Article from '../components/molecules/Article/Article'
import ArticleText from '../components/atoms/ArticleText/ArticleText'
import Link from '../components/atoms/Link/Link'
import TextLink from '../components/atoms/TextLink/TextLink'
import SkilmalarArticle from '../components/organisms/SkilmalarArticle/SkilmalarArticle'
import BulletList from '../components/atoms/BulletList/BulletList'

const Skilmalar = ({}) =>
    <>
        <Head>
            <title>Endurnæring</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300;500;600;900&display=swap" rel="stylesheet"></link>
        </Head>
        <SkilmalarTemplate>
            <SkilmalarArticle header="Skilmálar Endurnæringar ehf.">
                <ArticleText>
                    Þjónusta Endurnæring ehf. er háð eftirfarandi skilmálum. 
                    Þegar þú notar vefsíðuna eða kaupir þjónustu samþykkir þú þessa skilmála, vinsamlegast lestu vel yfir þá. 
                    Þú getur sent tölvupóst á endurnaering@endurnaering.is ef þú hefur spurningar um skilmálana. 
                    Endurnæring ehf. áskilur sér rétt til að breyta reglum og skilmálum án fyrirvara. 
                    Endurnæring ehf. Notar hugbúnað frá Kara Connect við veitingu fjarviðtala og finna má skilmála fjarviðtala í bókunarferli þeirra. 
                </ArticleText>
                <ArticleText>
                    Þjónustan er rekin af Endurnæring ehf., kt. 410221-0200, Ármúla 42, 105 Reykjavík. 
                    Umhverfi þjónustunnar er hýst af <TextLink href="https://www.karaconnect.com/">Köru Connect ehf.</TextLink> sem er vinnsluaðili gagna (sjá notkunarskilmála Köru Connect <TextLink href="/">hér</TextLink>).  
                </ArticleText>
                <ArticleText>
                    Endurnæring ehf. er ábyrgðaraðili vinnslu persónuupplýsinga sem fram fer í tengslum við þjónustuna. Hægt er að hafa samband með því að senda tölvupóst á <TextLink href="mailto:endurnaering@endurnaering.is">endurnaering@endurnaering.is</TextLink>. 
                </ArticleText>
            </SkilmalarArticle>
            <SkilmalarArticle header="Notkunarskilmálar">
                <ArticleText>
                    Endurnæring ehf. veitir næringarmeðferðir í gegnum netið á öruggan hátt. Þjónustan er einungis ætluð einstaklingum 18 ára og eldri. Notandanum gert grein fyrir því að með því að samþykkja þessa skilmála þá er hann að veita upplýst samþykki fyrir vinnslu á persónuupplýsingum.  
                </ArticleText>
            </SkilmalarArticle>
            <SkilmalarArticle header="Persónuupplýsingar sem safnað er:">
                <ArticleText>
                    Persónugögn eru gögn sem hægt er að tengja við einstaklinga. Endurnæring ehf. safnar og vinnur eftirfarandi persónugögn sem hægt er að tengja við þig: 
                </ArticleText>
                <BulletList>
                    <li>
                        <span>Upplýsingar um þig (Aðgangsupplýsingar) fela í sér eftirfarandi upplýsingar:</span>
                        <BulletList>
                            <li>Nafn</li>
                            <li>Tölvupóstur</li>
                            <li>Heimilisfang</li>
                            <li>Símanúmer</li>
                            <li>Kennitala</li>
                            <li>Upplýsingar um tengilið einstaklings í þjónustu ef við á (nafn, sími, heimilisfang), t.d. forráðamaður eða maki</li>
                        </BulletList>
                    </li>
                    <li>
                        <b>Heilbrigðisupplýsingar (sjúkraskrá).</b> Samkvæmt lögum um sjúkraskrár nr. 55/2009 skal heilbrigðisstarfsmaður 
                        sem fær sjúkling til meðferðar halda sjúkraskrá. 
                        Heilbrigðisupplýsingar eru upplýsingar sem verða til við meðferð sjúklings og heilbrigðisstarfsmanns.  
                    </li>
                    <li>
                        <p><b>Greiðsluupplýsingar.</b> Endurnæring ehf. sér hvorki um né geymir kortaupplýsingar hjá sér.</p>
                        <BulletList>
                            <li>Kortaupplýsingar sem settar eru inn í hugbúnað Köru eru hýstar hjá greiðsluveitunni Stripe.</li>
                            <li><b>Greiðslur fara fram með kreditkorti eða debetkorti og fara allar kortafærslur fram í gegnum örugga greiðslusíðu.</b></li>
                        </BulletList>
                    </li>
                </BulletList>
            </SkilmalarArticle>
            <SkilmalarArticle header="Meðhöndlun á persónugögnum">
                <ArticleText>
                    Endurnæring ehf notar persónuupplýsingar þínar eingöngu í þeim tilgangi að efna samning við þig um veitingu næringarmeðferða
                    og til að uppfylla lagaskyldu veitanda heilbrigðisþjónustu að halda sjúkraskrá um meðferðina.
                </ArticleText>
                <ArticleText>
                    Samkvæmt lögum um sjúkraskrár nr.55/2009 er óheimilt að eyða upplýsingum úr sjúkraskrá nema með samþykki landlæknis. 
                    Aðrar upplýsingar sem við geymum um þig eru geymdar eins lengi og nauðsyn ber til í þeim tilgangi sem þeirra var aflað. 
                    Einstaka upplýsingar geta verið geymdar lengur ef sérstakar reglur gilda t.d. skatta- eða bókhaldslög.
                </ArticleText>
                <ArticleText>
                    Endurnæring ehf notast við Köru til að safna og geyma persónugögn. Persónugreinanlegar upplýsingar, ásamt öðrum gögnum, eru dulkóðaðar í gagnagrunni með 256 bita dulkóðun. 
                </ArticleText>
                <ArticleText>
                    Öll samskipti milli skjólstæðings og sérfræðings innan Köru eru dulkóðuð með SSL/TLS skírteini.
                </ArticleText>
            </SkilmalarArticle>
            <SkilmalarArticle header="Tilgangur og heimild til vinnslu persónuupplýsinga">
                <ArticleText>
                    Tilgangur með vinnslu persónuupplýsinga og heimildir til vinnslu til fyrrnefndra gagna er eftirfarandi: 
                </ArticleText>
                <BulletList>
                    <li>
                        Vinnsla á upplýsingum um aðgangsorð og netfang eru nauðsynlegar til að beina skjólstæðingum rétt aðgengi að sérfræðing, 
                        geta haft samband við viðkomandi, sent út reikninga eða fylgt eftir meðferð. 
                        Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða.  
                    </li>
                    <li>
                        Vinnsla á heilsuupplýsingum (sjúkraskrá) er nauðsynleg til að skrá niður upplýsingar sem snúa að meðferðinni og framgangi meðferðar. 
                        Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða. 
                        Einnig veitendum heilbrigðisþjónustu skylt að halda sjúkraskrá og því er vinnsla nauðsynleg til að fullnægja lagaskyldu sem hvílir á þeim sem ákveður vinnsluna (ábyrgðaraðila). 
                    </li>
                    <li>
                        Vinnsla á greiðsluupplýsingum er nauðsynleg til að skjólstæðingar geti greitt fyrir þjónustu Endurnæring ehf ef og þegar við á. 
                        Heimildin er samþykki þess sem persónuupplýsingarnar eru um (hins skráða) fyrir vinnslunni í þágu eins eða fleiri tiltekinna markmiða. 
                    </li>
                </BulletList>
            </SkilmalarArticle>
        </SkilmalarTemplate>
    </>

    


export default Skilmalar