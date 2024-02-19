/**
 * react component 특징
 * 1. 파일명과 함수명을 일치시킨다.
 * 2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
 * 3. 함수를 꼭 export 해야한다.
 *
 */

import { useState } from "react";

export default function App() {
    //jsx 자료형
    // let names = ["김준일", "김준이", "김준삼"];
    // useState 비구조 할당
    // const [num1, num2, num3, num4] = [1, 2, 3, 4];
    const [nameArrayState, setNameArrayState] = useState([
        "김준일",
        "김준이",
        "김준삼",
    ]);

    console.log("콘솔 호출?")

    const handleClick = () => {
        setNameArrayState([...nameArrayState, "김준사"]);
    };
    // 상태관리

    return (
        // 아무런 의미 없는 묶어주기 위한 태그 <Fragment></Fragment>
        // jsx
        <>
            <button onClick={handleClick}>추가</button>
            <div>
                {nameArrayState.map((name) => (
                    <h1>{name}</h1>
                ))}
            </div>
        </>
    );
}
