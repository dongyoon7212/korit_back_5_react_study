import instance from "../utils/instance";

export const registerBookRequest = async (data) => {
    return await instance.post("/admin/book", data);
};

export const searchBooksRequest = async (params) => {
    return await instance.get("/admin/books", { params });
};

export const getBookCountRequest = async (params) => {
    return await instance.get("/admin/books/count", { params });
};
