//冒泡排序
function bubbleSort(str) {
    //把字符串切分成数组
    let arr = str.split(',')
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for (let i = 0;i < arr.length - 1; i++) {
        //从第一个开始比较相邻的两个数组
        for (let j = 0; j< arr.length - i - 1; j++) {
            //比较相邻的两个元素，如果左面的大，那么久把大的交换到右边
            if (arr[j] > arr[j + 1]){
                //使用解构赋值的方法，把两个元素交换位置
                [arr[j],arr[j +1]] = [arr[j + 1],arr[j]]
            }
        }
    }
    return arr
}
//插入排序
function insertSort(str) {
    let arr = str.split(',')
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}