import React from 'react'
import ArticleText from '../../atoms/ArticleText/ArticleText'
import InterviewButton from '../../atoms/InterviewButton/InterviewButton'
import Article from '../../molecules/Article/Article'
import styled from 'styled-components'
import TextLink from '../../atoms/TextLink/TextLink'

export type Props = {
    title: string;
    btnParagraph: string;
    contactParagraph: string;
    email: {
        title: string;
        url: string;
    };
    margin?: string;
}

const BookInterview: React.FC<Props> = ({ title, btnParagraph, contactParagraph, email, margin }) =>
    <Article title={title} margin={margin}>
        <ArticleText>{btnParagraph}</ArticleText>
        <InterviewButton margin="0.5em 0 1em 0" />
        <ArticleText>{contactParagraph} <TextLink href={email.url}>{email.title}</TextLink></ArticleText>
    </Article>


export default BookInterview