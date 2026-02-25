import { productAxiosInstance } from "../axiosInstance";
import { normalizeImageUrl } from "../normalizeImageUrl";

const addProductAPI = async (formData) => {
  // Note: We don't set Content-Type here because axios
  // automatically sets it to multipart/form-data when it sees FormData
  const response = await productAxiosInstance.post("/api/add-product", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return {
    ...response.data,
    image_url: normalizeImageUrl(response?.data?.image_url),
  };
};

export default addProductAPI;
