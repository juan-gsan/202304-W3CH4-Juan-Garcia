import { getMockSeries } from '../data/series.mock';
import { Series } from '../models/series';
import { Component } from './component';

export class SeriesList extends Component {
  series: Series[];
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.series = getMockSeries();
    console.log(this.series);
    this.render();
  }

  createTemplate() {
    const seriesList = this.series
      .map(
        (item) => `
    <li class="serie">
          <img class="serie__poster"
            src="${item.poster}"
            alt="${item.name} poster" />
          <h4 class="serie__title">${item.name}</h4>
          <p class="serie__info">${item.creator} (${item.year})</p>
          <i class="fas fa-times-circle icon--delete"></i>
        </li>`
      )
      .join('');
    return `
    <section class="series-pending">
      <h3 class="subsection-title">Pending series</h3>
      <p class="info">You have 4 series pending to watch</p>
      <ul class="series-list">${seriesList}</ul>
    </section>
    <section class="series-watched">
      <h3 class="subsection-title">Watched series</h3>
      <p class="info">You have watched 4 series</p>
      <ul class="series-list series-list--watched">${seriesList}</ul>
    </section>
`;
  }
}
