export const getRandomId = () =>
  Date.now().toString() + Math.ceil(Math.random() * 1000);

export const getDates = (text) => {
  return [];
};

export const formatDate = (timestamp) => {
  return "YYYY-MM-DD";
};
