import React from "react";
import Section from "../../elements/Section";




const Footer: React.FC<{}> = () => 
    <Section as='footer' isGray full col={1}>
        <div style={{ gridColumn: 2 }}>Footer content</div>
        <div style={{ gridColumn: 2 }}>Footer content</div>
        <div style={{ gridColumn: 2 }}>Footer content</div>
    </Section>



export default Footer