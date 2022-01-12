import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { MarginHandler } from '../../../styles/common'
import Arrow from '../../elements/Arrow/Arrow'

export type Props = {
    onLeftClick: MouseEventHandler<HTMLButtonElement>;
    onRightClick: MouseEventHandler<HTMLButtonElement>;
    width: number;
} & Margins


const StContainer = styled.div<{ width: number } & Margins>`
    display: flex;
    justify-content: space-between;
    width: ${p => p.width + 20}px;
    box-sizing: border-box;
    ${MarginHandler}
`

const Arrows: FC<Props> = ({ onLeftClick, onRightClick, ...style }) =>
    <StContainer {...style}>
        <Arrow onClick={onLeftClick} />
        <Arrow right onClick={onRightClick} />
    </StContainer>


export default Arrows