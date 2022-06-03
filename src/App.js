import "./App.css";

function App() {
  return (
    <div>
      <section>
        <div className="App"></div>
      </section>

      <section className="secondSection">
        <div className="title">
          <div>Bruno One Stop Solution</div>
          <div>Come & Buy Crypto</div>
        </div>
      </section>
      <section className="thirdSection">
        <img src={process.env.PUBLIC_URL + "images/3.png"} alt="" width="350" />
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </div>
      </section>
      <section className="thirdSection">
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </div>
        <img src={process.env.PUBLIC_URL + "images/3.png"} alt="" width="350" />
      </section>
      <section className="thirdSection">
        <img src={process.env.PUBLIC_URL + "images/3.png"} alt="" width="350" />
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </div>
      </section>
    </div>
  );
}

export default App;
