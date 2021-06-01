import React from 'react'
import styled from 'styled-components'
import { IAnchor, IArticle } from '../../../types/general'
import BannerImage from '../../atoms/BannerImage/BannerImage'
import Flex from '../../atoms/Flex/Flex'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Article from '../../molecules/Article/Article'


export type Props = {
    article: IArticle;
    img: string;
    anchor1: IAnchor;
    anchor2: IAnchor;
}

// TODO: extract?
const StBtns = styled.div`
    display: flex;
    margin-top: 1em;
`


const Hero: React.FC<Props> = ({ article, img }) =>
    <Wrapper between alCenter minHeight='80vh' fWrap ofHidden>
        <Flex>
            <Article {...article} maxWidth={450} />
        </Flex>
        <BannerImage src={img} margin='1em -90px 1em 1em' />
    </Wrapper>


export default Hero