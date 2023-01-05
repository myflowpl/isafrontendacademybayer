// Do a mock of getRandomNumber to return the value you need and write tests
import { getRandomNumber } from './math';
import { generateId } from './generator'

jest.mock('./math', () => ({
    getRandomNumber: () => 1
}))

describe('generateId', () => {
    beforeEach(() => expect.hasAssertions())

    test('should generate id with given seed', () => {
        const result = generateId('bayer');
        expect(result).toBe('id_bayer-1')
    });

    test('should generate id with given empty seed', () => {
        const result = generateId('');
        expect(result).toBe('id_-1')
    });
});