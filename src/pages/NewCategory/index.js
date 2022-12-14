import PageHeader from "../../components/PageHeader";
import FormGroup from "../../components/FormGroup";
import Input from "../../components/Input";
import Button from "../../components/Button";

import useErrors from "../../hooks/use-erros";
import { useState } from "react";

import categoryService from "../../services/category-service";

import toast from '../../utils/toast';

export default function NewCategory(){

    const { createError,removeError,errors, getErrorMesssageByFieldName } = useErrors();

    const [categoryName,setCategoryName] = useState('');

    const handleCategoryName = event => {

        setCategoryName(event.target.value);
        if(!event.target.value)
        return createError({
            field:'category-name',
            message:'O nome da categoria é obrigatório'
        });
        removeError('category-name')
    }

    const noError = categoryName && errors.length === 0;

    const createCategory = async (event) => {
        event.preventDefault();
        if(noError){
            try{

                await categoryService.createCategory(categoryName);
                setCategoryName('');

                toast({
                    type:'sucess',
                    text:`Categoria: ${categoryName} cadastrada com sucesso`
                });

            }catch(err){
                toast({
                    type:'danger',
                    text:`Não foi possível cadastrar ${categoryName}`
                })
            }
        }
    }

    return (
        <div>
            <PageHeader title='Nova categoria'/>
            <br/>
            <form onSubmit={createCategory}>
                <FormGroup error={getErrorMesssageByFieldName('category-name')}>
                    <Input error={getErrorMesssageByFieldName('category-name')} value={categoryName} onChange={handleCategoryName} placeholder="Nome da categoria"/>
                </FormGroup>
                <br/>
                <Button type='submit' disabled={!noError}>Cadastrar</Button>
            </form>
        </div>
    )
}
