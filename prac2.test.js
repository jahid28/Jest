const arr=require("./prac2")
const array=[1,2,3]
test("done",()=>{
    expect(arr(array)).toEqual(array)
    expect(arr(array)).not.toBe(array)
})