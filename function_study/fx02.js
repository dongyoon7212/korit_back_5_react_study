응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const responseData = {
        title: "응답데이터",
        dataList: [
            {
                name: "이동윤",
                age: 26,
            },
            {
                name: "삼동윤",
                age: 27,
            },
            {
                name: "사동윤",
                age: 28,
            },
        ],
    };

    console.log(타이틀_컴포넌트(responseData.title));
    // console.log(테이블_TR_TD_컴포넌트(responseData.dataList[0]));
    // console.log(테이블_TR_TD_컴포넌트(responseData.dataList[1]));
    // console.log(테이블_TR_TD_컴포넌트(responseData.dataList[2]));
    for (let student of responseData.dataList) {
        console.log(테이블_TR_TD_컴포넌트(student));
    }

    // 비구조 할당
    const 타이틀 = responseData.title;
    const 학생들 = responseData.dataList;

    const { title, dataList } = responseData;
    const { name, age } = dataList[0];

    for (let 학생 of dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생, title));
    }
}

function 타이틀_컴포넌트(타이틀) {
    return `
        <h1>${타이틀}</h1>
    `;
}

function 테이블_TR_TD_컴포넌트({ name, age }, title) {
    console.log(title);
    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;
}
