import "./styles.css";
import { data } from "./data";
import { Post } from "../components/Post";

export default function App() {
  return (
    <div className="App">
      <Post data={data} />
    </div>
  );
}
