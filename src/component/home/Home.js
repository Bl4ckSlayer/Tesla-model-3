import React from "react";
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import UserReview from "../Hooks/UserReview";
import Review from "../Review/Review";

const Home = () => {
  const [users, setUsers] = UserReview();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between gap-4 text-center items-center ">
        <div className="">
          <h1 className="text-4xl">Model 3</h1>
          <p>
            Model 3 comes with the option of dual motor all-wheel drive, 20”
            Uberturbine Wheels and Performance Brakes for total control in all
            weather conditions. A carbon fiber spoiler improves stability at
            high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as
            little as 3.1 seconds.
          </p>
        </div>

        <img src={require(".././ImageAndExtra/model-3-main.jpg")} alt=""></img>
      </div>
      <div className="mt-14 text-center ">
        <h1 className="text-4xl ">Review</h1>
        <div className="grid grid-cols-3 gap-16">
          {users.slice(0, 3).map((user) => (
            <Review key={user.id} user={user}></Review>
          ))}
        </div>

        <button
          onClick={() => navigate("/review")}
          className=" bg-gray-500 rounded-2xl mt-8  text-right  "
        >
          Show More Review
        </button>
      </div>
    </div>
  );
};

export default Home;
