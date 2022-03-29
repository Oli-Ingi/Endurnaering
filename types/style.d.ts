

declare type Margins = {
    m?: string | number;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
}

declare type FadeProps = 
    | { fadeIn?: boolean; fadeInRight?: never; fadeInLeft?: never; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: boolean; fadeInLeft?: never; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: never; fadeInLeft?: boolean; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: never; fadeInLeft?: never; fadeInUp?: boolean; };



declare type Fade = "in" | "right" | "down" | "left" | "up";
declare type Variants = "primary" | "secondary" | "white";
declare type Typography = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "strong" | "em" | "span" | "li";


declare module "*.png" {
    const value: any;
    export default value;
  }