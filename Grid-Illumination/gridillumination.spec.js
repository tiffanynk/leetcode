const {illuminateMatrix} = require('./gridillumination');

describe.skip('illuminateMatrix', () => {
    it('should illuminate the matrix rows and columns', () => {})
        const matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const input = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        const output = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ];
        expect(illuminateMatrix(matrix, input)).toEqual(output)
})