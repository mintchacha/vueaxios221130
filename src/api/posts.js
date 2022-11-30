// 데이터 연결
import axios from "axios";

export function getPosts() {
  return axios.get("http://localhost:3000/posts");
}

export function creatPost(data) {
  return axios.post("http://localhost:3000/posts", data);
}
