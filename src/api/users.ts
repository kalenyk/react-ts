import { apiUrl } from "../constants/api";
interface SearchParams {
  q: string;
}
const listUsers = ({ q }: SearchParams): Promise<Response> => {
  const params = new URLSearchParams({ q }).toString();
  return fetch(`${apiUrl}/users?${params}`);
};

const usersApi = {
  listUsers,
};

export default usersApi;
