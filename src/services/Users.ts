import api from './api';

interface User {
  name: string;
  email: string;
  password: string;
}

export default {
  async createUser(data: User) {
    return api
      .post('/users', data)
      .then((response) => Promise.resolve(response.data))
      .catch((err) => Promise.reject(err));
  },
};
