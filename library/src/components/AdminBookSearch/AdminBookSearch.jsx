/** @jsxImportSource @emotion/react */
import Select from "react-select";
import * as s from "./style";
import { useReactSelect } from "../../hooks/useReactSelect";
import { useBookRegisterInput } from "../../hooks/useBookRegisterInput";
import { useQuery } from "react-query";
import { searchBooksRequest } from "../../apis/api/bookApi";

function AdminBookSearch({
    searchBooksRefresh,
    selectStyle,
    bookTypeOptions,
    categoryOptions,
}) {
    const searchBooksQuery = useQuery(
        ["searchBooksQuery"],
        async () => await searchBooksRequest(),
        {
            refetchOnWindowFocus: false,
            enabled: searchBooksRefresh,
            onSuccess: (response) => {
                console.log(response);
                
            },
            onError: (error) => {},
        }
    );

    const searchSubmit = () => {
        console.log([
            selectedBookType.option.value,
            selectedCategory.option.value,
            selectedSearchType.option.value,
        ]);
    };

    const selectedBookType = useReactSelect({ value: 0, label: "전체" });
    const selectedCategory = useReactSelect({ value: 0, label: "전체" });
    const selectedSearchType = useReactSelect({ value: 0, label: "전체" });
    const searchText = useBookRegisterInput(searchSubmit);

    const searchTypeOptions = [
        { value: 0, label: "전체" },
        { value: 1, label: "도서명" },
        { value: 2, label: "저자명" },
        { value: 3, label: "출판사" },
        { value: 4, label: "ISBN" },
    ];

    const selectStyle2 = {
        control: (baseStyle, state) => ({
            ...baseStyle,
            borderRadius: "0px",
            border: "none",
            borderRight: "1px solid #dbdbdb",
            outline: "none",
            boxShadow: "none",
        }),
    };

    return (
        <div>
            <div css={s.searchBar}>
                <Select
                    styles={selectStyle2}
                    options={[{ value: 0, label: "전체" }, ...bookTypeOptions]}
                    defaultValue={selectedBookType.defaultValue}
                    value={selectedBookType.option}
                    onChange={selectedBookType.handleOnChange}
                />
                <Select
                    styles={selectStyle2}
                    options={[{ value: 0, label: "전체" }, ...categoryOptions]}
                    defaultValue={selectedCategory.defaultValue}
                    value={selectedCategory.option}
                    onChange={selectedCategory.handleOnChange}
                />
                <Select
                    styles={selectStyle}
                    options={searchTypeOptions}
                    defaultValue={selectedSearchType.defaultValue}
                    value={selectedSearchType.option}
                    onChange={selectedSearchType.handleOnChange}
                />
                <input
                    css={s.searchInput}
                    type="text"
                    value={searchText.value}
                    onChange={searchText.handleOnChange}
                    onKeyDown={searchText.handleOnKeyDown}
                />
                <button css={s.searchButton}>검색</button>
            </div>
            <div css={s.tableLayout}>
                <table css={s.table}>
                    <thead>
                        <tr css={s.theadTr}>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>코드번호</th>
                            <th>도서명</th>
                            <th>저자명</th>
                            <th>출판사명</th>
                            <th>ISBN</th>
                            <th>도서형식</th>
                            <th>카테고리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div></div>
        </div>
    );
}

export default AdminBookSearch;
