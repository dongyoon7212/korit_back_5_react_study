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
    overflow: hidden;
    width: 200px;
    height: 200px;
    & > img {
        width: 100%;
    }
`;

function ImageEx() {
    const [preview, setPreview] = useState([]);

    const imgFileRef = useRef();

    const handleImgFileChange = (e) => {
        const fileArr = e.target.files;

        let fileURLs = [];

        let file;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

        for (let i = 0; i < filesLength; i++) {
            file = fileArr[i];

            let reader = new FileReader();
            reader.onload = () => {
                fileURLs[i] = reader.result;
                setPreview([...fileURLs]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div css={layout}>
            <div css={imageLayout}>
                <img src={preview[0]} alt="" />
            </div>
            <div css={imageLayout}>
                <img src={preview[1]} alt="" />
            </div>
            <div css={imageLayout}>
                <img src={preview[2]} alt="" />
            </div>
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
