function contactPage() {
  let content = document.querySelector("#content");
  let html = `<div class="home bg">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="inner">
        <h3>Contact Info</h3>
        <ul>
        <li>Phone Number: 514-555-5555</li>
        <li>Email: info@resto.ca</li>
        <li>Address: 123 Fake Street, Montreal, QC</li>
        </ul>
        </div>

      
        </div>
      </div>
    </div>
  </div>`;
  content.insertAdjacentHTML("afterbegin", html);
}

export { contactPage };
