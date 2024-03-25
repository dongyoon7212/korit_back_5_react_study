/** @jsxImportSource @emotion/react */
import Select from "react-select";
import { FaRegFolderOpen } from "react-icons/fa";

import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style";
import { useQuery } from "react-query";
import {
    getAllBookTypeRequest,
    getAllCategoryRequest,
} from "../../../apis/api/options";
import { useRef, useState } from "react";
import { useBookRegisterInput } from "../../../hooks/useBookRegisterInput";

function BookManagement(props) {
    const [bookTypeOptions, setBookTypeOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const fileRef = useRef();
    const inputRefs = [
        useRef(), // 0 bookId
        useRef(), // 1 isbn
        useRef(), // 2 도서형식
        useRef(), // 3 카테고리
        useRef(), // 4 도서명
        useRef(), // 5 저자명
        useRef(), // 6 출판사
        useRef(), // 7 URL
    ];

    const nextInput = (ref) => {
        ref.current.focus();
    };

    const submit = () => {
        // 저장 요청
    };

    const bookId = useBookRegisterInput(nextInput, inputRefs[1]);
    const isbn = useBookRegisterInput(nextInput, inputRefs[2]);
    const bookName = useBookRegisterInput(nextInput, inputRefs[5]);
    const authorName = useBookRegisterInput(nextInput, inputRefs[6]);
    const publisherName = useBookRegisterInput(nextInput, inputRefs[7]);
    const imgUrl = useBookRegisterInput(submit);

    const bookTypeQuery = useQuery(["bookTypeQuery"], getAllBookTypeRequest, {
        onSuccess: (response) => {
            setBookTypeOptions(() =>
                response.data.map((bookType) => {
                    return {
                        value: bookType.bookTypeId,
                        label: bookType.bookTypeName,
                    };
                })
            );
        },
        onError: (error) => {
            console.log(error);
        },
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const categoryQuery = useQuery(["categoryQuery"], getAllCategoryRequest, {
        onSuccess: (response) => {
            setCategoryOptions(() =>
                response.data.map((category) => {
                    return {
                        value: category.categoryId,
                        label: category.categoryName,
                    };
                })
            );
        },
        onError: (error) => {
            console.log(error);
        },
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const handleFileChange = (e) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL();
    };

    const selectStyle = {
        control: (baseStyle, state) => ({
            ...baseStyle,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none",
        }),
    };

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>도서 관리</h1>
            </div>
            <div css={s.topLayout}>
                <table css={s.registerTable}>
                    <tbody>
                        <tr>
                            <th css={s.registerTh}>도서코드</th>
                            <td>
                                <BookRegisterInput
                                    value={bookId.value}
                                    ref={inputRefs[0]}
                                    onChange={bookId.handleOnChange}
                                    onKeyUp={bookId.handleOnKeyUp}
                                />
                            </td>
                            <th css={s.registerTh}>ISBN</th>
                            <td>
                                <BookRegisterInput
                                    value={isbn.value}
                                    ref={inputRefs[1]}
                                    onChange={isbn.handleOnChange}
                                    onKeyUp={isbn.handleOnKeyUp}
                                />
                            </td>
                            <td rowSpan={6} css={s.preview}>
                                <div css={s.imageBox}>
                                    <img
                                        src=" http://ebook.seocholib.or.kr/upload/20553/content/ebook/4801155360737/L4801155360737.jpg"
                                        alt=""
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서형식</th>
                            <td>
                                <Select
                                    styles={selectStyle}
                                    options={bookTypeOptions}
                                />
                            </td>
                            <th css={s.registerTh}>카테고리</th>
                            <td>
                                <Select
                                    styles={selectStyle}
                                    options={categoryOptions}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서명</th>
                            <td colSpan={3}>
                                <BookRegisterInput
                                    value={bookName.value}
                                    ref={inputRefs[4]}
                                    onChange={bookName.handleOnChange}
                                    onKeyUp={bookName.handleOnKeyUp}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>저자명</th>
                            <td>
                                <BookRegisterInput
                                    value={authorName.value}
                                    ref={inputRefs[5]}
                                    onChange={authorName.handleOnChange}
                                    onKeyUp={authorName.handleOnKeyUp}
                                />
                            </td>
                            <th css={s.registerTh}>출판사</th>
                            <td>
                                <BookRegisterInput
                                    value={publisherName.value}
                                    ref={inputRefs[6]}
                                    onChange={publisherName.handleOnChange}
                                    onKeyUp={publisherName.handleOnKeyUp}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>표지URL</th>
                            <td colSpan={3}>
                                <div css={s.imgUrl}>
                                    <span css={s.imgUrlBox}>
                                        <BookRegisterInput
                                            value={imgUrl.value}
                                            ref={inputRefs[7]}
                                            onChange={imgUrl.handleOnChange}
                                            onKeyUp={imgUrl.handleOnKeyUp}
                                        />
                                    </span>
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                        ref={fileRef}
                                    />
                                    <button
                                        css={s.imgAddButton}
                                        onClick={() => fileRef.current.click()}
                                    >
                                        <FaRegFolderOpen />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div></div>
            </div>
        </div>
    );
}

export default BookManagement;
