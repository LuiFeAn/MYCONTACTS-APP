import { useState } from "react";

export default function useErrors(){

    const [errors,setErros] = useState([]);

    function createError({field,message}){
        const errorAlreadyExists = errors.find( error => error.field === field);
        if(errorAlreadyExists) return;
        setErros(prevState => [...prevState,{field,message}]);
    }

    function removeError(fieldName){
        setErros(prevState => prevState.filter( error => error.field != fieldName));
    }

    const getErrorMesssageByFieldName = (fieldName) => {
        return errors.find( error => error.field === fieldName)?.message;
    }

    return { createError, removeError, getErrorMesssageByFieldName}

}

