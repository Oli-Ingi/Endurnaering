import React, { ReactNode } from "react";
import styled from "styled-components";
import { IArticle } from "../../types/general";
import ArticleImage from "../atoms/ArticleImage/ArticleImage";
import ArticleText from "../atoms/ArticleText/ArticleText";
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
import Intro from "../organisms/Intro/Intro";



export type Props = {
    introTitle: string;
    introSubtitle: string;
    introText: string;
    introImgSrc: string;
    conceptsTrio: [Concept, Concept, Concept];
    conceptsArticle: ReactNode;
    imgArticleTitle: string;
    imgArticle: ReactNode;
    articleImageSrc: string;

    lastArticle: IArticle;
}

const StBg = styled.section`
    background-color: ${p => p.theme.colors.secondary};
    width: 100%;
`

// const StCircle = styled.div`
//     background-color: ${p => p.theme.colors.secondary};
//     position: absolute;
//     width: 48%;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     border-bottom-right-radius: 30%;
//     border-bottom-left-radius: 30%;

//     @media screen and (max-width: 1160px) {
//         display: none;
//     }
// `

const Home: React.FC<Props> = ({ introTitle, introSubtitle, introText, introImgSrc, conceptsTrio, conceptsArticle, imgArticleTitle, imgArticle, articleImageSrc, lastArticle,  }) =>
    <>
        <Wrapper center alCenter fWrap minHeight='100vh'>
            <Intro title={introTitle} subtitle={introSubtitle}>{introText}</Intro>
            <BannerImage src={introImgSrc} margin='0 2em' fadeDelay={2.2} fader="in" />
        </Wrapper>
        <StBg>
            <Wrapper as="div" col marginTop="6em">
                <Concepts concepts={conceptsTrio} margin="-150px 0 1em 0" />
                {conceptsArticle}
            </Wrapper>
        </StBg>
        <Wrapper between alCenter marginTop='3em' fWrap noYPad>
            <Article title={imgArticleTitle} margin='0 1em 2em 1em'>{imgArticle}</Article>
            <ArticleImage src={articleImageSrc} margin="0 1em" />
        </Wrapper>
        <Wrapper>
            <Article {...lastArticle} margin='1em 0'>
                <InterviewButton margin='1em 0' attend />
            </Article>
        </Wrapper>
        {/* <Wrapper col>
            <Concepts concepts={concepts} bgSecondary shadow cardMargins='2em 0' />
        </Wrapper> */}
    </>



    
export default Home