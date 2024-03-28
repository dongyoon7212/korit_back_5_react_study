import React, { useEffect, useState } from "react";

function StateStudy(props) {
    const inputState = useState("");
    const inputState2 = useState("");

    console.log("렌더링");

    useEffect(() => {
        console.log("inputA", inputState);
        return () => {
            console.log("inputA unmount");
        };
    }, [inputState[0]]);

    useEffect(() => {
        console.log("inputB", inputState2);
        return () => {
            console.log("inputB unmount");
        };
    }, [inputState2[0]]);

    console.log("렌더링2")

    const handleTextInputOnchange = (e) => {
        let [value, setValue] = [null, null];

        if (e.target.name === "inputA") {
            [value, setValue] = inputState;
            setValue(e.target.value);
        }
        if (e.target.name === "inputB") {
            [value, setValue] = inputState2;
            setValue(e.target.value);
        }
    };

    return (
        <div>
            <input
                type="text"
                name="inputA"
                onChange={handleTextInputOnchange}
            />
            <input
                type="text"
                name="inputB"
                onChange={handleTextInputOnchange}
            />
        </div>
    );
}

export default StateStudy;
