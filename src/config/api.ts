import axios, { HeadersDefaults } from 'axios';

interface AuthorizationHeader extends HeadersDefaults {
  authorization: string;
}

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});
export const setTokenAPI = (token:string) => (api.defaults.headers as AuthorizationHeader).authorization = `Bearer ${token}`;

export default api;
