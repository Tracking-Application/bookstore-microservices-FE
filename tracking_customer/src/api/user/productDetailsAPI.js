import { productAxiosInstance } from "../axiosInstance";
import { normalizeImageUrl } from "../normalizeImageUrl";

export const getProductDetailsAPI = async (productId) => {
  const response = await productAxiosInstance.get(`/api/product/${productId}`);
  return {
    ...response.data,
    image_url: normalizeImageUrl(response?.data?.image_url),
  };
};
