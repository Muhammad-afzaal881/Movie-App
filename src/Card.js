// src/components/Cards.js

import React from "react";

const Cards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: "30px", width :'1300px' , marginLeft : "30px" }}>
      {card.map((card, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <img src={card.img} className="card-img-top" alt={`Card ${index + 1}`} />
            <div className="card-body"style={{background : 'dimgrey'}}>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text"  >{card.text}</p>
            </div>
            <div className="card-footer" style={{background : 'dimgrey'}}>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const card = [
  {
    img: "https://image.tmdb.org/t/p/w1280/AEgggzRr1vZCLY86MAp93li43z.jpg",
    title: "Mission Impossible",
    text: "A thrilling spy action movie full of adventure and twist."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
    title: "Batman Returns",
    text: "Gotham's dark knight rises to protect the city once again."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/wqfu3bPLJaEWJVk3QOm0rKhxf1A.jpg",
    title: "Frozen II",
    text: "Elsa and Anna go on another magical journey."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/2vHQBX5L4yoExTa55KmGIg2Q5s3.jpg",
    title: "Avengers: Endgame",
    text: "The final battle to save the universe begins."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    title: "Spider-Man: No Way Home",
    text: "Multiverse mayhem begins with Peter Parker."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    title: "Moana",
    text: "A young girl sets out on an oceanic adventure to save her tribe."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    title: "Doctor Strange",
    text: "Magic meets multiverse in Marvel's mind-bending film."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
    title: "Dune",
    text: "Epic science fiction saga set in a desert world of politics and prophecy."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/6U0i0HsSCvhRW4IpGzdead6QRo3.jpg",
    title: "Muromachi Burai",
    text: "A dark psychological journey into the making of a villain."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    title: "Interstellar",
    text: "A space odyssey about time, love, and survival."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
    title: "The Ritual",
    text: "A survival drama of astronauts stranded in space."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
    title: "Final Distination",
    text: "Tony Stark becomes Iron Man to fight evil with technology."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    title: "Toy Story",
    text: "Toys come to life in this classic animated story."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
    title: "Black Panther",
    text: "A king defends his nation with honor and technology."
  },
  {
    img: "https://image.tmdb.org/t/p/w1280/mtXV301BF7pqwvRjsWhQo6sD10F.jpg",
    title: "The Flash",
    text: "The fastest man alive takes on villains across dimensions."
  }
];


export default Cards;
