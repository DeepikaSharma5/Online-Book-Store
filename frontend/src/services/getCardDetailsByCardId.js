import axiosInstance from "./axiosInstance";

export const getCardDetailsByCardId = async (id) => {
  try {
    const res = await axiosInstance.get(`/card/view/${id}`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getCardDetailsByCardId };
