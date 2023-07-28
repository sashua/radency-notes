export const categories = [
  {
    id: "1",
    name: "Task",
    icon: "/img/icons.svg#icon-task",
  },
  {
    id: "2",
    name: "Random Thought",
    icon: "/img/icons.svg#icon-random",
  },
  {
    id: "3",
    name: "Idea",
    icon: "/img/icons.svg#icon-idea",
  },
  {
    id: "4",
    name: "Quote",
    icon: "/img/icons.svg#icon-quote",
  },
].reduce((acc, category) => {
  acc[category.id] = category;
  return acc;
}, {});
