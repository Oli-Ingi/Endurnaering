import React from 'react'
import styled from 'styled-components'
import Text from '../../elements/Text/Text'


export type Props = {
    pageTitle?: string;
}

const StArticlesPage = styled.main`
    padding: 8rem 1em 5rem 1em;

    > div, > section, > main, > header, > footer, article {
        max-width: 100%;
        width: ${p => p.theme.layout.containerWidth};
        padding: 1rem 0;
        margin: 1rem auto;
    }
`

const ArticlesPage: React.FC<Props> = ({ pageTitle, children }) => 
    <StArticlesPage>
        {pageTitle && <header>
                <Text as="h1" variant="primary" size="xxl" bold>{pageTitle}</Text>
        </header>}
        {children}
    </StArticlesPage>


export default ArticlesPage
