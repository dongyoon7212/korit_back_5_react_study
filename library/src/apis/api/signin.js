import instance from "../utils/instance";

export const signinRequest = (data) => {
    // try {
    const response = instance.post("/auth/signin", data);
    return response;
    // } catch {}
};
