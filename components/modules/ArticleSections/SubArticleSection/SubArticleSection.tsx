import { FC } from 'react'
import Text from '../../../elements/Text/Text'


export type Props = {
    title: string;
}


const SubArticleSection: FC<Props> = ({ title, children }) => 
    <>
        <Text as="h3" bold m="1rem 0 0.3rem">{title}</Text>
        {children}
    </>



export default SubArticleSection