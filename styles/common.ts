import { css } from "styled-components";
import { fadeIn, fadeRight, fadeDown, fadeLeft, fadeUp } from "./keyframes";

export const addPxIfNumber = (value?: string | number) =>
    typeof value === "number"
        ? value + "px"
        : value;

export const MarginHandler = css<Margins>`
    margin: ${p => addPxIfNumber(p.m || 0)};
    margin-top: ${p => addPxIfNumber(p.mt)};
    margin-right: ${p => addPxIfNumber(p.mr)};
    margin-bottom: ${p => addPxIfNumber(p.mb)};
    margin-left: ${p => addPxIfNumber(p.ml)};
`

interface IVariants { variant?: Variants }

export const VariantContrast = css<IVariants>`
    ${p => ["secondary", "white"].includes(p.variant)
        ? p.theme.colors.primary 
        : p.theme.colors.white}
`

export const VariantHandler = css<IVariants>`
    ${p => p.theme.colors[p.variant || "primary"]}
`

// apparently not supported by styled components anymore.

// export const FadeMap = {
//     "right": fadeRight,
//     "left": fadeLeft,
//     "up": fadeUp,
//     "down": fadeDown,
//     "in": fadeIn
// }

// export const FadeHandler = css<{ fade?: Fade}>`
//     ${p => p.fade ? FadeMap[p.fade] + "1s forwards;" : undefined}
// `


export const FadeHandler = css<{fade?: Fade}>`
    animation: ${p => p.fade === "in"
        ? fadeIn
        : p.fade === "right"
            ? fadeRight
            : p.fade === "down"
                ? fadeDown
                : p.fade === "left"
                    ? fadeLeft
                    : p.fade === "up"
                        ? fadeUp
                        : undefined} 1s forwards;
`
