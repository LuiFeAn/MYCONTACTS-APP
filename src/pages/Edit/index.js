import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import Loader from "../../components/Loader";

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import contactService from "../../services/contact-service";

import toast from '../../utils/toast';

export default function EditContact () {

    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);

    const history = useHistory();

    function handleSubmit(){
        //
    }

    useEffect( () => {

        ( async () => {

            try{

                const contactData = await contactService.getContactById(id);
                setLoading(false);

            }catch(err){

                history.push('/');

                toast({
                    type:'danger',
                    text:'Contato não encontrado'
                });

            }

        })();

    },[id,history]);

    return (
        <>

            <Loader isLoading={loading}/>
            <PageHeader title='Editar Matheus Silva'/>
            <ContactForm onSubmit={handleSubmit} buttonLabel="Salvar alterações"/>

        </>
    )
}
