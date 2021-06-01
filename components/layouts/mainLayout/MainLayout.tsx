import React, { Fragment } from "react";
import styled from "styled-components";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import Home from "../../templates/Home";
import GutterGrid from '../../elements/GutterGrid';
import { IAnchor } from "../../../types/general";


// TODO: pull content from  language files.
const anchor1: IAnchor = {
    content: 'Bóka viðtal',
    to: '/'
}

const anchor2: IAnchor = {
    content: 'Mæta í viðtal',
    to: '/'
}


// const MainLayout: React.FC<{}> = ({ children }) =>
//     <GutterGrid>
//         <Header />
//         {children}
//         <Footer />
//     </GutterGrid>

// TODO: atom?
const StMain = styled.main`
    width: 100%;
    padding: 70px 0 0 0;
    margin: 0;
    overflow: hidden;
`

const Layout: React.FC<{}> = ({ children }) =>
    <>
        <Header />
        <StMain>
            {children}
        </StMain>
        <Footer />
    </>

    
export default Layout