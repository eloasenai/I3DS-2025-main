import React, { useRef } from "react";
import io from "socket.io-client";

const Join = (props) => {
  //Hook useRef
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    // Criando a conexão com servidor socket
    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    // Abrindo a pagina de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="text-center">
      <h1 style={{ fontFamily: "italic", fontSize: "100px", color: "#990066" }}>
        DevChat
      </h1>

      <div
        id="join-box"
        className="mt-4 rounded-4 py-4 px-5  d-flex flex-column justify-content-center align-items-center gap-3"
        style={{
          backgroundColor: "#000000",
          borderRadius: "15px",
          border: "2px solid #990066",
        }}
      >
        <h3>Bem-vindo ao DevChat!</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome de usuário"
            style={{
              backgroundColor: "#93105a96",
              color: "white",
              fontFamily: "italic",
              fontSize: "1.2rem",
            }}
          />
          <label
            htmlFor="floatingInput"
            className="text-light"
            style={{
              fontFamily: "cursive",
              fontSize: "1.2rem",
            }}
          >
            Nome de usuário
          </label>
        </div>
        <button
          style={{
            backgroundColor: "#880458",
            color: "white",
            fontFamily: "cursive",
            fontSize: "1.2rem",
            borderRadius: "30px", // define o arredondamento
          }}
          className="btn px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
