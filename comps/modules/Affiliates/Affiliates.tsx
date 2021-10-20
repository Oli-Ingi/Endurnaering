import { FC } from 'react'
import styled from 'styled-components'
import { addPxIfNumber } from '../../../styles/common';


export type Props = {
    logos: {
        img: string;
        to: string;
        alt?: string;
    }[];
    height?: number | string;
}


const StAffiliates = styled.div<Pick<Props, "height">>`
    display: flex;
    align-items: center;
    padding: 0.5em 0;

    a {
        
        margin-right: 2em;

        img {
            height: ${p => addPxIfNumber(p.height)};
        }
    }
`


const Affiliates: FC<Props> = ({ logos, height }) =>
    <StAffiliates height={height}>
        {logos.map(({ to, alt, img }) => 
            <a href={to} target="__blank">
                <img src={img} alt={alt} />
            </a>
        )}
    </StAffiliates>


export default Affiliates