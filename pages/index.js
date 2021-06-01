import Head from 'next/head'
import React from "react";

import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from "../styles/themes";

import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Home from "../components/templates/Home";
//import { IArticle } from '../types/general';

// TODO: import content here
const article = {
  title: 'Njóttu þess að borða!',
  paragraphs: [
    'Taktu spjallið við næringarfræðing og lærðu að beita innsæinu við að taka stjórn á þínum fæðuvenjum og vellíðan.'
  ]
}

const concepts = [
  {
    src: '/Naering.png',
    header: 'Næring',
    content: [
      'Þú sem einstaklingur þarft að borða, þú þarft að næra þig svo þú sért tilbúin í að takast á við verkefni dagsins. Þig langar samt ekkert endilega að borða eins og maki, vinur eða samstarfsfélagi og því þarftu að finna þig í þínu eigin persónumiðaða matarræði. Þú ert með þinn uppáhaldsmat, jafnvel uppáhalds tíma dags til að borða og vilt hafa þitt matarræði eftir eigin höfði. Þig langar kannski að borða fjölbreyttari fæðu, vera orkumeiri, bæta meltinguna og upplifa líkamlega og andlega vellíðan.', 
      'Eru matarkúrar eitthvað sem þú hefur verið mikið að prófa? Veltiru stundum fyrir þér hvort þú sért að borða rétt? Langar þig ofboðslega mikið til að skoða þitt matarræði og fá að vita hvort þú þurfir að gera einhverja breytingar? Hugsanlega langar þig bara að bæta millimálið eða fá að vita hvort þú megir borða eftir kvöldmat. Hver svo sem ástæðan er fyrir því að þig langar að eiga spjall um næringu þá er næringarfræðingur tilbúinn að mæta þér þar sem þú ert stödd/staddur.​'
    ]
  },
  {
    src: '/Venjur.png',
    header: 'Venjur',
    content: [
      'Venjur mótast af umhverfinu sem þú elst upp í heima fyrir, í skóla og síðan í vinnunni. Þú ert að móta þínar fæðuvenjur allt þitt líf og þær taka stöðugum breytingum. Dæmi um fæðuvenju væri að þú færð þér alltaf morgunmat kl. 8 eða þú hefur vanist því að hádegismaturinn sé alltaf kl 12. Þínar fæðuvenjur mótast síðan af ýmsum áhrifaþáttum s.s. heilsu, því ef um veikindi er að ræða, óþol eða ofnæmi þá hefur það mikil áhrif á fæðuvenjur dagsdaglega. Þetta eru áhrifaþættir sem við höfum litla stjórn á og verðum að lifa með. Aðrir áhrifaþættir væru að í uppeldinu þá var þþér kannski sagt að klára alltaf matinn þinn. Ómeðvitað klárarðu því alltaf matinn þinn. Þetta er dæmi um áhrifaþátt sem þú getur haft áhrif á seinna meir, af því þú getur ákveðið að þú þarf ekki alltaf að klára matinn þinn. Fæðuvenja er ákveðin hegðun sem þú sýnir gagnvart þeirri athöfn að næra þig, burt séð frá því hvað nákvæmlega þú ert að fá þér að borða. Önnur dæmi um fæðuvenjur eru föstur, tíðni máltíða, hversu mikinn tíma þú gefur þér til að borða og einnig hvort þú njótir þess að borða. Fæðuvenjur eru því mikilvægur þáttur þegar kemur að því að næra þig og getur haft mikil áhrif á svefn, líkamlega og andlega vellíðan.'
    ]
  },
  {
    src: '/Innsaei.png',
    header: 'Innsæi',
    content: [
      'Hvernig veistu hversu mikið þú þarft að borða? Hvenær veistu hvenær þú átt að byrja að borða og hvenær þú átt að hætta að borða?',
      'Þú ert með fullkomið kerfi seddu- og hungurmerkja sem gefa þér merki um hvenær þú ættir að íhuga að fá þér að borða og hvenær þú ert farin(n) að upplifa mikið hungur. Sömu sögu er að segja um sedduna, en líkaminn er stöðugt að senda þér tilkynningar og skilaboð til að láta okkur vita hver staðan sé. Það er þó persónubundið hversu vel þú nærð að rýna í þessar sendingar. Ef þú borðar eftir innsæinu þá ertu að hlusta á náttúruleg hungur- og seddumerki líkamans og þú ert að borða á þínum eigin forsendum. Þú setur þér engar matarreglur, ert með engan mat á bannlista og hlustar þegar líkaminn kallar.', 
      'Þegar þú borðar eftir innsæinu þá lítur inn á við og áttar þig á því hversu svangur/svöng þú ert, hvað þig langar að fá þér að borða og ímyndar þér hvernig þér myndi líða eftir máltíðina. Þú veltir því fyrir þér hversu lengi sú orka endist, hvort þér hafi orðið illt í maganum eða hvort þessi tiltekna máltíð hafi vakið hjá þér vellíðunartilfinningu. Þú ákveður nákvæmlega hvenær þú borðar, hvað þú borðar og hversu mikið og þú munt treysta þínum líkama. Innsæi þitt til að borða getur hafa orðið fyrir truflun í gegnum lífið og þú upplifir kannski ekki þessa seddutilfinningu eða hungurtilfinningu. Það er alveg eðlilegt og þar spila óteljandi áhrifaþættir inn í. Samfélagið hefur mótað innsæið þitt t.d. ef þér var sagt að klára alltaf matinn þinn og þú gerðir það þrátt fyrir að vera orðin(n) södd/saddur, þá er það dæmi um atvik þar sem þú hlustaðir ekki á líkamann. Þú stýrðist af utanaðkomandi þætti sem sagði þér að þú værir ekki búin(n) að borða fyrr en diskurinn væri tómur. Smám saman glatast hæfileikinn til að hlusta á þessi hungur og seddumerki.'
    ]
  }
]

const nutrionistHelp = {
  title: 'Hvernig getur næringarfræðingur aðstoðað mig?',
  paragraphs: [
    'Næringarfræðingur getur aðstoðað með algeng markmið tengd fæðu, svo sem þyngdartap eða þyngaraukningu í formi vöðvamassa. Einnig er eitt markmið sem á það til að gleymast, og það er bætt líkamleg vellíðan og heilsa, burtséð frá líkamsformi. Bætt heilsa leiðir af sér aukið hreysti, minni þreytu, bætta heilastarfsemi o.fl. Ef þú nærir líkamann rétt, þá líður þér vel, hefur meiri orku og getur afkastað meiru í þínu lífi.'
  ]
}

const nutritionistGuidance = {
  title: 'Hvað felst í leiðsögn næringarfræðings?',
  paragraphs: [
    'Næringarfræðingur fer með þér yfir núverandi fæðuvenjur þínar, hvaða markmið þú hefur í þeim efnum og leiðbeinir þér við að aðlaga núverandi venjur að þessum markmiðum, án þess að þú þurfir að fórna öllum þeim mat sem þig langar í. Slík leiðsögn veitir þér því frelsi til þess að breyta þínum fæðuvenjum á þínum forsendum með virðingu fyrir þínum sérþörfum.'
  ]
}


const HomePage = () =>
  <>
    <Head>
      <title>Endurnæring</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet"></link>
    </Head>
    <Home 
      article={article} 
      bannerImage={'/spread_ppl.png'} 
      concepts={concepts} 
      articleWithImage={nutritionistGuidance} 
      articleWithImageSrc='/Naeringarfraedingur.png' 
      lastArticle={nutrionistHelp}
      phone='8487407'
      ssn='123456-7890'
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
