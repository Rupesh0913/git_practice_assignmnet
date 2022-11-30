  let str="madam";
  let N=str.length;

  let isPalindrome=true;
  
  for(let i=0;i<N/2;i++)
  {
      if(str[i]==str[N-i-1])
      continue;
      else
      {
          isPalindrome=false;
          break;
      }
  }
  if(isPalindrome)
  console.log("Yes");
  else
  console.log("No");

