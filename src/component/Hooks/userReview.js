import { useEffect, useState } from "react";

const UserReview = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return [users, setUser];
};
export default UserReview;
