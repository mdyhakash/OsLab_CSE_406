function dsfcfs(requests, startHead) {
  let head = startHead;
  let totalMovement = 0;

  const filteredRequests = requests.filter(r => r !== startHead);

  for (let i = 0; i < filteredRequests.length; i++) {
    totalMovement += Math.abs(filteredRequests[i] - head);
    head = filteredRequests[i];
  }

  console.log("Total Seek Operations" ,totalMovement);
}

const requests = [176, 39, 114, 90, 26];
const startHead = 39;

dsfcfs(requests, startHead);

 
