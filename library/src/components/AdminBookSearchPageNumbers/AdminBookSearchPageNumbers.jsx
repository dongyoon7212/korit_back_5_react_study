/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function AdminBookSearchPageNumbers({ bookCount }) {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [numbers, setNumbers] = useState([]);
    const maxPageNumber = bookCount.maxPageNumber;

    useEffect(() => {
        const startPageNumber =
            page % 10 === 0 ? page - 9 : page - (page % 10) + 1;
        const endPageNumber =
            startPageNumber + 9 > maxPageNumber
                ? maxPageNumber
                : startPageNumber + 9;
        let pageNumbers = [];

        for (let i = startPageNumber; i < endPageNumber; i++) {
            pageNumbers = [...pageNumbers, i];
        }

        setNumbers(() => pageNumbers);
    }, [page, bookCount]);

    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}>
                {page !== 1 && (
                    <Link
                        css={s.pageButton(false)}
                        to={`/admin/book/management?page=${page - 1}`}
                    >
                        <FaChevronLeft />
                    </Link>
                )}
                {numbers.map((number) => (
                    <Link
                        css={s.pageButton(number === page)}
                        key={number}
                        to={`/admin/book/management?page=${number}`}
                    >
                        {number}
                    </Link>
                ))}
                {page !== maxPageNumber && (
                    <Link
                        css={s.pageButton(false)}
                        to={`/admin/book/management?page=${page + 1}`}
                    >
                        <FaChevronRight />
                    </Link>
                )}
            </div>
            <div css={s.pageCount}></div>
        </div>
    );
}

export default AdminBookSearchPageNumbers;
