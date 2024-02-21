/**
 * 1. input에 대한 것들을 먼저 만든다.
 *
 * 2. input 값을 받는 함수를 만든다.
 *
 * 3. input value가 바뀌는지 useEffect로 확인해본다.
 *
 * 4. 데이터를 저장할 배열을 만든다 (변수에 저장한다면 덮어쓰게 됨)
 *
 * 5. 추가 버튼에 대한 이벤트함수를 만든다.
 * - 객체를 하나 만들고 inputValue를 저장 (parseInt사용)
 * - 만들어뒀던 배열에 set해준다.
 * - console로 저장되는지 확인
 *
 * 6. table 안 tbody에 map으로 출력
 * - map으로 출력할때 괄호 안에 있어야 return 가능, 중괄호까지 붙이면 return을 붙여줘야 함
 * - map을 사용할땐 key값을 꼭 줘야한다.
 * - 다시 정상적으로 출력되는지 확인
 *
 * 7. 총점, 평균을 위해 useState를 만든다.
 *
 * 8. useEffect로 저장되는 데이터가 저장되어 있는 배열의 상태가 바뀌면 실행되도록 한다
 * - useEffect안에서 total, avg 상수를 만들어서 계산한 후 set을 해준다.
 * - total은 reduce라는 함수를 사용
 * - reduce는 배열에서 전체 반복을 하여 하나씩 꺼내서 리턴해준다
 * - reduce(( 결과값, 현재값 ) => { 결과값 + 현재값 }, 초기값 )
 * -                 =>   결과값 += 결과값 + 현재값
 * - 결과값 처음에는 초기값이 들어감
 * - avg = total / array.length
 * - 소수점을 끊어서 출력하기 위해 .tofixed(소수점자리)
 * - 결과적으로 출력되는 부분에 소수점 처리
 *
 * 9. 처음에 렌더링할때는 0/0으로 되고 NaN으로 뜬다
 * - 삼항연산자를 이용해서 total이 0이면 0출력하도록 한다 or length가 0이상일때 실행되도록 한다
 *
 * 10. 수정 삭제 기능을 만든다
 *
 * 11. 삭제버튼이 눌러졌을때 실행될 이벤트 함수를 만든다
 * - 지우고자 하는 id값을 프로퍼티로 가져와 id값에 해당하는 객체를 제외하고 배열에 다시 담아준다
 * - filter를 사용한다
 * - 그냥 onClick={}에 사용하면 렌더링이 될때 실행이 되버림
 * - 그래서 onClick={() => {함수}}로 정의형태로 해야한다.
 *
 * 12. 수정을 눌렀을때 실행될 이벤트 함수를 만든다.
 * - 수정할 객체의 id값을 프로퍼티로 가져온다.
 * - onClick={() => {함수}}로 정의형태로 해야한다.
 * - id값을 받아 상태에 저장해두기 위해 useState로 만들어둔다
 * - 저장해둔 id값이 해당하는 Id값이 같으면 버튼이 보이고 다르면 안보이게 삼항연산자로 만든다
 *
 * 13. 확인 취소 버튼도 위와같이 만든다
 *
 * 14. 수정 버튼을 누르면 input값도 해당 객체의 값으로 바뀌게 한다
 * - id를 프로퍼티로 가져와 filter로 id값이 같은것을 찾아온다 (배열 형태이기 때문에 0번 인덱스를 가져와야함)
 * - input에 value속성이 없으면 바뀌는게 안 보임
 *
 * 15. 취소 버튼을 눌렀을때 실행될 이벤트 함수를 만든다
 * - 저장해뒀던 id값과 inputValue값을 비워주도록 한다
 *
 * 16. 확인 버튼을 눌렀을때 실행될 이벤트 함수를 만든다
 * - 마지막엔 취소 버튼의 이벤트 함수를 호출해서 수정이 완료되면 값을 비워주도록 한다
 * - 객체를 저장해뒀던 배열을 map을 돌려서 수정해준다
 * - map에서 return으로 반환, 조건을 줘서 저장된 id값과 map으로 가져온 객체의 id값이 같으면 inputValue로 수정이 되고 다르면 수정되지 않도록 한다
 * - 이렇게 하면 indexOf를 사용할 필요가 없다
 * - map을 사용해 수정된 정보가 저장되어있는 배열을 set으로 다시 저장한다
 *
 * -----------------------------------------------------------------
 *
 * ##### id에 useRef 사용하는 이유 #####
 * - 이벤트 함수가 일어나면 다시 재렌더링 되면서 초기값으로 다시 초기화 됨
 * - 그럼 useState를 쓰면 안되나? => set하면 비동기라서 적용이 안됨 => 그럼 useEffect를 사용하게 됨 => 코드가 길어짐, 렌더링도 상태가 바뀔때 두번 일어나게 됨
 * - 하지만 useRef를 사용하면 재렌더링이 되어도 값은 바뀌지 않는다
 */

import React, { useEffect, useRef, useState } from "react";

function StudentArrayPage3() {
    const [studentList, setStudentList] = useState([]);
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        score: "",
    });

    const [scoreData, setScoreData] = useState({
        total: 0,
        avg: 0,
    });

    const [updateId, setUpdateId] = useState(0);

    const staticId = useRef(0);

    useEffect(() => {
        const total = studentList.reduce(
            (result, student) => result + student.score,
            0
        );
        const avg = studentList.length === 0 ? 0 : total / studentList.length;

        setScoreData({
            total,
            avg,
        });
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
            id: (staticId.current += 1),
            name: inputValue.name,
            score: parseInt(inputValue.score),
        };

        setStudentList([...studentList, student]);
    };

    const handleRemoveClick = (id) => {
        setStudentList(studentList.filter((student) => student.id !== id));
    };

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter((student) => student.id === id)[0]);
    };

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            score: "",
        });
    };

    const handleUpdateSubmitClick = () => {
        setStudentList(
            studentList.map((student) => {
                return student.id !== updateId
                    ? student
                    : {
                          id: updateId,
                          name: inputValue.name,
                          score: parseInt(inputValue.score),
                      };
            })
        );

        handleCancelClick();
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="id"
                    value={inputValue.id}
                    placeholder="ID"
                    disabled={true}
                />
                <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleInputChange}
                    placeholder="이름"
                />
                <input
                    type="text"
                    name="score"
                    value={inputValue.score}
                    onChange={handleInputChange}
                    placeholder="점수"
                />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.score}</td>
                                <td>
                                    {updateId !== student.id ? (
                                        <button
                                            onClick={() =>
                                                handleUpdateClick(student.id)
                                            }
                                        >
                                            수정
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleUpdateSubmitClick}
                                        >
                                            확인
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {updateId !== student.id ? (
                                        <button
                                            onClick={() =>
                                                handleRemoveClick(student.id)
                                            }
                                        >
                                            삭제
                                        </button>
                                    ) : (
                                        <button onClick={handleCancelClick}>
                                            취소
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage3;
