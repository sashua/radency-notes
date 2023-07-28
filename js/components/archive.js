import { categories } from "../data/categories.js";
import { noteTemplate } from "../templates/note.js";
import { Component } from "./component.js";

export class ArchiveComponent extends Component {
  constructor(rootSelector, store) {
    super(rootSelector, store);
  }

  render({ notes, archiveOpened }) {
    if (archiveOpened) {
      this.refs.root.classList.remove("closed");
    } else {
      this.refs.root.classList.add("closed");
    }

    const archivedNotes = notes.filter((note) => note.archived === true);
    this.refs.notes.innerHTML = archivedNotes
      .map((note) =>
        noteTemplate({ ...note, category: categories[note.categoryId] })
      )
      .join("");
  }

  setRefs(rootSelector) {
    super.setRefs(rootSelector);
    this.refs.notes = this.refs.root.querySelector("ul");
  }
}
