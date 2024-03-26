import { useState } from "react";

export const useReactSelect = () => {
    const [option, setValue] = useState();

    const handleOnChange = (value) => {
        setValue(() => value);
    };

    return { option, setValue, handleOnChange };
};
