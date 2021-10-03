// fetch("https://jsonplaceholder.typicode.com/posts");
// fetch("https://jsonplaceholder.typicode.com/posts");
// fetch("https://jsonplaceholder.typicode.com/posts").then((resp) =>
//   console.log(resp)
// );
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => resp.text())
//   .then((razm) => console.log(razm));

// var per = "";
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => resp.text())
//   .then((razm) => (per = razm));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((razm) => {
    for (let i = 0; i < razm.length; i++) {
      const id = razm[i].userId;
      const title = razm[i].title;
      document.body.innerHTML += id + title + "<br>";
    }
  });
