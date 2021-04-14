import React, { Fragment } from "react";
import styled from "styled-components";
import Footer from "../../modules/footer/Footer";
import Header from "../../modules/header/Header";
import Home from "../../templates/Home";
import GutterGrid from '../../elements/GutterGrid';





const MainLayout: React.FC<{}> = ({ children }) =>
    <GutterGrid>
        <Header />
        {children}
        <Footer />
    </GutterGrid>


    
export default MainLayout