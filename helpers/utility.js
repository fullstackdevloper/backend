exports.randomNumber = function (length) {
  var text = "";
  var possible = "123456789";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  return Number(text);
};

exports.randomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  return text;
};

const getBaseLog = (num, baseNumber) => {
  return Math.log(num) / Math.log(baseNumber);
};

const stringOrNumberToNumber = (num) => {
  const int = Number(num);

  switch (typeof num) {
    case "number":
      return num;
    case "string":
      if (isNaN(int)) {
        return undefined;
      }
      return int;

    default:
      return undefined;
  }
};
