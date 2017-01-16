// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming {
    compute(strand1 = '', strand2 = '') {
        if (strand1.length != strand2.length) {
            throw 'DNA strands must be of equal length.';
        }

        // Creating Arrays instead of using a for loop for a more concise solution
        strand1 = strand1.split('');
        strand2 = strand2.split('');
        return strand1.filter((nucleotide, index) => nucleotide !== strand2[index]).length;
    }
}

module.exports = Hamming;
