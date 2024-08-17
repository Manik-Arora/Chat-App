import { useState } from "react";
import "./login.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back!</h2>
        <form action="">
          <input type="text" placeholder="Email" name="email" />
          <input type="password" name="Password" id="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./bg.jpg"} alt="" />
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="username" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" name="Password" id="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
