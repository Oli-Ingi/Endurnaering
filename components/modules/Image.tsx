import { StringifyOptions } from "querystring";
import React, { Children, ReactNode } from "react";
import Figure from "../elements/Figure";
//import Img from 'next/image';
import Pg from "../elements/Pg";

type Props = {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    cols?: string | number;
    children?: string;
    greenText?: boolean;
    // figure
    center?: boolean;
    end?: boolean;
    hoverScale?: boolean;
    pointer?: boolean;
}

const Image = ({ src, height, width, alt, cols, children, greenText, ...figure }: Props) => 
    <Figure cols={cols} {...figure}>
        <img src={src} alt={alt} width={width} height={height} />
        {children && <Pg as='figcaption' center xl isGreen={greenText}>{children}</Pg>}
    </Figure>


export default Image