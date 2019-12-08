import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Who you are?",
    author: "John Dean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt amet reprehenderit cupiditate quam est vel tenetur, laudantium exercitationem temporibus atque at iusto non sed debitis. Ratione atque nemo alias..."
  },
  {
    id: 2,
    title: "Which case are true?",
    author: "Jim Bean",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt amet reprehenderit cupiditate quam est vel tenetur, laudantium exercitationem temporibus atque at iusto non sed debitis. Ratione atque nemo alias..."
  },
  {
    id: 3,
    title: "Bridge construction completed",
    author: "John Walker",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt amet reprehenderit cupiditate quam est vel tenetur, laudantium exercitationem temporibus atque at iusto non sed debitis. Ratione atque nemo alias..."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
