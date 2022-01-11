import { FC } from 'react'
import Title from '../../elements/Title/Title'
import ImgBanner from '../../modules/ImgBanner/ImgBanner'
import Text from '../../elements/Text/Text'
import PageTitle from '../../modules/PageTitle/PageTitle'


export type Props = {
    img: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    smSubtitle?: boolean;
    variant?: Colors;
}


const SubPageBanner: FC<Props> = ({ img, imgAlt, title, subtitle, smSubtitle, variant }) =>
    <ImgBanner img={img} imgAlt={imgAlt} sm variant={variant}>
        <div style={{ marginBottom: 50 }}>
            <PageTitle bold={title} light={subtitle} smLight={smSubtitle} />
        </div>
    </ImgBanner>




export default SubPageBanner;