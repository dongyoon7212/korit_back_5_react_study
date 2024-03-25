import { useState } from "react";

export const useBookRegisterInput = () => {
    const [value, setValue] = useState("");

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    };

    return { value, handleOnChange };
};
