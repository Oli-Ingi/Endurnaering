import { FC } from 'react'
import styled from 'styled-components'
import Container from '../../elements/Container/Container'
import Text from '../../elements/Text/Text'


export type Props = {
    title?: string;
    variant?: Variants;
}


const StInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 1em;
    width: 100%;
    box-sizing: border-box;
`


const Section: FC<Props> = ({ title, variant, children }) => 
    <Container as="section" variant={variant}>
        <StInner>
            {title && <Text 
                as="h2" 
                thick
                size="xl"
                marginBottom="2em" 
                variant={!variant || variant === "primary" ? "white" : "primary"}
            >
                {title}
            </Text>}
            {children}
        </StInner>
    </Container>



export default Section