import React, { useEffect } from "react";
import Home from "category/Home";
import Product from "category/Product";
import About from "category/About";
import Social from "category/Social";
import LoginPage from "common/components/LoginPage/LoginPage";
import RegisterPage from "common/components/RegisterPage/RegisterPage";
// import FindID from "common/Authentication/FindID";
// import FindPW from "common/Authentication/FindPW";
import { Route, Switch, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "redux/action/user_action";
import "bootstrap/dist/css/bootstrap.min.css";
const Root = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      //로그인 된 상태
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/");
        dispatch(clearUser(user));
      }
    });
  }, [dispatch, history]);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/social" component={Social} />
        {/* <Route path="/findid" component={FindID} />
        <Route path="/findpw" component={FindPW} /> */}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/">Not Found</Route>
      </Switch>
    );
  }
};
export default Root;
