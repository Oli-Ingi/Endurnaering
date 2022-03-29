import { FC } from 'react'
import styled, { css } from 'styled-components'
import Text from '../../elements/Text/Text'
import { v4 as uuid } from 'uuid'
import Card, { Props as CardProps } from '../../elements/Card/Card'
import Icon, { Props as IconProps } from '../../elements/Icon/Icon'
import Title from '../../elements/Title/Title'

export type Props = {
    title: string;
    href: string;
    icon: IconProps["type"];
    description: string;
    hoverColor?: Colors;
}


const StCardLink = styled(Card)<CardProps>`
    color: ${p => p.theme.colors[p.color || "primary"]};
    
    h3 { 
        transition-duration: .3s; 
    }

    ${p => p.borderHoverColor && css`
        :hover {
            color: ${p.theme.colors[p.borderHoverColor]};

            h3 { 
                color: ${p.theme.colors[p.borderHoverColor]}; 
            }
        }
    `}
`

const CardLink: FC<Props> = ({ icon, title, description, href, hoverColor }) => 
    <StCardLink row href={href} border variant="white" shadow="hover" borderHoverColor={hoverColor}>
        <Icon type={icon} mr={12} />
        <div>
            <Title variant="subsection" color="primary">{title}</Title>
            <Text color="dark" size="sm">{description}</Text>
        </div>
    </StCardLink>

export default CardLink
// Typescript doesn't like "as".
// const StCard = styled.div<Pick<Props, "border" | "shadow" | "variant">>`${CardStyle}`
// const StLink = styled.a<Pick<Props, "variant" | "border" | "shadow" | "href">>`${CardStyle}`


// const Card: FC<Props> = ({ title, content, variant, href, ...style }) => 
//     href
//     ?   <StLink variant={variant} href={href} {...style}>
//             <Text as="h3" variant={variant === "primary" ? "white" : "primary"} thick marginBottom="1em">{title}</Text>
//             {content.map(p => <Text key={uuid()} {...variant === "primary" && { variant: "white" }} size="sm">
//                 {p}
//             </Text>)}
//         </StLink>
//     :   <StCard variant={variant} {...style}>
//             <Text as="h3" variant={variant === "primary" ? "white" : "primary"} thick marginBottom="1em">{title}</Text>
//             {content.map(p => <Text key={uuid()} {...variant === "primary" && { variant: "white" }} size="sm">
//                 {p}
//             </Text>)}
//         </StCard>
    


//export default Card