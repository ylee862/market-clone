<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
    }
  };
</script>

<div>
  <div>로그인</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <img
      class="google-img"
      src="https://www.google.com/search?q=googlepng&tbm=isch&ved=2ahUKEwizq7vfyPj_AhUEk1YBHdSQA9kQ2-cCegQIABAA&oq=googlepng&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjoECCMQJ1DOA1jeBWDmBmgAcAB4AIABdIgBxQOSAQMwLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=TeilZPPQN4Sm2roP1KGOyA0&bih=809&biw=1470&rlz=1C5MACD_enCA1036CA1036#imgrc=C9E-hMMdtZ9C1M"
      alt=""
    />
    <div>Google로 시작하기</div>
  </button>
</div>

<style>
  .login-btn {
    width: 200px;
    height: 50px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
  }

  .google-img {
    width: 20px;
  }
</style>
