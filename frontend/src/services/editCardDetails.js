import axiosInstance from "../axiosInstance";

export const editCardDetails = async (id, requestBody) => {
  try {
    console.log(requestBody);

    const res = await axiosInstance.put(`/card/view/${id}`, {
      requestBody,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export default { editCardDetails };
