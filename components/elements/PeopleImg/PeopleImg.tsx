import styled, { css } from "styled-components"



export type Props = {
    scale?: number;
}


const DoctorImg = styled.img.attrs((p: Props) => ({
    width: 600,
    src: '/Upphafsmynd3.svg'
}))<Props>`
    ${p => p.scale && css`transform: scale(${p.scale});`}
`


export default DoctorImg
    