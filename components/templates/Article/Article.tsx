import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export type Props = {
    children: ReactNode
}


const Article = styled.article`
    display: flex;
    flex-direction: column;
    padding: 1em;

    p, li, ul {
        margin-bottom: 8px;
    }

    h1, h2, h3, h4 {
        margin-bottom: 0.5em;
    }

    button {
        margin: 0.5em 0;
    }

    hr {
        margin: 1em 0;
    }
`


export default Article;