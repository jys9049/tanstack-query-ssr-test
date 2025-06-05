export interface IGetPostResponse {
  id: string;
  title: string;
}

export const dummyData: IGetPostResponse[] = [
  {
    id: "1",
    title: "SSR 테스트",
  },
  {
    id: "2",
    title: "Tanstack Query 테스트",
  },
  {
    id: "3",
    title: "Tanstack Query + SSR 테스트",
  },
];
