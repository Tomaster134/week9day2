import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

//Tried to map multiple posts but couldn't figure out how to independantly change each liked value. Pretty sure I need to include the value in the post dictionary and have a setPost, then change it with spread, but typescript kept yelling at me

const Like = () => {
  const [liked, setLiked] = useState(false);

  const liker = (isLiked: boolean): void => {
    if (isLiked) {
      console.log("unliked :(");
      setLiked(false);
    } else {
      console.log("liked!");
      setLiked(true);
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://www.scaler.com/topics/images/websocket-thumbnail.webp"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Tommy</h5>
        <p className="card-text">My brain is full of websockets.</p>
        <a href="#" className="btn btn-primary" onClick={() => liker(liked)}>
          {liked ? <FaHeart /> : <CiHeart />}
        </a>
      </div>
    </div>
  );
};
export default Like;
