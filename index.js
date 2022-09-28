const myStopWatch = ()=>{
  let countedSec = mySec.value;
  countedSec++;
  mySec.value = countedSec;
  setTimeout(myStopWatch, 10);
  if(mySec.value == 100){
    mySec.value = 0;
    myMin.value++;
  }
  if(myMin.value == 60){
    myMin.value = 0;
    myHour.value++
  }
 
}