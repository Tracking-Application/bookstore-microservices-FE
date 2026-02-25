const PRODUCT_BASE_URL = import.meta.env.VITE_PRODUCT_API_URL || "http://127.0.0.1:8002";

export const normalizeImageUrl = (value) => {
  if (!value || typeof value !== "string") {
    return value;
  }

  const sanitized = value.replace(/\\/g, "/");

  if (/^https?:\/\/(localhost|127\.0\.0\.1):8000/i.test(sanitized)) {
    return sanitized.replace(/^https?:\/\/(localhost|127\.0\.0\.1):8000/i, PRODUCT_BASE_URL);
  }

  if (/^uploads\//i.test(sanitized)) {
    return `${PRODUCT_BASE_URL}/${sanitized}`;
  }

  return sanitized;
};

export default normalizeImageUrl;
