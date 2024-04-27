// image select
function step1(fn) {
  console.log("please intezar kariye mai dhoondh rahi hu...");
  setTimeout(function () {
    console.log("image milgyi wohooo");
    fn("selected image");
  }, 4000);
}

//filter lagana
function step2(image, fn) {
  console.log(`plz wait mai filter laga rhi hu on ${image}`);
  setTimeout(function () {
    console.log("filter laga diaa hehehhe");
    fn("filter applied");
  }, 2000);
}

//caption addig
function step3(filter, fn) {
  console.log(`plz wait adding caption to the ${filter}`);
  setTimeout(function () {
    console.log("caption added on filtered image");
    fn("captioned image");
  }, 5000);
}

//uploading
function step4(caption) {
  console.log(`plzz wait uploading your ${caption}`);
  setTimeout(function () {
    console.log("image uploaded successfullys");
  }, 3000);
}

step1(function (image) {
  step2(image, function (filter) {
    step3(filter, function (caption) {
      step4(caption);
    });
  });
});
// ------
// step1(step2(step3(step4()))); //wrong
