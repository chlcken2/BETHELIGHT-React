import React from "react";

function facebook(props) {
  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v10.0&appId=2894629910825191&autoLogAppEvents=1"
        nonce="xgJtTBdO"
      ></script>
      <div
        class="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    </div>
  );
}

export default facebook;
