function fcfs(p) {
  p.sort((a, b) => a.arrivalTime - b.arrivalTime);
  let time = 0;
  let totalWaitingTime = 0;

  p.map(p => {
    if (time < p.arrivalTime) {
      time = p.arrivalTime;
    }

    time += p.burstTime;
    p.completionTime = time;
    p.turnaroundTime = p.completionTime - p.arrivalTime;
    p.waitingTime = p.turnaroundTime - p.burstTime;

    totalWaitingTime += p.waitingTime;

    console.log(`Process ${p.pid} CT: ${p.completionTime} TAT: ${p.turnaroundTime} WT: ${p.waitingTime}`);
  });

  const avgWT = totalWaitingTime / p.length;
  console.log(`Average Waiting Time: ${avgWT.toFixed(2)}`);
}

const processesFCFS = [
  { pid: 'P1', arrivalTime: 0, burstTime: 3 },
  { pid: 'P2', arrivalTime: 1, burstTime: 2 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 4 },
];

fcfs(processesFCFS);
