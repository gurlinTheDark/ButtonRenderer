import "./styles.css";
import { useState } from "react";
import MyButton from "./MyButton";
export default function App() {
  const [type, setType] = useState("primary");

  const [state, setState] = useState(true);

  const [caption, setCaption] = useState("initial");
  return (
    <div className="App">
      <h2>Button Creation</h2>
      <div>
        <span>Button Type</span>
        <select onChange={(e) => setType(e.target.value)}>
          <option value="primary">Primary</option>
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
        </select>
      </div>
      <div>
        <span>Button State</span>
        <span
          onChange={(e) => {
            console.log(e.target.value);
            setState(e.target.value);
          }}
        >
          <input type="radio" value={true} checked={state === "true"} /> Enabled
          <input type="radio" value={false} checked={state === "false"} />{" "}
          disabled
        </span>
      </div>
      <div>
        <span>Caption</span>
        <input
          type="text"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
      </div>

      <div>
        <h3>Rendered Button</h3>
        <MyButton type={type} state={state} caption={caption}></MyButton>
      </div>
    </div>
  );
}
