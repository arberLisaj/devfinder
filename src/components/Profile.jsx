import { BsPinMapFill, BsLink, BsTwitter } from "react-icons/bs";

function Profile({
  login,
  avatar_url,
  bio,
  location,
  public_repos,
  followers,
  following,
  twitter_username,
  name,
  html_url,
  blog,
}) {
  return (
    <div
      className="profile"
      style={{
        width: "100%",
        maxWidth: "fit-content",
        margin: "30px auto",
        borderRadius: "4px",
        padding: "15px 20px",
        overflow: "hidden",
        border: "1px solid gainsboro",
        boxShadow: "rgba(0, 0, 0, 0.0p5) 1.95px 1.95px 2.6px",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {avatar_url && (
          <img
            style={{
              maxWidth: "70px",
              maxHeight: "70px",
              borderRadius: "50%",
            }}
            src={avatar_url}
            alt="avatar_url"
          />
        )}
        <ul
          style={{
            display: "flex",
            width: "100%",
            paddingInline: "4px",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <li>
            <h4>{public_repos}</h4>
            <p>Repositories</p>
          </li>
          <li>
            <h4>{formatNumbers(followers)}</h4>
            <p>Followers</p>
          </li>
          <li>
            <h4>{following}</h4>
            <p>Following</p>
          </li>
        </ul>
      </header>
      {name && (
        <h1
          style={{
            fontWeight: 500,
            fontSize: "18px",
            marginTop: "5px",
            marginBottom: "-4px",
          }}
        >
          {name}
        </h1>
      )}
      <a href={html_url} target="_blank">
        @{login}
      </a>

      {bio && <p style={{ maxWidth: "400px" }}>{bio}</p>}
      <hr />
      <ul className="links">
        {location && (
          <li style={{ fontWeight: 500 }}>
            <BsPinMapFill style={{ marginRight: "4px" }} /> {location}
          </li>
        )}
        {blog && (
          <li>
            <BsLink />
            <a target="_blank" href={blog}>
              {blog}
            </a>
          </li>
        )}

        {twitter_username && (
          <li>
            <BsTwitter />
            <a target="_blank" href={`https://twitter.com/${twitter_username}`}>
              @{twitter_username}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Profile;

function formatNumbers(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
