import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const SIdeBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Home" },
    { title: "Play Mode", src: "Play" },
    { title: "Leaderboard", src: "Leaderboard" },
    { title: "Categories ", src: "Categories" },
    { title: "Multiplayer", src: "Multiplayer" },
    { title: "Gaming Stats", src: "Stats", gap: true },
    { title: "How to Play ", src: "How_to_play" },
    { title: "Setting", src: "Settings" },
    { title: "Help", src: "Help" },
    { title: "Logout", src: "Logout" },
  ];
  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-full p-5  pt-8 relative duration-300 border-r`}
      >
        <img
          src="./src/assets/Arrow.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 
       ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center justify-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer py-5 hover:bg-[#FF197533]  text-gray-300 text-sm items-center gap-x-4 
        ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-[#FF1975]"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}

          <div
            className={`bg-white  rounded-lg text-center px-5 py-5 my-5 ${
              !open && "hidden"
            }`}
          >
            <p className=" text-[#333333] text-[16px] font-[400]">
              Trivia of the day
            </p>
            <p className=" text-[#6161618F] text-[13px] font-[400] py-2">
              Play trivia of the day to gain extra points and coins{" "}
            </p>
            <p className=" text-center py-3 bg-[#FF1975] text-[14px] rounded font-[400]">
              Play Trivia
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SIdeBar;
