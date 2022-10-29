function homePage() {
  let content = document.querySelector("#content");

  let html = `<div class="home bg">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="inner">
          <p>Welcome to Resto Ouma! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at est ut ex consectetur vehicula. Vivamus eget ullamcorper eros. Etiam ac hendrerit est. Phasellus vestibulum dui quam, nec tincidunt nisl volutpat quis.</p>
        </div>

        <div class="inner">
        <h3>Hours</h3>
        <ul>
        <li>Monday: 10am - 6pm</li>
        <li>Tuesday: 10am - 6pm</li>
        <li>Wednesday: 10am - 6pm</li>
        <li>Thursday: 10am - 6pm</li>
        <li>Saturday: 10am - 6pm</li>
        <li>Sunday:10am - 6pm</li>
        </ul>
        </div>

        <div class="inner">
        <p>Location: 123, somewhere in Montreal, Canada</p>
        </div>
        </div>
      </div>
    </div>
  </div>`;
  content.insertAdjacentHTML("afterbegin", html);
}

export { homePage };
