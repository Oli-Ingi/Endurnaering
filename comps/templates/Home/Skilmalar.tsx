import React from 'react'
import Container from '../../elements/Container/Container'






const Skilmalar: React.FC<{}> = ({ children }) =>
    <Container>
        {React.Children.map(children, child => 
            React.cloneElement(child as any, { margin: '0' }))}
    </Container>


export default Skilmalar