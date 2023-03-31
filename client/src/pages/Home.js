import Contact from "../components/Contact";

// Add a Donation component
function Donation() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Donation</h2>
      <p>If you'd like to support our work, you can donate using the button below:</p>
      <button className="btn btn-primary">Donate</button>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      home Page
      <div>add whatever we need here</div>
      <Contact />
      <Donation />
    </div>
  );
};

export default Home;
