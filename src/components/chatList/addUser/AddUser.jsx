import "./addUser.css";

const AddUser = () => {
  return (
    <div className="addUser">
      <form action="">
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./bg.jpg" alt="" />
          <span>Paul Walker</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
