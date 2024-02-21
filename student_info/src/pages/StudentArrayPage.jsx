import React, { useEffect, useRef, useState } from "react";

function StudentArrayPage() {
    const [studentList, setStudentList] = useState([]);
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        age: "",
        address: "",
    });
    const [updateId, setUpdateId] = useState();

    const staticId = useRef(0);
    // staticId.current값이 변해도 렌더링 X
    // 재렌더링이 발생해도 초기화되지 않음

    useEffect(() => {
        console.log(studentList);
    }, [studentList]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleAddClick = () => {
        const student = {
            ...inputValue,
            id: (staticId.current += 1),
        };

        setStudentList([...studentList, student]);
    };

    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter((student) => student.id !== id)]);
        // id값이 다른 것들만 걸러서 추가, == 삭제
    };

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter((student) => student.id === id)[0]);
    };

    const handleUpdateSubmitClick = () => {
        const findIndex = studentList.indexOf(
            studentList.filter((student) => student.id === updateId)[0]
        ); 
        // 수정할 인덱스값을 찾아온다.
        const updateStudentList = [...studentList]; 
        //원래 있던 배열을 가져와서 대입한다.
        updateStudentList[findIndex] = inputValue; 
        // 찾은 인덱스값에 해당하는 배열을 가져와 수정된 내용을 넣는다.

        setStudentList(updateStudentList); 
        // 수정된 후의 배열을 다시 set한다.
        handleCancelClick();
    };

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: "",
        });
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="id"
                    disabled={true}
                    placeholder="ID"
                    value={inputValue.id}
                />
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="이름"
                    value={inputValue.name}
                />
                <input
                    type="text"
                    name="age"
                    onChange={handleInputChange}
                    placeholder="나이"
                    value={inputValue.age}
                />
                <input
                    type="text"
                    name="address"
                    onChange={handleInputChange}
                    placeholder="주소"
                    value={inputValue.address}
                />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td>
                                    {updateId !== student.id ? ( // true이면
                                        <button
                                            onClick={() => {
                                                handleUpdateClick(student.id);
                                            }}
                                        >
                                            수정
                                        </button>
                                    ) : (
                                        // false이면
                                        <button
                                            onClick={handleUpdateSubmitClick}
                                        >
                                            확인
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {updateId !== student.id ? ( // true이면
                                        <button
                                            onClick={() => {
                                                handleDeleteClick(student.id);
                                            }}
                                            // onClick안에서 바로 할 경우 렌더링 될때 바로 실행 되버림.
                                            // 그래서 함수 안에 함수 호출을 한다.
                                        >
                                            삭제
                                        </button>
                                    ) : (
                                        // false이면
                                        <button onClick={handleCancelClick}>
                                            취소
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentArrayPage;
