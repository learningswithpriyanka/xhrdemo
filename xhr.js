

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?id=1");
xhr.responseType = 'json'

xhr.onload = function () {
  console.log((xhr.response));
};
xhr.send();



// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://reqres.in/api/users");
// xhr.responseType = 'json'

// xhr.onload = function () {
//   console.log((xhr.response));
// };
// let params = {
//     "name": "morpheus",
//     "job": "leader"
// }
// xhr.send(JSON.stringify(params));


