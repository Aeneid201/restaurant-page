import cheesecake from "./assets/img/cheesecake.jpg";
function menuPage() {
  let content = document.querySelector("#content");
  let html = `<div class="menu">
  <div class="container">
  <div class="row"><div class="col-lg-4 col-sm-4 col-xs-12 text-center">
  <div class="inner">
  <div class="img"><img src="${cheesecake}"></div>
  <div class="details">
  <h3>$12</h3>
  <h3>Raspberry Cheesecake</h3>
  <p>Our Raspberry cheesecake is one of our best sellers, we use quality ingredients to keep our customers happy.</p>
  </div>
  </div>
  </div></div>
  </div>
  </div>`;

  content.insertAdjacentHTML("afterbegin", html);
}

export { menuPage };
