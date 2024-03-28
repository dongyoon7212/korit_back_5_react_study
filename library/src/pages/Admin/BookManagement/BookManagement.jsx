/** @jsxImportSource @emotion/react */
import Select from "react-select";
import { FaRegFolderOpen } from "react-icons/fa";
import RightTopButton from "../../../components/RightTopButton/RightTopButton";
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style";
import { useMutation, useQuery } from "react-query";
import {
    getAllBookTypeRequest,
    getAllCategoryRequest,
} from "../../../apis/api/options";
import { useEffect, useRef, useState } from "react";
import { useBookRegisterInput } from "../../../hooks/useBookRegisterInput";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import {
    registerBookRequest,
    updateBookRequest,
} from "../../../apis/api/bookApi";
import AdminBookSearch from "../../../components/AdminBookSearch/AdminBookSearch";
import { useRecoilState } from "recoil";
import { selectedBookState } from "../../../atoms/adminSelectedBookAtom";

function BookManagement(props) {
    const [bookTypeOptions, setBookTypeOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [actionStatus, setActionStatus] = useState(0); // 0 = 선택, 1 = 추가, 2 = 수정, 3 = 삭제
    const [isDelete, setDelete] = useState(false);
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

    const registerBookMutation = useMutation({
        mutationKey: "registerBookMutation",
        mutationFn: registerBookRequest,
        onSuccess: (response) => {
            alert("등록완료");
            window.location.replace("/admin/book/management?page=1");
        },
        onError: (error) => {},
    });

    const updateBookMutation = useMutation({
        mutationKey: "updateBookMutation",
        mutationFn: updateBookRequest,
        onSuccess: (response) => {
            alert("수정완료");
            window.location.reload();
        },
    });

    const nextInput = (ref) => {
        ref.current.focus();
    };

    const submit = () => {
        if (actionStatus === 1) {
            registerBookMutation.mutate({
                isbn: isbn.value,
                bookTypeId: bookTypeId.value.value,
                categoryId: categoryId.value.value,
                bookName: bookName.value,
                authorName: authorName.value,
                publisherName: publisherName.value,
                coverImgUrl: imgUrl.value,
            });
        } else if (actionStatus === 2) {
            updateBookMutation.mutate({
                bookId: bookId.value,
                isbn: isbn.value,
                bookTypeId: bookTypeId.value.value,
                categoryId: categoryId.value.value,
                bookName: bookName.value,
                authorName: authorName.value,
                publisherName: publisherName.value,
                coverImgUrl: imgUrl.value,
            });
        } else if (actionStatus === 3) {
            setDelete(() => true);
        }

        cancel();
    };

    const cancel = () => {
        bookId.setValue(() => 0);
        isbn.setValue(() => "");
        bookTypeId.setValue(() => null);
        categoryId.setValue(() => null);
        bookName.setValue(() => "");
        authorName.setValue(() => "");
        publisherName.setValue(() => "");
        imgUrl.setValue(() => "");
        setActionStatus(() => 0);
    };

    const bookId = useBookRegisterInput(nextInput, inputRefs[1]);
    const isbn = useBookRegisterInput(nextInput, inputRefs[2]);
    const bookTypeId = useBookRegisterInput(nextInput, inputRefs[3]);
    const categoryId = useBookRegisterInput(nextInput, inputRefs[4]);
    const bookName = useBookRegisterInput(nextInput, inputRefs[5]);
    const authorName = useBookRegisterInput(nextInput, inputRefs[6]);
    const publisherName = useBookRegisterInput(nextInput, inputRefs[7]);
    const imgUrl = useBookRegisterInput(submit);
    const [selectedBook] = useRecoilState(selectedBookState);

    useEffect(() => {
        bookId.setValue(() => selectedBook.bookId);
        isbn.setValue(() => selectedBook.isbn);
        bookTypeId.setValue(() => ({
            value: selectedBook.bookTypeId,
            label: selectedBook.bookTypeName,
        }));
        categoryId.setValue(() => ({
            value: selectedBook.categoryId,
            label: selectedBook.categoryName,
        }));
        bookName.setValue(() => selectedBook.bookName);
        authorName.setValue(() => selectedBook.authorName);
        publisherName.setValue(() => selectedBook.publisherName);
        imgUrl.setValue(() => selectedBook.coverImgUrl);
    }, [selectedBook]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            e.target.value = "";
            return;
        }
        if (!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(
            storage,
            `library/book/cover/${uuid()}_${files[0].name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {},
            () => {
                alert("업로드가 완료되었습니다.");
                getDownloadURL(storageRef).then((url) => {
                    imgUrl.setValue(() => url);
                });
            }
        );
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
                <div>
                    {actionStatus === 0 ? (
                        <>
                            <RightTopButton onClick={() => setActionStatus(1)}>
                                추가
                            </RightTopButton>
                            <RightTopButton onClick={() => setActionStatus(2)}>
                                수정
                            </RightTopButton>
                            <RightTopButton onClick={() => setActionStatus(3)}>
                                삭제
                            </RightTopButton>
                        </>
                    ) : (
                        <>
                            <RightTopButton onClick={submit}>
                                확인
                            </RightTopButton>
                            <RightTopButton onClick={cancel}>
                                취소
                            </RightTopButton>
                        </>
                    )}
                </div>
            </div>
            <div css={s.topLayout}>
                <table css={s.registerTable}>
                    <tbody>
                        <tr>
                            <th css={s.registerTh}>도서코드</th>
                            <td>
                                <BookRegisterInput
                                    value={bookId.value}
                                    bookref={inputRefs[0]}
                                    onChange={bookId.handleOnChange}
                                    onKeyDown={bookId.handleOnKeyDown}
                                    isDisabled={true}
                                />
                            </td>
                            <th css={s.registerTh}>ISBN</th>
                            <td>
                                <BookRegisterInput
                                    value={isbn.value}
                                    bookref={inputRefs[1]}
                                    onChange={isbn.handleOnChange}
                                    onKeyDown={isbn.handleOnKeyDown}
                                    isDisabled={![1, 2].includes(actionStatus)}
                                />
                            </td>
                            <td rowSpan={5} css={s.preview}>
                                <div css={s.imageBox}>
                                    <img
                                        src={
                                            !imgUrl.value
                                                ? "data:image/png;base64,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"
                                                : imgUrl.value
                                        }
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
                                    value={bookTypeId.value}
                                    onKeyDown={bookTypeId.handleOnKeyDown}
                                    onChange={bookTypeId.handleOnChange}
                                    ref={inputRefs[2]}
                                    isDisabled={![1, 2].includes(actionStatus)}
                                />
                            </td>
                            <th css={s.registerTh}>카테고리</th>
                            <td>
                                <Select
                                    styles={selectStyle}
                                    options={categoryOptions}
                                    value={categoryId.value}
                                    onKeyDown={categoryId.handleOnKeyDown}
                                    onChange={categoryId.handleOnChange}
                                    ref={inputRefs[3]}
                                    isDisabled={![1, 2].includes(actionStatus)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서명</th>
                            <td colSpan={3}>
                                <BookRegisterInput
                                    value={bookName.value}
                                    bookref={inputRefs[4]}
                                    onChange={bookName.handleOnChange}
                                    onKeyDown={bookName.handleOnKeyDown}
                                    isDisabled={![1, 2].includes(actionStatus)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>저자명</th>
                            <td>
                                <BookRegisterInput
                                    value={authorName.value}
                                    bookref={inputRefs[5]}
                                    onChange={authorName.handleOnChange}
                                    onKeyDown={authorName.handleOnKeyDown}
                                    isDisabled={![1, 2].includes(actionStatus)}
                                />
                            </td>
                            <th css={s.registerTh}>출판사</th>
                            <td>
                                <BookRegisterInput
                                    value={publisherName.value}
                                    bookref={inputRefs[6]}
                                    onChange={publisherName.handleOnChange}
                                    onKeyDown={publisherName.handleOnKeyDown}
                                    isDisabled={![1, 2].includes(actionStatus)}
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
                                            bookref={inputRefs[7]}
                                            onChange={imgUrl.handleOnChange}
                                            onKeyDown={imgUrl.handleOnKeyDown}
                                            isDisabled={
                                                ![1, 2].includes(actionStatus)
                                            }
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
                                        disabled={
                                            ![1, 2].includes(actionStatus)
                                        }
                                    >
                                        <FaRegFolderOpen />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AdminBookSearch
                selectStyle={selectStyle}
                bookTypeOptions={bookTypeOptions}
                categoryOptions={categoryOptions}
                isDelete={isDelete}
                setDelete={setDelete}
            />
        </div>
    );
}

export default BookManagement;
