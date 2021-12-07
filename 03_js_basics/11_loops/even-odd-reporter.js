for (let i = 0; i <= 20; i++) {
    if (i === 0) {
        continue;
    }
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}