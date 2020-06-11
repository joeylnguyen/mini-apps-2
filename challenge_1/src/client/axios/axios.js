import axios from 'axios';

export const getEventData = (query, page = 1) => {
  return axios.get(`/events?q=${query}&_page=${page}`);
};

export const editEventData = (identifier, data) => {
  return axios.patch(`/events/${identifier}`, data);
};