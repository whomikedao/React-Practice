import React from 'react';
import {Button} from 'react-bootstrap'

const Button1 = (props) =>{
    return (
        <Button>
            {props.name}!
        </Button>
    )
}

export default Button1