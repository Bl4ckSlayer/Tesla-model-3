import React from "react";

const Review = (props) => {
  const { name, description, img, rating } = props.user;

  return (
    <div className=" text-center p-4 border-4 border-amber-200 bg-slate-200  rounded-3xl  hover:bg-orange-100">
      <div className="w-20 mb-2 mx-auto">
        <img src={img} alt=""></img>
      </div>
      <h1 className="text-2xl font-semibold">Name : {name}</h1>
      <p className=" ">
        <span className="font-bold">Description :</span> {description}
      </p>
      <p>
        <span className="font-bold">Ratings :</span> {rating}
      </p>
    </div>
  );
};

export default Review;
