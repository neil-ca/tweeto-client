import React, { useState, useCallback } from 'react'
import { Form, Button, Row, Col} from "react-bootstrap"
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { useDropzone } from "react-dropzone";
import { API_HOST } from "../../../utils/constant";
import "./EditUserForm.scss"

export default function EditUserForm(props) {
    const {user, setShowModal} = props
    const [formData, setFormData] = useState(initialValue(user))
    const [bannerUrl, setbannerUrl] = useState(user?.banner ? `${API_HOST}/get-banner?id=${user.id}`:null)
    const onDropBanner = useCallback(acceptedFile => {

    })
    const {getRootProps, getInputProps} = useDropzone({accept: "image/jpeg image/png", noKeyboard: true,
     multiple: false, onDroop: onDropBanner})

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log("Editando user");
    }
    return (
        <div className="edit-user-form">
            <div className="banner" style={{backgroundImage: `url('${bannerUrl}')`}}
            {...getRootProps()}>
                <input {...getInputProps()}/>
            </div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                        <Form.Control type="text" placeholder="Nombre" name="name" 
                        defaultValue={formData.name} onChange={onChange}/>
                        </Col>
                        <Col>
                        <Form.Control type="text" placeholder="Apellidos" name="surname" 
                        defaultValue={formData.surname} onChange={onChange}/>
                        </Col>
                    </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" row="3" 
                        placeholder="Agrega tu biografia" type="text" name="biography" 
                        defaultValue={formData.biography} onChange={onChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="text" placeholder="Sitio web" name="siteweb" 
                        defaultValue={formData.siteweb} onChange={onChange}/>
                    </Form.Group>

                    <Form.Group>
                        <DatePicker placeholder="Fecha de nacimiento"
                        locale={es} selected={new Date(formData.dateofbirth)} onChange={date => setFormData({...formData, dateofbirth: date})}/>
                    </Form.Group>
                    <Button className="btn-submit" variant="primary" type="submit">Actualizar</Button>

            </Form>
        </div>
    )
}

function initialValue(user) {
    return {
        name: user.name || "",
        surname: user.surname || "",
        biography: user.biography || "",
        siteweb: user.siteweb || "",
        dateofbirth: user.dateofbirth || "",
    }
}
