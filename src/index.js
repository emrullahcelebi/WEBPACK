import { setItem } from "./utils/storage";
import "./index.scss";


document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("Hallo 2");
  alert("v1");
  alert("v2");
  alert("v3");

  setItem("token", "sdoisjoisrtosigjsdffdfdfgertejkkukukihjgzxzxhkjghkuhk");
});
