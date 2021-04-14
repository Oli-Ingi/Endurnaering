import React from "react";
import Logo from "../../elements/logo/Logo";

import Nav from "../navigation/Navigation";
import Button from "../../elements/Button";
import Section from "../../elements/Section";




const Header = () =>
    <Section full col={2} mediaPoint={730} as='header' maxContent>
        <Logo />
        <Nav>
            <Button as='a' invert href='/'>Mæta í viðtal</Button>
            <Button as='a' href='/'>Bóka viðtal</Button>
            {/* <MainLink href='/' invert>Innskráning</MainLink>
            <MainLink href='/'>Bóka viðtal</MainLink> */}
        </Nav>
    </Section>



export default Header