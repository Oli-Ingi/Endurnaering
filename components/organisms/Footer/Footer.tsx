import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../atoms/Wrapper/Wrapper'
//import Image from 'next/image'
import SubFooter from '../../molecules/SubFooter/SubFooter'


const StFooter = styled.footer`
    border-top: 2px solid ${p => p.theme.colors.gray};
`

const StSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 1em;
    align-self: flex-start;
    justify-content: flex-end;
    

    @media screen and (max-width: 650px) {
        max-width: 325px;
        width: 100%;
    }
`

const SMLink = styled.a`
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;

    :hover {
        span {
            color: ${p => p.theme.colors.secondary};
        }
    }

    img { margin-right: 10px; }
    span {
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

    a:last-child {
        margin-top: 1em;
    }
`

const StHeader = styled.h3`
    margin-top: 0;
    font-weight: 400;
`

const StSkilmalarLink = styled.a`
    display: block;
    font-size: 1.2em;
    text-decoration: none;
    transition-duration: 0.3s;
    cursor: pointer;

    :hover {
        color: ${p => p.theme.colors.tertiary};
    }
`

const StTopFooter = styled.div`
    background-color: ${p => p.theme.colors.primary};
    padding: 1em 0;
    color: ${p => p.theme.colors.white};
    
`

const Footer: React.FC<{}> = () =>
    <StFooter>
        <StTopFooter>
            <Wrapper between fWrap>
                <StContact>
                    <StHeader>Endurnæring ehf.</StHeader>
                    <p>Kt. 410221-0200</p>
                    <p>Sími: <a href="tel:5771771">577 1771</a></p>
                    <p>Netfang: <a href={`mailto:endurnaering@endurnaering.is`}>endurnaering@endurnaering.is</a></p>
                    <StSkilmalarLink href="/skilmalar">Skilmálar</StSkilmalarLink>
                </StContact>
                <StSocialMedia>
                    <SMLink href='https://www.facebook.com/endurnaering' target='_blank'><img src='/facebook.png' height={30} width={30} /> <span>Endurnæring á Facebook</span></SMLink>
                    <SMLink href='https://www.instagram.com/endurnaering/' target='_blank'><img src='/instagram.png' height={30} width={30} /> <span>Endurnæring á Instagram</span></SMLink>
                </StSocialMedia>
            </Wrapper>
        </StTopFooter>
        <SubFooter 
            embLandlaeknisTitle="Vefurinn er rekinn með leyfi frá embætti landlæknis."
            mniTitle="Endurnæring er meðlimur í Matvæla- og næringafræðifélagi Íslands."
        />
    </StFooter>


export default Footer