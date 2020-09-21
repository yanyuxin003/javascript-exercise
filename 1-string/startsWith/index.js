export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  var num = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].substr(0, 2) == '粤A') {
      num++;
    }
  }
  return num;
}
