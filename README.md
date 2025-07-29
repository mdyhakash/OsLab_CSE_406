# Operating System Lab

# CPU Scheduling Algorithms Collection

Welcome to the CPU Scheduling Algorithms repository!  
Here you'll find implementations of various CPU scheduling algorithms in JavaScript.  
More algorithms will be added over time.

---

## Algorithms

### 1. First-Come, First-Serve (FCFS)

- **Type:** Non-preemptive  
- **Description:**  
  Processes are executed in the order they arrive in the ready queue. The CPU processes each job to completion before moving to the next.  
- **Characteristics:**  
  - Simple and easy to implement  
  - Can cause long waiting times, especially if a short process waits behind a long one (convoy effect)  
  - Fair in the sense that jobs are served in arrival order  


**Example Usage:**

```js
const processesSjf = [
  { pid: 'P1', arrivalTime: 0, burstTime: 3 },
  { pid: 'P2', arrivalTime: 1, burstTime: 2 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 4 },
];

fcfs(processesFCFS);
```
### Report
**You can find the detailed project report here:**
[FCFS](https://docs.google.com/document/d/137XycJDtZ4MUknVnnYPmiUg6YonBwxhqovFZXA99Wd8/edit?usp=sharing)



### 2. Shortest Job First (SJF) — Non-Preemptive

- **Type:** Non-preemptive  
- **Description:**  
  At every scheduling point, the process with the shortest CPU burst time among the arrived processes is selected next.  
- **Characteristics:**  
  - Generally reduces average waiting time compared to FCFS  
  - Requires knowledge of the CPU burst times in advance  
  - Can cause starvation if short jobs keep arriving and longer jobs wait indefinitely  

**How it works:**  
- Sorts processes by arrival time  
- Processes run to completion in arrival order  
- Calculates completion time (CT), turnaround time (TAT), waiting time (WT)  
- Outputs average waiting time  

**Example Usage:**

```js
const processesSjf = [
  { pid: 'P1', arrivalTime: 0, burstTime: 3 },
  { pid: 'P2', arrivalTime: 1, burstTime: 2 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 4 },
];

sjf(processesFCFS);
```
### Report
**You can find the detailed project report here:**
[SJF](https://docs.google.com/document/d/1-mMaW5Mos6Jhy2KB43_slCBs54fgMmca1e81gy3T3YY/edit?usp=sharing)

### 3. Round Robin (RR)

- **Type:** Preemptive  
- **Description:**  
  Each process is assigned a fixed time slot (quantum) in cyclic order. If a process doesn't finish within its quantum, it is preempted and moved to the back of the ready queue. This ensures fair sharing of CPU time among all processes.  
- **Characteristics:**  
  - Suitable for time-sharing systems  
  - Improves response time for short processes  
  - Requires setting a suitable quantum time (too small causes high overhead, too large behaves like FCFS)  
  - Avoids starvation by cyclic scheduling  

**How it works:**  
- Maintain a queue of processes ready to run  
- Assign each process a CPU time slice (quantum)  
- Run the first process in the queue for a maximum of quantum time  
- If process finishes earlier, move to next process  
- If process still has remaining burst time after quantum, requeue it at the end  
- Repeat until all processes complete  
- Calculate waiting time, turnaround time, and average waiting time  

**Example Usage:**

```js
const processesRR = [
  { pid: 'P1', arrivalTime: 0, burstTime: 5 },
  { pid: 'P2', arrivalTime: 1, burstTime: 4 },
  { pid: 'P3', arrivalTime: 2, burstTime: 2 },
  { pid: 'P4', arrivalTime: 3, burstTime: 1 },
];

const quantum = 2;

roundRobin(processesRR, quantum);

```
### Report
**You can find the detailed project report here:**
[RoundRobin](https://docs.google.com/document/d/1oTX-MybcYBJ7Q2yodE8fcLCWp9NJbiwVHa3l3rgSD-E/edit?usp=sharing)
