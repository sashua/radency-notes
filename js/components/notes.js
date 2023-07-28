import { categories } from "../data/categories.js";
import { noteTemplate } from "../templates/note.js";
import { TableComponent } from "./table.js";

export class NotesComponent extends TableComponent {
  constructor(rootSelector, store) {
    super(rootSelector, store);
    this.render(this.store.state);
  }

  render({ notes }) {
    const activeNotes = notes.filter((note) => note.archived === false);
    this.refs.list.innerHTML = activeNotes
      .map((note) =>
        noteTemplate({ ...note, category: categories[note.categoryId] })
      )
      .join("");
  }
}
