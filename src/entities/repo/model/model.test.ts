import { formatDate } from './model';

describe('Repo Card - formatDate', () => {
    it('should return formatted date', () => {
        expect(formatDate('2022-10-25T15:06:23.000')).toEqual('October 25, 2022 at 3:06 PM');
        expect(formatDate('2022-10-25T15:06:23.000Z')).toEqual('October 25, 2022 at 6:06 PM');
        expect(formatDate('1720331641000')).toEqual('July 7, 2024 at 8:54 AM');
        expect(formatDate(1720331641000)).toEqual('July 7, 2024 at 8:54 AM');
    });

    it('should return null if date is invalid', () => {
        expect(formatDate('')).toEqual(null);
    });
});
