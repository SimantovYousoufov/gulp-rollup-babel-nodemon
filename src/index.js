import { sayWords } from './words';
import { sum } from './maths';
import http from 'http';

const names = ['Larry', 'Curly', 'Moe'];

const [ first ] = names;

console.log(`The first person in the list is: ${first}`);

console.log(`1 + 1 = ${sum(1, 1)}`);

sayWords('Hello', 'there', 'friends...');

http.createServer((req, res) => {
	console.log('request received');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('okay');
}).listen(3000);

console.log('server started...');
