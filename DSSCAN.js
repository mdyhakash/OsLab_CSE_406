function dsScan(requests, startHead, direction) {
    let head = startHead;
    let totalMovement = 0;

    const filteredRequests = requests.filter(r => r !== startHead).sort((a, b) => a - b);

    let left = filteredRequests.filter(r => r < head);
    let right = filteredRequests.filter(r => r > head);


    left.sort((a, b) => b - a);
    right.sort((a, b) => a - b);

    if (direction === 'left') {
        for (let i = 0; i < left.length; i++) {
            totalMovement += Math.abs(head - left[i]);
            head = left[i];
            
        }
        for (let i = 0; i < right.length; i++) {
            totalMovement += Math.abs(head - right[i]);
            head = right[i];
            
        }
    } else {
        for (let i = 0; i < right.length; i++) {
            totalMovement += Math.abs(head - right[i]);
            head = right[i];
            seekSequence.push(head);
        }
        for (let i = 0; i < left.length; i++) {
            totalMovement += Math.abs(head - left[i]);
            head = left[i];
            
        }
    }

    
    console.log("Total Seek Operations:", totalMovement);
}

const requests = [14, 20, 29, 40, 50, 110];
const startHead = 29;
const direction = "left";

dsScan(requests, startHead, direction);