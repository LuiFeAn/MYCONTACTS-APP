import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import ContactsService from '../../services/contact-service';

import { useRef } from "react";

import toast from "../../utils/toast";

export default function NewContact () {

    const formRef = useRef(null);

    async function handleSubmit(contact){
       try{

            await ContactsService.createContact(contact);

            formRef.current.resetFields();

            toast({
                type:'sucess',
                text:'Contato cadastrado com sucesso'
            });

       }catch(err){

            console.log(err);

            toast({
                type:'danger',
                text:'Ocorreu um erro ao cadastrar o contato'
            });

       }
    }

    return (
        <div>

            <PageHeader
                title = 'Novo contato'/>

            <ContactForm
                ref={formRef}
                onSubmit={handleSubmit}
                buttonLabel="Cadastrar"/>

        </div>
    )
}
