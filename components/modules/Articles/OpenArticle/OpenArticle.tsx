import { FC } from 'react'
import styled from 'styled-components'
import Text from '../../../elements/Text/Text'


export type Props = {
    title: string;
    titleID?: string;
}


const StArticle = styled.article`
    h1 {
        margin: 2rem 0 1rem 0;
    }

    p {
        margin: .5rem 0;
    }

    ul {
        margin: .5rem 0;
    }
`


const OpenArticle: FC<Props> = ({ title, children, titleID }) => 
    <StArticle>
        <Text as="h1" color="primary" size="xl" bold id={titleID}>{title}</Text>
        {children}
    </StArticle>



export default OpenArticle