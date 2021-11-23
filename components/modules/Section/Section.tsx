import { FC } from 'react'
import styled from 'styled-components'
import Container from '../../elements/Container/Container'
import Text from '../../elements/Text/Text'
import Title from '../../elements/Title/Title'


export type Props = {
    title?: string;
    variant?: Variants;
}


const StInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.5em 1em;
    width: 100%;
    box-sizing: border-box;

    h2 {
        margin-bottom: 50px;
        margin-top: 0;
    }
`


const Section: FC<Props> = ({ title, variant = "white", children }) => 
    <Container as="section" variant={variant}>
        <StInner>
            {title && <Title variant="section">{title}</Title>}
            {children}
        </StInner>
    </Container>



export default Section