// scripts.js

import { company, year } from './configuration.js';

function updateFooter() {
const message = '©' + company + '('+ year +')';
// const message = `© ${company} (${year})`;
document.querySelector('footer').innerText = message;
}

updateFooter();