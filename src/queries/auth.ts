import { TaskProps } from "../types/interface";
import instance from "./axios.config";

export const getData = async () => {
  const { data } = await instance.get("/posts");

  return data;
};

export const getSingleData = async (task: TaskProps) => {
  const { data } = await instance.get(`/posts/${task.id}`);

  return data;
}

export const postData = async (task: TaskProps) => {
  const { data } = await instance.post("/posts", task);

  return data;
}

export const updateData = async (task: TaskProps) => {
  const { data } = await instance.patch(`/posts/${task.id}`, task);

  return data;
}

export const deleteData = async (task: TaskProps) => {
  const { data } = await instance.delete(`/posts/${task.id}`);

  return data;
}







