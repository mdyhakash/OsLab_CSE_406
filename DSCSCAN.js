function cScan(requests, startHead, direction) {
    let head = startHead;
    let totalMovement = 0;

    const filteredRequests = requests.filter(r => r !== startHead).sort((a, b) => a - b);

    let left = filteredRequests.filter(r => r < head);
    let right = filteredRequests.filter(r => r > head);

    left.sort((a, b) => a - b);  
    right.sort((a, b) => a - b);  

    if (direction === 'right') {
        for (let i = 0; i < right.length; i++) {
            totalMovement += Math.abs(head - right[i]);
            head = right[i];
        }

        if (left.length > 0) {
            totalMovement += Math.abs(head - left[0]);
            head = left[0];

           
            for (let i = 0; i < left.length; i++) {
                if (i === 0) continue;
                totalMovement += Math.abs(head - left[i]);
                head = left[i];
            }
        }
    } else if (direction === 'left') {
        left.sort((a, b) => b - a);
        right.sort((a, b) => b - a);

       
        for (let i = 0; i < left.length; i++) {
            totalMovement += Math.abs(head - left[i]);
            head = left[i];
        }

        if (right.length > 0) {
            totalMovement += Math.abs(head - right[0]);
            head = right[0];

           
            for (let i = 0; i < right.length; i++) {
                if (i === 0) continue;
                totalMovement += Math.abs(head - right[i]);
                head = right[i];
            }
        }
    }

    console.log("Total Seek Operations:", totalMovement);
}


const requests = [14, 20, 29, 40, 50, 110];
const startHead = 29;
const direction = "left";

cScan(requests, startHead, direction)