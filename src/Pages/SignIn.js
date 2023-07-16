import { useDispatch, useSelector } from 'react-redux'
import '../Styles/SignIn.css'
import { setIsAuthorized, setUsername} from '../Slice/authSlice';
import { useNavigate } from "react-router-dom";

export function SignIn(){
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigator = useNavigate();
    function handleonChange(e){
        dispatch(setUsername(e.target));
    }

    function handleonClick(){
        alert("You are successfully signed in!");
        dispatch(setIsAuthorized(true));
        if(setIsAuthorized) alert('welcome  ' + auth.username);
        navigator('/');
    }
    return (
        <main class="main">
            <form class="form-signin text-center">
                <img class="mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
            
                <div class="form-floating">
                    <input type="username" class="form-control" id="floatingInput" placeholder="username" onChange={handleonChange} />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
            
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleonClick}>Sign In</button>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
    )
}