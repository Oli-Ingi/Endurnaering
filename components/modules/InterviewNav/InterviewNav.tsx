import { FC } from "react"
import styled from "styled-components"
import Button from "../../elements/Button/Button"
import Dropdown from "../Dropdown/Dropdown"


export type Props = {
    book: { caption: string; to: string; };
    attend: { caption: string; to: string; };
    lg?: boolean;
    as?: "div" | "section";
    title: string;
    dropShadow?: boolean;
}


const StNav = styled.nav<Pick<Props, "lg">>`
    display: flex;
    padding: 0 3em 0 1em;

    > div { display: none; }

    > * :not(:first-child) {
        margin-left: 20px;
    }

    @media screen and (max-width: 930px) {
        a { display: none; }
        > div { display: block; }
    }
`


const InterviewNav: FC<Props> = ({ title, book, attend, lg, dropShadow }) =>
    <StNav lg={lg}>
        <Button to={book.to}>{book.caption}</Button>
        <Button color="secondary" to={attend.to} keepColorOnHover>{attend.caption}</Button>
        <Dropdown title={title} links={[book, attend]} shadow={dropShadow} />
    </StNav>


export default InterviewNav