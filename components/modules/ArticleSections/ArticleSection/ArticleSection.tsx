import { FC } from 'react'
import styled from 'styled-components'
import Text from '../../../elements/Text/Text'


export type Props = {
    title: string;
}


const StSection = styled.section`
    h2 {
        margin: 2rem 0 0.75rem 0;
    }

    p {
        margin: .5rem 0;
    }
`


const ArticleSection: FC<Props> = ({ title, children }) => 
    <StSection>
        <Text as="h2" variant="primary" size="lg" bold>{title}</Text>
        {children}
    </StSection>



export default ArticleSection