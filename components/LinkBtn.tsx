import React, { ReactNode } from 'react';
import styled from 'styled-components';


const StAnchor = styled.a`
    color: ${props => props.theme.colors.dark};
    font-weight: bold;
`


interface Props { 
    children: ReactNode
    url: string
    icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>> | string
}


const LinkBtn = ({ children, url }: Props) => 
    <StAnchor href={url}>
        {children}
    </StAnchor>


export default LinkBtn