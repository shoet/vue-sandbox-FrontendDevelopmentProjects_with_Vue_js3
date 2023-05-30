interface Hoge {
  name: string;
  age: number;
  flg: boolean;
}

const hoge: Hoge = {name: 'aaa', age: 0, flg: false};

///// get type

type hogeType = typeof hoge
// hogeType: Hoge

type SomeType = typeof hoge[keyof typeof hoge];
// someType: string | number | boolean

const aValue = hoge.name;
type hogeNameType = typeof aValue;
// hogeNameType: string

if (typeof aValue === 'string') {
  console.log('string');
}

type keyTypeFromInterface = keyof Hoge;
// キーの型を取得
const v = hoge['name'];

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
getProperty(hoge, 'name');
// getProperty(hoge, 'bbb');

type valueTypeFromObject = typeof hoge;