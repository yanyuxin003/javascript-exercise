export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码  String.fromCharCode就是由编码转为字母的
  return collection.map(item => String.fromCharCode(item + 96));
}
