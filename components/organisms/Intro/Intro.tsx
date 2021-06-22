import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'
import ArticleText from '../../atoms/ArticleText/ArticleText'
import Subheader from '../../atoms/Subheader/Subheader'
import InterviewButtons from '../../molecules/InterviewButtons/InterviewButtons'


const liner = keyframes`
    from { width: 0; }
    to { width: 100%; }
`

type Props = {
    title: string;
    subtitle: string;
}


const StCon = styled.div`
    max-width: 500px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2em;
`

const StLine = styled.hr<{delay?: number}>`
    width: ${p => p.delay ? 0 : '100%'};
    height: 0;
    border-top: 1px solid ${p => p.theme.colors.primary};
    margin: 1.5em 0;

    ${p => p.delay && css`
        animation: ${liner} forwards 1.2s;
        animation-delay: ${p.delay || 0.2}s;
    `}
`

const Intro: React.FC<Props> = ({ title, subtitle, children }) =>
    <StCon>
        <ArticleHeader lg margin="0" fader="right">{title}</ArticleHeader>
        <Subheader lg margin='0' fader="right" fadeDelay={2}>{subtitle}</Subheader>
        <StLine delay={2} />
        <ArticleText lg fader="down" fadeDelay={3.2}>{children}</ArticleText>
        <InterviewButtons margin='1em 0 0 0'  fadeDelay={3.2} fader="down" />
    </StCon>


export default Intro