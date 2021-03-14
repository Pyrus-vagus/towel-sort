// You should implement your task here.

module.exports = function towelSort(matrix) {
    return typeof matrix === "undefined" || matrix.length === 0
        ? []
        : matrix
              .map((item, i) => (i % 2 !== 0 ? item.reverse() : item))
              .reduce((a, b) => a.concat(b));
};
