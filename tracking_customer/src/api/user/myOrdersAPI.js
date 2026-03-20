import { orderAxiosInstance } from "../axiosInstance";

export const fetchMyOrders = async (userId) => {
  try {
    const response = await orderAxiosInstance.get(`/api/my-orders/${userId}`);
    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new Error(
        "My orders API is not available in running backends (ports 8001-8004). Please run the order service that exposes GET /api/my-orders/{userId}.",
      );
    }
    throw error;
  }
};
