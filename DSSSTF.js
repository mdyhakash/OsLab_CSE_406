function sstf(requests, startHead) {
  let head = startHead;
  let totalMovement = 0;

  
  let pending = requests.filter(r => r !== startHead);

  let path = [head];

  while (pending.length > 0) {
    let nearestIdx = 0;
    let minDistance = Math.abs(pending[0] - head);

    for (let i = 1; i < pending.length; i++) {
      const distance = Math.abs(pending[i] - head);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIdx = i;
      }
    }

    totalMovement += minDistance;
    head = pending[nearestIdx];
    path.push(head);

    pending.splice(nearestIdx, 1);
  }
  console.log("Total Seek Operations:", totalMovement);
}
const requests = [176, 49, 114, 90, 26, 39];
const startHead = 39;
sstf(requests, startHead);
