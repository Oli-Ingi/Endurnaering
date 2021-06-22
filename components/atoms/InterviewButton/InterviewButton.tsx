import React from 'react'
import Button from '../Button/Button'


type Props = {
    lg?: boolean;
    margin?: string;
    attend?: boolean;
}

const InterviewButton: React.FC<Props> = ({ lg, margin, attend }) =>
    <Button 
        as="a" 
        href={attend ? 'https://app.karaconnect.com/register' : 'https://app.karaconnect.com/company/1115/registration?auth=2'}
        lg={lg}
        margin={margin || '1em'}
        target='_blank'
        {...attend && { secondary: true }}
    >
        {attend ? 'Mæta í viðtal' : 'Bóka viðtal'}
    </Button>


export default InterviewButton