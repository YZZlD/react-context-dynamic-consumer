import { useContext, useState } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  if (match) {
    return (
      <div className="details">
        <h2>Match: {sign.match}</h2>
      </div>
    );
  } else {
    return <button onClick={() => setMatch(true)}>Match</button>;
  }
};

export default Match;
