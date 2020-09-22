export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码  parseInt()是把String变成int的基础数据类型；
  let sum = 0;
  let value = Object.values(source);
  for (let i = 0; i < value.length; i++) {
    sum += parseInt(values[i]);
  }
  return sum;
}
