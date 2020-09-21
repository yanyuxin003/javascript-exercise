export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const max = 2020 - 2000;
  const min = 2020 - 2010;
  const result = collection.find(item => item.age >= min && item.age < max);
  return result.name;
}
