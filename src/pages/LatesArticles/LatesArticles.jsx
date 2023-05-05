import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeartBroken,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";
const LatesArticles = ({ article }) => {
  const [fold, setFold] = useState(true);
  const { title, image, intitle, like, share, description, date } = article;
  return (
    <div className="mt-10">
      <div className="lg:flex gap-10">
        <div className="">
          <img
            className="w-96 md:w-full lg:w- p-4 mx-auto"
            style={{ borderRadius: "20px" }}
            src={image}
            alt=""
          />
        </div>

        <div className="">
          <div className="date text-gray-600 flex justify-between">
            <div className="">
              <p>{date}</p>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-600 hover:text-orange-500">
                <FontAwesomeIcon
                  className=" mx-2"
                  icon={faHeartBroken}
                ></FontAwesomeIcon>
                {like}
              </p>
              <p className="text-gray-600 hover:text-orange-500">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={faShare}
                ></FontAwesomeIcon>
                {share}
              </p>
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
          <p className="font-semibold  mt-3">
            {" "}
            <span className="text-gray-600">In</span> {intitle}
          </p>

          {fold ? (
            <>
              <p className=" text-gray-500">
                {description.substring(0, 100)}.....
              </p>
              <span
                className="cursor-pointer text-blue-600 mb-5"
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900">{description}....</p>
              <span
                className="cursor-pointer text-blue-600 mb-5"
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatesArticles;
