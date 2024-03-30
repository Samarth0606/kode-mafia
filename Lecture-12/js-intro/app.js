let var1 = "preeti";
let var2 = "kanika";

let var3 = "delhi";

let var4 = 23;

let out =
  "hi " +
  var1 +
  " and " +
  var2 +
  " mai " +
  var3 +
  " se hu and meri umar hai " +
  var4;
//   console.log(out);

// -------------
//   backtick
// string template literals

let out2 = `hi ${var1} and ${var2} mai ${var3} se hu and meri umar hai ${var4}`;
console.log(out2);

// wrong ❌
let out3 = "hi ${var1} and ${var2} mai ${var3} se hu and meri umar hai ${var4}";
console.log(out3);
