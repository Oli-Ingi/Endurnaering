import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Image from 'next/image'


const StFooter = styled.footer`
    background-color: ${p => p.theme.colors.secondary};
    padding: 1em 0;
`

const StSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 1em;
    align-self: flex-start;
    max-width: 325px;
    width: 100%;

`

const SMLink = styled.a`
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;

    :hover {
        span {
            color: ${p => p.theme.colors.primary};
        }
    }

    img { margin-right: 10px; }
    span {
        font-weight: bold;
        display: block;
        margin-left: 10px;
        transition-duration: 0.3s;
    }

`

const StEmb = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;


    small {
        max-width: 200px;
        margin-left: 20px;
    }
`

const StContact = styled.div`
    margin: 2em 1em;
    max-width: 325px;
    width: 100%;

    p, a {
        margin: 0 0 0.5em 0;
    }

    a {
        text-decoration: underline;
    }
`

const StHeader = styled.h3`
    margin-top: 0;
`

const Footer: React.FC<{}> = () =>
    <StFooter>
        <Wrapper between wrap>
            <StContact>
                <StHeader>Endurnæring ehf.</StHeader>
                <p>Kt. 123456-7890</p>
                <p>Sími: <a href='tel:8487407'>8487407</a></p>
                <p>Netfang: <a href={`mailto:endurnaering@endurnaering.is`}>endurnaering@endurnaering.is</a></p>
                <StEmb>
                    <Image src='/embaetti-landlaeknis.png' width={102} height={44} />
                    <small>Vefurinn er rekinn með leyfi frá Embætti landlæknis.</small>
                </StEmb>
            </StContact>
            <StSocialMedia>
                <SMLink href='https://www.facebook.com/endurnaering' target='_blank'><Image src='/facebook_icon.png' height={30} width={30} /> <span>Endurnæring á Facebook</span></SMLink>
                <SMLink href='https://www.instagram.com/endurnaering/' target='_blank'><Image src='/instagram_icon.png' height={30} width={30} /> <span>Endurnæring á Instagram</span></SMLink>
            </StSocialMedia>
        </Wrapper>
    </StFooter>


export default Footer