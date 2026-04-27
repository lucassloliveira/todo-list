import { useState, useCallback } from "react";

// Hook customizado para controlar campos de input 
function useInput(initialValue = '') {
    const [value,setValue] =  useState(initialValue);

    // useCallback para evitar recriar a função a cada render
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const reset = useCallback(() => {
        setValue(initialValue);
    }, [initialValue]);

    const isEmpty = value.trim() === '';

    return { value, onChange, reset, isEmpty }
}

export default useInput