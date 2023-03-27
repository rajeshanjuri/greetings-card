const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="title">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo-image"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-desc">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
