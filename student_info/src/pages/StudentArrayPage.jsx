import React, { useEffect, useRef, useState } from "react";

function StudentArrayPage(props) {
    const [studentList, setStudentList] = useState([]);

    const [inputValue, setInputValue] = useState({
        name: "",
        age: "",
        address: "",
    });

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

    return (
        <div>
            <div>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentArrayPage;
