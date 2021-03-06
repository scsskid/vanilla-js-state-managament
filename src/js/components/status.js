import Component from "../lib/component.js";
import store from "../store/store.js";

export default class Status extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector(".js-status")
    });
  }

  /**
   * React to state changes and render the component's HTML
   *
   * @returns {void}
   */
  render() {
    let suffix = store.state.items.length !== 1 ? "s" : "";

    this.element.innerHTML = `${store.state.items.length} 123item${suffix}`;
  }
}
