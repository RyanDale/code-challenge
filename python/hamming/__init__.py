# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#


def compute(strand_1='', strand_2=''):
    if len(strand_1) is not len(strand_2):
        raise ValueError
    return sum(1 for (index, nucleotide) in enumerate(strand_1) if nucleotide is not strand_2[index])
