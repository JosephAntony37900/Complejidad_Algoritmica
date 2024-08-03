function compare(tuerca, tornillo) {
    if (tuerca === tornillo) {
        return 0;
    }
    return tuerca < tornillo ? -1 : 1;
}


export default compare