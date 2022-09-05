import { FC } from "react"
import styled from "styled-components"
import Button from "../../elements/Button/Button"
import Link from "../../elements/Link/Link"
import Dropdown from "../Dropdown/Dropdown"


export type Props = {
    items: Array<{
        caption: string;

    } & (
        | { to: string; links?: never; } 
        | { to?: never; links: { caption: string; to: string; }[]
    })>

    lg?: boolean;
    lgMarginBetween?: boolean;
    as?: "div" | "section";
    bold?: boolean;
    dropShadow?: boolean;
}


const StNav = styled.nav<Pick<Props, "lg" | "lgMarginBetween">>`
    display: flex;

    > * :not(:first-child) {
        margin-left: ${p => p.lgMarginBetween ? 30 : 10}px;
    }
`


const Nav: FC<Props> = ({ items, lg, lgMarginBetween, bold, dropShadow }) =>
    <StNav lg={lg} lgMarginBetween={lgMarginBetween}>
        {items && items.map(it => 
            it.links 
                ? <Dropdown key={it.caption} title={it.caption} links={it.links} shadow={dropShadow}  />
                : <Link to={it.to} key={it.caption} bold={bold}>{it.caption}</Link>)}
    </StNav>


export default Nav