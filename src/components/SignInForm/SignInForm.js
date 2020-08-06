import React, { useState } from 'react'
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
// eslint-disable-next-line no-unused-vars
import { Toast, toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { signInApi, setTokenApi } from "../../api/auth";

import "./SignInForm.scss"

export default function SignInForm(props) {
    const {setRefreshCheckLogin} = props
    const [formData, setFormData] = useState(initialFormValue())
    const [signInLoading, setsignInLoading] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        
        let validCount = 0
        values(formData).some(value => {
            value && validCount++
            return null
        })

        if(size(formData) !== validCount) {
            toast.warning("Completa todos los campos")
        } else {
            if(!isEmailValid(formData.email)) {
                toast.warning("Email invalido")
            } else {
                setsignInLoading(true)
                signInApi(formData).then(response => {
                    if (response.message) {
                        toast.warning(response.message)
                    } else {
                        setTokenApi(response.token)
                        setRefreshCheckLogin(true)
                    }
                }).catch(() => {
                    toast.error("Error del servidor")
                })
                .finally(() => {
                    setsignInLoading(false)
                })
            }
        }
    }

    const onChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    return (
        <div className="sign-in-form">
            <h2>Login</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Form.Control type="email" name="email"
                    placeholder="Correo electronico" defaultValue={formData.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" name="password"
                    placeholder="Contraseña" 
                    defaultValue={formData.password}/>
                </Form.Group>
                <Button variant="primary" type="submit">{!signInLoading ? "Iniciar sesion" : 
                <Spinner animation="border"/>}
                </Button>
            </Form>
        </div>
    )
}

function initialFormValue() {
    return {
        email: "",
        password: ""
    }
}