import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import { useParams } from "react-router-dom";

export default function EditContact () {
    return (
        <>
            <PageHeader title='Editar Matheus Silva'/>
            <ContactForm buttonLabel="Salvar alterações"/>
        </>
    )
}
