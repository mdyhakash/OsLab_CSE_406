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

---

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
const processesFCFS = [
  { pid: 'P1', arrivalTime: 0, burstTime: 3 },
  { pid: 'P2', arrivalTime: 1, burstTime: 2 },
  { pid: 'P3', arrivalTime: 2, burstTime: 1 },
  { pid: 'P4', arrivalTime: 3, burstTime: 4 },
];

fcfs(processesFCFS);
