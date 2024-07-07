import { setupServer } from "msw/node";
import handlers from "./repositoriesHandlers";

export const server = setupServer(...handlers);
