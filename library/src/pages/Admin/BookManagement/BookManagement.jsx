/** @jsxImportSource @emotion/react */
import Select from "react-select";
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style";
import { useQuery } from "react-query";
import {
    getAllBookTypeRequest,
    getAllCategoryRequest,
} from "../../../apis/api/options";
import { useState } from "react";

function BookManagement(props) {
    const [bookTypeOptions, setBookTypeOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);

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
                                <BookRegisterInput />
                            </td>
                            <th css={s.registerTh}>ISBN</th>
                            <td>
                                <BookRegisterInput />
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
                                <BookRegisterInput />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>저자명</th>
                            <td>
                                <BookRegisterInput />
                            </td>
                            <th css={s.registerTh}>출판사</th>
                            <td>
                                <BookRegisterInput />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>표지URL</th>
                            <td colSpan={3}> </td>
                        </tr>
                    </tbody>
                </table>
                <div></div>
            </div>
        </div>
    );
}

export default BookManagement;
