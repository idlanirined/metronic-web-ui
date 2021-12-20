import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router';
import { Button, ButtonToolbar, Form, Schema, } from 'rsuite';
import background from '../assets/office.jpg'
import Constant from '../library/Constants';
const { StringType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.'),
});

function TextField(props) {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group style={{ width: '100%', marginTop: '5vh' }} controlId={`${name}-3`}>
            {name === "name" ? <Form.ControlLabel style={{ fontSize: '2vh', fontWeight: 'bold' }}>{label} </Form.ControlLabel> :
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Form.ControlLabel style={{ fontSize: '2vh', fontWeight: 'bold' }}>{label} </Form.ControlLabel>
                    <div style={{ cursor: 'pointer' }}>
                        <Typography style={{ color: '#1dacdb', fontSize: '2vh', fontWeight: 'bold' }}>Lupa Password ?</Typography>
                    </div>
                </div>
            }

            <Form.Control style={{ padding: '.6vw', borderRadius: '.4vw' }} name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
}

export default function Login() {
    const formRef = React.useRef();
    const history = useHistory()
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        name: '',
        password: ''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        }
        localStorage.setItem(Constant.ACCESS_TOKEN, formValue.name)
        history.push('/')
        // console.log(formValue, 'Form Value');
    };

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            width: '100vw',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', height: 'inherit', alignItems: 'center' }}>
                <Paper style={{ width: '40vw', height: '70vh', borderRadius: '2vh', boxShadow: '.5vh .2vh 1vh 0 #999999' }} >
                    <div style={{ marginTop: '7vh' }}>
                        <Typography style={{ fontWeight: 'bold', fontSize: '3vw', fontFamily: 'Poppins', textAlign: 'center' }}>Your Logo</Typography>
                    </div>
                    <div style={{ padding: '0 15%', marginTop: '5vh' }}>
                        <Form
                            fluid
                            ref={formRef}
                            onChange={setFormValue}
                            onCheck={setFormError}
                            onSubmit={handleSubmit}
                            formValue={formValue}
                            model={model}>
                            <TextField name="name" label="Username" autoComplete="off" />
                            <TextField name="password" label="Password" type="password" autoComplete="off" />
                            <ButtonToolbar>
                                <Button style={{ marginTop: '8vh' }} block appearance="primary" type="submit">
                                    <Typography style={{ fontSize: '1.3vw', fontWeight: '500' }}>Submit</Typography>
                                </Button>
                            </ButtonToolbar>
                        </Form>
                    </div>
                </Paper>
            </div>
        </div>
    )
}
