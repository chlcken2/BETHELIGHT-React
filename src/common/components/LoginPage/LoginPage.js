import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "assets/css/Authentication.module.scss";
import { useForm } from "react-hook-form";
import firebase from "firebase";
require("firebase/auth");

function LoginPage() {
  const { register, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    console.log(provider);
    if (name === "google") {
      provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          // var credential = result.credential;
          // // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = credential.accessToken;
          // // The signed-in user info.
          // var user = result.user;
          // // ...
        })
        .catch((error) => {
          // // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // // ...
        });
    } else if (name === "facebook") {
      provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          // var credential = result.credential;
          // // The signed-in user info.
          // var user = result.user;
          // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          // var accessToken = credential.accessToken;
          // // ...
        })
        .catch((error) => {
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // // ...
        });
    }
    // const data = await firebase.signInWithPopup(provider);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 3000);
      // 초 사라지는것에 + 로 transition 알아보기
    }
  };
  // console.log(password.current, "password.current");

  return (
    <div className={styles.SignInBlock}>
      <h2 className={styles.titleArea}>MEMBER LOGIN</h2>
      <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login_title}>
          <label> EMAIL</label>
          <input
            name="email"
            type="email"
            autoComplete="on"
            ref={register({ required: true, pattern: /^S+@S+$/i })}
            // {...register("email", { required: true, pattern: /^S+@S+$/i })}
          />
          {errors.email && <p>This email field is required</p>}
        </div>
        <div className={styles.login_title}>
          <label> PASSWORD</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true, maxLength: 10 })}
            // {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This password field is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password must have at least 8 characters</p>
          )}
          {errorFromSubmit && <p>{errorFromSubmit}</p>}
        </div>
        <div className={styles.find_Auth}>
          <div id={styles.bulb}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <div id={styles.forgot_btn}>
            <Link to="/FindID">Forgot E-mail? &nbsp; </Link>/
            <Link to="/FindPW">&nbsp;&nbsp; Forgot Password? </Link>
          </div>
        </div>
        <div className={styles.signup}>
          <input type="submit" value="LOGIN" disabled={loading} />
        </div>
      </form>

      <div className={styles.Login_btn}>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="facebook">
          Continue with Facebook
        </button>
      </div>
      <hr />
      <div className={styles.signup}>
        <p>
          아직 회원이 아니신가요? <br />
          회원가입을 하시면 다양하고 특별한 혜택이 준비되어 있습니다.
        </p>
        <p>
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
