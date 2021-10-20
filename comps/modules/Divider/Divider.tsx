import { FC } from "react"
import styled from 'styled-components'
import Link from "../../elements/Link/Link"
import Text from '../../elements/Text/Text'

export type Props = {
    variant?: Variants;
    size?: "lg" | "sm";
    thick?: boolean;
} & (
    | { values: Array<{ caption: string; to?: never; newTab?: never }>; animateLinks?: never;  }
    | { values: Array<{ to: string; caption: string; newTab?: boolean; }>; animateLinks?: true; }
)

const StDivider = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
`

const StLine = styled.hr<Pick<Props, "variant" | "size">>`
    width: ${p => p.size === "lg" ? 2 : 1}px;
    height: ${p => p.size === "lg" ? 20 : 15}px;
    background-color: ${p => p.variant ? p.theme.colors[p.variant] : "black"};
    margin: 0 1.2em;
    border: none;
`

const Divider: FC<Props> = ({ values, animateLinks, ...style }) =>
    <StDivider>
        {values.map((val, i) => <> 
            {val.to 
                ?   <Link to={val.to} newTab={val.newTab} animatedLine={animateLinks} {...style} keepColorOnHover={style.variant === "primary"}>{val.caption}</Link>
                :   <Text key={val.caption} {...style}>{val.caption}</Text>}
            {i + 1 < values.length && <StLine variant={style.variant} size={style.size} />}
        </>)}
    </StDivider>


export default Divider