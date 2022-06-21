import instance from "./axios.config";

export const getData = async () => {
  const { data } = await instance.get("/posts");

  return data;
};

export const getSingleData = async (id: number) => {
  const { data } = await instance.get(`/posts/${id}`);

  return data;
};

export const postData = async (task: object) => {
  const { data } = await instance.post("/posts", task);

  return data;
};

export const updateData = async (id: number) => {
  const { data } = await instance.patch(`/posts/${id}`);

  return data;
};

export const deleteData = async (id: number) => {
  const { data } = await instance.delete(`/posts/${id}`);

  return data;
};
