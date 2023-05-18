import { getMockSeries } from '../data/series.mock';
import { Series } from '../models/series';
import { Component } from './component';

export class SeriesList extends Component {
  series: Series[];
  constructor(selector: string) {
    super(selector);
    this.series = getMockSeries();
    console.log(this.series);
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    this.element
      .querySelectorAll('i.icon--delete')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
  }

  handleDelete(event: Event): void {
    const element = event.target as HTMLElement;
    this.series = this.series.find((item) => item.id === element.dataset.id);
    this.render();
  }

  createTemplate() {
    const watchedSeriesList = this.series.filter(
      (item) => item.watched === true
    );
    const pendingSeriesList = this.series.filter(
      (item) => item.watched === false
    );
    const watchedSeries = watchedSeriesList
      .map(
        (item) => `
    <li class="serie">
          <img class="serie__poster"
            src="${item.poster}"
            alt="${item.name} poster" />
          <h4 class="serie__title">${item.name}</h4>
          <p class="serie__info">${item.creator} (${item.year})</p>
          <i data-id="${item.id}" class="fas fa-times-circle icon--delete"></i>
        </li>`
      )
      .join('');

    const pendingSeries = pendingSeriesList
      .map(
        (item) => `
    <li class="serie">
          <img class="serie__poster"
            src="${item.poster}"
            alt="${item.name} poster" />
          <h4 class="serie__title">${item.name}</h4>
          <p class="serie__info">${item.creator} (${item.year})</p>
          <i data-id="${item.id}" class="fas fa-times-circle icon--delete"></i>
        </li>`
      )
      .join('');

    return `
    <section class="series-pending">
      <h3 class="subsection-title">Pending series</h3>
      <p class="info">You have 4 series pending to watch</p>
      <ul class="series-list">${pendingSeries}</ul>
    </section>
    <section class="series-watched">
      <h3 class="subsection-title">Watched series</h3>
      <p class="info">You have watched 4 series</p>
      <ul class="series-list series-list--watched">${watchedSeries}</ul>
    </section>
`;
  }
}
