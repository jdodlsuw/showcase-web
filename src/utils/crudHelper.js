import httpClient from "./httpClient";

export const createCrudHelper = (endpoint) => {
  return {
    getById: (id) => httpClient.get(`${endpoint}/${id}`),
    getAll: () => httpClient.get(endpoint),
    create: (data) => httpClient.post(endpoint, data),
    update: (id, data) => httpClient.put(`${endpoint}/${id}`, data),
    delete: (id) => httpClient.delete(`${endpoint}/${id}`),
  };
};
