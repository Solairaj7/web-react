import Card from 'react-bootstrap/Card';
import M from "./img/M.webp"


function About() {
  return (
    <div className="hmain">
      <div className="Acars">
        <Card style={{ width: '80rem' }}>
          <Card.Img variant="top" src={M} style={{ width: "100%", height: "auto" }} />
        </Card>

        <div className="m8">
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
    </div>
  );
}

export default About;
