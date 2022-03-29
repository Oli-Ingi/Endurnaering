import { FC } from 'react'
import styled from 'styled-components'
import Card from '../../elements/Card/Card'
import Flex from '../../elements/Flex/Flex'
import Icon from '../../elements/Icon/Icon'
import Text from '../../elements/Text/Text'

export type Props = {
    date: string;
    loc: string;
}


const StDescCard = styled.div`
    
`


const DescCard: FC<Props> = ({ date, loc }) =>
    <Card border variant="secondary" otherBorders>
        <Flex align="center" mb="1em">
            <Icon type="calendar" mr="1em" />
            <Text>{date}</Text>
        </Flex>
        <Flex align="center">
            <Icon type="location" mr="1em" />
            <Text>{loc}</Text>
        </Flex>
    </Card>



export default DescCard;