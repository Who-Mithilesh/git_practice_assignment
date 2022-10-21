


function palindrome(string){
    let N = string.length;
    let flag=true;
    for (let i=0; i<N; i++){
        for(let j=N-1;j>=0;j--){
            if(string[i]!==string[j]){
                flag=false;
                break;
            }
        }
    } 
    if(flag){
        return true;
    } else {
        return false;
    }

}