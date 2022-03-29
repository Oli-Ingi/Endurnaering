import { FC, useRef, useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import Arrow from '../../elements/Arrow/Arrow'
import { v4 as uuid } from 'uuid'
import Arrows from '../../modules/Arrows/Arrows'
import Cardicle from '../../modules/Cardicle/Cardicle'

export type Props = {
    items: {
        title: string;
        content: string[];
        subtitle?: string;
    }[];
    cardWidth?: number; // default 250px
    maxCardsInView?: 1 | 2 | 3 | 4; // default 3 or what media query allows.
    variant?: Variants;
    slideDuration?: number; // in ms
    noStretch?: boolean; // cards will have varied height depending on content.
} & (
    | { autoSlide?: true; autoSlideInterval?: number; } // interval default 15s.
    | { autoSlide?: never; autoSlideInterval?: never; }
)


const StSlider = styled.div<{ isColumn: boolean, alignStart?: boolean }>`
    display: flex;
    flex-direction: ${p => p.isColumn ? "column" : undefined};
    align-items: ${p => p.alignStart && !p.isColumn ? "flex-start" : "center"};
    box-sizing: border-box;
`

const StViewBox = styled.div<{ cardWidth: number; maxCards: number }>`
    width: ${p => (p.cardWidth + 40) * p.maxCards}px;
    overflow: hidden;
    margin: 0 30px;
    padding: 1em 0;
    max-width: 100%;

    /* media queries for fewer cards */
    @media screen and (max-width: 400px) {
        margin: 0;
    }
`

const StCardHolder = styled.div<{ count: number, cardWidth: number; noStretch?: boolean }>`
    display: flex;
    align-items: ${p => p.noStretch ? "flex-start" : "stretch"};
    transform: translateX(-${p => p.cardWidth + 40}px);
    width: ${p => 7 * (p.cardWidth + 40)}px; 
    
    > div {
        width: ${p => p.cardWidth}px;
        margin: 0 20px;
    }
`

const Slider: FC<Props> = ({ items, variant, cardWidth = 250, maxCardsInView = 4, slideDuration = 400, autoSlide, autoSlideInterval, noStretch }) => {
    const sliderNode = useRef<HTMLDivElement>();
    const [inTransit, setInTransit] = useState(false);
    const [screenMaxCards, setScreenMaxCards] = useState(1);

    const tallestItem = useMemo(() => items.reduce((acc, curr, index) => {
        const currLength = curr.title.length + curr.content.reduce((acc, curr) => acc + curr.length, 0);
        
        return currLength > acc.length
            ? { length: currLength, index }
            : acc;
    }, {length: 0, index: 0}), [items]); 

    const [render, setRender] = useState({
        pos: 0,
        items: [
            Math.max(items.length - 1, 0),
            0, 
                1 % items.length,
            2 % items.length,
            3 % items.length,
            4 % items.length,
            tallestItem.index // kept in the back, never visible. decides they height of the cards by approximating the tallest through content length of the items.
        ]
    })

    useLayoutEffect(() => {
        // calculate how many cards should be visible in the viewbox.
        // TODO: stop reading window inner width - forward ref from parent to get the width
        // to make slider reusable in more contexts than fullWidth - margin/padding.
        const handler = () => 
            setScreenMaxCards(Math.min(Math.floor((window.innerWidth - 260) / (cardWidth + 40)), maxCardsInView));

        window.addEventListener("resize", handler);

        handler();

        return () => window.removeEventListener("resize", handler);
    }, [])

    const slide = (prev?: boolean) => {
        if (sliderNode && !inTransit) {
            setInTransit(true);

            sliderNode.current.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
            sliderNode.current.style.transform = `translateX(${prev ? 0 : (cardWidth + 40) * -2}px)`;

            setTimeout(() => {
                if (sliderNode) {
                    sliderNode.current.style.transition = "none";
                    sliderNode.current.style.transform = `translateX(-${cardWidth + 40}px)`;
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
                        tallestItem.index
                    ]
                })

                setInTransit(false);
            }, slideDuration);
        }
    }

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => slide(), (autoSlideInterval * 1000) || 15000);
            return () => clearInterval(interval);
        }
    }, [inTransit, render])


    return <StSlider isColumn={screenMaxCards <= 1} alignStart={noStretch}>
        {screenMaxCards <= 1 
            ? <Arrows onLeftClick={() => slide(true)} onRightClick={() => slide()} width={cardWidth} /> 
            : <Arrow onClick={() => slide(true)} mt={noStretch ? "3.5em" : 0} />}
        <StViewBox cardWidth={cardWidth} maxCards={screenMaxCards || 1}>
            <StCardHolder ref={sliderNode} count={items.length} cardWidth={cardWidth} noStretch={noStretch}>
                {render.items.map(ri => items[ri] && 
                    <Cardicle key={uuid()} {...items[ri]} />)}
            </StCardHolder>
        </StViewBox>
        {screenMaxCards > 1 && <Arrow onClick={() => slide()} right mt={noStretch ? "3.5em" : 0} />}
    </StSlider>
}
    



export default Slider

