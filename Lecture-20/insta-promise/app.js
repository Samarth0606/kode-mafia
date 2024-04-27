// image selection

let step1 = function () {
  return new Promise(function (resolve, reject) {
    console.log("plz wait selecting image...");
    setTimeout(function () {
      resolve("selected image");
    }, 4000);
  });
};

let step2 = function (image) {
  return new Promise(function (resolve, reject) {
    console.log(`plz wait applying filter on ${image}...`);
    setTimeout(function () {
      resolve("filtered image");
    }, 2000);
  });
};
let step3 = function (filter) {
  return new Promise(function (resolve, reject) {
    console.log(`plz wait adding caption on ${filter}...`);
    setTimeout(function () {
      resolve("added caption");
    }, 5000);
  });
};

let step4 = function (caption) {
  return new Promise(function (resolve, reject) {
    console.log(`plz wait uyploading image with ${caption}...`);
    setTimeout(function () {
      resolve("image uploaded");
    }, 3000);
  });
};
step1()
  .then(function (image) {
    console.log(image);
    return step2(image);
  })
  .then(function (filter) {
    console.log(filter);
    return step3(filter);
  })
  .then(function (caption) {
    console.log(caption);
    return step4(caption);
  })
  .then(function (upload) {
    console.log(upload);
  });
