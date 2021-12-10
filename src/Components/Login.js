import React from "react";

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handlesignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className={"login"}>
      <div className="loginContainer">
        <label>Correo</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Contraceña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>iniciar sesion</button>
              <p>
                No tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Registrarse
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handlesignup}>registrarse</button>
              <p>
                Tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  iniciar sesion
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
