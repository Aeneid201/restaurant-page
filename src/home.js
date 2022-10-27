var Mustache = require("mustache");
function test() {
  let body = document.querySelector("body");
  var view = {
    title: "Joe",
    calc: function () {
      return 2 + 4;
    },
  };

  var output = Mustache.render("{{title}} spends {{calc}}", view);

  console.log(output);
}

export { test };
