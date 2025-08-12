
function priorityScheduling(p) {


  p.sort((a, b) => a.arrivalTime - b.arrivalTime);

  let time = 0;
  let totalWaitingTime = 0;
  let completed = 0;
  const n = p.length;
  let visited = new Array(n).fill(false);

  while (completed < n) {
    let idx = -1;
    let highestPriority = Infinity; 

    for (let i = 0; i < n; i++) {
      if (!visited[i] && p[i].arrivalTime <= time && p[i].priority < highestPriority) {
        highestPriority = p[i].priority;
        idx = i;
      }
    }

    if (idx === -1) {
      time++;
    } else {
      time += p[idx].burstTime;
      p[idx].completionTime = time;
      p[idx].turnaroundTime = p[idx].completionTime - p[idx].arrivalTime;
      p[idx].waitingTime = p[idx].turnaroundTime - p[idx].burstTime;

      totalWaitingTime += p[idx].waitingTime;
      visited[idx] = true;
      completed++;

      console.log(
        `Process ${p[idx].pid} CT: ${p[idx].completionTime} TAT: ${p[idx].turnaroundTime} WT: ${p[idx].waitingTime}`
      );
    }
  }

  const avgWT = totalWaitingTime / n;
  console.log(`Average Waiting Time: ${avgWT.toFixed(2)}`);
}

const processesPriority = [
  { pid: 'P1', arrivalTime: 0, burstTime: 11, priority: 2 },
  { pid: 'P2', arrivalTime: 5, burstTime: 28, priority: 0 },
  { pid: 'P3', arrivalTime: 12, burstTime: 2, priority: 3 },
  { pid: 'P4', arrivalTime: 2, burstTime: 10, priority: 1 },
  { pid: 'P5', arrivalTime: 9, burstTime: 16, priority: 4 },
];

priorityScheduling(processesPriority);
