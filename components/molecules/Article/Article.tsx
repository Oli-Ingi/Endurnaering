import React from 'react'
import styled from 'styled-components'
import { IAnchor } from '../../../types/general'
import ArticleHeader from '../../atoms/ArticleHeader/ArticleHeader'
import ArticleText from '../../atoms/ArticleText/ArticleText'
import Button from '../../atoms/Button/Button'
import Card from '../../atoms/Card/Card'
import Subheader from '../../atoms/Subheader/Subheader'


export type Props = {
    title: string;
    subtitle?: string;
    paragraphs: string[];
    maxWidth?: number;
    apple?: boolean;
    shadow?: boolean;
    center?: boolean;
    stretch?: boolean;
    lg?: boolean;
    margin?: string;
}


const Article: React.FC<Props> = ({ title, subtitle, paragraphs, maxWidth, stretch, center, children, lg, margin }) =>
    <Card maxWidth={maxWidth} center={center} margin={margin || '3em 0'} stretch={stretch}>
        <ArticleHeader lg={lg} margin={subtitle ? '0' : '0 0 0.5em 0'}>{title}</ArticleHeader>
        {subtitle && <Subheader margin='0 0 0.5em 0' lg>{subtitle}</Subheader>}
        {paragraphs.map((p, i) => <ArticleText key={i} center={center} lg={lg}>{p}</ArticleText>)}
        {children}
    </Card>


export default Article