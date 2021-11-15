import styled from 'styled-components'


export type Props = {
    as: 'section' | 'article' | 'main';
    contained?: boolean;
}

/**
 * Place <section>s inside.
 */
const Column = styled.div<Props>`
    display: flex;
    padding-top: 80px;
    flex-direction: column;
    align-items: center;
    width: ${p => p.contained ? p.theme.layout.containerWidth : '100%'};
    max-width: 100%;
`



export default Column;