function sjf(p) {

  p.sort((a, b) => a.arrivalTime - b.arrivalTime);

  let time = 0;
  let totalWaitingTime = 0;
  let completed = 0;
  const n = p.length;
  let visited = new Array(n).fill(false);

  while (completed < n) {
    let idx = -1;
    let minBurst = Infinity;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && p[i].arrivalTime <= time && p[i].burstTime < minBurst) {
        minBurst = p[i].burstTime;
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

      console.log(`Process ${p[idx].pid} CT: ${p[idx].completionTime} TAT: ${p[idx].turnaroundTime} WT: ${p[idx].waitingTime}`);
    }
  }

  const avgWT = totalWaitingTime / n;
  console.log(`Average Waiting Time: ${avgWT.toFixed(2)}`);
}

const processesSJF = [
  { pid: 'P1', arrivalTime: 0, burstTime: 3 },
  { pid: 'P2', arrivalTime: 1, burstTime: 2 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 4 },
];

sjf(processesSJF);
