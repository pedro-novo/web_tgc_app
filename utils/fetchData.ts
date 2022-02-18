import axios from "axios";

type FetchData = (endpoint: string) => Promise<any>;

export const fetchData: FetchData = async (endpoint: string) => {
  const res = await axios.get(endpoint);
  return res.data;
};
