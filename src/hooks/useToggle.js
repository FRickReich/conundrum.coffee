import { useState, useCallback } from "react";

// https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/

export const useToggle = (initialValue = false) => 
{
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() =>
    {
        setValue(v => !v);
    }, []);
    
    return [value, toggle];
}
