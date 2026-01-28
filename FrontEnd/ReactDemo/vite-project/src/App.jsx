import React, { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import Fashion from "./components/Fashion.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const heightState = useState(100);
  const widthState = useState(100);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <Header />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>

      {data.map((item) => Fashion(item))}
      </div>
      <Footer />
    </div>
  );

  // return (
  //   <div>
  //     {/* <h1>Student List</h1>
  //     <div
  //       className="card-container"
  //       style={{ display: "flex", flexWrap: "wrap" }}
  //     >
  //       <Card
  //         name="Alice Johnson"
  //         age={20}
  //         image="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY="
  //       />
  //       <Card
  //         name="Bob Smith"
  //         age={22}
  //         image="https://media.istockphoto.com/id/1395661373/photo/portrait-of-a-happy-smiling-young-man-standing-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=1Y7bXo1vX4u9jv3bF6bX5Z8b2kY5z1F3F4b6vE2Q5nM="
  //       />
  //       <Card
  //         name="Charlie Brown"
  //         age={19}
  //         image="https://media.istockphoto.com/id/1395661373/photo/portrait-of-a-happy-smiling-young-man-standing-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=1Y7bXo1vX4u9jv3bF6bX5Z8b2kY5z1F3F4b6vE2Q5nM="
  //       />
  //     </div> */}

  //     {/* <div>
  //       <button onClick={() => heightState[1](heightState[0] + 10)}>Increase Height</button>
  //       <button onClick={() => heightState[1](heightState[0] - 10)}>Decrease Height</button>
  //       <button onClick={() => widthState[1](widthState[0] + 10)}>Increase Width</button>
  //       <button onClick={() => widthState[1](widthState[0] - 10)}>Decrease Width</button>
  //     </div>
  //     <div>
  //       <img
  //         src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY="
  //         alt=""
  //         id ="myImage"
  //         style={{ height: `${heightState[0]}px`, width: `${widthState[0]}px` }}
  //       />
  //     </div> */}


  //   </div>
  // );
}

export default App;
