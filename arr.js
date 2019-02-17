var arr = [2,3,4,5,6,7,1];
var targetValue = 1,temp=[];
for(var i=0;i<arr.length;i++)
{
    for (var j=i+1;j<arr.length;j++)
    {
        if(mod(arr[j]-arr[i]) === targetValue)
        {
            temp.push("("+arr[j]+","+arr[i]+")")
        
        }
    }
}
for(var a=0;a<temp.length;a++)
{
    for(var b=a+1;b<temp.length;b++)
    {
    if(temp[a] === temp[b])
    temp.splice(a,1)
    }
}
console.log(temp);

function mod(num){
if(num<0)
return num*(-1);
else
return num
}