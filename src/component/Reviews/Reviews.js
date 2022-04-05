import React from "react";
import UserReview from "../Hooks/UserReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [users, setUsers] = UserReview();
  return (
    <div className="mt-10">
      <h1 className="text-6xl text-center font-bold mb-10">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
        {users.map((user) => (
          <Review key={user.id} user={user}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
