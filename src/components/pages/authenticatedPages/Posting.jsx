import React from "react";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function Posting() {
  const [data, setData] = React.useState([]);
  return (
    <>
      <div className="posting-container">
        <h1 className="posting-container__heading">Latest Posts</h1>

        <div className="posting-container__inner">
          <div className="posting-container__inner-input drop-shadow-2xl">
            <div className="posting-container__inner-input__image">
              <img
                src="https://media.istockphoto.com/id/1225769791/photo/game-controller-isolated-gamepat-on-yellow-background.jpg?s=170667a&w=0&k=20&c=iQTHSM9mawVZsdxJnO8T58GclL91ZAlWo1f0ESr5kwI="
                alt="profile"
              />
              <form>
                <input
                  type="text"
                  className="posting-container__inner-input__input border"
                  placeholder="What's new?"
                />
                <button
                  className="posting-container__inner-input__button"
                  type="submit"
                >
                  <i className="fa-solid fa-paper-plane"></i> Post
                </button>
              </form>
            </div>
          </div>

          <div className="posting-container__inner-posts">
            <div className="posting-container__inner-posts-post drop-shadow-2xl">
              <div className="flex align-items-center gap-3">
                <img
                  src="https://media.istockphoto.com/id/1225769791/photo/game-controller-isolated-gamepat-on-yellow-background.jpg?s=170667a&w=0&k=20&c=iQTHSM9mawVZsdxJnO8T58GclL91ZAlWo1f0ESr5kwI="
                  alt="profile"
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <h1 className="font-bold">name</h1>
                  <p className="text-sm">18:00</p>
                </div>
              </div>
              <div className="my-[0.8rem] p-[0.7rem]">post body</div>
              <div className="mt-[0.8rem] flex align-items-center reaction border">
                <div className="w-[33.3%] text-center p-2 hover:bg-[#333] hover:text-white hover:cursor-pointer rounded">
                  <i className="fa-regular fa-heart text-lg"></i>
                </div>
                <div className="w-[33.3%] p-2 text-center hover:bg-[#333] hover:text-white hover:cursor-pointer rounded">
                  <i className="fa-solid text-lg fa-comment"></i>
                </div>
                <div className="w-[33.3%] p-2 text-center hover:bg-[#333] hover:text-white hover:cursor-pointer rounded">
                  <i className="fa-solid text-lg fa-share"></i>
                </div>
              </div>
            </div>
            <div className="posting-container__inner-posts-comments drop-shadow-2xl ml-4 p-4">
              <div className="flex justify-between align-items-center border p-2">
                <h1>body post</h1>
                <p>time</p>
              </div>
              <div className="flex align-items-center gap-5 border my-2 p-2">
                <img
                  src="https://media.istockphoto.com/id/1225769791/photo/game-controller-isolated-gamepat-on-yellow-background.jpg?s=170667a&w=0&k=20&c=iQTHSM9mawVZsdxJnO8T58GclL91ZAlWo1f0ESr5kwI="
                  alt="profile"
                  className="w-[50px] h-[50px] object-cover"
                />
                <div className="flex justify-between align-items-center gap-2">
                  <h1>body post</h1>
                  <p>time</p>
                </div>
              </div>
              <form className="w-[100%] flex flex-grow">
                <input
                  type="text"
                  placeholder="write a comment"
                  className="outline-none flex flex-grow-1 flex-row p-2 border"
                />
                <button className="p-2 bg-slate-900 border text-white">
                  <i className="fa-solid fa-share mr-1"></i>share
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
