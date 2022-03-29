import { FC } from 'react'
import styled from 'styled-components'
import Button from '../../elements/Button/Button'
import Card from '../../elements/Card/Card'
import Icon from '../../elements/Icon/Icon'
import Img from '../../elements/Img/Img'
import Link from '../../elements/Link/Link'
import Text from '../../elements/Text/Text'
import Title from '../../elements/Title/Title'

export type Props = {
    title: string;
    subtitle: string;
    img: string;
    email: string;
    phone: string;
    bookLink: {
        caption: string;
        to: string;
    }
}


const StAboutPerson = styled.div`
    width: 100%;
    max-width: 350px;

    display: flex;
    flex-direction: column;

    img {
        width: 70%;
        margin: 0 auto;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
`

const StIconLine = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`

const StBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

const AboutPerson: FC<Props> = ({ img, title, subtitle, email, phone, bookLink }) =>
    <StAboutPerson>
        <Img img={img} />
        <Card border>
            <Title variant="section">{title}</Title>
            <Title variant="subsection" color="dark" mb="1rem">{subtitle}</Title>
            <StIconLine><Icon type="email" mr={8} /><Link to={`mailto:${email}`}>{email}</Link></StIconLine>
            <StIconLine><Icon type="phone" mr={8} /><Link to={`tel:${phone}`}>{phone}</Link></StIconLine>
            <StBtnWrapper><Button color="primary" sm to={bookLink.to} mt="2rem">{bookLink.caption}</Button></StBtnWrapper>
        </Card>
    </StAboutPerson>



export default AboutPerson;