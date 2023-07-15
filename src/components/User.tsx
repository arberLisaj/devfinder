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
    <section id="user" role="user-section">
      <a className="github-link" target="_blank" href={link}>
        @{username}
      </a>
      <section className="profile">
        <img src={profilePicture} alt="profile picture" />
        <ul>
          <li>
            <h1>{repositories}</h1>
            <h5>Repositories</h5>
          </li>
          <li>
            <h1>{followers}</h1>
            <h5>Followers</h5>
          </li>
          <li>
            <h1>{following}</h1>
            <h5>Following</h5>
          </li>
        </ul>
      </section>

      <section className="description">
        <p className="bio">{bio}</p>
      </section>

      <ul className="details">
        <li>
          {location && (
            <>
              <GrLocation color="red" />
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
              <span>{twitter}</span>
            </>
          )}
        </li>
      </ul>
    </section>
  );
};

export default User;
