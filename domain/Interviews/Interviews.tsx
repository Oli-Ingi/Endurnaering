import Text from "../../components/elements/Text/Text";
import Section from "../../components/modules/Section/Section";
import Button from "../../components/elements/Button/Button";
import Column from "../../components/templates/Column/Column";
import DescCard from "../../components/modules/DescCard/DescCard";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";
import styled from "styled-components";
import Link from "../../components/elements/Link/Link";


// TODO: Modify Hero for reusability here.
// TODO: Reusable price bar?
// TODO: námskeið: Card module.
// IDEA: randomize hero images displayed?

const StArticleSection = styled.div`
    max-width: ${p => p.theme.layout.containerWidth};
    display: flex;
    padding: 1em;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 48px 0;

    > div:first-child {
        margin-right: 48px;
        flex: 1;

        p {
            margin-bottom: 15px;
        }
    }

    @media screen and (max-width: 850px) {
        flex-direction: column-reverse;

        > div:first-child {
            margin-top: 24px;
        }
    }
`

const InterviewsPage = () => 
    <Column as="main">
        <SubPageBanner 
            title="Einstaklingsviðtöl"
            subtitle="Sérsniðin næringarráðgjöf"
            smSubtitle
            img="/vidtal.png"
            imgAlt="mynd-drengur-ad-borda"
        />
        <Section asEl="div"  border="both" just="between" align="center" row variant="secondary" pad="1em">
            <Text size="lg" color="primary" bold mr="1em">Verð: <Text as="span" color="dark" size="lg">19.000 kr.</Text></Text>
            <Button lg to="https://noona.is/heilsuklas" m="1em 4em 1em 0">Bóka viðtal</Button>
        </Section>
        <StArticleSection>
            <div>
                <Text>Viðtal við næringarfræðing tekur u.þ.b. 50 mínútur.</Text>
                <Text>Næringarráðgjöf er fyrir börn, unglinga og fullorðna.</Text>
                <Text>
                    Áhersla er lögð á að þú stýrir ferðinni og að ráðgjöfin sé stuðningur við markmið tengd næringu og/eða matarvenjum. 
                    Í viðtalinu er notast við þekkta og gagnreynda samtalsaðferð sem kallast áhugahvetjandi samtal (e. Motivational Interviewing). Sú aðferð hefur reynst vel 
                    við að skapa áhuga á viðfangsefninu og auka líkur á langvarandi árangri. 
                    Markmið viðtalsins verður þannig að skapa drifkraft og veita tæki og tól sem þú nýtir þér til að bæta mataræði þitt.
                </Text>
                <Text>
                    Í viðtalinu vinnum við efnislega með lykilstoðir jákvæðrar heilsu, þ.e. hreyfingu, næringu, svefn og andlega heilsu. Áhersla verður lögð á að leiðbeina þér í átt að heilbrigðu sambandi við mat með
                    því að læra að borða með innsæinu (e. intuitive eating). Í þeirri nálgun felast engin boð eða bönn heldur persónumiðuð fræðsla og þjálfun í því að læra að hlusta
                    á eigin líkama og tengjast svengdar- og sedduboðum.
                </Text>
                <Text>
                    Þjónustan hentar öllum þeim sem vilja læra að byggja upp heilbrigt samband við mat, en við viljum þó benda sérstaklega á að hún getur hentað þeim sem eru að kljást við kvíða, streitu, ADHD, einhverfu og tengdar raskanir. 
                    Jafnframt hafa aðferðir okkar reynst árangursríkar fyrir þá sem þjást af völdum einkenna á borð við meltingaróþægindi, fæðuofnæmi eða óþol.
                </Text>
                <Text>
                    Viðtölin eru styrkt af flestum stéttarfélögum.
                </Text>
                <Text>
                    Ef frekari upplýsinga er óskað er hægt að hafa samband beint við næringarfræðing hér: <Link inline to="mailto:heiddis@endurnaering.is" permaLine>heiddis@endurnaering.is</Link>.
                </Text>
            </div>
            <DescCard 
                date="Alla virka daga, kl. 9 - 16" 
                loc=" Bíldshöfði 9, 110 Reykjavík" 
            />
        </StArticleSection>
    </Column>


export default InterviewsPage


{/* <ImgBanner img="/hrokkbraud.png" imgAlt="mynd-drengur-ad-borda" sm>
            <div style={{ marginBottom: 50 }}>
                <Title marginBottom="0.3em">Einstaklingsviðtöl</Title>
                <Text marginBottom=".7em">
                    Börnum, unglingum og fullorðnum býðst persónuleg og fagleg næringarráðgjöf, veitt af löggiltum næringarfræðing.
                </Text>
                <Text>
                    Gera má ráð fyrir að viðtalstími taki 50 mínútur hvort sem um er að ræða stað- eða fjarviðtal. Athugið að einungis
                    er boðið upp á fjarviðtöl fyrir einstaklinga sem hafa náð 18 ára aldri.
                </Text>
            </div>
        </ImgBanner> */}