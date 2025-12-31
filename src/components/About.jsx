import Card from 'react-bootstrap/Card';
import M from "./img/M.webp"
import M8 from "./img/M8.png"


function About() {
  return (
    <div className="hmain">
      <div className="Acars animate-fade-in">
        <Card style={{ width: '80rem' }}>
          <Card.Img variant="top" src={M} style={{ width: "100%", height: "auto" }} />
        </Card>

        <div className="m8 animate-slide-up">
          <h3>Maximum driving dynamics and exclusiveness.</h3>
          <h6 className='para'>
            625 hp (460 kW) high-performance M TwinPower Turbo inline 8-cylinder petrol engine<br />
            M xDrive with Active M differential and 8-speed M Steptronic transmission with Drivelogic<br />
            Exclusive design elements and equipment<br />
            460 kW/625 hp, 750 Nm, 0–100 km/h in 3.2 s
          </h6>
          <h6>
            The latest version of the M TwinPower Turbo 8-cylinder petrol engine guarantees performance in keeping with the latest standards. The high-revving unit develops an output of 460 kW (625 hp). The two turbochargers stand out thanks to their cross-cylinder bank exhaust manifold with optimum response characteristics. The V8 engine is also designed for extreme loads on the race track.
          </h6>
        </div>
      </div>

      <div className="company-info animate-fade-in">
        <h2>About ZORO Luxury Cars</h2>
        <div className="company-content">
          <div className="company-text">
            <p>
              ZORO is your premier destination for luxury automobiles. We specialize in bringing you the finest selection of high-performance vehicles from renowned manufacturers around the world. Our commitment to excellence ensures that every car in our showroom meets the highest standards of quality, performance, and style.
            </p>
            <p>
              Founded with a passion for automotive excellence, ZORO has been serving discerning car enthusiasts for over a decade. Our expert team provides personalized service, from test drives to maintenance, ensuring your driving experience is unparalleled.
            </p>
            <div className="company-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Cars Sold</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="company-image">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={M8} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
