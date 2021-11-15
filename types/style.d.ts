

declare type Margins = {
    margin?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;
}

declare type FadeProps = 
    | { fadeIn?: boolean; fadeInRight?: never; fadeInLeft?: never; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: boolean; fadeInLeft?: never; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: never; fadeInLeft?: boolean; fadeInUp?: never; }
    | { fadeIn?: never; fadeInRight?: never; fadeInLeft?: never; fadeInUp?: boolean; };



declare type Fade = "in" | "right" | "down" | "left" | "up";
declare type Variants = "primary" | "secondary" | "white";
declare type Typography = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "strong" | "em" | "span" | "li";

