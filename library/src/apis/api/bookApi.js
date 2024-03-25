import instance from "../utils/instance";

export const registerBookRequest = async (data) => {
    return await instance.post("/admin/book", data);
};
