function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  var result = collection.filter(item => item % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码 写了一个过滤器
  return collection.filter(function(element, index, self) {
    return self.indexOf(element) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
