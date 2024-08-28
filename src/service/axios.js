import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio.js';

const apiClient = axios.create({
  baseURL: 'https://tracker-of-water-backend.onrender.com',
  // baseURL: 'http://localhost:3000',
  withCredentials: true,
});

// axios.get('', {
//   // ваші дані для логіну
// }, {
//   withCredentials: true,
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });

const request = async (
  method,
  url,
  data = null,
  params = null,
  headers = {}
) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Запит був зроблений і сервер відповів кодом статусу, який виходить за межі 2xx
      if (error.response.status === 409) {
        Notify.failure('User with this email already exists!');
      } else if (error.request.responseURL.includes("login")) {
        Notify.failure('Wrong login or password!');
      }
      // else {
      //   Notify.failure('Error, try reloading this page');
      // }
      throw new Error('Error' + error.message);
      // throw error.response.data;
    } else if (error.request) {
      // Запит був зроблений, але відповіді не отримано
      Notify.failure(
        'Please check your internet connection or try again later'
      );
      throw new Error('No response received from server');
    } else {
      // Щось трапилось при налаштуванні запиту
      Notify.failure('Oops something went wrong');
      throw new Error('Error in setting up request: ' + error.message);
    }
  }
};

export const axiosGet = (url, params = null, headers = {}) =>
  request('get', url, null, params, headers);
export const axiosPost = (url, data, headers = {}) =>
  request('post', url, data, null, headers);
export const axiosPut = (url, data, headers = {}) =>
  request('put', url, data, null, headers);
export const axiosPatch = (url, data, headers = {}) =>
  request('patch', url, data, null, headers);
export const axiosDel = (url, headers = {}) =>
  request('delete', url, null, null, headers);