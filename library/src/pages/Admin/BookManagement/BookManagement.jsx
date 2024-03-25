/** @jsxImportSource @emotion/react */
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style";

function BookManagement(props) {
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
                            <td></td>
                            <th css={s.registerTh}>카테고리</th>
                            <td></td>
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
