import Head from 'next/head'
import React from "react";

import Column from '../components/templates/Column/Column';

import Hero from '../domain/Home/Hero/Hero-is';
import Services from '../domain/Home/Services/Services-is';
import Concepts from '../domain/Home/Concepts/Concepts-is';
import Reviews from '../domain/Home/Reviews/Reviews-is';
import WhyUs from '../domain/Home/WhyUs/WhyUs';
import Benefits from '../domain/Home/Benefits/Benefits';
import Faq from '../domain/Home/FAQ/FAQ-is';
import Collaborators from '../domain/Home/Collaborators/Collaborators';

const HomePage = () =>
  <Column>
    <Hero />
    <Services />
    <WhyUs />
    <Concepts />
    <Benefits />
    <Reviews />
    <Collaborators />
    <Faq />
  </Column>


export default HomePage;



//import { IArticle } from '../types/general';

// TODO: import content here
// const intro = {
//   title: 'Upplifðu frelsi.',
//   subtitle: 'Njóttu þess að borða!',
//   text: 'Bókaðu tíma hjá næringarfræðingi og fáðu ráðgjöf við að byggja upp heilbrigt samband við mat.'
// }

// //Taktu spjallið við næringarfræðing og lærðu að beita innsæinu við að taka stjórn á þínum fæðuvenjum og vellíðan.

// const concepts = [
//   {
//     src: '/Naering.png',
//     header: 'Næring',
//     content: [
//       'Næring er ein af 4 lykilstoðum þinnar heilsu og þú tekur ákvarðanir á hverjum einstasta degi varðandi mat, meðvitað og ómeðvitað. Rétt samsett næring þarf ekki að vera flókinn matseðill eða stífur matarkúr. Þú ákveður hvernig þín vika lítur út og hvernig þú vilt hafa stjórn á þínum máltíðum yfir daginn.', 
//       'Nauðsynlegt er að þú setjir þér markmið strax í byrjun sem snúa að því hvernig þú getur skapað heilbrigðar fæðuvenjur. ​'
//     ]
//   },
//   {
//     src: '/Venjur.png',
//     header: 'Venjur',
//     content: [
//       'Venjur mótast af umhverfinu sem þú elst upp í, heima fyrir, í skóla og síðan í vinnunni. Þú ert að móta þínar fæðuvenjur allt þitt líf og þær taka stöðugum breytingum. Fæðuvenjur eru því mikilvægur þáttur þegar kemur að því að næra þig og getur haft mikil áhrif á svefn, líkamlega og andlega vellíðan. Fæðuvenjur taka breytingum út ævina en mikilvægt er að þú fáir tækifæri til að móta þínar fæðuvenjur.'
//     ]
//   },
//   {
//     src: '/Innsaei.png',
//     header: 'Innsæi',
//     content: [
//       'Líkaminn er stöðugt að senda þér skilaboð og upplýsa þig um stöðuna. Þegar þú borðar eftir innsæinu þá ertu meðvituð/meðvitaður um hungur- og seddumerki líkamans. Þú berð traust til líkamans og setur þér engar matarreglur eða ert með mat á bannlista (t.d. Ís, snakk og nammi). Kostir við að borða eftir innsæinu eru að þú áttar þig á því hvaða matur lætur þér líða vel og hvaða matur gerir það ekki.',
//     ]
//   }
// ]

// // const nutrionistHelp = {
// //   title: 'Hvernig getur næringarfræðingur aðstoðað mig?',
// //   paragraphs: [
// //     'Næringarfræðingur getur aðstoðað með algeng markmið tengd fæðu, svo sem þyngdartap eða þyngaraukningu í formi vöðvamassa. Einnig er eitt markmið sem á það til að gleymast, og það er bætt líkamleg vellíðan og heilsa, burtséð frá líkamsformi. Bætt heilsa leiðir af sér aukið hreysti, minni þreytu, bætta heilastarfsemi o.fl. Ef þú nærir líkamann rétt, þá líður þér vel, hefur meiri orku og getur afkastað meiru í þínu lífi.'
// //   ]
// // }

// const nutritionistGuidance = {
//   title: 'Af hverju ættir þú að bóka viðtal hjá næringarfræðingi?',
//   paragraphs: [
//     'Þú ert að leggja af stað í vegferð og þá skiptir máli að finna út af hverju og hvernig þú leggur af stað. Breyting á þinni matarhegðun er langtímavegferð, ekki spretthlaup. Þig langar til að upplifa frelsi í kringum mat og hefur kannski átt í óheilbrigðu sambandi við mat. Drifkraftur til breytinga býr innra með okkur, en stundum þurfum við aðstoð við að leysa hann úr læðingi. Næringarfræðingur hjálpar þér við að hætta að íhuga breytingar og kemur þér af stað.',
//     'Þú bókar tíma og næringarfræðingur hefur samband við þig og staðfestir tímabókun.​',
//     'Verð: 50 mín myndfundur 12.000 kr.',
//     'ATH! Ef þú bókar viðtal í júní þá færðu viðtalið á 9.000 kr.'
//   ]
// }

// const nutrionistHelp = {
//   title: 'Ertu að mæta í fjarviðtal?',
//   paragraphs: [
//     'Þú skráir þig inn á þitt heimasvæði á Kara Connect með rafrænum skilríkjum. Innskráning með rafrænum skilríkjum tryggir öryggi þitt á meðan viðtölum stendur.',
//     'Við mælum alltaf með því að þú notir Chrome vafrann þegar þú skráir þig í viðtöl, aðrir vafrar hafa ekki verið að virka nógu vel.'
//   ]
// }


// const bookInterview = {
//   title: 'Hvernig bóka ég viðtal?',
//   btnParagraph: 'Þú bókar tíma með því að smella á "Bóka viðtal" takkann hér fyrir neðan og fylgir leiðbeiningum KaraConnect. Næringarfræðingur hefur síðan samband við þig og staðfestir tíma.',
//   contactParagraph: 'Ef þú hefur einhverjar spurningar eða ert óviss um hvort þjónustan henti þér, ekki hika við að hafa samband:',
//   email: {
//     title: 'endurnaering@endurnaering.is',
//     url: 'mailto:endurnaering@endurnaering.is'
//   }
// }

// const nutritionistGuidance = {
//   title: 'Af hverju ættir þú að bóka fjarviðtal hjá næringarfræðing?',
//   paragraphs: [
//     'Næringarfræðingur fer með þér yfir núverandi fæðuvenjur þínar, hvaða markmið þú hefur í þeim efnum og leiðbeinir þér við að aðlaga núverandi venjur að þessum markmiðum, án þess að þú þurfir að fórna öllum þeim mat sem þig langar í. Slík leiðsögn veitir þér því frelsi til þess að breyta þínum fæðuvenjum á þínum forsendum með virðingu fyrir þínum sérþörfum.'
//   ]
// }