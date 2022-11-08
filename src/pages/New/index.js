import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import ContactsService from '../../services/contact-service';

export default function NewContact () {

    async function handleSubmit(formData){
       try{
            const response = await ContactsService.createContact({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.category
        });
       }catch(err){
            alert('Ocorreu um erro ao cadastrar o contato !');
       }
    }

    return (
        <div>
            <PageHeader title = 'Novo contato'/>
            <ContactForm onSubmit={handleSubmit} buttonLabel="Cadastrar"/>
        </div>
    )
}
