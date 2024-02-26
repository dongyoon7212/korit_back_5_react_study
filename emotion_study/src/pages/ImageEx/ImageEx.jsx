/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    margin-bottom: 20px;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx() {
    const [previews, setPreviews] = useState([]);

    const imgFileRef = useRef();

    const handleImgFileChange = (e) => {
        //map함수를 사용하기 위해 일반 배열로 바꿔준다.
        const files = Array.from(e.target.files);

        let promises = [];

        promises = files.map(
            (file) =>
                new Promise((resolve) => {
                    const fileReader = new FileReader();

                    fileReader.onload = (e) => {
                        console.log(e.target.result);
                        resolve(e.target.result);
                    };

                    fileReader.readAsDataURL(file);
                })
        );

        // for (let file of e.target.files) {
        //     promises = [
        //         ...promises,
        //         new Promise((resolve) => {
        //             const fileReader = new FileReader();

        //             fileReader.onload = (e) => {
        //                 console.log(e.target.result);
        //                 resolve(e.target.result);
        //             };

        //             fileReader.readAsDataURL(file);
        //         }),
        //     ];
        // }

        Promise.all(promises).then((result) => {
            console.log(result);
            setPreviews(result);
        });
    };

    return (
        <div css={layout}>
            {previews.map((preview, index) => (
                <div key={index} css={imageLayout}>
                    <img src={preview} alt="" />
                </div>
            ))}
            <input
                style={{ display: "none" }}
                type="file"
                multiple
                ref={imgFileRef}
                onChange={handleImgFileChange}
            />
            <button onClick={() => imgFileRef.current.click()}>
                이미지 불러오기
            </button>
        </div>
    );
}

export default ImageEx;
