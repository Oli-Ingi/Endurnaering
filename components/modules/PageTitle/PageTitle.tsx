import { FC } from 'react'
import Subtitle from '../../elements/Subtitle/Subtitle';
import Title from '../../elements/Title/Title';

export type Props = {
    bold: string;
    light: string;
    smLight?: boolean;
    sm?: boolean;
}



const PageTitle: FC<Props> = ({ bold, light, smLight, sm }) =>
    <Title variant={sm ? "page" : "huge"}>{bold}<Subtitle sm={smLight}>{light}</Subtitle></Title>



export default PageTitle;