import React from "react";
const Chat = (props) => {
  //Fake messages data
  const messages = [
    {
      authorId: 1,
      author: "John Doe",
      message:
        "Olá, como vai você? Olá, como vai você?Olá, como vai você? Olá, como vai você?Olá, como vai você?",
    },
    { authorId: 2, author: "Jane Doe", message: "Estou bem, e você?" },
    { authorId: 3, author: "Luca Doe", message: "Estou bem, e você?" },
  ];
  //------------------

  return (
    <div
      id="chat-container"
      style={{
        width: "400px",
        height: "600px",
        position: "relative", // Necessário para posicionar o vídeo no fundo
        overflow: "hidden",
        border:"2px solid #990066",
      }}
      className="m-4 rounded-4 p-3 d-flex flex-column"
    >
      <div
        id="chat-body"
        className="d-flex flex-column gap-3 overflow-y-hidden h-100"
        style={{ position: "relative", zIndex: 1 }} // Garante que o conteúdo fique acima do vídeo
      >
        {messages.map((message, index) => (
          <div
            className="align-self-start me-5 bg-gradient rounded-3 p-2 text-light"
            style={{
              fontFamily: "cursive",
              backgroundColor: "#6a0f45",
              maxWidth: "80%",
            }}
            key={index}
          >
            <div id="message-author" className="fw-bold">
              {message.author}
            </div>
            <div id="message-text">{message.message}</div>
          </div>
        ))}
      </div>

      <div id="chat-footer" className="input-group ">
        <input
          id="msgUser"
          name="msgUser"
          type="text"
          className="form-control bg-dark-subtle border-0"
          placeholder="Mensagem"
        />
        <button
          className="btn btn-dark m-0 input-group-text"
          id="basic-addon1"
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;