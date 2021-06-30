import React from 'react'
import styled from 'styled-components'




const TextLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    transition-duration: 0.3s;

    :hover {
        color: ${p => p.theme.colors.primary};
    }
`

export default TextLink
    