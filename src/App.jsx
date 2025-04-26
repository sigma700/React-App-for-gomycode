import React from "react";

function App() {
  return (
    <div className="main-container p-[20px]">
      <div className="Nav-bar flex justify-between items-center p-[10px]">
        <h1 className="font-extrabold text-[30px]">Allan.Dev</h1>
        <ul className="flex gap-[20px] bg-amber-50 p-[5px] rounded-[10px]">
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>About Us
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
          <li>
            <a href="#"></a>Location
          </li>
        </ul>
      </div>
      <div className="content-area">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, delectus laborum. Necessitatibus quisquam quae
          possimus explicabo molestias voluptatum voluptatem delectus
          repudiandae esse tempore accusantium accusamus, asperiores
          consequuntur eligendi deleniti exercitationem blanditiis quia a?
          Quisquam, a laborum consequuntur aperiam saepe ab?
        </p>
        <div className="cards flex justify-around p-[100px] mt-[20px] bg-amber-100 rounded-[10px]">
          <div className="bg-white p-[50px] rounded-[10px] border-[1px]">
            Card one
          </div>
          <div className="bg-white p-[50px] rounded-[10px] border-[1px]">
            Card Two
          </div>
          <div className="bg-white p-[50px] rounded-[10px] border-[1px]">
            Card Three
          </div>
          <div className="bg-white p-[50px] rounded-[10px] border-[1px]">
            Card Four
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
