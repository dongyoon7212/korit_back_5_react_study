/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";

function AdminBookSearchPageNumbers({ bookCount }) {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const [numbers, setNumbers] = useState();

    useEffect(() => {
        const maxPageNumber = bookCount.maxPageNumber;
        const startPageNumber =
            page % 10 === 0 ? page - 9 : page - (page % 10) + 1;
        const endPageNumber =
            startPageNumber + 9 > maxPageNumber
                ? maxPageNumber
                : startPageNumber + 9;
    }, [page, bookCount]);

    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}></div>
            <div css={s.pageCount}></div>
        </div>
    );
}

export default AdminBookSearchPageNumbers;
