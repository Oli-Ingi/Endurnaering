import styled, { css } from "styled-components"

interface Props {
    col?: number;
    isGray?: boolean;
    full?: boolean;
    mediaPoint?: number;
    center?: boolean;
    padTop?: boolean;
    padBottom?: boolean;
    padVertical?: boolean;
    gaps?: boolean;
    maxContent?: boolean;
    fixed?: boolean;
}

//const getRepeat = (cols: number = 1) => `repeat(${cols}, minmax(0, ${Math.floor(80/cols)}em))`;

const Section = styled.section<Props>`
    
    padding-top: ${props => props.padTop || props.padVertical ? '3em' : 0};
    padding-bottom: ${props => props.padBottom || props.padVertical ? '3em' : 0};
    grid-column: ${props => props.full ? '1/4' : 2};
    display: grid;
    grid-gap: ${props => props.gaps ? '2em' : 0};
    align-items: center;
    position: relative;
    grid-template-columns: ${({ full, col, maxContent }) => full
        ? `minmax(1em, 1fr) ${`repeat(${col || 1}, minmax(${maxContent ? 'max-content' : 0}, ${80/(col || 1)}em))`} minmax(1em, 1fr)`
        : `repeat(${col || 2}, minmax(${maxContent ? 'max-content' : 0}, 1fr))`};
    background-color: ${props => props.isGray 
        ? props.theme.colors.gray 
        : props.theme.colors.white};
`


export default Section


// ${({ full, col, maxContent }) => full 
    //     ? css`
    //         grid-template-columns: 
    //             minmax(1em, 1fr) 
    //             ${`repeat(${col || 1}, minmax(${maxContent ? 'max-content' : 0}, ${80/(col || 1)}em))`}
    //             minmax(1em, 1fr);    
    //     `
    //     : css`
    //         grid-template-columns: repeat(${col || 1}, minmax(${maxContent ? 'max-content' : 0}, 1fr));
    //     `}