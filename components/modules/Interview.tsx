import React from "react";
import Figure from "../elements/Figure";
import Section from "../elements/Section";
import InterviewArticle from "./InterviewArticle";
import Image from 'next/image';

const Interview = () => 
    <Section full isGray col={2} padVertical>
        <Figure cols='1/3' end mediaCols='2/4' mediaMarginTop margin>
            <Image 
                src='/Naeringarfraedingur.png' 
                alt='naeringarfraedingur-mynd' 
                width={950} 
                height={590} 
            />
        </Figure>
        <InterviewArticle />
    </Section>


export default Interview