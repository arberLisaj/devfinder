import { GrLocation } from "react-icons/gr";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

interface Props {
  profilePicture?: string;
  name?: string;
  username?: string;
  bio?: string;

  link?: string;

  repositories?: number;
  followers?: number;
  following?: number;

  location?: string;
  website?: string;
  twitter?: string;
}

const User = ({
  profilePicture,
  name = "Jane Doe",
  username = "janeDoe45",
  bio = "Coding is Life 😎",
  repositories = 11,
  followers = 36,
  following = 34,
  link = "https://github.com/arberlisaj",
  location = "San Francisco",
  website = "janedoe.com",
  twitter = "No Twitter",
}: Props) => {
  return (
    <section role="user-section" id="user">
      <section role="profile-details" className="profile">
        <img src={profilePicture} alt="profile picture" />
        <section className="content">
          <div className="username">
            <h1>{name}</h1>
            <a target="_blank" href={link}>
              @{username}
            </a>
          </div>
          <p className="bio">{bio}</p>
          <ul className="details">
            <li>
              <GrLocation  size="18px"/>
              <span>{location}</span>
            </li>
            <li>
              <BsGlobeAmericas />
              <a href={website}>{website}</a>
            </li>

            <li>
              <AiOutlineTwitter size="20px" />
              <span>{twitter}</span>
            </li>
          </ul>
          <ul className="followers">
            <li>
              <h1>{followers}</h1>
              <h5>Followers</h5>
            </li>
            <li>
              <h1>{following}</h1>
              <h5>Following</h5>
            </li>
            <li>
              <h1>{repositories}</h1>
              <h5>Repositories</h5>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default User;
