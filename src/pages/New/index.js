import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import ContactsService from '../../services/contact-service';

import toast from "../../utils/toast";

export default function NewContact () {

    async function handleSubmit(formData){
       try{

            await ContactsService.createContact({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            });

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
                onSubmit={handleSubmit}
                buttonLabel="Cadastrar"/>

        </div>
    )
}
