import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactsForm";
import Loader from "../../components/Loader";

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import contactService from "../../services/contact-service";

import toast from '../../utils/toast';
import useIsMounted from "../../hooks/useIsMounted";

export default function EditContact () {

    const { id } = useParams();

    const [ loading, setLoading ] = useState(true);
    const [ contactName, setContactName ] = useState('');

    const isMounted = useIsMounted();

    const contactForm = useRef(null);

    const history = useHistory();

    async function handleSubmit(formData){

        try{

            const contactData = await contactService.updateContact(id,{
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            });

            setContactName(contactData.name);

            toast({
                type:'sucess',
                text:'Contato editado com sucesso'
            });

       }catch(err){

            toast({
                type:'danger',
                text:'Ocorreu um erro ao editar o contato'
            });

       }

    }

    useEffect( () => {

        ( async () => {

            try{

                const contactData = await contactService.getContactById(id);

                if( isMounted() ){

                    contactForm.current.setFieldsValues(contactData);

                    setContactName(contactData.name);
                    setLoading(false);
                }

            }catch(err){

               if( isMounted() ){

                history.push('/');

                toast({
                    type:'danger',
                    text:'Contato não encontrado'
                });

               }

            }

        })();

    },[id,history,isMounted]);

    return (
        <>

            <Loader isLoading={loading}/>

            <PageHeader title={ !loading ? `Editar ${contactName}` : 'Carregando...'}/>

            <ContactForm
                 ref={contactForm}
                 onSubmit={handleSubmit}
                 buttonLabel="Salvar alterações"/>

        </>
    )
}
