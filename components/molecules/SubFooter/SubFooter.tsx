import React from 'react'
import styled from 'styled-components'
import EmbaettiLandlaeknis from '../../atoms/EmbaettiLandlaeknis/EmbaettiLandlaeknis'
import Mni from '../../atoms/Mni/Mni'
import Wrapper from '../../atoms/Wrapper/Wrapper'


type Props = {
    embLandlaeknisTitle: string;
    mniTitle: string;
}

const StSubFooter = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    padding: 0.6em 0;
`

const SubFooter: React.FC<Props> = ({ embLandlaeknisTitle, mniTitle }) =>
    <StSubFooter>
        <Wrapper noYPad fWrap>
            <EmbaettiLandlaeknis title={embLandlaeknisTitle} />
            <Mni title={mniTitle} />
        </Wrapper>
    </StSubFooter>


export default SubFooter