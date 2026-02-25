import { orderAxiosInstance } from "../axiosInstance";

export const createOrderAPI = async (orderData) => {
  try {
    const response = await orderAxiosInstance.post("/api/orders/create", orderData);
    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new Error(
        "Order create API is not available in running backends (ports 8001-8004). Please run the order service that exposes POST /api/orders/create.",
      );
    }
    throw error.response ? error.response.data : new Error("An unexpected error occurred");
  }
};
