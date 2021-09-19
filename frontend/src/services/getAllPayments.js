import axiosInstance from "./axiosInstance";
export const allPayments = async () => {
  try {
    const res = await axiosInstance.get(`/payment/view`, {
      data: null,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
