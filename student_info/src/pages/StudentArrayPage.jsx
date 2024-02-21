import React, { useState } from "react";

function StudentArrayPage(props) {
    const [studentList, setStudentList] = useState([]);

    const [student, setStudent] = useState({
        id: 0,
        name: "",
        age: 0,
        address: "",
    });
    const [inputValue, setInputValue] = useState({
        name: "",
        age: "",
        address: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleAddClick = () => {};

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
        </div>
    );
}

export default StudentArrayPage;
