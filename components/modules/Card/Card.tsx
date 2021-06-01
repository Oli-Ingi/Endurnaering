import React from 'react'
import Image from '../Image'

type Props = {
    img?: string;
    gridCol?: number | string;
    alt: string;
}

const Card = ({ children, img, alt, gridCol }) =>
    <article>
        <Image center src={img} width={300} height={300} greenText hoverScale pointer />
        {children}
    </article>