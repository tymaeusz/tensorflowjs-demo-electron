// Default Parameters

const FINGER_LOOKUP_INDICES = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};


const drawPath = (points, ctx, closePath = false) => {
    const region = new Path2D();
    region.moveTo(points[0]?.x, points[0]?.y);
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        region.lineTo(point?.x, point?.y);
    }

    if (closePath) { region.closePath(); }

    ctx.stroke(region);
}


export const drawKeypoints3D = (keypoints, handedness, ctxt, connections, scatter) => {
    const scoreThreshold = 0.5; // Example threshold for keypoint visibility
    const pointsData = keypoints.map(keypoint => [-keypoint.x, -keypoint.y, -keypoint.z]);
    const dataset = new scatter.ScatterGL.Dataset([...pointsData]);

    ctxt.scatterGL.setPointColorer((i) => {
        if (i >= pointsData.length || keypoints[i].score < scoreThreshold) {
            return '#ffffff'; // Hide low-confidence points
        }
        return handedness === 'Left' ? '#ff0000' : '#0000ff'; // Red for left, blue for right
    });

    if (!ctxt.scatterGLHasInitialized) {
        ctxt.scatterGL.render(dataset);
    } else {
        ctxt.scatterGL.updateDataset(dataset);
    }

    const sequences = connections.map(pair => ({ indices: pair }));
    ctxt.scatterGL.setSequences(sequences);
};




export const drawHands = (hands, ctx, showNames = false) => {
    if (hands.length <= 0) { return; }

    hands.sort((hand1, hand2) => {
        if (hand1.handedness < hand2.handedness) return 1;
        if (hand1.handedness > hand2.handedness) return -1;
        return 0;
    });

    // while (hands.length < 2) { hands.push(); }

    for (let i = 0; i < hands.length; i++) {
        ctx.fillStyle = hands[i].handedness === 'Left' ? 'Red' : 'Blue';
        ctx.strokeStyle = 'White';
        ctx.lineWidth = 2;

        for (let y = 0; y < hands[i].keypoints.length; y++) {
            const keypoint = hands[i].keypoints[y];
            ctx.beginPath();
            ctx.arc(
                keypoint.x,
                keypoint.y,
                4,
                0,
                2 * Math.PI
            );
            ctx.fill();

            if (showNames) {
                drawInvertedText(keypoint, ctx);
            }
        }

        const fingers = Object.keys(FINGER_LOOKUP_INDICES);
        for (let z = 0; z < fingers.length; z++) {
            const finger = fingers[z];
            const points = FINGER_LOOKUP_INDICES[finger].map(idx => hands[i].keypoints[idx]);
            drawPath(points, ctx);
        }
    }
}