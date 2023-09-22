import React, { useState } from 'react';
import {database} from '../firebaseconfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e,type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(type === 'signup'){
    createUserWithEmailAndPassword(database, email, password).then(data => {
        console.log(data, "authData");
        navigate('/home');
    }).catch(err =>{
        alert(err.code)
        setLogin(true)
    })
}else {
    signInWithEmailAndPassword(database, email, password).then(data => {
        console.log(data, "authData")
        navigate('/home')
    }).catch(err =>{
    alert(err.code)
})
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{login ? (<>
          <h2>Welcome to Gallery</h2>
          </>) : (<>
          <h2>Welcome to Gallery</h2>
          <span className='text-sm'>Get Awsome Photo Gallery</span>
          </>)}</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-t-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-b-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className={login ?'flex items-center justify-between' : 'hidden'}>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {login ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <p className={login ?'hidden' : ''}>Already a Member? <span onClick={() => setLogin(true)} role='button'>Sign In</span></p>
            <p className={login ?'' : 'hidden'}>New User? <span onClick={() => setLogin(false)} role='button'>Sign Up</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
