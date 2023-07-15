interface Props {
  profilePicture?: string;
  name?: string;
  username?: string;
  bio?: string;

  repositories?: number;
  followers?: number;
  following?: number;

  location?: string;
  website?: string;
  company?: string | undefined | null;
}

const User = ({
  profilePicture,
  name = "Jane Doe",
  username = "janeDoe45",
  bio = "Coding is Life 😎",
  repositories = 11,
  followers = 36,
  following = 34,
  location = "San Francisco",
  website = "janedoe.com",
  company = "No Comany",
}: Props) => {
  return (
    <section role="user-section" id="user">
      <section role="profile-details" className="profile">
        <img src={profilePicture} alt="profile picture" />
        <section className="content">
          <div className="flex">
            <span>{name}</span>
            <span>{username}</span>
          </div>
          <p>{bio}</p>
          <p>{location}</p>
          <p>{website}</p>
          <p>{company}</p>

          <ul>
            <li>
              followers <span>{followers}</span>
            </li>
            <li>
              following<span>{following}</span>
            </li>
            <li>
              repos <span>{repositories}</span>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default User;
