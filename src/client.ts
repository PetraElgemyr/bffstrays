import * as contentful from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.VITE_REACT_APP_SPACE_ID as string,
  accessToken: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN as string,
});
