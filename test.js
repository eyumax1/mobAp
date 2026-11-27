export const total=() =>{
const array=[1, 2, 3, 4, 5];
const array2=array.map(array=>array*2)
const filter= array2.filter(array2=>array2>5);
const sum=array.reduce((acc,array) => acc+array,0);

return sum;
};