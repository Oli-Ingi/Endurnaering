import { FC } from 'react'
import styled from 'styled-components'
import Text from '../../elements/Text/Text'


export type Props = {
    title?: string;
    children: JSX.Element;
    variant?: Variants;
}


const Entitled: FC<Props> = ({ title, children, variant = "primary" }) =>
    <>
        {title && <Text as="h2" marginBottom="2em" thick size="xl" color={variant}>
            {title}
        </Text>}
        {children}
    </>


export default Entitled
