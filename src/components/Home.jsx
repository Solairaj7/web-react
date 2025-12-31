import Bmw8 from "./img/bmw8.mp4"

function Home() {

  return (
    <div className="hmain">
      <div className="car animate-fade-in">
        <video
          className="car-video"
          src={Bmw8} autoPlay loop muted playsInline
        />
        <h2 className="animate-slide-up">BMW M8</h2>
        <p className="car-description animate-slide-up">Experience the pinnacle of performance and luxury with the BMW M8.</p>
      </div>

      <div className="features-section animate-fade-in">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Premium Quality</h3>
            <p>Only the finest luxury vehicles from top manufacturers.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Service</h3>
            <p>Professional maintenance and support for your vehicle.</p>
          </div>
          <div className="feature-item">
            <h3>Competitive Pricing</h3>
            <p>Get the best deals on high-end automobiles.</p>
          </div>
        </div>
      </div>

     <div className="Abt-main animate-fade-in">
        <h2 className="abt1">What Our Customers Say</h2>
        <div className="cus-main">
          <div className="cus animate-slide-up">
            <div >
              <p>"The BMW M8 exceeded all my expectations. The performance is incredible, and the luxury interior makes every drive feel special."</p>
              <div className="cus1">
                <strong>Roronova Zoro</strong>
                <span>BMW M8 Owner</span>
              </div>
            </div>
          </div>

          <div className="cus animate-slide-up">
            <div >
              <p>"Driving the BMW 3 Series is pure joy. The handling is precise, and the technology features keep me connected on every journey."</p>
              <div className="cus1">
                <strong>Gol.D.Roger</strong>
                <span>BMW 3 Series Owner</span>
              </div>
            </div>
          </div>

          <div className="cus animate-slide-up">
            <div >
              <p>"The Audi combines versatility with luxury. Perfect for family trips and daily commutes alike."</p>
              <div className="cus1">
                <strong>Sabo</strong>
                <span>BMW X5 Owner</span>
              </div>
            </div>
          </div>

          <div className="cus animate-slide-up">
            <div >
              <p>"Exceptional service and quality cars. Highly recommend for anyone looking for a premium driving experience."</p>
              <div className="cus1">
                <strong>Luffy</strong>
                <span>Mercedes-Benz Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


