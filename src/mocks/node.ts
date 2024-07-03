import { setupServer } from "msw/node";
import handlers from "./repositoriesHandler.js";

export const server = setupServer(...handlers);
