import { LocalStorageUser } from "../(src)/common/types";

export const saveUserSettings = (users: LocalStorageUser) => {
  try {
    localStorage.setItem("userSettings", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving user settings:", error);
  }
};

export const getUserSettings = (): LocalStorageUser | null => {
  try {
    const data = localStorage.getItem("userSettings");
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error getting user settings:", error);
  }
  return null;
};

export const clearUserSettings = () => {
  try {
    localStorage.removeItem("userSettings");
  } catch (error) {
    console.error("Error clearing user settings:", error);
  }
};
