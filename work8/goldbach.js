function goldbach() {
    var odd=document.getElementById('odd').value
   if(odd%2!=0||odd<=2){
      alert('请输入偶数数字')
      return false
  }
  let goldbach=document.getElementById('goldbach')
  
  var arr=[]
  var a=0
  for(var i=2;i<=odd;i++){
      a=0
      for(let j=2;j<i;j++){
          if(i%j==0){
              a++
          }
      }
      if(a==0){

          arr.push(i)
      }
  }    
  var str=''
  console.log(odd)
  for(let i=0;i<(arr.length)/2;i++){
      for(let j=0;j<arr.length;j++){
          if((arr[i]+arr[j])===Number(odd)){
            str+='<div>'+odd+"可以拆分为两个素数"+arr[i]+"与"+arr[j]+"的和"+'</div>'
            console.log(odd+"可以拆分为两个素数"+arr[i]+"与"+arr[j]+"的和")
          }
      }
  }
  goldbach.innerHTML=str
     
}
