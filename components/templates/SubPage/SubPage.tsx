import { FC } from 'react'
import Title from '../../elements/Title/Title'
import ImgBanner from '../../modules/ImgBanner/ImgBanner'
import Column from '../Column/Column'
import Text from '../../elements/Text/Text'
import Section from '../../modules/Section/Section'


export type Props = {
    img: string;
    imgAlt: string;
    title: string;
    description: string[];
    barContent?: JSX.Element;
    children?: JSX.Element;
}


const SubPage: FC<Props> = ({ img, imgAlt, title, description, barContent, children }) =>
    <Column as="main">
        <ImgBanner img={img} imgAlt={imgAlt} sm>
            <div style={{ marginBottom: 50 }}>
                <Title marginBottom="0.3em">{title}</Title>
                {description.map(d => <Text marginBottom=".7em">{d}</Text>)}
            </div>
        </ImgBanner>
        {barContent && <Section asEl="div" border="both" just="between" align="center" row variant="secondary" pad="1em">
            {barContent}
        </Section>}
        {children}
    </Column>



export default SubPage;