const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));

  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });

  const data = await res.json();
  accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  window.sessionStorage.setItem("token", accessToken);

  const infoDiv = document.querySelector("#info");
  infoDiv.innerText = "로그인 되었습니다";

  const btn = document.createElement("button");
  btn.innerText = "상품 가져오기";
  btn.addEventListener("click", async () => {
    const res = await fetch("/items", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
  });
  infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);
