import "../scss/style.scss";
import anchors from "./files/anchors.js";
import burger from "./files/burger.js";
import connectFile from "./files/connectFile.js";
import headerAddress from "./files/headerAddress.js";
import headerScroll from "./files/headerScroll.js";
import inputFile from "./files/inputFile.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import more from "./files/more.js";
import select from "./files/select.js";
import slides from "./files/slides.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
headerScroll();
headerAddress();
inputmask();
burger();
slides();
tabs();
more();
select();
inputFile();
connectFile();
map();
anchors();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{ type: "inline", src: "#modal-catalog", closeButton: false }]);
