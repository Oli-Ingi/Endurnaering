import { FC, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import Button from '../../elements/Button/Button'
import Text from '../../elements/Text/Text'
import Title from '../../elements/Title/Title'


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

    > h3 { margin-bottom: 1rem; }
`


const Article: FC<Props> = ({ title, content, button, variant, darkBg, shadow, as }) => 
    <StArticle shadow={shadow} as={as}>
        <Title variant="section" as="h3">{title}</Title>
        {content.map((p, i) => <Text key={i} mb={8} {...darkBg && { color: "white" }}>{p}</Text>)}
    </StArticle>



export default Article

//{button && <Button {...button} color={variant} marginTop={15} keepColorOnHover={["secondary", "white"].includes(variant)} />}