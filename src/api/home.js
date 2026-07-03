import httpClient from "../helper/httpClient";

export const getHomePageData = async () => {
  const response = await httpClient.get("/home", {
    requiresAuth: false,
  });

  return response.data;
};
