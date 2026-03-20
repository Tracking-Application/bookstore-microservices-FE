import { userAxiosInstance } from "../axiosInstance";

const normalizeProfile = (data) => {
  const source = data?.user || data?.data || data || {};
  return {
    id: source.id ?? source.user_id ?? null,
    name: source.name || "",
    email: source.email || "",
    phone: source.phone || "",
    role: source.role || "customer",
    createdAt: source.created_at || "",
    message: source.message || "",
  };
};

export const getProfileAPI = async (userId) => {
  const response = await userAxiosInstance.get(`/api/user/profile/${userId}`);
  return normalizeProfile(response.data);
};

export const updateProfileAPI = async (userId, payload) => {
  const response = await userAxiosInstance.put(`/api/user/profile/${userId}`, {
    name: payload.name,
    phone: payload.phone,
  });
  return normalizeProfile(response.data);
};

export default {
  getProfileAPI,
  updateProfileAPI,
};
