import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faVideo,
  faHeart,
  faClock,
  faFootballBall,
  faGamepad,
  faMusic,
  faFilm,
  faUserFriends,
  faHistory,
  faSubscript,
  faFire,
  faShop,
  faPodcast,
  faTshirt,
  faCog,
  faQuestionCircle,
  faComment,
  faAngleRight,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Render null if the sidebar is closed
  if (!isMenuOpen) return null;

  return (
    <div className="sticky top-0 h-screen overflow-y-auto bg-white p-4 w-72">
      <ul>
        <li className="flex items-center my-2">
          <Link to="/" className="flex items-center w-full">
            <FontAwesomeIcon icon={faHome} />
            <span className="ml-4">Home</span>
          </Link>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faVideo} />
          <span className="ml-4">Shorts</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faSubscript} />
          <span className="ml-4">Subscription</span>
        </li>

        <hr className="my-4 mx-0 border-black" />

        <h1 className="my-4 text-xl">
          You
          <FontAwesomeIcon className="text-sm ml-2" icon={faAngleRight} />
        </h1>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faClock} />
          <span className="ml-4">History</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon className="mr-2" icon={faUserFriends} />
          <span className="ml-1">Channels</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faList} />
          <span className="ml-4">Playlists</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faVideo} />
          <span className="ml-4">Videos</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faClock} />
          <span className="ml-4">Watch Later</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-4">Liked videos</span>
        </li>

        <hr className="my-4 mx-0 border-black" />
      </ul>

      <ul>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faFootballBall} />
          <span className="ml-4">Sports</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon className="mr-2" icon={faGamepad} />
          <span className="ml-2">Games</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faMusic} />
          <span className="ml-4">Music</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faFilm} />
          <span className="ml-4">Movies</span>
        </li>
      </ul>

      <ul>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faFire} />
          <span className="ml-4">Trending</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon className="mr-2" icon={faShop} />
          <span className="ml-2">Shopping</span>
        </li>
        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faPodcast} />
          <span className="ml-4">Podcasts</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faTshirt} />
          <span className="ml-4">Fashion</span>
        </li>

        <hr className="my-4 mx-0 border-black" />

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faCog} />
          <span className="ml-4">Settings</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span className="ml-4">Help</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faHistory} />
          <span className="ml-4">Report History</span>
        </li>

        <li className="flex items-center my-2">
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-4">Feedback</span>
        </li>
      </ul>
      <hr className="my-4 mx-0 border-black" />
      <span>About Press Copyright Contact us Creator Advertise Developers</span>
      <br />
      <br />
      <span>
        Terms Privacy Policy & Safety How YouTube works Test new features
      </span>
      <br />
      <br />

      <span className="text-gray-400 text-sm">© 2024 Google LLC</span>
    </div>
  );
};

export default Sidebar;
