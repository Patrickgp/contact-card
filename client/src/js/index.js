// import modules
import("./form");
import("./submit");
import { initDb, getDb, postDb } from "./database";
// import CSS files
import "../css/index.css";

// import dependencies
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import images
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

window.addEventListener("load", function () {
  initDb();
  // temporarily here
  getDb();
  postDb("Patrick", "patrick@email.com", 1234567890, "Bear");
  getDb();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});
