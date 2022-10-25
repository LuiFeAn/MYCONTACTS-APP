import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";

export default function NewContact () {
    return (
        <div>
            <PageHeader title = 'Novo contato'/>
            <ContactForm buttonLabel="Cadastrar"/>
        </div>
    )
}
