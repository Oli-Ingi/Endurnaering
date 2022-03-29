import Text from "../../components/elements/Text/Text";
import Section from "../../components/modules/Section/Section";
import Button from "../../components/elements/Button/Button";
import Column from "../../components/templates/Column/Column";
import DescCard from "../../components/modules/DescCard/DescCard";
import SubPageBanner from "../../components/entities/SubPageBanner/SubPageBanner";


// TODO: Modify Hero for reusability here.
// TODO: Reusable price bar?
// TODO: námskeið: Card module.
// IDEA: randomize hero images displayed?

const InterviewsPage = () => 
    <Column as="main">
        <SubPageBanner 
            title="Einstaklingsviðtöl"
            subtitle="Sérsniðin næringarráðgjöf"
            smSubtitle
            img="/hrokkbraud-350.png"
            imgAlt="mynd-drengur-ad-borda"
        />
        <Section asEl="div"  border="both" just="between" align="center" row variant="secondary" pad="1em">
            <Text size="lg" color="primary" bold mr="1em">Verð: <Text as="span" color="dark" size="lg">16.000 kr.</Text></Text>
            <Button lg to="https://accounts.karaconnect.com/auth/realms/kara/protocol/openid-connect/registrations?response_type=code&client_id=kara-acc-manage-fe&scope=openid&redirect_uri=https%3A%2F%2Fauth.karaconnect.com%2Fcreate-client%3Fview%3Dapply%26company_id%3D1115" m="1em 4em 1em 0">Bóka viðtal</Button>
        </Section>
        <Section align="flex-end">
            <DescCard 
                date="Alla virka daga, kl. 9 - 16" 
                loc="Ármúli 42, 108 Reykjavík" 
            />
        </Section>
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