var keys = ["description", "location", "frequency", "count"];
var vals = ["", "", "", ""];

var startsDict = {};
var REG = "ad name frequency ad description asd location as2";
keys.forEach((element) => {
  var s = REG.indexOf(element);
  startsDict[element] = s;
});
dictVals = Object.values(startsDict);
//REG.length = strLen
function getNextLargest(num, arr, strLen) {
  min_largest = 1000000;
  arr.forEach(i => {
    if (i > num && i < min_largest) {
      min_largest = i;
    }
  })
  return Math.min(min_largest, strLen);
}
for (var i = 0; i < Object.keys(startsDict).length; i++) {
  if (dictVals[i] > 0) {
    var end_ind = getNextLargest(dictVals[i], dictVals, REG.length);
    console.log(end_ind)
    vals[i] = REG.substring(dictVals[i]+keys[i].length, end_ind).trim()
  }
}
console.log(vals)