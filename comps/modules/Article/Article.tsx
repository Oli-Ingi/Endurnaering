import { FC, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import Button from '../../elements/Button/Button'
import Text from '../../elements/Text/Text'


export type Props = {
    title: string;
    content: string[];
    button?: { caption: string } & (
        | { onClick: MouseEventHandler; to?: never; newTab?: never }
        | { onClick?: never; to: string; newTab?: boolean }
    ); 
    variant?: Variants;
    darkBg?: boolean;
    shadow?: boolean;
    // unimplemented ideas
    round?: boolean; // other forms?
    as?: "div" | "section";
}


const StArticle = styled.article<Pick<Props, "shadow">>`
    ${p => p.shadow && css`box-shadow: ${p.theme.shadow};`}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 2em;
`


const Article: FC<Props> = ({ title, content, button, variant, darkBg, shadow, as }) => 
    <StArticle shadow={shadow} as={as}>
        <Text size="xl" as="h3" variant={darkBg ? "white" : "primary"} thick marginBottom="0.5em">{title}</Text>
        {content.map((p, i) => <Text key={i} marginBottom={8} {...darkBg && { variant: "white" }}>{p}</Text>)}
        {button && <Button {...button} variant={variant} marginTop={15} keepColorOnHover={["secondary", "white"].includes(variant)} />}
    </StArticle>



export default Article