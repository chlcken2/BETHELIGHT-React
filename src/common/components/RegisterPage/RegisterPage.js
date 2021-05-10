import React, { useRef, useState } from "react";
import styles from "assets/css/Authentication.module.scss";
import { useForm } from "react-hook-form";
import firebase from "firebase";

console.log(firebase);
function RegisterPage() {
  const { register, watch, errors, handleSubmit } = useForm({ mode: onchange });
  console.log(watch("createdUser"));

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(errorFromSubmit);
  const password = useRef();
  password.current = watch("password");

  //오류 발생 5월4일 3시
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log("createdUser", createdUser);
      console.log(createdUser);

      await createdUser.user.updateProfile({
        displayName: data.name,
      });
      await createdUser.user.updatePhoneNumber({
        phoneCredential: firebase.auth.AuthCredential,
      });

      //firebase 데이터베이스 저장하기
      await firebase.database().ref("users").child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        phone: createdUser.user.phoneNumber,
      });
      console.log(createdUser);

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
      <h2 className={styles.titleArea}>MEMBER JOIN</h2>
      <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login_title}>
          <label> Email</label>
          <input
            name="email"
            type="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            // {...register("email", { required: true, pattern:/^\S+@\S+$/i  })}
          />
          {errors.email && <p>This Email field is required</p>}

          <label> Name</label>
          <input
            name="name"
            ref={register({ required: true, maxLength: 10 })}
            // {...register("name", { required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>This name field is required</p>
          )}

          {errors.name && errors.name.type === "maxLength" && (
            <p>Your input exceed maximum Length</p>
          )}

          <label> Password</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 8 })}
            // {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This password field is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password must have at least 8 characters</p>
          )}

          <label> Password_Confirm</label>
          <input
            name="password_confirm"
            type="password"
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
            // {...register("password_confirm", {
            //   required: true,
            //   validate: (value) => value === password.current,
            // })}
          />
          {errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <p>This passwords confirm field is required</p>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <p>The passwords do not match</p>
            )}

          {errorFromSubmit && <p>{errorFromSubmit}</p>}
        </div>

        <div className={styles.signup}>
          <input type="submit" disabled={loading} />
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
