import { useEffect, useState } from "react";

const userReview = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return [user, setUser];
};
export default userReview;
