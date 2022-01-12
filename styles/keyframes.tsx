import { keyframes } from 'styled-components'


// #region fades

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
    from { opacity: 0; }
    to { opacity: 1; visibility: visible; }
`

export const fadeOut = keyframes`
    0% { opacity: 1; visibility: visible; }
    100% { opacity: 0; visibility: hidden; }
`

export const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(1em);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const displayFadeIn = keyframes`
    from {
        z-index: -1;
        visibility: visible;
        opacity: 0;
    }
    to {
        z-index:10;
        opacity: 1;
        visibility: visible;
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


export const fade = (type: Fade) =>
    type === "right" ? fadeRight 
        : type === "left" ? fadeLeft 
        : type === "down" ? fadeDown 
        : type === "in" ? fadeIn 
        : type === "up" ? fadeUp
        : null;


//#endregion

export const widthIn = keyframes`
    from { width: 0; }
    to { width: 100%; }
`
