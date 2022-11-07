import PageHeader from "../../components/PageHeader";
import FormGroup from "../../components/FormGroup";
import Input from "../../components/Input";
import Button from "../../components/Button";

import useErrors from "../../hooks/use-erros";
import { useState } from "react";

import categoryService from "../../services/category-service";

export default function NewCategory(){

    const { createError,removeError,errors, getErrorMesssageByFieldName } = useErrors();

    const [categoryName,setCategoryName] = useState('');

    const handleCategoryName = event => {
        setCategoryName(event.target.value);
        if(!event.target.value) return createError({field:'category-name',message:'O nome da categoria é obrigatório'});
        removeError('category-name')
    }

    const createCategory = async () => {
        if(errors.length === 0){
            try{
                await categoryService.createCategory({categoryName});
                setCategoryName('');
            }catch(err){

            }
        }
    }

    return (
        <div>
            <PageHeader title='Nova categoria'/>
            <br/>
            <FormGroup error={getErrorMesssageByFieldName('category-name')}>
                <Input error={getErrorMesssageByFieldName('category-name')} value={categoryName} onChange={handleCategoryName} placeholder="Nome da categoria"/>
            </FormGroup>
            <br/>
            <Button onClick={createCategory}>Cadastrar</Button>
        </div>
    )
}
