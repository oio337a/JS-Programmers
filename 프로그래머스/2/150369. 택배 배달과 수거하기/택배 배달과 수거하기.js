function solution(cap, n, deliveries, pickups) {
    let totalDistance = 0;

    let d_ptr = n - 1;
    let p_ptr = n - 1;

    while (d_ptr >= 0 || p_ptr >= 0) {
        while (d_ptr >= 0 && deliveries[d_ptr] === 0) {
            d_ptr--;
        }

        while (p_ptr >= 0 && pickups[p_ptr] === 0) {
            p_ptr--;
        }

        // The destination for this trip is the furthest of the two
        const destination = Math.max(d_ptr, p_ptr);
        
        // If there are no more jobs, break
        if (destination < 0) {
            break;
        }

        // Add the round trip distance to the total
        totalDistance += (destination + 1) * 2;

        // --- Simulate the trip ---

        // Deliveries
        let currentCap = cap;
        for (let i = d_ptr; i >= 0; i--) {
            if (deliveries[i] > 0) {
                if (currentCap >= deliveries[i]) {
                    currentCap -= deliveries[i];
                    deliveries[i] = 0;
                } else {
                    deliveries[i] -= currentCap;
                    break; // Truck is empty
                }
            }
        }

        // Pickups
        currentCap = cap;
        for (let i = p_ptr; i >= 0; i--) {
            if (pickups[i] > 0) {
                if (currentCap >= pickups[i]) {
                    currentCap -= pickups[i];
                    pickups[i] = 0;
                } else {
                    pickups[i] -= currentCap;
                    break; // Truck is full
                }
            }
        }
    }

    return totalDistance;
}