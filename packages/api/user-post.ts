import { api } from "./client";

export const getUser = async (userId: any) => {
  const res = await api.get(`/users/${userId}`);
  return res.data;
};

export const getPosts = async (userId: any) => {
  const res = await api.get(`/posts`, {
    params: { userId },
  });
  return res.data;
};
