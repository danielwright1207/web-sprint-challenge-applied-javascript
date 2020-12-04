// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//

// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
// import axios from "axios";
// console.log(axios);

// axios
//   .get(`https://lambda-times-api.herokuapp.com/topics`)
//   .then((res) => {
//     const tabs = document.querySelector(".tabs");
//     const createTab = res.data;
//     createTab.topics.forEach((item) => {
//       const tab = document.createElement("div");
//       tab.classList.add("tab");
//       tab.textContent = item;
//       const topics = document.querySelector(".topics");
//       topics.appendChild(tab);
//     });
//     console.log("do you see me?", res);
//     console.log(createTab);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    res.data.articles.javascript.forEach((itemC) => {
      const newCard = createCard(itemC);
      container.append(newCard);
    });
    res.data.articles.bootstrap.forEach((itemC) => {
      const newCard = createCard(itemC);
      container.append(newCard);
    });
    res.data.articles.technology.forEach((itemC) => {
      const newCard = createCard(itemC);
      container.append(newCard);
    });
    res.data.articles.jquery.forEach((itemC) => {
      const newCard = createCard(itemC);
      container.append(newCard);
    });
    res.data.articles.node.forEach((itemC) => {
      const newCard = createCard(itemC);
      container.append(newCard);
    });
    container.appendChild(createCard(res));
    console.log("card", res);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const imgSrc = document.createElement("img");
  const authorsName = document.createElement("span");
  const author = document.createElement("div");
  const img = document.createElement("div");

  card.classList.add("card");
  headline.classList.add("headline");
  img.classList.add("img-container");
  author.classList.add("author");
  headline.textContent = obj.headline;
  imgSrc.src = obj.authorPhoto;
  authorsName.textContent = obj.authorName;
  img.appendChild(imgSrc);
  author.appendChild(authorsName);
  author.appendChild(img);
  card.appendChild(author);
  card.appendChild(headline);

  card.addEventListener("click", (event) => {
    console.log(obj.headline);
  });

  return card;
}
const container = document.querySelector(".cards-container");
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
