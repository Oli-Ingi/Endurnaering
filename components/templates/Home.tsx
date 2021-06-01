import React from "react";
import styled from "styled-components";
import { IArticle } from "../../types/general";
import BannerImage from "../atoms/BannerImage/BannerImage";
import Button from "../atoms/Button/Button";
import InterviewButton from "../atoms/InterviewButton/InterviewButton";
import Wrapper from "../atoms/Wrapper/Wrapper";
import Figure from "../elements/Figure";
import Article from "../molecules/Article/Article";
import ArticleWithImage from "../molecules/ArticleWithImage/ArticleWithImage";
import InterviewButtons from "../molecules/InterviewButtons/InterviewButtons";
import Concepts, { Concept } from "../organisms/Concepts/Concepts";
import Footer from '../organisms/Footer/Footer'

// const StFigure = styled.figure`
//     grid-column: 1/3;
//     margin: 0;
//     display: flex;
//     justify-self: center;
//`

export type Props = {
    article: IArticle;
    bannerImage: string;
    concepts: Concept[];
    articleWithImage: IArticle;
    articleWithImageSrc: string;
    lastArticle: IArticle;
}

const StBg = styled.div`
    //background: linear-gradient(-20deg, ${p => p.theme.colors.secondary} 30%, #fff 30%);
    background-color: ${p => p.theme.colors.secondary};
    width: 100%;
`

const StCircle = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    position: absolute;
    width: 48%;
    left: 0;
    top: 0;
    bottom: 0;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;

    @media screen and (max-width: 1160px) {
        display: none;
    }
`

const Home: React.FC<Props> = ({ article, bannerImage, concepts, articleWithImage, articleWithImageSrc, lastArticle }) =>
    <>
        <StBg>
            <Wrapper between alCenter fWrap>
                <Article {...article} maxWidth={500} lg>
                    <InterviewButtons margin='1em 0 0 0' />
                </Article>
                <BannerImage src={bannerImage} margin='0' />
            </Wrapper>
        </StBg>
        <Wrapper between alCenter marginTop='3em' fWrap noYPad>
            <ArticleWithImage article={articleWithImage} src={articleWithImageSrc}>
                <InterviewButton margin='1em 0' />
            </ArticleWithImage>
        </Wrapper>
        <Wrapper noYPad>
            <Article {...lastArticle} margin='1em 0'>
                <InterviewButton margin='1em 0' attend />
            </Article>
        </Wrapper>
        <Wrapper col>
            <Concepts concepts={concepts} bgSecondary shadow cardMargins='2em 0' />
        </Wrapper>
    </>



    
export default Home