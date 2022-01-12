import { FC } from 'react'
import styled, { css } from 'styled-components'
import { MarginHandler } from '../../../styles/common'
import Img from '../../elements/Img/Img'
import Article from '../../modules/Articles/Article'


export type Props = {
    img: string;
    article: {
        title: string;
        content: string[];
        button?: {
            caption: string;
            to: string;
            newTab?: boolean;
        };
    }
    imgPos: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    imgOffset?: boolean;
    variant?: Variants;
    shadow?: boolean;
} & Margins

const StConcept = styled.article<Pick<Props, "variant" | "imgPos" | "shadow"> & { $offset: number } & Margins>`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #dedede;
    justify-content: center;
    ${p => p.shadow && css`box-shadow: ${p.theme.shadow};`}
    ${p => p.variant && css`background-color: ${p.theme.colors[p.variant]};`}
    background-color: ${p => p.variant && p.theme.colors[p.variant]};
    position: relative;
    flex-direction: ${p => p.imgPos === "bottomRight" || p.imgPos === "topRight" 
        ? "row-reverse" 
        : "row"};
    ${MarginHandler}

    div {
        flex-grow: 3;
        flex-shrink: 1;
        flex-basis: 400px;
        margin: 25px 0;
    }

    img {
        max-width: 350px;
        flex-shrink: 1;

        ${p => (p.imgPos === "topLeft" || p.imgPos === "topRight") 
            ? css`margin-top: -${p.$offset}px;` 
            : css`margin-bottom: -${p.$offset}px;`}
        ${p => p.imgPos === "bottomLeft" || p.imgPos === "topLeft" 
            ? css`margin-left: -${p.$offset}px;`
            : css`margin-right: -${p.$offset}px;`}
    }

    ${p => p.$offset && css`
        margin-right: ${p.imgPos === "bottomRight" || p.imgPos === "topRight" ? 50 : 0}px;
        margin-left: ${p.imgPos === "bottomLeft" || p.imgPos === "topLeft" ? 50 : 0}px;
    `}

    @media screen and (max-width: 700px) {
        margin: 0;
        img { margin: 0; }
        background-color: white;
        width: 100%;
        border: none;
    }
`

const Concept: FC<Props> = ({ img, imgPos, variant, article, imgOffset, shadow, ...margins }) => 
    <StConcept variant={variant} imgPos={imgPos} $offset={imgOffset ? 50 : 0} shadow={shadow} {...margins}>
        <Img img={img} basis={300} borderBottom variant={variant === "primary" ? "white" : "primary"} />
        <Article {...article} darkBg={variant === "primary"} as="div" variant="white" />
    </StConcept>


export default Concept

