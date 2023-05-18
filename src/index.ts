/* eslint-disable no-new */
import { Header } from './components/header';
import { Main } from './components/main';
import { SeriesList } from './components/series.list';
import './styles.css';

new Header('#app');
new Main('#app');
new SeriesList('.main');
