import { orderAxiosInstance } from "../axiosInstance";

export const getAdminOrders = async (adminId) => {
  try {
    const response = await orderAxiosInstance.get(`/api/admin/order/${adminId}`);
    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new Error(
        "Admin order list API is not available in running backends (ports 8001-8004). Please run the order service that exposes GET /api/admin/order/{adminId}.",
      );
    }
    throw error;
  }
};

export const updateOrderStatus = async (adminId, orderId, status) => {
  try {
    const response = await orderAxiosInstance.put(`/api/${adminId}/update-status/${orderId}`, {
      status: status,
    });
    return response.data;
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new Error(
        "Order status update API is not available in running backends (ports 8001-8004). Please run the order service that exposes PUT /api/{adminId}/update-status/{orderId}.",
      );
    }
    throw error;
  }
};
