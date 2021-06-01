import styled from 'styled-components'


export type Props = {
    to: string;
}


const StLink = styled.a`
    color: ${p => p.theme.colors.dark};
    display: inline-block;
    position: relative;

    span {
        display: block;
        margin-bottom: 1px;
        transition-duration: 0.2s;
        font-weight: bold;
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
        transform: skew(-10deg);
    }
`

const Link: React.FC<Props> = ({ children, to }) =>
    <StLink href={to}>
        <span>{children}</span>
        <hr />
    </StLink>


export default Link