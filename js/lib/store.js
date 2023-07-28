import { Observable } from "./observable.js";

export class Store extends Observable {
  constructor({ reducer, initialState }) {
    super();
    this.reducer = reducer;
    this.state = initialState;
  }

  dispatch(action) {
    const newState = this.reducer(this.state, action);
    if (this.state !== newState) {
      this.state = newState;
      super.notify(this.state);
    }
  }
}
