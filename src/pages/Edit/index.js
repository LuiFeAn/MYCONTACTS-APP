import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import Loader from "../../components/Loader";

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import contactService from "../../services/contact-service";

import toast from '../../utils/toast';

export default function EditContact () {

    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);

    const contactForm = useRef(null);

    const history = useHistory();

    const [ contact, setContact ] = useState({});

    function handleSubmit(){
        //
    }

    useEffect( () => {

        ( async () => {

            try{

                const contactData = await contactService.getContactById(id);
                setContact(contactData);
                contactForm.current.setFieldsValues(contactData);
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

            <PageHeader title={`Editar ${contact.name}`}/>

            <ContactForm
                 ref={contactForm}
                 onSubmit={handleSubmit}
                 buttonLabel="Salvar alterações"/>

        </>
    )
}
