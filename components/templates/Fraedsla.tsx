import React from "react";
import styled from "styled-components";
import { IArticle } from "../../types/general";



export type Props = {
    articles?: IArticle[]
}


const Fraedsla: React.FC<Props> = ({}) =>
    <div>Hér koma fræðslumolar eins og "Næring", "Venjur" og "Innsæi</div>



export default Fraedsla