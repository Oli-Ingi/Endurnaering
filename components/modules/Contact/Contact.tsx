import { FC } from "react"
import styled from 'styled-components'
import Link from "../../elements/Link/Link"
import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"

export type Props = {
    title: string;
    tel: {
        link: string;
        caption: string;
    }
    hours: {
        desc: string;
        period: string;
    }
    email: string;
}


const StContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        align-self: stretch;
        text-align: center;
    }

    > p {
        max-width: 250px;
        text-align: center;
    }
`

const Contact: FC<Props> = ({ title, tel, hours, email }) => 
    <StContact>
        <Text mb="1em" thick color="primary">{title}</Text>
        <Button to={tel.link} mb="1em" variant="ghost" color="white">{tel.caption}</Button>
        <Text sm mb="0.3em">{hours.desc}</Text>
        <Text thick>{hours.period}</Text>
        <Button to={`mailto:${email}`} mt="1em" variant="ghost" color="white">{email}</Button>
    </StContact>



export default Contact