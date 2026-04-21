import { axiosClient } from "../../../shared/api/axiosClient";

export const userProfileService = {
  async getUser(userId) {
    const res = await axiosClient.get(`/users/${userId}`);
    return res.data;
  },

  async getPosts(userId) {
    const res = await axiosClient.get(`/posts`, {
      params: { userId },
    });
    return res.data;
  },
};
