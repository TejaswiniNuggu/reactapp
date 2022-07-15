import { useState } from "react";
import { ColorBox } from "./ColorBox";


//on change is used for input,checkbox,radio button
export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  //const colorList =["orange","crimson","pink"]
  const [colorList, setColorList] = useState(["orange", "pink"]);
  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="enter a color"
          value={color} />
        <button onClick={() => setColorList([...colorList, color])}>
          Add color
        </button>
       
      </div>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  );

}
