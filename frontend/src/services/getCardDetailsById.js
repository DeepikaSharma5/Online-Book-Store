import axiosInstance from "./axiosInstance";

export const getCardDetailsById = async (name) => {
  try {
    const res = await axiosInstance.get(`/card/${name}`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getCardDetailsById };
