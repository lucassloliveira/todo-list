import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
    // inicializa lendo o localstorage 
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored !== null ? JSON.parse(stored) : initial
        } catch {
            console.warn(`[useLocalStorage] Erro ao ler a chave "${key}"`)
            return initial;
        }
    });

    // Sempre que o valor mudar, salva no localStorage
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            console.warn(`[useLocalStorage] Erro ao salvar a chave "${key}"`);
        }
    }, [key, value]);

    return [value, setValue]
}

export  default useLocalStorage