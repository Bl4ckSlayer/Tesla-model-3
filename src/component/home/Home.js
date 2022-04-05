import React from "react";
import { useNavigate } from "react-router-dom";
import UserReview from "../Hooks/UserReview";
import Review from "../Review/Review";

const Home = () => {
  const [users, setUsers] = UserReview();
  const navigate = useNavigate();
  return (
    <div>
      <div className="md:flex lg:flex justify-between gap-4 text-center items-center ">
        <div className=" mb-4 mt-4 ">
          <h1 className="text-5xl text-red-600  font-extrabold font-serif">
            Model 3
          </h1>
          <p className="font-semibold p-6 text-xl">
            Model 3 comes with the option of dual motor all-wheel drive, 20”
            Uberturbine Wheels and Performance Brakes for total control in all
            weather conditions. A carbon fiber spoiler improves stability at
            high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as
            little as 3.1 seconds.
          </p>
          <button
            onClick={() =>
              window.open("https://www.tesla.com/model3", "_blank")
            }
            className=" bg-amber-200 font-bold  rounded-3xl  p-5 hover:cursor-pointer hover:bg-slate-300 hover:text-red-600 hover:shadow-2xl hover:shadow-blue-500/50 "
          >
            Know More
          </button>
        </div>

        <img
          src={require(".././ImageAndExtra/model-3-main.jpg")}
          alt=""
          className="rounded-3xl"
        ></img>
      </div>
      <div className="mt-14 text-center ">
        <h1 className="text-5xl font-extrabold  m-6">Review</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
          {users.slice(0, 3).map((user) => (
            <Review key={user.id} user={user}></Review>
          ))}
        </div>

        <button
          onClick={() => navigate("/review")}
          className=" bg-amber-200 font-bold  rounded-3xl mt-8 p-5 hover:cursor-pointer hover:bg-slate-300 hover:text-red-600 hover:shadow-2xl hover:shadow-blue-500/50 "
        >
          Show More Review
        </button>
      </div>
    </div>
  );
};

export default Home;
