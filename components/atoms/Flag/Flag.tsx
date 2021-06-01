import styled from 'styled-components'

export type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    img: string;
}


const Flag = styled.button<Props>`
    background-image: url(${p => p.img});
    background-position: 0%;
    background-size: cover;
    width: 50px;
    border-radius: 15px;
    margin: 3px 5px;
    background-color: none;
    border: none;
    outline: none;
    cursor: pointer;
`


export default Flag