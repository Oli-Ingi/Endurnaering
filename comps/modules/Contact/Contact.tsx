import { FC } from "react"
import styled from 'styled-components'
import Link from "../../elements/Link/Link"
import Text from "../../elements/Text/Text"

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
        <Text marginBottom="1em" thick variant="primary">{title}</Text>
        <Link to={tel.link} thick border marginBottom="1em" variant="primary" keepColorOnHover>{tel.caption}</Link>
        <Text sm marginBottom="0.3em">{hours.desc}</Text>
        <Text thick>{hours.period}</Text>
        <Link to={`mailto:${email}`} thick marginTop="1em" border variant="primary" keepColorOnHover>{email}</Link>
    </StContact>



export default Contact