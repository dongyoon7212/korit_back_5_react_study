/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid";

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
    const [uploadFiles, setUploadFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [progressPercent, setProgressPercent] = useState(0);
    const [url, setUrl] = useState("");

    const imgFileRef = useRef();

    useEffect(() => {
        setUrl(!localStorage.getItem("url") ? "" : localStorage.getItem("url"));
    }, []);

    const handleImgFileChange = (e) => {
        //map함수를 사용하기 위해 일반 배열로 바꿔준다.
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);

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

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        const storageRef = ref(storage, `files/test/${uuid() + file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // 진행 중 상태
                setProgressPercent(
                    Math.round(
                        snapshot.bytesTransferred / snapshot.totalBytes
                    ) * 100
                );
            },
            (error) => {
                alert(error);
            }, // 에러 처리
            () => {
                // 완료된 후 처리
                getDownloadURL(storageRef).then((url) => {
                    localStorage.setItem("url", url);
                    setUrl(url);
                    setPreviews([]);
                });
            }
        );
    };

    return (
        <div css={layout}>
            <div css={imageLayout}>
                <img src={url} alt="" />
            </div>
            {previews.map((preview, index) => (
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt="" />
                    </div>
                    <Line
                        percent={progressPercent}
                        strokeWidth={1}
                        strokeLinecap={"round"}
                        strokeColor={"#26f813"}
                    />
                </>
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
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;
