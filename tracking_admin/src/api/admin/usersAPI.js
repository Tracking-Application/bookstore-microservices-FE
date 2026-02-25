import { userAxiosInstance } from "../axiosInstance";

export const getAllCustomersAPI = async () => {
  const response = await userAxiosInstance.get("/api/all/users");
  return Array.isArray(response?.data) ? response.data : [];
};

export default {
  getAllCustomersAPI,
};
