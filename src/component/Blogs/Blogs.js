import React from "react";

const Blogs = () => {
  return (
    <div className="mt-8 text-center">
      <div className=" bg-amber-100 p-3 border-4 rounded-3xl mt-8 hover:bg-indigo-300">
        <h1 className="text-2xl font-bold text-red-500">
          1. What is Context API? & it's purpose
        </h1>
        <p>
          <span className="text-xl font-bold">Answer : </span>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. .One of the best things
          about React is that we have a lot of different ways to solve a
          specific problem. There is a few different form libraries, a bunch of
          CSS libraries and we have a lot of different libraries specific to
          state data problems in React.Hence we have so many libraries to choose
          from, sometimes we might install and use libraries that we do not
          need. Context API is a React API that can solve a lot of problems that
          modern applications face related to state management and how they are
          passing state to their components . Also it can reduce bundle size and
          improve the project performance.
        </p>
      </div>
      <div className=" bg-amber-100 p-3 border-4 rounded-3xl mt-8 hover:bg-indigo-300">
        <h1 className="text-2xl font-bold text-red-500">
          2. What is Semantic Tag?
        </h1>
        <p>
          <span className="text-xl font-bold">Answer : </span>A semantic element
          is readable and understandable to both the browser and the
          developer.Semantic HTML tags allow you to add meaning to your markup
          so that search engines, screen readers, and web browsers can make
          sense of it. Some examples are : table tag ,header tag, footer tag,
          section tag, summery tag etc . It look easier to read a code where
          semantic tags are used as they are easier to understand . Also the
          browser can understand the tags and the usage of these tags , so the
          performance is enhanced . Overall, semantic elements also lead to more
          consistent code. By creating a standard semantic element, it makes it
          easier for everyone.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
