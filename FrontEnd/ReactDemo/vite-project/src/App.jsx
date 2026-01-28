import React, { useEffect } from "react";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <h1>Student List</h1>
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Card
          name="Alice Johnson"
          age={20}
          image="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY="
        />
        <Card
          name="Bob Smith"
          age={22}
          image="https://media.istockphoto.com/id/1395661373/photo/portrait-of-a-happy-smiling-young-man-standing-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=1Y7bXo1vX4u9jv3bF6bX5Z8b2kY5z1F3F4b6vE2Q5nM="
        />
        <Card
          name="Charlie Brown"
          age={19}
          image="https://media.istockphoto.com/id/1395661373/photo/portrait-of-a-happy-smiling-young-man-standing-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=1Y7bXo1vX4u9jv3bF6bX5Z8b2kY5z1F3F4b6vE2Q5nM="
        />
      </div>
    </div>
  );
}

export default App;
