import React from 'react';

function Chat() {
  return (
    <section className="tc-chat-style1">
      <div className="container">
        <div className="content">
          <a href="#" className="xl-text">
            3ncompany@gmail.com
          </a>
          <h5 className="mb-50 lh-5 font">
            Contact us: <input style={{marginLeft: "20px", paddingLeft: "20px", width: "30svw", borderRadius: "10px"}} class="input" placeholder='enter your email...'/>
          </h5>
        </div>
      </div>
      <img src="/home1/assets/img/c_line4.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Chat;
