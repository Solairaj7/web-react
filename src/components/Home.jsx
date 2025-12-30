import Bmw8 from "./img/bmw8.mp4"

function Home() {

  return (
    <div className="hmain">
      <div className="car">
        <video
          className="car-video"
          src={Bmw8} autoPlay loop muted playsInline
        />
        <h2>BMW M8</h2>
      </div>


     <div className="Abt-main">
        <h2 className="abt1">What Our Customers Say</h2>
        <div className="cus-main">
          <div className="cus">
            <div >
              <p>"The BMW M8 exceeded all my expectations. The performance is incredible, and the luxury interior makes every drive feel special."</p>
              <div className="cus1">
                <strong>Roronova Zoro</strong>
                <span>BMW M8 Owner</span>
              </div>
            </div>
          </div>

          <div className="cus">
            <div >
              <p>"Driving the BMW 3 Series is pure joy. The handling is precise, and the technology features keep me connected on every journey."</p>
              <div className="cus1">
                <strong>Gol.D.Roger</strong>
                <span>BMW 3 Series Owner</span>
              </div>
            </div>
          </div>

          <div className="cus">
            <div >
              <p>"The Audi  combines versatility with luxury. Perfect for family trips and daily commutes alike."</p>
              <div className="cus1">
                <strong>Sabo</strong>
                <span>BMW X5 Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

     
    
  ;
}

export default Home;


