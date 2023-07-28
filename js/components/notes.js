import { categories } from "../data/categories.js";
import { noteTemplate } from "../templates/note.js";
import { Component } from "./component.js";

export class NotesComponent extends Component {
  constructor(rootSelector, store) {
    super(rootSelector, store);
  }

  render({ notes }) {
    const activeNotes = notes.filter((note) => note.archived === false);
    this.refs.notes.innerHTML = activeNotes
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
