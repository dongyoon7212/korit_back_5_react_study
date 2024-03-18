import instance from "../utils/instance";

export const getPricipalRequest = async () => {
    return await instance.get("/account/principal");
};
