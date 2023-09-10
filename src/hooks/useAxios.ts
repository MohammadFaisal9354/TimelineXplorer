import axios, { AxiosInstance } from "axios";

const createAPI: () => AxiosInstance = () => {
  const api = axios.create({
    //baseURL: `${constants.BACKEND_URL}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",

      "X-Api-Key": "VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf",
      // 'Access-Control-Allow-Origin': '*',
    },
  });

  api.interceptors.response.use(
    (response): any => response.data as any,
    (error) => {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        throw { message: "No response received from server." };
      } else {
        throw error.message;
      }
    }
  );

  return api;
};

export default createAPI;
