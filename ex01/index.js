const babel = require('@babel/core');

const source = 'const fn = () => {}';
// babel : 어떤 문법으로 되어 있는 string 을 변환 규칙에 맞는 다른 애로 바꿔주는 애라는데....
const result = babel.transform(source, {});

console.log(result);