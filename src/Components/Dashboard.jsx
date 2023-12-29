import React from "react";
import Single from "../assets/Single.png";
import Challenge from "../assets/Challenge.png";
import MultiPlayer from "../assets/MultiPlay.png";
import Dot from "../assets/Dot.png";
import Soccer from "../assets/Soccer.png";
import Man from "../assets/Man.png";
import Woman from "../assets/Woman.png";
import Card from "./Card";
const Dashboard = () => {
  const data = [
    { imageUrl: Single, text: "SINGLE PLAYER MODE" },
    { imageUrl: MultiPlayer, text: "MULTI PLAYER MODE" },
    { imageUrl: Challenge, text: "CHALLENGE MODE" },
  ];

  return (
    <div>
      <div className="h-full flex-1  ">
        <div className=" p-10 md:p-20 text-white">
          <p className="text-[16px]  font-[400] ">Hey User!</p>
          <p className=" text-[18px]  font-[400] pt-10">CHOOSE PLAY MODE</p>

          <div className=" grid md:flex items-start h-full  gap-10 my-10 ">
            <div className=" grid gap-5 md:w-[592px] w-full">
              {data.map((item, index) => (
                <Card key={index} imageUrl={item.imageUrl} text={item.text} />
              ))}

              <div className=" bg-primary  p-5 rounded-lg mt-10 ">
                <div className=" ">
                  <img src={Woman} alt="" />
                  <div className=" font-[400] text-[14px] text-white flex flex-col items-center justify-center gap-5">
                    <p className=" text-[14px] font-[350]">FEATURED</p>
                    <p className=" text-[16px] font-[400]">
                      Take part in challenges with friends or other players
                    </p>
                    <p className=" inline text-center py-3 px-5 bg-[#FF1975] text-[14px] rounded-lg font-[750]">
                      Find Friends
                    </p>
                  </div>
                  <div className=" flex justify-end items-end">
                    <img src={Man} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:w-[482px] w-full h-full bg-secondary border-2 border-border p-2 pb-28 rounded-lg">
              <div className=" flex flex-col items-center justify-center gap-5 pt-5">
                <p className=" font-[400] text-[16px] text-TextPrimary">
                  HOW TO PLAY
                </p>
                <img src={Soccer} alt="" />
              </div>

              <div className=" grid gap-5 mt-10 px-5 ">
                <div className=" ">
                  <div className="flex items-center gap-5">
                    <img src={Dot} alt="" />
                    <p className=" font-[400] text-[16px] text-TextPrimary ">
                      Start a New Game
                    </p>
                  </div>
                  <p className=" py-3 pl-7 text-TextSecondary font-[350] text-[14px]">
                    Tap the &rdquo;Start Game&ldquo; button to begin a new game.
                  </p>
                  <p className="  pl-7 text-TextSecondary font-[350] text-[14px]">
                    You can also choose the difficulty level: Easy, Medium, or
                    Hard.
                  </p>
                </div>
                <div className=" ">
                  <div className="flex items-center gap-5">
                    <img src={Dot} alt="" />
                    <p className=" font-[400] text-[16px] text-TextPrimary ">
                      Answer Questions
                    </p>
                  </div>
                  <p className=" py-3 pl-7 text-TextSecondary font-[350] text-[14px]">
                    A series of football-related questions will appear on the
                    screen.
                  </p>
                  <p className="  pl-7 text-TextSecondary font-[350] text-[14px]">
                    Read each question carefully and select the correct answer
                    from the options provided
                  </p>
                </div>
                <div className=" ">
                  <div className="flex items-center gap-5">
                    <img src={Dot} alt="" />
                    <p className=" font-[400] text-[16px] text-TextPrimary ">
                      Earn Points
                    </p>
                  </div>
                  <p className=" py-3 pl-7 text-TextSecondary font-[350] text-[14px] leading-[22px]">
                    Correct answers will earn you points based on the
                    question&apos;s difficulty. The faster you answer, the more
                    points you&apos;ll receive.
                  </p>
                  <p className="  pl-7 text-TextSecondary font-[350] text-[14px]">
                    You can also choose the difficulty level: Easy, Medium, or
                    Hard.
                  </p>
                </div>
                <div className=" ">
                  <div className="flex items-center gap-5">
                    <img src={Dot} alt="" />
                    <p className=" font-[400] text-[16px] text-TextPrimary ">
                      Achievements and Leaderboard
                    </p>
                  </div>
                  <p className=" py-3 pl-7 text-TextSecondary font-[350] text-[14px]">
                    Complete achievements to earn special badges.
                  </p>
                  <p className="  pl-7 text-TextSecondary font-[350] text-[14px]">
                    Compete with other players and climb the leaderboard to show
                    off your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
