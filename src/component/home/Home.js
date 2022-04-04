import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between gap-4">
        <div>
          <h1 className="text-4xl">Model 3</h1>
          <p>
            Model 3 comes with the option of dual motor all-wheel drive, 20”
            Überturbine Wheels and Performance Brakes for total control in all
            weather conditions. A carbon fiber spoiler improves stability at
            high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as
            little as 3.1 seconds.
          </p>
        </div>

        <img src={require(".././ImageAndExtra/model-3-main.jpg")} alt=""></img>
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default Home;
