import { productAxiosInstance } from "../axiosInstance";
import { normalizeImageUrl } from "../normalizeImageUrl";

export const getProductsAPI = async () => {
  const response = await productAxiosInstance.get("/api/get-product");
  return Array.isArray(response.data)
    ? response.data.map((item) => ({
        ...item,
        image_url: normalizeImageUrl(item?.image_url),
      }))
    : [];
};
