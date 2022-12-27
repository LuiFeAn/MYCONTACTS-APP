import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import ContactsService from '../../services/contact-service';

import { useRef } from "react";

import toast from "../../utils/toast";

export default function NewContact () {

    const formRef = useRef(null);

    async function handleSubmit(formData){
       try{

            await ContactsService.createContact({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            });

            formRef.current.resetFields();

            toast({
                type:'sucess',
                text:'Contato cadastrado com sucesso'
            });

       }catch(err){

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
