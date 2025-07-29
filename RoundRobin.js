function roundRobin(processes, quantum) {
  let time = 0;
  let queue = [];
  let totalWaitingTime = 0;
  let remaining = processes.map(p => ({ ...p, remainingTime: p.burstTime, completionTime: 0 }));
  let done = 0;
  let n = processes.length;

  
  remaining.sort((a, b) => a.arrivalTime - b.arrivalTime);
  let i = 0;

  
  while (i < n && remaining[i].arrivalTime <= time) {
    queue.push(remaining[i]);
    i++;
  }

  while (done < n) {
    if (queue.length === 0 && i < n) {
      
      time = remaining[i].arrivalTime;
      queue.push(remaining[i]);
      i++;
    }

    let curr = queue.shift();

    let execTime = Math.min(curr.remainingTime, quantum);
    time += execTime;
    curr.remainingTime -= execTime;

   
    while (i < n && remaining[i].arrivalTime <= time) {
      queue.push(remaining[i]);
      i++;
    }

    if (curr.remainingTime > 0) {
     
      queue.push(curr);
    } else {
     
      curr.completionTime = time;
      curr.turnaroundTime = curr.completionTime - curr.arrivalTime;
      curr.waitingTime = curr.turnaroundTime - curr.burstTime;
      totalWaitingTime += curr.waitingTime;
      done++;

      console.log(`Process ${curr.pid} CT: ${curr.completionTime} TAT: ${curr.turnaroundTime} WT: ${curr.waitingTime}`);
    }
  }

  const avgWT = totalWaitingTime / n;
  console.log(`Average Waiting Time: ${avgWT.toFixed(2)}`);
}


const processesRR = [
  { pid: 'P1', arrivalTime: 0, burstTime: 5 },
  { pid: 'P2', arrivalTime: 1, burstTime: 3 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 2 },
  { pid: 'P5', arrivalTime: 4, burstTime: 3 },
];

const quantum = 2;

roundRobin(processesRR, quantum);
