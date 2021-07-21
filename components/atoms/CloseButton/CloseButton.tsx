import styled from 'styled-components'
import React from 'react'


type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    outline: none;
    z-index: 3;
    padding: 0;
    margin: 0;
    display: flex;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition-duration: 0.2s;

    :hover {
        transform: scale(1.1);
    }
`

const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 2px;
    background-color: white;
`
const Line1 = styled(Line)`
    transform: rotate(45deg);
`
const Line2 = styled(Line)`
    transform: rotate(-45deg);
`

const CloseButton: React.FC<Props> = ({ onClick }) =>
    <StBtn onClick={onClick}>
        <Line1 />
        <Line2 />
    </StBtn>


export default CloseButton