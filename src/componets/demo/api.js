import { apiServer } from '../../commons';

export const getDiscounts = () => {
  return apiServer.get('/api/discounts');
};

export const postDiscounts = (body) => {
  return apiServer.post('/api/discounts', body);
};

export const getDiscountsId = (id) => {
  return apiServer.get(`/api/discounts/${id}`);
};

export const putDiscountsId = (id, body) => {
  return apiServer.put(`api/discounts/${id}`, body);
};
