import { link } from 'fs'
import React from 'react'
import styled from 'styled-components'
import { IAnchor, IButton } from '../../../types/general'
import Button from '../../atoms/Button/Button'
import Flag from '../../atoms/Flag/Flag'
import List from '../../atoms/List/List'


export type Props = {
    anchor1: IAnchor;
    anchor2: IAnchor;
    onFlagClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    flagImg: string;
}


const HeaderActions: React.FC<Props> = ({ anchor1, anchor2, onFlagClick, flagImg }) =>
    <List>
        <Button as="a" href={anchor1.to} {...anchor1.title && { title: anchor1.title }}>{anchor1.content}</Button>
        <Button as="a"  gray href={anchor2.to} {...anchor2.title && { title: anchor2.title }}>{anchor2.content}</Button>
        <Flag onClick={onFlagClick} img={flagImg} />
    </List>


export default HeaderActions