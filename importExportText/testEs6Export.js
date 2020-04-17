'use strict'
//导出变量
export const a = '100';

//导出方法
export const dogSay = () => {
    console.log('dog say: wangwang');
}
//导出方法（第二种写法）
function catSay(){
    console.log('cat say: miaomiao');
}
export { catSay }

//export default导出
const name = 'yangqian';
export default name;



