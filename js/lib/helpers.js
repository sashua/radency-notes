export const getRandomId = () =>
  Date.now().toString() + Math.ceil(Math.random() * 1000);

export const getDates = (text) => {
  const matches = text.matchAll(/\d{1,2}\/\d{1,2}\/\d{2,4}/g);
  return Array.from(matches).map(([date]) => date);
};

export const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
