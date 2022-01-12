import { FC } from 'react'
import styled from 'styled-components'
import Title from '../../elements/Title/Title'
import Flex, { Props as FlexProps } from '../../elements/Flex/Flex';

export type Props = {
    title?: string | JSX.Element;
    titleAlign?: "left" | "center";
    variant?: Colors;
    shadowBottom?: boolean;
    border?: "top" | "bottom" | "both";
    asEl?: "div" | "article"; // as bugged.. overlaps with as from FlexProps?
    xl?: boolean;
    row?: boolean;
} & Omit<FlexProps, "col">

const StSection = styled.section<Omit<Props, "title" | "xl" | "asEl"> & { as?: "div" | "article"}>`
    width: 100%;
    box-sizing: border-box;
    background-color: ${p => p.theme.colors[p.variant]};
    box-shadow: ${p => p.shadowBottom && p.theme.shadowBottom};
    z-index: ${p => p.shadowBottom && 5};
    border-top: ${p => (p.border === "both" || p.border === "top") && `1px solid #dedede`};
    border-bottom: ${p => (p.border === "both" || p.border === "bottom") && `1px solid #dedede`};
`

const StInner = styled(Flex)<{ xl?: boolean; titleAlign?: Props["titleAlign"] }>`
    padding: ${p => p.pad || "4em 1em"};
    width: 100%;
    max-width: ${p => !p.xl && p.theme.layout.containerWidth};
    margin: 0 auto;
    box-sizing: border-box;

    > h2 {
        margin-bottom: 50px;
        margin-top: 0;
        text-align: ${p => p.titleAlign === "center" && "center"};
    }
`


const Section: FC<Props> = ({ title, variant = "white", children, asEl, shadowBottom, border, row, ...flex }) => 
    <StSection as={asEl} variant={variant} shadowBottom={shadowBottom} border={border}>
        <StInner col={!row} $wrap={row} {...flex}>
            {typeof title === "string" ? <Title variant="section">{title}</Title> : title}
            {children}
        </StInner>
    </StSection>



export default Section