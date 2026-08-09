
const API_URL = "https://optimistic-tenderness-production-9dfb.up.railway.app";

/**
 * ثبت آگهی جدید
 */
export async function createProperty(propertyData) {
  const response = await fetch(`${API_URL}/api/properties`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(propertyData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "خطا در ثبت آگهی");
  }

  return data;
}

/**
 * دریافت لیست همه آگهی‌ها
 */
export async function getProperties() {
  const response = await fetch(`${API_URL}/api/properties`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "خطا در دریافت آگهی‌ها");
  }

  return data;
}

/**
 * دریافت یک آگهی بر اساس id
 */
export async function getPropertyById(id) {
  const response = await fetch(`${API_URL}/api/properties/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "آگهی یافت نشد");
  }

  return data;
}

/**
 * ویرایش آگهی
 */
export async function updateProperty(id, propertyData) {
  const response = await fetch(`${API_URL}/api/properties/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(propertyData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "خطا در ویرایش آگهی");
  }

  return data;
}

/**
 * حذف آگهی
 */
export async function deleteProperty(id) {
  const response = await fetch(`${API_URL}/api/properties/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "خطا در حذف آگهی");
  }

  return data;
}