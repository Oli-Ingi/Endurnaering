import React from 'react'
import Wrapper from '../atoms/Wrapper/Wrapper'
import Article from '../molecules/Article/Article'






const Skilmalar: React.FC<{}> = ({ children }) =>
    <Wrapper col>
        {React.Children.map(children, child => 
            React.cloneElement(child as any, { margin: '0' }))}
    </Wrapper>


export default Skilmalar