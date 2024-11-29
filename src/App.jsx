import PlayList from "./compos/Course";
import PlayArea from "./compos/PlayArea";

function App() {
  return (
    <div className="d-flex align-items-stretch fullHeight">
      <PlayList />
      <PlayArea />
    </div>
  );
}

export default App;
