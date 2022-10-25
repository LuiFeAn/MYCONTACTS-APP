import { Form, ButtonContainer } from "./style";
import { useState } from "react";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const handleName = event => setName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handlePhone = event => setPhone(event.target.value);


    return(
       <Form>
         <FormGroup>
            <Input value={name} onChange={handleName} placeholder="Nome"/>
         </FormGroup>
         <FormGroup error="O formato do e-mail é inválido">
            <Input value={email} onChange={handleEmail} error placeholder="E-mail"/>
         </FormGroup>
         <FormGroup>
            <Input value={phone} onChange={handlePhone} placeholder="Telefone"/>
         </FormGroup>
         <FormGroup>
            <Select>
                <option>Instagram</option>
                <option>Whatsapp</option>
            </Select>
         </FormGroup>
         <ButtonContainer>
            <Button type="submit">{buttonLabel}</Button>
         </ButtonContainer>
       </Form>
    )
}

ContactForm.prototype = {
    buttonLabel: PropTypes.string.isRequired
}
