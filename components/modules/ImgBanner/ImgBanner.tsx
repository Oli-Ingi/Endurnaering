import { FC } from 'react'
import styled from 'styled-components'

export type Props = {
    children: JSX.Element;
    img: string;
    imgAlt?: string;
    padTop?: boolean;
    variant?: Colors;
}

const StContainer = styled.section<Pick<Props, "variant">>`
    background-color: ${p => p.variant && p.theme.colors[p.variant]};
    width: 100%;
    min-width: 382px;
`

const StImgBanner = styled.div<{ padTop?: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: ${p => p.padTop ? "2em" : 0} 1em 0 1em;
    gap: 1em;
    align-items: center;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    

    > div {
        max-width: 60%;
        padding-top: 1em;
    }

    img {
        max-width: 95vw;
        object-fit: cover;
    }

    @media screen and (max-width: 1150px) {
        > div {
            max-width: unset;
        }

        justify-content: space-around;
    }
`


const ImgBanner: FC<Props> = ({ children, img, imgAlt, variant, padTop }) =>
    <StContainer variant={variant}>
        <StImgBanner padTop={padTop}>
            {children}
            <img src={img} height={350} alt={imgAlt || "mynd"} />
        </StImgBanner>
    </StContainer>



export default ImgBanner;