import styled, { css } from 'styled-components'


export type Props = {
    to: string;
    bold?: boolean;
}


const StLink = styled.a<{ bold?: boolean }>`
    color: ${p => p.theme.colors.dark};
    display: inline-block;
    position: relative;
    font-size: 1.2em;

    ${p => p.bold && css`font-weight: bold;`}

    span {
        display: block;
        margin-bottom: 1px;
        transition-duration: 0.2s;
    }

    hr {
        width: 0;
        height: 0;
        margin: 0 auto;
        border: none;
        border-bottom: 1px solid ${p => p.theme.colors.dark};
        transition-duration: 0.2s;
        opacity: 0;
    }

    :hover hr {
        width: 100%;
        opacity: 1;
    }

    :hover span {
        color: ${p => p.theme.colors.green};
    }
`

const Link: React.FC<Props> = ({ children, to, bold }) =>
    <StLink href={to} bold={bold}>
        <span>{children}</span>
        <hr />
    </StLink>


export default Link