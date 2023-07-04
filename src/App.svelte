<script>
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Wrtie from "./pages/Write.svelte";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";
  import Write from "./pages/Write.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import "./css/style.css";

  const routes = {
    "/": Main,
    "/login": Login,
    "/singup": Signup,
    "/write": Write,
    "*": NotFound,
  };
</script>

<Router {routes} />
