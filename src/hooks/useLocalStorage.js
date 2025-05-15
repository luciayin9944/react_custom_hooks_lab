import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        try {
            return stored !== null ? JSON.parse(stored) : initialValue;
        } catch (error) {
            // fallback: return raw string if not valid JSON
            return stored ?? initialValue;
        }
    });
    
    useEffect(() => {
        console.log("Storing:", key, value, typeof value);
        localStorage.setItem(key, value); 
    }, [key, value]);

    return [value, setValue];
}


    // const [value, setValue] = useState(() => {
    //     const storedValue = localStorage.getItem(key);
    //     return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    // });

