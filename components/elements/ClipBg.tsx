import styled from "styled-components"

type Props = {
    isGray?: boolean;
}

const ClipBg = styled.div<Props>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    clip-path: polygon(0 0, 100% 0, 100% 42%, 0 100%);
    z-index: 1;

    background-color: ${props => props.isGray
        ? props.theme.colors.gray
        : props.theme.colors.white};
`

export default ClipBg