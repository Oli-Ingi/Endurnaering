import { FC, useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Arrow from '../../elements/Arrow/Arrow'
import { v4 as uuid } from 'uuid'
import Card from '../../modules/Card/Card'
import { addPxIfNumber } from '../../../styles/common'

export type Props = {
    items: {
        title: string;
        content: string[];
    }[];
    cardWidth?: number; // default 250px
    maxCardsInView?: 1 | 2 | 3 | 4; // default 3 or what media query allows.
    variant?: Variants;
    slideDuration?: number; // in ms
    fixedHeight?: number | string;
} & (
    | { autoSlide?: true; autoSlideInterval?: number; } // interval default 15s.
    | { autoSlide?: never; autoSlideInterval?: never; }
)


const StSlider = styled.div<{ arrowsTop?: boolean }>`
    display: flex;
    align-items: center;

    ${p => p.arrowsTop && css`
        flex-direction: column;

        > div:first-child {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1em;
            width: 260px;
        }
    `}
`

const StViewBox = styled.div<{ cardWidth: number; maxCards: number }>`
    width: ${p => (p.cardWidth + 40) * p.maxCards}px;
    overflow: hidden;
    margin: 0 30px;
    padding: 1em 0;
    max-width: 100%;

    /* media queries for fewer cards */
`

const StCardHolder = styled.div<{ count: number, cardWidth: number; fixedHeight?: number | string }>`
    display: flex;
    align-items: flex-start;
    transform: translateX(-${p => p.cardWidth + 40}px);
    width: ${p => (p.count + 3) * (p.cardWidth + 40)}px;
    
    > div {
        width: ${p => p.cardWidth || 250}px;
        margin: 0 20px;
        height: ${p => addPxIfNumber(p.fixedHeight)};
    }
`

const Slider: FC<Props> = ({ items, variant, cardWidth, maxCardsInView, slideDuration, autoSlide, autoSlideInterval, fixedHeight }) => {
    const sliderNode = useRef<HTMLDivElement>();
    const [inTransit, setInTransit] = useState(false);
    const [screenMaxCards, setScreenMaxCards] = useState(4);
    const [render, setRender] = useState({
        pos: 0,
        items: [
            Math.max(items.length - 1, 0),
            0, 
            1 % items.length,
            2 % items.length,
            3 % items.length,
            4 % items.length
        ]
    })

    useEffect(() => {
        const handler = () => 
            setScreenMaxCards(Math.min(Math.floor((window.innerWidth - 260) / ((cardWidth || 250) + 40)), 4))

        window.addEventListener("resize", handler);

        handler();

        return () => window.removeEventListener("resize", handler);
    }, [])

    //let screenMaxCards = Math.floor((window.innerWidth - 260) / ((cardWidth || 250) + 40)); 

    //screenMaxCards = Math.min(screenMaxCards, 4);

    const slide = (prev?: boolean) => {
        if (sliderNode && !inTransit) {
            setInTransit(true);

            sliderNode.current.style.transition = `transform ${(slideDuration || 400) / 1000}s ease-in-out`;
            sliderNode.current.style.transform = `translateX(${prev ? 0 : ((cardWidth || 250) + 40) * -2}px)`;

            setTimeout(() => {
                if (sliderNode) {
                    sliderNode.current.style.transition = "none";
                    sliderNode.current.style.transform = `translateX(-${(cardWidth || 250) + 40}px)`;
                }

                const newPos = prev 
                    ? render.pos === 0 
                        ? Math.max(items.length - 1, 0) 
                        : render.pos - 1
                    : (render.pos + 1) % items.length;

                setRender({
                    pos: newPos,
                    items: [
                        newPos === 0 ? Math.max(items.length - 1, 0) : newPos - 1, // for prev slide
                        newPos, 
                        (newPos + 1) % items.length,
                        (newPos + 2) % items.length,
                        (newPos + 3) % items.length,
                        (newPos + 4) % items.length, // for next slide
                    ]
                })

                setInTransit(false);
            }, slideDuration || 400);
        }
    }

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => slide(), (autoSlideInterval * 1000) || 15000);
            return () => clearInterval(interval);
        }
    }, [inTransit, render])


    return screenMaxCards < 1 
        ? <StSlider arrowsTop>
            <div>
                <Arrow onClick={() => slide(true)} />
                <Arrow onClick={() => slide()} right />
            </div>
            <StViewBox cardWidth={cardWidth || 250} maxCards={1}>
            <StCardHolder ref={sliderNode} count={items.length} cardWidth={cardWidth || 250} fixedHeight={fixedHeight}>
                {render.items.map(ri => items[ri] && 
                    <Card key={uuid()} border {...items[ri]} variant={variant} shadow="always" />)}
            </StCardHolder>
        </StViewBox>
        </StSlider>
        : <StSlider>
        <Arrow onClick={() => slide(true)} />
        <StViewBox cardWidth={cardWidth || 250} maxCards={Math.min(maxCardsInView || 4, screenMaxCards)}>
            <StCardHolder ref={sliderNode} count={items.length} cardWidth={cardWidth || 250} fixedHeight={fixedHeight}>
                {render.items.map(ri => items[ri] && 
                    <Card key={uuid()} border {...items[ri]} variant={variant} shadow="always" />)}
            </StCardHolder>
        </StViewBox>
        <Arrow onClick={() => slide()} right />
    </StSlider>
}
    


export default Slider

