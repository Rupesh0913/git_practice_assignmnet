
   let num =4;

    let count=0;
    let printed=false;
   if(num==1||num==0){
   console.log("Yes");
   printed=true;
   }
   else
        for(let i=2;i<=num/2;i++)
        if(num%i==0){
            count++;
            break;
        }
    
    if(printed==false)
    {
    if(count==0)
        console.log("Yes");
    else
        console.log("No");
    }
    

