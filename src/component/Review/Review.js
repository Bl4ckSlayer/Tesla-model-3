import React from "react";

const Review = (props) => {
  const { name, description, img, rating } = props.user;

  return (
    <div className=" text-center p-4 border-4 border-amber-800  rounded-3xl ">
      <div className="w-20 mb-2 mx-auto">
        <img src={img} alt=""></img>
      </div>
      <h1>Name : {name}</h1>
      <p>Description : {description}</p>
      <p>Ratings : {rating}</p>
    </div>
  );
};

export default Review;
