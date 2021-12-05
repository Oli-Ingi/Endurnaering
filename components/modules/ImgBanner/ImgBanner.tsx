import { FC } from 'react'
import styled from 'styled-components'

export type Props = {
    children: JSX.Element;
    img: string;
    imgAlt?: string;
    variant?: Colors;
    sm?: boolean;
}

const StContainer = styled.section<Pick<Props, "variant">>`
    background-color: ${p => p.variant && p.theme.colors[p.variant]};
    width: 100%;
`

const StImgBanner = styled.div<{ sm?: boolean}>`
    display: flex;
    justify-content: space-between;
    padding: 2em 1em 0 1em;
    align-items: center;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    

    > div {
        max-width: 60%;
    }

    img {
        width: ${p => p.sm ? 350 : 500}px;
        max-width: 95vw;
    }

    @media screen and (max-width: 920px) {
        > div {
            max-width: unset;
        }

        flex-wrap: wrap;
        justify-content: space-around;
    }
`


const ImgBanner: FC<Props> = ({ children, img, imgAlt, variant, sm }) =>
    <StContainer variant={variant}>
        <StImgBanner sm={sm}>
            {children}
            <img src={img} alt={imgAlt || "mynd"} />
        </StImgBanner>
    </StContainer>



export default ImgBanner;