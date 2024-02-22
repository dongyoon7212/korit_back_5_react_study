import React, { useMemo } from "react";

function SearchPage() {
    const categorys = useMemo(
        [
            {
                categoryId: 1,
                categoryName: "역사",
            },
            {
                categoryId: 2,
                categoryName: "문학",
            },
            {
                categoryId: 3,
                categoryName: "컴퓨터",
            },
        ],
        []
    );

    const books = useMemo(
        () => [
            {
                bookId: 1,
                bookName: "java 역사",
                categoryId: 1,
            },
            {
                bookId: 2,
                bookName: "컴퓨터 역사",
                categoryId: 1,
            },
            {
                bookId: 3,
                bookName: "소설 역사",
                categoryId: 1,
            },
            {
                bookId: 4,
                bookName: "문학이란",
                categoryId: 2,
            },
            {
                bookId: 5,
                bookName: "역사를 말하다.",
                categoryId: 2,
            },
        ],
        []
    );

    return <div></div>;
}

export default SearchPage;
