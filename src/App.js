import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Routes from "./routes";
import ParticleComponent from "./components/ParticleComponent";

function App() {
  return (
    <>
      <ParticleComponent />
      <div className="container center">
        <Routes />
      </div>
    </>
  );
}

export default App;
