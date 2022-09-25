import { FC } from 'react'
import CollabSection from '../../../components/entities/CollabSection/CollabSection';


const links = [
    { logo: "/Heilsuklasinn.png", alt: "heilsuklasinn-logo-mynd", to: "https://klasinn.is" },
    { logo: "/Heilsugaeslan_hofda.png", alt: "heilsugaesla-hofda-logo-mynd", to: "https://hgh.is" },
    { logo: "/Virk.png", alt: "Virk-logo-mynd", to: "https://virk.is" }
];


const Collaborators: FC<{}> = () =>
    <CollabSection title="Samstarfsaðilar" links={links} />



export default Collaborators;