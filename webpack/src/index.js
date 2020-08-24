// import _ from 'lodash';
import print, {a} from './print';
import './style.css';
console.log(a(1,2))
// function component() {
//   return import (/* webpackChunkname: "lodash"*/ 'lodash').then(({default: _}) => {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['hello', 'wolrd'], '');
//     return element;

//   }).catch(err => console.log(err))
// }

// component().then((component) => {
//   document.body.append(component);
//   console.log(process.env.production)
// })
// document.addEventListener('click', print)
// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     document.removeEventListener('click', print);
//     document.addEventListener('click', print)
//   })
// }
