export abstract class Component {
  template!: string;
  element!: Element;
  constructor(public selector: string) {}

  render(position: InsertPosition = 'beforeend') {
    const parentElement = document.querySelector('#app');
  }
}
