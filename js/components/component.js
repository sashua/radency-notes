export class Component {
  constructor({ rootSelector, store }) {
    this.store = store;
    this.refs = null;
    this.setRefs(rootSelector);
    this.bindEvents();
    this.store.subscribe(this.render.bind(this));
    this.render(this.store.state);
  }

  render() {
    throw new Error("render method must be implemented");
  }

  handleClick(e) {
    const button = e.target.closest("button[data-type]");
    if (!button) return;
    this.store.dispatch({
      type: button.dataset.type,
      payload: button.dataset.payload,
    });
  }

  bindEvents() {
    this.refs.root.addEventListener("click", this.handleClick.bind(this));
  }

  setRefs(rootSelector) {
    this.refs = {
      root: document.querySelector(rootSelector),
    };
  }
}
