import _ from 'lodash';
import print from './print';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  btn.innerHTML = '点击';
  btn.onclick = print;

  element.innerHTML =_.join(['hello', 'webpack'], '');

  element.append(btn);
  return element;
}

document.body.append(component());