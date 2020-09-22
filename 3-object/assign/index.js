export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
  const target = {
    serialNumber: '12345',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  return Object.assign(source, target);
}
