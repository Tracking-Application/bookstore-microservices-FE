import { productAxiosInstance } from "../axiosInstance";
import { normalizeImageUrl } from "../normalizeImageUrl";

// Get all products
export const getAllProductsAPI = async () => {
  const response = await productAxiosInstance.get("/api/get-product");
  return Array.isArray(response.data)
    ? response.data.map((item) => ({
        ...item,
        image_url: normalizeImageUrl(item?.image_url),
      }))
    : [];
};

// Update product
export const updateProductAPI = async (productId, formData) => {
  const response = await productAxiosInstance.put(
    `/api/update-product/${productId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return {
    ...response.data,
    image_url: normalizeImageUrl(response?.data?.image_url),
  };
};

// Delete product
export const deleteProductAPI = async (productId) => {
  const response = await productAxiosInstance.delete(`/api/delete-product/${productId}`);
  return response.data;
};

export default {
  getAllProductsAPI,
  updateProductAPI,
  deleteProductAPI,
};
