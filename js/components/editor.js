import { categories } from "../data/categories.js";
import { formatDate } from "../lib/helpers.js";
import { Component } from "./component.js";

export class EditorComponent extends Component {
  constructor(rootSelector, store) {
    super(rootSelector, store);
    this.fillCategories();
  }

  render({ notes, editingNoteId, editorOpened }) {
    if (editorOpened) {
      this.refs.root.classList.remove("closed");
    } else {
      this.refs.root.classList.add("closed");
      this.refs.form.reset();
    }

    if (editingNoteId) {
      const note = notes.find((note) => note.id === editingNoteId);
      this.refs.title.innerText = "Edit note";
      this.refs.date.innerText = formatDate(note.createdAt);
      this.refs.form.name.value = note.name;
      this.refs.form.category.value = note.categoryId;
      this.refs.form.content.value = note.content;
      this.refs.submitText.innerText = "Save";
      this.refs.form.dataset.type = "notes/edit";
    } else {
      this.refs.title.innerText = "New note";
      this.refs.submitText.innerText = "Create";
      this.refs.date.innerText = "";
      this.refs.form.dataset.type = "notes/create";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.store.dispatch({
      type: e.target.dataset.type,
      payload: {
        categoryId: e.target.category.value,
        name: e.target.name.value,
        content: e.target.content.value,
        archived: false,
      },
    });
  }

  fillCategories() {
    const options = Object.values(categories).map(({ id, name }) => {
      const option = document.createElement("option");
      option.value = id;
      option.innerText = name;
      return option;
    });
    this.refs.categories.append(...options);
  }

  bindEvents() {
    super.bindEvents();
    this.refs.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  setRefs(rootSelector) {
    super.setRefs(rootSelector);
    this.refs.form = this.refs.root.querySelector("form");
    this.refs.title = this.refs.root.querySelector("h2");
    this.refs.date = this.refs.root.querySelector("p");
    this.refs.categories = this.refs.root.querySelector("select");
    this.refs.submitText = this.refs.root.querySelector(
      'button[type="submit"] > span'
    );
  }
}
