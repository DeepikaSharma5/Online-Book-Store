import axiosInstance from "./axiosInstance";

export const getPaymentById = async (id) => {
  try {
    const res = await axiosInstance.get(`/payment/${id}`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getPaymentById };
