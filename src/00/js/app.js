import month from './month';
import run from './monthchange';
import startTaskButton from './tasks';
import searchBar from './searchBar';
import HideMenu from './menuBar';

month();
startTaskButton();
searchBar();
window.onload = run;
HideMenu();
