import { categories } from "../data/categories.js";
import { categoryTemplate } from "../templates/category.js";
import { TableComponent } from "./table.js";

export class CategoriesComponent extends TableComponent {
  constructor(rootSelector, store) {
    super(rootSelector, store);
    this.render(this.store.state);
  }

  render({ notes }) {
    const notesCount = this.countNotes(notes);
    this.refs.list.innerHTML = Object.values(categories)
      .map((category) => {
        const { active, archived } = notesCount[category.id] ?? {
          active: 0,
          archived: 0,
        };
        return categoryTemplate({ ...category, active, archived });
      })
      .join("");
  }

  countNotes(notes) {
    return notes.reduce((acc, { categoryId, archived }) => {
      if (!acc[categoryId]) acc[categoryId] = { active: 0, archived: 0 };
      acc[categoryId][archived ? "archived" : "active"] += 1;
      return acc;
    }, {});
  }
}
