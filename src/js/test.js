import json from '../data/data.json5';
// console.log('hello world');

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.bio); // output `Tom Preston-Werner`

// document.querySelector('.for_data').innerHTML = json.owner.bio;