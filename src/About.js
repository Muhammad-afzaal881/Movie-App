import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">About Our Movie Gallery</h1>
      
      <div className="row">
        <div className="col-md-6">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQr40K_9r8kCsAWAgHSKtDTos_ZP3lK-SZwg&s" 
            alt="Cinema" 
            className="img-fluid rounded shadow"
          />
        </div>
        
        <div className="col-md-6">
          <p className="lead">
            Welcome to our Movie Gallery! This website showcases a handpicked collection of 15 different movies. Each card includes the movie title, poster, and a brief description to help you decide what to watch next.
          </p>
          <p>
            Whether you're a fan of action, drama, comedy, or thrillers, you'll find something exciting here. We built this app using <strong>React.js</strong> and <strong>Bootstrap</strong> for a smooth and responsive experience.
          </p>
          <p>
            Stay tuned for regular updates and new movies! Our goal is to provide you with an enjoyable and visually appealing movie-browsing experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
