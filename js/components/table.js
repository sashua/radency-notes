export class TableComponent {
  constructor({ rootSelector, store }) {
    this.store = store;
    this.refs = this.getRefs(rootSelector);
    this.bindEvents();
    this.store.subscribe(this.render.bind(this));
  }

  render() {
    throw new Error("render method must be implemented");
  }

  handleClick(e) {
    const button = e.target.closest("button");
    if (!button) return;
    this.store.dispatch({
      type: button.dataset.type,
      payload: button.dataset.payload,
    });
  }

  bindEvents() {
    this.refs.root.addEventListener("click", this.handleClick.bind(this));
  }

  getRefs(rootSelector) {
    const root = document.querySelector(rootSelector);
    return {
      root,
      list: root.querySelector("ul"),
    };
  }
}
