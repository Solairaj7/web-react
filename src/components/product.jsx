
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




 





function Product({ addtocart }) {

  const car = [
  { 
    Name: "BMW 8 Series", 
    Price: 50000, 
    Image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/9004500a220bf3a3d455d15ee052cf8c332606f8/photos/3BkQBnZ5-MmdMArb6Ld-(edit).jpg?t=166922317584", 
    About: "A luxury grand tourer blending performance with cutting-edge technology, part of BMW’s flagship lineup." 
  },

  { 
    Name: "Mercedes-Benz", 
    Price: 50500, 
    Image: "https://tse2.mm.bing.net/th/id/OIP.7VWPeFYL2-wYfHDhExqH9AHaE8?pid=Api&P=0&h=180", 
    About: "A symbol of prestige and innovation, Mercedes-Benz combines comfort, safety, and powerful performance." 
  },

 
 
  { 
    Name: "Audi R8", 
    Price: 11500, 
    Image: "https://tse2.mm.bing.net/th/id/OIP.EINdYdbDUzoFoAKYVp5FggHaFj?pid=Api&P=0&h=180", 
    About: "Audi’s flagship sports car, the R8, features a powerful V10 engine and quattro all-wheel drive." 
  },
  { 
    Name: "Jaguar", 
    Price: 25500, 
    Image: "https://www.carscoops.com/wp-content/uploads/2023/04/New-Jaguar-EV-GT-Sedan-5-Carscoops.jpg", 
    About: "Jaguar’s modern EV concept showcases the brand’s move toward electrification with sleek futuristic design." 
  },
];
 



  
  return (
    <div className="hmain">
      <div className="cars1">
        {car.map((item, index) => (
          <Card key={index} style={{ marginTop: "30px", width: "18rem" }}>
            <div className='pro1'>
            <Card.Img variant="top" src={item.Image} className='carimg' />
            <Card.Body>
              <Card.Title><h3>{item.Name}</h3></Card.Title>
              <Card.Text>{item.About}</Card.Text>
              <Card.Text>${item.Price}</Card.Text>
              <Button className='cart' onClick={() => addtocart(item)}>ADD</Button>
              
            </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;

