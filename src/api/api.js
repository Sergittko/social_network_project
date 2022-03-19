import * as axios from "axios";

// "API-KEY": "0d93290b-a655-442e-8edc-3e970e71b51d"
const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "78927620-d98a-4dd1-b238-91fbd7cf3b58"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});
export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },
  getFollowedUsers(pageSize, currentPage, followed) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}&friend=${followed}`)
      .then(response => response.data);
  },
  getUserProfile(userId) {
    console.error("Obsoletw method. Use profileAPI object to make request");
    return profileAPI.getUserProfile(userId);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  }
};
export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateProfileStatus(status) {
    return instance.put("profile/status", { status });
  },
  updateProfilePhoto(image) {
    let formData = new FormData();
    formData.append("image", image);
    return instance.put("profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  },
  updateProfileSettings(profileSettings) {
    return instance.put("profile", profileSettings);
  }
};
export const authAPI = {
  getMeAuth() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  logIn(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha});
  },
  logOut() {
    return instance.delete(`auth/login`);
  },
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url");
  }
};

const weatherInstance = axios.create({
  baseURL: "http://api.worldweatheronline.com/premium/v1/"
});
export const weatherApi = {
  getWeather(city) {
    return weatherInstance.get(
      `weather.ashx?key=7cf33cd73dac4dae924234614220703&format=json&num_of_days=1&q=${city}`
    );
  },
  getSearchedWeather(text) {
    return weatherInstance.get(
      `search.ashx?key=7cf33cd73dac4dae924234614220703&format=json&num_of_results=5&query=${text}`
    );
  }
};
