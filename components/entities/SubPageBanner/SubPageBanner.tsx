import { FC } from 'react'
import Title from '../../elements/Title/Title'
import ImgBanner from '../../modules/ImgBanner/ImgBanner'
import Text from '../../elements/Text/Text'


export type Props = {
    img: string;
    imgAlt: string;
    title: string;
    description: string[];
    variant: Colors;
}


const SubPageBanner: FC<Props> = ({ img, imgAlt, title, description, variant }) =>
    <ImgBanner img={img} imgAlt={imgAlt} sm variant={variant}>
        <div style={{ marginBottom: 50 }}>
            <Title marginBottom="0.3em">{title}</Title>
            {description.map(d => <Text key={d} marginBottom=".7em">{d}</Text>)}
        </div>
    </ImgBanner>




export default SubPageBanner;