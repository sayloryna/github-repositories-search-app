import { http, HttpResponse } from "msw";
import { Repository } from "../repositories/types";
import {
  testRepository1,
  testRepository2,
  testRepository3,
} from "./mockRepositories";

const handlers = [
  http.get("https://api.github.com/users/mockUsername/repos", () => {
    return HttpResponse.json<Repository[]>([
      testRepository1,
      testRepository2,
      testRepository3,
    ]);
  }),
];

export default handlers;
