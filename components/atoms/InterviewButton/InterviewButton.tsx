import React from 'react'
import Button from '../Button/Button'


type Props = {
    lg?: boolean;
    margin?: string;
}

const InterviewButton: React.FC<Props> = ({ lg }) =>
    <Button 
        as="a" 
        href="https://app.karaconnect.com/company/1115/registration?auth=2" 
        lg={lg}
        bold
        margin='1em'
    >
        Bóka fjarviðtal
    </Button>


export default InterviewButton