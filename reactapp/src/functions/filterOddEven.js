export const filterOdd=(...arr)=>
{
    let ans=[];
    arr.forEach(ele=>{
        if(ele%2!=0)
        {
            ans.push(ele)
        }
    })
}