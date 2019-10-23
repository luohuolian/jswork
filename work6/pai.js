//"计算"按钮点击处理函数
function calculate(){
    //读取阶数输入框的数值
    let num = document.getElementById('num').value 
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('pai').value=pi(num)
    }
}
//声明阶乘函数n!  factorial()
function factorial(n){
    //声明阶乘汇总数并赋值为1
    let sum =1
    //for循环累乘
    for(let i=1;i<=n;++i){
        sum *= i;
    }
    //返回阶乘汇总数
    return sum
}
//声明奇数阶乘函数(2n+1)!! oddFactorial()
function oddFactoria(n){
    //声明阶乘汇总数并赋值为1
    let sum = 1
    //for循环累乘
    for(let i=1;i<=n;++i){
        sum *=((2*i)+1);
    }
    //返回阶乘汇总
    return sum
}
//阶乘法计算圆周率函数
function pi(num){
    //声明汇总值变量，并且赋值0
    let sum = 0
    //for循环计算圆周率
    for(let i=0;i<=num;++i){
        //声明阶乘被除数 dividend,并调用factorial函数取值
        let dividend = factorial(i)
        //声明阶乘被除数 divisor,并调用oddFactorial函数取值
        let divisor = oddFactoria(i)
        //累加汇总值
        sum += (dividend/divisor)
        //sum += dividen,divisor
    }
    //返回圆周率
    return sum * 2;

}

calculate()