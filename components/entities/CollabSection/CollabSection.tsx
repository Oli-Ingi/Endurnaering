import { FC } from 'react'
import styled from 'styled-components';
import Grid from '../../elements/Grid/Grid';
import CollabCard from '../../modules/CollabCard/CollabCard';
import Section from '../../modules/Section/Section';


export type Props = {
    links: {
        logo: string;
        alt: string;
        to: string;
    }[];
    title: string | JSX.Element;
}

const StWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    grid-gap: 60px;

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
    }
`


const CollabSection: FC<Props> = ({ title, links }) =>
    <Section title={title} titleAlign="center" border="bottom" variant="secondary">
        <StWrapper>
            {links.map(l => <CollabCard key={l.to} img={l.logo} alt={l.alt} href={l.to} />)}
        </StWrapper>
    </Section>



export default CollabSection;