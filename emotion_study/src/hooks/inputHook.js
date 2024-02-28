import { useState } from "react";

export function useInput() {
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        const { value } = e.target;

        //setInputValue((v) => v + 1)
        //useState의 변수 값만 가져와서 사용함(렌더링이 일어나지 않게 하기 위해), 최적화 단계
        //리액트에서는 위 방법을 권장함

        // setInputValue((iv) => (value.length < 20 ? value : iv));
        //상태를 계속 변화시킴(재렌더링이 계속 일어남)
        setInputValue(() => value);

        //그래서 if문을 걸어 렌더링을 최소화 한다.
    };

    return [inputValue, onChange];
}

// 커스텀 훅을 작성하면 주석으로 설명을 달아야 한다.
/**
 *
 * @param {*} maxSize
 * @returns 최대 글자 값
 */
export function useMaxSizeValidateInput(maxSize) {
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if (value.length <= maxSize) {
            setInputValue(() => value);
        }
    };

    return [inputValue, onChange];
}
