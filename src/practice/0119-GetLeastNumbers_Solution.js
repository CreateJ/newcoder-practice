function GetLeastNumbers_Solution(input, k)
{
    input = input.sort((a, b)=> a-b)
    console.log(input)
    return input.slice(0,k)
}

console.log(GetLeastNumbers_Solution([2,3,4,8,9,1], 2))