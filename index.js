
//3) для запуска файла используем команду: node path_file
// 4)
function sayHi() {
    // console.log('Привет');
}

// setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
// setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

setTimeout(sayHi, 1000);
setInterval(sayHi, 1000);

// 5 и 6) 
const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/users/1').then(response => console.log(response.data));
axios.get('https://jsonplaceholder.typicode.com/users', {
    headers: { "Accept-Encoding": "gzip,deflate,compress" }
}).then(response => console.log(response.data));

axios.post('https://jsonplaceholder.typicode.com/posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
).then(response => console.log(response.data));

axios.patch('https://jsonplaceholder.typicode.com/posts/1',
    {
        title: 'foo',
    },
).then(response => console.log(response.data));