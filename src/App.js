import "./AppDesktop.css";
import "./AppMobile.css";

function App() {
  return (
    <div className="App">
      <div className="black"></div>
      <div className="menu">
        <div>
          <hr id="hr1" />
        </div>
        <div>
          <hr id="hr2" />
        </div>
        <div>
          <hr id="hr3" />
        </div>
      </div>
      <div className="logo">
        <div className="SAY10s">SAY10s</div>
        <div className="titles">
          <div>
            <div className="software">software</div>
            <div className="softwareHR">
              <hr></hr>
            </div>
          </div>
          <div>
            <div className="developerHR">
              <hr></hr>
            </div>
            <div className="developer">developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
