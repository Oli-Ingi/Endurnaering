import { FC } from 'react'
import styled from 'styled-components'
import Img from '../../elements/Img/Img'

export type Props = {
    title: string;
    img: string;
    email: string;
    phone: string;
    book: {
        caption: string;
        link: string;
    }
}


const StAboutPerson = styled.div`
    
`


const AboutPerson: FC<Props> = ({ img }) =>
    <StAboutPerson>
        <Img img={img} borderBottom />
    </StAboutPerson>



export default AboutPerson;