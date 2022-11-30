// 데이터 연결

const posts = [
  { id: 1, title: "제목1", content: "내용1", create: "2022-01-01" },
  { id: 2, title: "제목2", content: "내용2", create: "2022-02-01" },
  { id: 3, title: "제목3", content: "내용3", create: "2022-03-01" },
  { id: 4, title: "제목4", content: "내용4", create: "2022-04-01" },
  { id: 5, title: "제목5", content: "내용5", create: "2022-05-01" },
];

export function getPosts() {
  return posts;
}
