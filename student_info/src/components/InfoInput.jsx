import { useState } from "react";

function InfoInput({ title, setGet, value }) {
    const [inputValue, setInputValue] = useState();

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setGet(inputValue);
    };

    return (
        <>
            <input
                type="text"
                placeholder={title}
                onChange={handleOnChange}
                value={value}
            />
        </>
    );
}

export default InfoInput;
