const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
  maxNumb:function(){
    let min = Infinity;
    let max = -Infinity;
    let x;
    for( x in tasksCompleted) {
    if( tasksCompleted[x] < min) min = tasksCompleted[x];
    if( tasksCompleted[x] > max) max = tasksCompleted[x];
}return max;
  }
};
console.log(tasksCompleted.maxNumb())