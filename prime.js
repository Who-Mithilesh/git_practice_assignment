


function findPrime(num){
   let flag = true;
   if(num==1){
      return false;
   }else{
      for(let i=2;i<=num/2;i++){
         if(num%i==0){
            flag=false;
         }
      }
   }
   if(flag){
      return true;
   } else{
      return false;
   }
   
}