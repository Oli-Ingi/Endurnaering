import React from 'react'
import styled from 'styled-components'


type Props = {
    items: React.ReactNode;
}

const StList = styled.ul`

`

const BulletList: React.FC<Props> = ({ items }) =>
    <StList>
        {items}
    </StList>


export default BulletList