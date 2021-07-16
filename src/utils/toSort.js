const getCompareString = (type) => function compareString (a, b) {
	if (a[type] > b[type]) return 1;
	if (a[type] === b[type]) return 0;
	if (a[type] < b[type]) return -1;
};

export function toSort(arr, type, sortInRising) {
  const clonedArr = arr.concat();
  if (type === "id") {
    if (sortInRising) {
      console.log("yes");
      return clonedArr.sort((a, b) => a[type] - b[type]);
    } else {
      return clonedArr.sort((a, b) => b[type] - a[type]);
    }
  } else {
    return sortInRising
      ? clonedArr.sort(getCompareString(type))
      : clonedArr.sort(getCompareString(type)).reverse();
  }
}
