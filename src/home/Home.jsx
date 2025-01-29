import React, { useState, useEffect } from 'react';
import './Home.css'; 
import one from '../../public/img/one.jpeg';
import two from '../../public/img/two.jpeg';
import three from '../../public/img/three.jpeg';
import four from '../../public/img/four.jpeg';
import five from '../../public/img/five.jpeg';
import six from '../../public/img/six.jpeg';
import seven from '../../public/img/seven.jpeg';
import eight from '../../public/img/eight.jpeg';
import nine from '../../public/img/nine.jpeg';
import ten from '../../public/img/ten.jpeg';
import eleven from '../../public/img/eleven.jpeg';
import twelve from '../../public/img/twelve.jpeg';
import thirteen from '../../public/img/thirteen.jpeg';
import fourteen from '../../public/img/fourteen.jpeg';
import hero from '../../public/img/hero.jpeg';
import logo2 from '../../public/img/logo2.jpeg';
import logo3 from '../../public/img/logo3.jpeg';
import logo4 from '../../public/img/logo4.jpeg';

const Home = () => {
  const sliderImages = [hero, logo2, logo3, logo4, ];
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % sliderImages.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <section id="hero">
        <img src={sliderImages[currentImage]} alt="Hero Slider" />
      </section>

      <section id="product1" className="section-p1">
        <h2>Mechanical Keyboards and Keycaps</h2>
        <p>Transform Your Typing with Top-Tier Keyboards and Custom Keycaps to Match Your Style!</p>
        
        <section id="list" className="section-p1">
          <div id="fullsize" className="li-box">
            <img src={one} height="150px" alt="Full Keyboards" />
            <h6>Full Keyboards</h6>
          </div>
          <div id="Keyboards" className="li-box">
            <img src={two} height="150px" alt="75% Keyboards" />
            <h6>75% Keyboards</h6>
          </div>
          <div id="TKL" className="li-box">
            <img src={three} height="150px" alt="TKL Keyboards" />
            <h6>TKL Keyboards</h6>
          </div>
          <div id="compact" className="li-box">
            <img src={four} height="150px" alt="60% Keyboards" />
            <h6>60% Keyboards</h6>
          </div>
          <div id="number" className="li-box">
            <img src={five} height="150px" alt="Numberpads" />
            <h6>Numberpads</h6>
          </div>
          <div id="keycaps" className="li-box">
            <img src={six} height="150px" alt="Keycaps" />
            <h6>Keycaps</h6>
          </div>
        </section>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Unleash Your Typing Potential - Premium Keyboards and Custom Keycaps for Every Style!</p>
    
        <div className="container">
          <div className="product">
            <img src={seven} height="150px" alt="Varmilo Numpad" />
            <div className="desc">
              <p>Varmilo</p>
              <h5>Varmilo VB21M Numpad</h5>
              <h4>$52</h4>
            </div>
          </div>
          <div className="product">
            <img src={eight} height="150px" alt="Leopold Mechanical Keyboard" />
            <div className="desc">
              <p>Leopold</p>
              <h5>Leopold Mechanical Keyboard</h5>
              <h4>$135</h4>
            </div>
          </div>
          <div className="product">
            <img src={nine} height="150px" alt="Varmilo Keycaps" />
            <div className="desc">
              <p>Varmilo</p>
              <h5>Varmilo Van Gogh Cherry Profile Keycap Set</h5>
              <h4>$75.99</h4>
            </div>
          </div>
          <div className="product">
            <img src={ten} height="150px" alt="MelGeek Mechanical Keyboard" />
            <div className="desc">
              <p>MelGeek</p>
              <h5>MelGeek Mechanical Keyboard</h5>
              <h4>$184.99</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>New This Week</h2>
        <p>Upgrade your setup with the latest keycaps, keyboards, cables, and more.</p>
        <div className="container">
          <div className="product">
            <img src={eleven} height="150px" alt="Varmilo Numpad" />
            <div className="desc">
              <p>Varmilo</p>
              <h5>Varmilo VB21M Numpad</h5>
              <h4>$52</h4>
            </div>
          </div>
          <div className="product">
            <img src={twelve} height="150px" alt="Ducky One Mechanical Keyboard" />
            <div className="desc">
              <p>Ducky</p>
              <h5>Ducky One Mechanical Keyboard</h5>
              <h4>$109</h4>
            </div>
          </div>
          <div className="product">
            <img src={thirteen} height="150px" alt="Glorious PC Keycaps" />
            <div className="desc">
              <p>Glorious PC</p>
              <h5>Glorious PC Pastel Keycaps</h5>
              <h4>$41.97</h4>
            </div>
          </div>
          <div className="product">
            <img src={fourteen} alt="Varmilo Mechanical Keyboard" />
            <div className="desc">
              <p>Varmilo</p>
              <h5>Varmilo Mechanical Keyboard</h5>
              <h4>$129</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
