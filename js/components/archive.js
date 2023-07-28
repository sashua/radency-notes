import { categories } from "../data/categories.js";
import { noteTemplate } from "../templates/note.js";
import { TableComponent } from "./table.js";

export class ArchiveComponent extends TableComponent {
  constructor(rootSelector, store) {
    super(rootSelector, store);
    this.render(this.store.state);
  }

  render({ notes, archiveOpened }) {
    if (archiveOpened) this.refs.root.classList.remove("closed");
    else this.refs.root.classList.add("closed");

    const activeNotes = notes.filter((note) => note.archived === true);
    this.refs.list.innerHTML = activeNotes
      .map((note) =>
        noteTemplate({ ...note, category: categories[note.categoryId] })
      )
      .join("");
  }
}
