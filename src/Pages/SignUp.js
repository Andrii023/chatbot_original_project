import '../Styles/SignIn.css';
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const navigator = useNavigate();
    function handleonClick(e){
      e.preventDefault();
      alert("You are successfully registered");
      navigator("/signin");
    }
    return (
      <main className="main">
          <form className="form-signin text-center">
            <img className="mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
        
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">First name</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Last name</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Enter Email</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Confirm Passwrod</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick={handleonClick}>Sign Up</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
      </main>
    )
}