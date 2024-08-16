import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./bg.jpg" alt="hhh" />
          <div className="texts">
            <span>Paul Walker</span>
            <p>Hey, there I'm using this chat app.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>Hiiii</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Hey there!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>How r u doing?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I'm good, Thanks.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Wbu?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm good too.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./bg.jpg" alt="" />
            <p>
              I'm sending this msg 1 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Atque, velit, nisi culpa quae facilis ex nemo
              laborum aliquid repudiandae ut oero, aut.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm receiving this msg 1</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I'm sending this msg 2</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm receiving this msg 2</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I'm sending this msg 3</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm receiving this msg 3</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I'm sending this msg 4</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm receiving this msg 4</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I'm sending this msg 5</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./bg.jpg" alt="" />
          <div className="texts">
            <p>I'm receiving this msg 5</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className="sendButton">Send</div>
      </div>
    </div>
  );
};

export default Chat;
