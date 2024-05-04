//1.
function sum(arr){
    return arr.filter(item => item>20)
                .reduce((accum,item)=>(accum + item),0);
}
let arr = [20,30,40];
console.log(sum(arr));

//2.
const getNewArray = function (arr){
    let result = [];
    arr.forEach(item => {
        if(item.length >= 5 && item.includes('a')){
            result.push(item);
        }
    });
    return result;
}
let arr2 = ['appl','banana','orange','pink'];
console.log(getNewArray(arr2));

//3.
const concat = (x,y,z) => [...x,...y,...z];
console.log(concat('hi',[1,2,3],['Hello','World']));

//4.
const students = [

    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
  
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
  
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
  
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
  
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  
  ];
  let result = students.filter(s=>s.courses.includes('cs303'))
    .reduce((accu,student)=>{
        let avg = student.grades.reduce((x,y)=>(x + y),0)/student.grades.length;
        accu[student.name] = avg;
        return accu;
    },{});
console.log(result);
