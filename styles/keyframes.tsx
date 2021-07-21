import { keyframes } from 'styled-components'


export const fadeRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2em);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const fadeDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-1em);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`


export const fadeIn = keyframes`
    to { opacity: 1; }
`

export const displayFadeIn = keyframes`
    from {
        display: flex;
        opacity: 0;
    }
    to {
        display: flex;
        opacity: 1;
    }
`

export const fadeLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(2em);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export type fadeType = "right" | "left" | "down" | "in";

export const fade = (type: fadeType) =>
    type === "right" ? fadeRight 
        : type === "left" ? fadeLeft 
        : type === "down" ? fadeDown 
        : type === "in" ? fadeIn 
        : null;