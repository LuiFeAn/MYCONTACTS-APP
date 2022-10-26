import { Form, ButtonContainer } from "./style";
import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from "../../utils/is-valid-email";

export default function ContactForm({ buttonLabel }){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [category,setCategory] = useState('');
    const [errors,setErros] = useState([]);

    const handleName = event => {
        setName(event.target.value);
        if(!event.target.value){
            setErros(PrevState => ([...PrevState,{field:'name',message:'Nome é obrigatório !'}]));
        }else{
            setErros(PrevState => PrevState.filter(error => error.field != 'name'));
        }
    }

    const handleEmail = event => {
        setEmail(event.target.value);
        if(event.target.value && !isEmailValid(event.target.value)){
            const errorAlreadyExists = errors.find( error => error.field === 'email');
            if(errorAlreadyExists) return;
            setErros(PrevState => ([...PrevState,{field:'email',message:'Email inválido !'}]));
        }else{
            setErros(PrevState => PrevState.filter(error => error.field != 'email'));
        }
    }

    const handlePhone = event => setPhone(event.target.value);
    const handleCategory = event => setCategory(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
    }


    return(
       <Form onSubmit={handleSubmit}>
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
            <Select value={category} onChange={handleCategory}>
                <option>Categoria</option>
                <option>Instagram</option>
                <option>Whatsapp</option>
                <option>Discord</option>
            </Select>
         </FormGroup>
         <ButtonContainer>
            <Button type="submit">{buttonLabel}</Button>
         </ButtonContainer>
       </Form>
    )
}

ContactForm.PropTypes = {
    buttonLabel: PropTypes.string.isRequired
}
