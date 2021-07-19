import Head from 'next/head'
import React from "react";

import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from "../styles/themes";

import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Home from "../components/templates/Home";
import ArticleText from '../components/atoms/ArticleText/ArticleText';
import Subheader from '../components/atoms/Subheader/Subheader';
import InterviewButton from '../components/atoms/InterviewButton/InterviewButton';
import TextLink from '../components/atoms/TextLink/TextLink';
//import { IArticle } from '../types/general';

// TODO: import content here
const intro = {
  title: 'Upplifðu frelsi.',
  subtitle: 'Njóttu þess að borða!',
  text: 'Bókaðu tíma hjá næringarfræðingi og fáðu ráðgjöf við að byggja upp heilbrigt samband við mat.'
}

//Taktu spjallið við næringarfræðing og lærðu að beita innsæinu við að taka stjórn á þínum fæðuvenjum og vellíðan.

const concepts = [
  {
    src: '/Naering.png',
    header: 'Næring',
    content: [
      'Næring er ein af 4 lykilstoðum þinnar heilsu og þú tekur ákvarðanir á hverjum einstasta degi varðandi mat, meðvitað og ómeðvitað. Rétt samsett næring þarf ekki að vera flókinn matseðill eða stífur matarkúr. Þú ákveður hvernig þín vika lítur út og hvernig þú vilt hafa stjórn á þínum máltíðum yfir daginn.', 
      'Nauðsynlegt er að þú setjir þér markmið strax í byrjun sem snúa að því hvernig þú getur skapað heilbrigðar fæðuvenjur. ​'
    ]
  },
  {
    src: '/Venjur.png',
    header: 'Venjur',
    content: [
      'Venjur mótast af umhverfinu sem þú elst upp í, heima fyrir, í skóla og síðan í vinnunni. Þú ert að móta þínar fæðuvenjur allt þitt líf og þær taka stöðugum breytingum. Fæðuvenjur eru því mikilvægur þáttur þegar kemur að því að næra þig og getur haft mikil áhrif á svefn, líkamlega og andlega vellíðan. Fæðuvenjur taka breytingum út ævina en mikilvægt er að þú fáir tækifæri til að móta þínar fæðuvenjur.'
    ]
  },
  {
    src: '/Innsaei.png',
    header: 'Innsæi',
    content: [
      'Líkaminn er stöðugt að senda þér skilaboð og upplýsa þig um stöðuna. Þegar þú borðar eftir innsæinu þá ertu meðvituð/meðvitaður um hungur- og seddumerki líkamans. Þú berð traust til líkamans og setur þér engar matarreglur eða ert með mat á bannlista (t.d. Ís, snakk og nammi). Kostir við að borða eftir innsæinu eru að þú áttar þig á því hvaða matur lætur þér líða vel og hvaða matur gerir það ekki.',
    ]
  }
]

// const nutrionistHelp = {
//   title: 'Hvernig getur næringarfræðingur aðstoðað mig?',
//   paragraphs: [
//     'Næringarfræðingur getur aðstoðað með algeng markmið tengd fæðu, svo sem þyngdartap eða þyngaraukningu í formi vöðvamassa. Einnig er eitt markmið sem á það til að gleymast, og það er bætt líkamleg vellíðan og heilsa, burtséð frá líkamsformi. Bætt heilsa leiðir af sér aukið hreysti, minni þreytu, bætta heilastarfsemi o.fl. Ef þú nærir líkamann rétt, þá líður þér vel, hefur meiri orku og getur afkastað meiru í þínu lífi.'
//   ]
// }

const nutritionistGuidance = {
  title: 'Af hverju ættir þú að bóka viðtal hjá næringarfræðingi?',
  paragraphs: [
    'Þú ert að leggja af stað í vegferð og þá skiptir máli að finna út af hverju og hvernig þú leggur af stað. Breyting á þinni matarhegðun er langtímavegferð, ekki spretthlaup. Þig langar til að upplifa frelsi í kringum mat og hefur kannski átt í óheilbrigðu sambandi við mat. Drifkraftur til breytinga býr innra með okkur, en stundum þurfum við aðstoð við að leysa hann úr læðingi. Næringarfræðingur hjálpar þér við að hætta að íhuga breytingar og kemur þér af stað.',
    'Þú bókar tíma og næringarfræðingur hefur samband við þig og staðfestir tímabókun.​',
    'Verð: 50 mín myndfundur 12.000 kr.',
    'ATH! Ef þú bókar viðtal í júní þá færðu viðtalið á 9.000 kr.'
  ]
}

const nutrionistHelp = {
  title: 'Ertu að mæta í fjarviðtal?',
  paragraphs: [
    'Þú skráir þig inn á þitt heimasvæði á Kara Connect með rafrænum skilríkjum. Innskráning með rafrænum skilríkjum tryggir öryggi þitt á meðan viðtölum stendur.',
    'Við mælum alltaf með því að þú notir Chrome vafrann þegar þú skráir þig í viðtöl, aðrir vafrar hafa ekki verið að virka nógu vel.'
  ]
}


const bookInterview = {
  title: 'Hvernig bóka ég viðtal?',
  btnParagraph: 'Þú bókar tíma með því að smella á "Bóka viðtal" takkann hér fyrir neðan og fylgir leiðbeiningum KaraConnect. Næringarfræðingur hefur síðan samband við þig og staðfestir tíma.',
  contactParagraph: 'Ef þú hefur einhverjar spurningar eða ert óviss um hvort þjónustan henti þér, ekki hika við að hafa samband:',
  email: {
    title: 'endurnaering@endurnaering.is',
    url: 'mailto:endurnaering@endurnaering.is'
  }
}

// const nutritionistGuidance = {
//   title: 'Af hverju ættir þú að bóka fjarviðtal hjá næringarfræðing?',
//   paragraphs: [
//     'Næringarfræðingur fer með þér yfir núverandi fæðuvenjur þínar, hvaða markmið þú hefur í þeim efnum og leiðbeinir þér við að aðlaga núverandi venjur að þessum markmiðum, án þess að þú þurfir að fórna öllum þeim mat sem þig langar í. Slík leiðsögn veitir þér því frelsi til þess að breyta þínum fæðuvenjum á þínum forsendum með virðingu fyrir þínum sérþörfum.'
//   ]
// }


const HomePage = () =>
  <>
    <Head>
      <title>Endurnæring</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Exo:wght@300;500;600;900&display=swap" rel="stylesheet"></link>

      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
    <Home 
      introTitle={intro.title}
      introSubtitle={intro.subtitle}
      introText={intro.text}
      introImgSrc={'/Upphafsmynd3.svg'}
      conceptsTrio={[{ src: '/Venjur.png', title: 'Venjur' }, { src: '/Innsaei.png', title: 'Innsæi' }, { src: '/Naering.png', title: 'Næring' }]}
      imgArticleTitle="Viðtal við næringarfræðing"
      imgArticle={<>
        <ArticleText>
          Endurnæring býður upp á ráðgjöf hjá löggiltum næringarfræðingi. Notast er við aðferðafræði áhugahvetjandi samtals (e. Motivational Interviewing)
          sem hefur reynst afar skilvirk leið til að hjálpa fólki að takast á við erfiðar og flóknar lífsstílbreytingar.
          Aðferðafræðin miðar að því að vekja upp innri hvata til breytinga sem eykur líkurnar á varanlegum árangri.
          Með þessari nálgun stýrir þú ferðinni og er ráðgjöfin stuðningur við þín markmið við að byggja upp heilbrigt samband við mat.
        </ArticleText>
        <ArticleText>
          Ráðgjöfin er í formi viðtala sem taka 50 mínútur hvert og getur þú valið á milli þess að fá staðviðtal eða fjarviðtal. Staðviðtöl fara fram
          á skrifstofu Endurnæringar í Ármúla 42. 3. hæð. Fjarviðtöl fara fram í gegnum fjarfundarbúnað KaraConnect sem er viðurkennt
          kerfi fyrir fjarheilbrigðisþjónustu og má bæði nota það í gegnum vafra eða í gegnum <TextLink target="_blank" href="https://help.karaconnect.com/en/articles/4331728-koru-smaforritid">app í farsíma.</TextLink>
        </ArticleText>
        <ArticleText>
          <b>Fullt verð:</b> 12.000 kr.
        </ArticleText>
        <ArticleText>
          <b>Sumarverð:</b> 9.000 kr. (ef þú bókar tíma í júlí)
        </ArticleText>
        
      </>}
      articleWithImage={nutritionistGuidance} 
      articleImageSrc='/Naeringarfraedingur.png' 
      lastArticle={nutrionistHelp}
      bookInterviewArticle={bookInterview}
    />
  </>


export default HomePage;

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
