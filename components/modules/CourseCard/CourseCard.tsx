import { FC } from 'react'
import Card from '../../elements/Card/Card'
import Title from '../../elements/Title/Title'
import Text from '../../elements/Text/Text'
import Flex from '../../elements/Flex/Flex'
import Badge from '../../elements/Badge/Badge'

export type Props = {
    title: string;
    subtitle?: string;
    description: string;
    length: string;
    lengthLabel: string;
    type: string;
    link: string;
    color?: Colors;
}




const CourseCard: FC<Props> = ({ title, subtitle, description, length, lengthLabel, type, link, color }) =>
    <Card shadow="hover" borderColor={color || "primary"} variant="white" border otherBorders href={link}>
        <Title variant="subsection" color={color || "primary"} mb=".5em">{title}{subtitle && <Text as="span" block> {subtitle}</Text>}</Title>
        <div style={{ flex: 1 }}><Text>{description}</Text></div>
        <Flex just="between" mt="1em">
            <Text bold color={color || "primary"} mr={10} nowrap>{lengthLabel} <Text as="span" color="dark" nowrap>{length}</Text></Text>
            <Badge color={color || "primary"}>{type}</Badge>
        </Flex>
    </Card>



export default CourseCard;