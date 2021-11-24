import Card from '../../elements/Card/Card'
import Title from '../../elements/Title/Title'
import Text from '../../elements/Text/Text'
import { FC } from 'react'
import Flex from '../../elements/Flex/Flex'

export type Props = {
    title: string;
    content: string[];
    subtitle?: string;
}


const Cardicle: FC<Props> = ({ title, content, subtitle }) => 
    <Card variant="white" shadow="always" border>
        <Flex col width="full" just="between" style={{ height: "100%" }}>
            <div>
                <Title variant="subsection" marginBottom={20}>{title}</Title>
                {content.map(c => <Text size="sm">{c}</Text>)}
            </div>
            {subtitle && <Text size="sm" bold marginTop={15} faded>{subtitle}</Text>}
        </Flex>
    </Card>


export default Cardicle