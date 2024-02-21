import React, { useEffect, useRef, useState } from "react";

function StudentArrayPage2() {
    const [scoreList, setScoreList] = useState([]);
    const [inputValue, setInputValue] = useState({
        id: 0,
        name: "",
        score: 0,
    });
    const [updateId, setUpdateId] = useState();

    const [scoreDatas, setScoreDatas] = useState({
        total: 0,
        avg: 0,
    });

    const staticId = useRef(0);

    useEffect(() => {
        handleScoreDatas();
    }, [scoreList]);

    const handleScoreDatas = () => {
        const totalNum = [];
        for (let i = 0; i < scoreList.length; i++) {
            totalNum.push(scoreList[i].score);
        }

        let totalScore = 0;
        for (let i = 0; i < totalNum.length; i++) {
            totalScore += parseInt(totalNum[i]);
        }

        let avgScore = 0;
        if (scoreList.length > 0) {
            avgScore = totalScore / scoreList.length;
        } else {
            avgScore = 0;
        }
        setScoreDatas({
            total: totalScore,
            avg: avgScore.toFixed(2),
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleAddClick = () => {
        const score = {
            ...inputValue,
            id: (staticId.current += 1),
        };
        setScoreList([...scoreList, score]);
    };

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(scoreList.filter((score) => score.id === id)[0]);
    };

    const handleUpdateSubmitClick = () => {
        const findIndex = scoreList.indexOf(
            scoreList.filter((score) => score.id === updateId)[0]
        );

        const updateScoreList = [...scoreList];
        updateScoreList[findIndex] = inputValue;

        setScoreList(updateScoreList);
    };

    const handleCancelCilck = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            score: "",
        });
    };

    const handleDeleteClick = (id) => {
        setScoreList([...scoreList.filter((score) => score.id !== id)]);
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
                    placeholder="이름"
                    onChange={handleInputChange}
                    value={inputValue.name}
                />
                <input
                    type="text"
                    name="score"
                    placeholder="점수"
                    onChange={handleInputChange}
                    value={inputValue.score}
                />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table style={{border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th style={{border:"1px solid black"}}>ID</th>
                        <th style={{border:"1px solid black"}}>이름</th>
                        <th style={{border:"1px solid black"}}>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreList.map((score) => {
                        return (
                            <tr key={score.id}>
                                <td>{score.id}</td>
                                <td>{score.name}</td>
                                <td>{score.score}</td>
                                <td>
                                    {updateId !== score.id ? (
                                        <button
                                            onClick={() => {
                                                handleUpdateClick(score.id);
                                            }}
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
                                    {updateId !== score.id ? (
                                        <button
                                            onClick={() => {
                                                handleDeleteClick(score.id);
                                            }}
                                        >
                                            삭제
                                        </button>
                                    ) : (
                                        <button onClick={handleCancelCilck}>
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
                        <th colSpan={2}>{scoreDatas.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreDatas.avg}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;
