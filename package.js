
function minTimeForPackaging(arr, tw, tp) 
{
    let timer = 0;  
    while (1) 
    {
        let itemsPacked = 0; 

        for (let i = 0; i < tw; i++){
          if(arr[i] > 300){
              console.log("worker "+i+" is taking more time("+arr[i]+") then expected");
              arr[i] = 300; //reseting worker time to package
          }
            itemsPacked += (timer / arr[i]);    
        }

        if (itemsPacked >= tp){
            return timer;
		}
        timer++;
    } 
} 
   
var workerArray = [7,11,13,9];
var totalWorkers = workerArray.length; 
var totalPackages = 17;
if(totalWorkers <= 1000 && totalPackages <= 10000){
	console.log(minTimeForPackaging(workerArray, totalWorkers, totalPackages));
}
    