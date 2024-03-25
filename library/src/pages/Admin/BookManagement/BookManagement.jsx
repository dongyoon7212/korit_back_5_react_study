/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BookManagement(props) {
    return (
        <div>
            <div>
                <h1>도서 관리</h1>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>도서코드</th>
                                <td></td>
                                <th>ISBN</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>도서형식</th>
                                <td></td>
                                <th>카테고리</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>도서명</th>
                                <td colSpan={3}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default BookManagement;
