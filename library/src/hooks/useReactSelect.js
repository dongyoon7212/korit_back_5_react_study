import { useState } from "react";

export const useReactSelect = (defaultValue) => {
    const [option, setValue] = useState(defaultValue);

    const handleOnChange = (value) => {
        setValue(() => value);
    };

    return { option, setValue, handleOnChange, defaultValue };
};
