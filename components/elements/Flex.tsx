import styled, { css } from 'styled-components'

type Props = {
    around?: boolean;
    between?: boolean;
    start?: boolean;
    end?: boolean;
    center?: boolean;

    alignStart?: boolean;
    alignCenter?: boolean;
    alignEnd?: boolean;

    col?: boolean;
    wrap?: boolean;

    margin?: string;
    padding?: string;

    flex?: number;

    full?: boolean;
    maxWidth?: number;
}

const Flex = styled.div<Props>`
    display: flex;
    justify-content: ${p => p.around ? 'flex-around' : p.between ? 'flex-between' : p.start ? 'flex-start' : p.end ? 'flex-end' : p.center ? 'center' : 'stretch'};
    align-items: ${p => p.alignStart ? 'flex-start' : p.alignEnd ? 'flex-end' : p.alignCenter ? 'center' : 'stretch' };
    margin: ${p => p.margin || '0px'};
    padding: ${p => p.padding || '1em'};

    ${p => p.maxWidth && css`max-width: ${p.maxWidth};`}
    ${p => p.full && css`width: 100%;`}
    ${p => p.flex && css`flex: 1;`}
    ${p => p.wrap && css`flex-wrap: wrap;`}
    ${p => p.col && css`flex-direction: column;`}
`

export default Flex