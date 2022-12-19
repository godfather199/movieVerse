import './login.css'

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <span className="loginTitle">Sign in to your account</span>
        <form className="loginForm">
          <div className="loginFormItems">
            <input type="text" placeholder='Email/Phone number' className="loginInput" />
          </div>
          <div className="loginFormItems">
            <input type="password" placeholder='Password' className="loginInput" />
          </div>
          <div className="loginFormItems">
            <button className="loginBtn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login