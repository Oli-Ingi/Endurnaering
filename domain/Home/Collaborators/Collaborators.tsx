import { FC } from 'react'
import CollabSection from '../../../components/entities/CollabSection/CollabSection';


const links = [
    { logo: "heilsuklasinn.png", alt: "heilsuklasinn-logo-link", to: "https://klasinn.is" },
    { logo: "heilsugaeslan_hofda.png", alt: "heilsugaesla-hofda-logo-link", to: "https://hgh.is" },
    { logo: "Virk.png", alt: "Virk-logo-link", to: "https://virk.is" }
];


const Collaborators: FC<{}> = () =>
    <CollabSection title="Samstarfsaðilar" links={links} />



export default Collaborators;