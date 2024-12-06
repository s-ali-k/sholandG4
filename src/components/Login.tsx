const Login = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <h1>Login to your Account</h1>
      </div>
      <form>
        <div>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
          <button type="submit">sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
