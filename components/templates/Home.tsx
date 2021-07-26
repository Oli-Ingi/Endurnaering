import React, { ReactNode } from "react";
import styled from "styled-components";
import { IArticle } from "../../types/general";
import BannerImage from "../atoms/BannerImage/BannerImage";
import InterviewButton from "../atoms/InterviewButton/InterviewButton";
import Wrapper from "../atoms/Wrapper/Wrapper";
import PopupAd from "../modules/PopupAd/PopupAd";
import Article from "../molecules/Article/Article";
import ArticleWithImage from "../organisms/ArticleWithImage/ArticleWithImage";
import BookInterview, { Props as BookInterviewArticle } from "../organisms/BookInterview/BookInterview";
import Concepts, { Concept } from "../organisms/Concepts/Concepts";
import Intro from "../organisms/Intro/Intro";



export type Props = {
    introTitle: string;
    introSubtitle: string;
    introText: string;
    introImgSrc: string;

    conceptsTrio: [Concept, Concept, Concept];
    conceptsArticle: ReactNode;

    imgArticleTitle: string;
    imgArticle: JSX.Element;
    articleImageSrc: string;

    lastArticle: IArticle;

    bookInterviewArticle: BookInterviewArticle;
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

const Home: React.FC<Props> = ({ introTitle, introSubtitle, introText, introImgSrc, conceptsTrio, conceptsArticle, imgArticleTitle, imgArticle, articleImageSrc, lastArticle, bookInterviewArticle  }) =>
    <>
        <Wrapper center alCenter fWrap minHeight='90vh'>
            <Intro title={introTitle} subtitle={introSubtitle}>{introText}</Intro>
            <BannerImage src={introImgSrc} margin='0 2em' fadeDelay={2.2} fader="in" maxWidth="600px" />
        </Wrapper>
        {/* <StBg>
            <Wrapper as="div" col marginTop="6em">
                <Concepts concepts={conceptsTrio} margin="-150px 0 1em 0" />
                {conceptsArticle}
            </Wrapper>
        </StBg> */}
        <StBg>
            <Wrapper between alCenter marginTop='300px' fWrap>
                <ArticleWithImage src={articleImageSrc} title={imgArticleTitle} margin="-300px 0 0 0" imgBasis={410}>
                    {imgArticle}
                </ArticleWithImage>
            </Wrapper>
        </StBg>
        <Wrapper fWrap>
            <BookInterview {...bookInterviewArticle} margin="0" />
            <Article {...lastArticle} margin='0'>
                <InterviewButton margin='1em 0' attend />
            </Article>
        </Wrapper>
        {/* <Wrapper col>
            <Concepts concepts={concepts} bgSecondary shadow cardMargins='2em 0' />
        </Wrapper> */}
        <PopupAd img='/sumartilbod.png' width={500} />
    </>



    
export default Home