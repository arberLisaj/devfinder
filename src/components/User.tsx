import { GrLocation } from "react-icons/gr";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineBusiness } from "react-icons/md";
import { useEffect, useState } from "react";
import Followers from "./Followers";
import Repositories from "./Repositories";
import axios from "axios";

interface Props {
  profilePicture?: string;
  name?: string;
  username?: string;
  bio?: string;

  link?: string;

  followers_url?: string;

  repositories?: number;
  followers?: number;
  following?: number;

  location?: string;
  website?: string;
  twitter?: string;

  company?: string | null;
}

const User = ({
  profilePicture,
  username = "arberlisaj",
  bio,
  repositories,
  followers,
  following,
  link,
  location,
  website,
  twitter,
  company,
}: Props) => {
  const [followersContainer, setFollowersContainer] = useState(false);
  const [followingContainer, setFollowingContainer] = useState(false);
  const [repoContainer, setRepoContainer] = useState(false);

  const [followersData, setFollowers] = useState([]);
  const [followingData, setFollowing] = useState([]);
  const [repoData, setRepoData] = useState([]);

  const [endpoint, setEndpoint] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}${endpoint}`)
      .then((res) => {
        switch (endpoint) {
          case "":
            break;
          case "/repos":
            setRepoData(res.data);
            break;
          case "/followers":
            setFollowers(res.data);
            break;
          case "/following":
            setFollowing(res.data);
            break;
        }
      })
      .catch((err) => console.log(err));
  }, [endpoint]);

  return (
    <section id="user" role="user-section">
      <section className="profile">
        <img src={profilePicture} alt="profile picture" />
        <ul>
          <li
            onClick={() => {
              setRepoContainer(true);
              setEndpoint("/repos");
            }}
          >
            <h1>{repositories}</h1>
            <h5>Repositories</h5>
          </li>
          <li
            onClick={() => {
              setFollowersContainer(true);
              setEndpoint("/followers");
            }}
          >
            <h1>{followers}</h1>
            <h5>Followers</h5>
          </li>
          <li
            onClick={() => {
              setFollowingContainer(true);
              setEndpoint("/following");
            }}
          >
            <h1>{following}</h1>
            <h5>Following</h5>
          </li>
        </ul>
      </section>
      {followersContainer && (
        <Followers
          entity={followersData}
          title="Followers"
          setData={(data) => setFollowersContainer(data)}
        />
      )}
      {followingContainer && (
        <Followers
          entity={followingData}
          title="Following"
          setData={(data) => setFollowingContainer(data)}
        />
      )}
      {repoContainer && (
        <Repositories
          repoData={repoData}
          setData={(data) => setRepoContainer(data)}
        />
      )}

      <section className="description">
        <a className="github-link" target="_blank" href={link}>
          @{username}
        </a>
        <p className="bio">{bio}</p>
      </section>

      <ul className="details">
        <li>
          {location && (
            <>
              <GrLocation />
              <span>{location}</span>
            </>
          )}
        </li>
        <li>
          {website && (
            <>
              <BsGlobeAmericas />
              <a href={website}>{website}</a>
            </>
          )}
        </li>
        <li>
          {twitter && (
            <>
              <AiOutlineTwitter size="17px" color="blue" />
              <a target="blank" href={`https://twitter.com/${twitter}`}>
                {twitter}
              </a>
            </>
          )}
        </li>
        <li>
          {company && (
            <>
              <MdOutlineBusiness />
              <span> {company}</span>
            </>
          )}
        </li>
      </ul>
    </section>
  );
};

export default User;
