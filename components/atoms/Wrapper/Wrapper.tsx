import styled, { css } from 'styled-components'

type Props = {
    around?: boolean;
    between?: boolean;
    start?: boolean;
    end?: boolean;
    center?: boolean;

    alStart?: boolean;
    alCenter?: boolean;
    alEnd?: boolean;

    col?: boolean; // flex-direction: column
    fWrap?: boolean; // flex-wrap

    marginTop?: string;
    marginBottom?: string;
    noPad?: boolean;
    noYPad?: boolean;
    noMdPad?: boolean;


    minHeight?: string;
    flex?: number; // flex: 1
    ofHidden?: boolean;
}

const Wrapper = styled.section<Props>`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    padding: ${p => p.noPad ? '0px' : p.noYPad ? '0 1em' : '3em 1em'};
    justify-content: ${p => p.around ? 'space-around' : p.between ? 'space-between' : p.start ? 'flex-start' : p.end ? 'flex-end' : p.center ? 'center' : 'stretch'};
    align-items: ${p => p.alStart ? 'flex-start' : p.alEnd ? 'flex-end' : p.alCenter ? 'center' : 'stretch' };
    position: relative;

    ${p => p.ofHidden && css`overflow: hidden;`}
    ${p => p.minHeight && css`min-height: ${p.minHeight};`}
    ${p => p.marginTop && css`margin-top: ${p.marginTop};`}
    ${p => p.marginBottom && css`margin-bottom: ${p.marginBottom};`}
    ${p => p.flex && css`flex: 1;`}
    ${p => p.fWrap && css`flex-wrap: wrap;`}
    ${p => p.col && css`flex-direction: column;`}

    @media screen and (max-width: 1100px){
        ${p => p.noMdPad && css`padding: 0px;`}

        justify-content: center;
    }

    @media screen and (max-width: 800px){
        margin-top: 1em;
    }
`

export default Wrapper
