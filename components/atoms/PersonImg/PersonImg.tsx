import React from 'react'
import Image from 'next/image'

type Props = {
    type: Person
}

export enum Person {
    withBurger = '/girl_burger.png',
    withApple = '/girl_apple.png',
    withNoodles = '/guy_noodles.png',
    withPizza = '/guy_pizza.png',
    withPopcorn = '/guy_popcorn.png',
    withIcecream = '/woman_icecream.png'
}


const PersonImg: React.FC<Props> = ({ type }) =>
    <Image src={type} height={246} width={131} />


export default PersonImg