//сдесь производиться сборка всего проекта (в то числе и стили подгружаются в JS)

import '../sass/main.scss';
import block from './modules/block';
import selects from './modules/select';
import search from './modules/search';
import startDB from './modules/startDB';

block();
selects();
search();
startDB();