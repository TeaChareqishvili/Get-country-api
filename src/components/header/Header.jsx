import "./HeaderStyle.scss";
import { IoMoonOutline } from "react-icons/io5";

const Header = ({ night,ChangeMode }) => {
 

  return (
   
    <div className={night ? "night" : "where-in-world"}>
      <h2>Where In The World?</h2>
      <div
        className={night ? "night-color" : "mode"}
        onClick={() => ChangeMode()}
      >
        <IoMoonOutline className={night ? "night-moon" : "moon"} />
        <p>{night ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
 
  );
};

export { Header };
