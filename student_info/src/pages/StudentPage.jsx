import React, { useEffect, useRef, useState } from "react";
import StudentInfo from "../components/StudentInfo";
import InfoInput from "../components/InfoInput";
import InfoButtons from "../components/InfoButtons";

function StudentPage(props) {
    const studentObj = {
        name: "",
        age: "",
        address: "",
    };

    const [student, setStudent] = useState(studentObj);
    const [inputValues, setInputValues] = useState(studentObj);
    const inputRef = {
        name: useRef(),
        age: useRef(),
        address: useRef(),
    };

    // useEffect
    // -html Dom 요소 속 변화를 감지.
    // -끝에 대괄호는 의존성임, 대괄호 속 상태값이 바뀌면 useEffect작동.
    // -대괄호 안 값이 두개라면 둘 중 하나가 바뀌면이 된다.
    // -빈값이라면 최초의 한번 실행 후 동작안함.
    // -최초에는 무조건 한번 실행이 됨.

    // useEffect(() => {
    //     console.log(inputRef.name.current);
    //     console.log(inputRef.age.current);
    //     console.log(inputRef.address.current);
    // }, []);

    useEffect(() => {
        // 마운트

        setInputValues(studentObj);

        // return () => {
        // 언마운트
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student]);

    // let email = "email";
    // let phone = "01012345678";

    // let user = {
    //     username: "test",
    //     ["password"]: "1234",
    //     [email]: "test",
    //     phone,
    // };

    // console.log(user);
    /**
     *  js 객체 특징
     * 1. 키값은 문자열이어도 된다.
     * 2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
     * 3. 변수 자체를 객체의 속성과 value로 한번에 정의할 수 있다.
     */

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleOnOk = () => {
        new Promise((resolve, reject) => {
            // 동기처리를 위해 promise를 만든다.
            // 하지만 함수 실행 후 resolve가 바로 실행되므로 의미 없음.
            // 그래서 사용하는 것이 useEffect
            setStudent(inputValues);
            resolve();
        }).then(() => {
            setInputValues(studentObj);
        });
    };

    const handleOnClean = () => {
        setStudent(studentObj);
    };

    return (
        <>
            <StudentInfo title="이름" text={student.name} />
            <StudentInfo title="나이" text={student.age} />
            <StudentInfo title="주소" text={student.address} />
            <InfoInput
                name="name"
                onChange={handleInputChange}
                placeholder="이름"
                value={inputValues.name}
                inputRef={inputRef.name}
            />
            <InfoInput
                name="age"
                onChange={handleInputChange}
                placeholder="나이"
                value={inputValues.age}
                inputRef={inputRef.age}
            />
            <InfoInput
                name="address"
                onChange={handleInputChange}
                placeholder="주소"
                value={inputValues.address}
                inputRef={inputRef.address}
            />
            <InfoButtons>
                {/* 컴포넌트 태그 사이에 있는 태그들이 children이 됨 */}
                <button onClick={handleOnOk}>확인</button>
                <button onClick={handleOnClean}>비우기</button>
            </InfoButtons>
        </>
    );
}

export default StudentPage;
