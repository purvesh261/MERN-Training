function doingSum(...nums)
{
    let sum = 0;
    for(n of nums)
    {
        sum += n;
    }
    console.log("sum", sum);
}

doingSum(6,74,23,6,6,3,57,68,56,3,4,25,235,376)