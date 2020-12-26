import assert from 'assert';
import { average } from './index';
import { it } from './testDefinition';

it('Array [1,2,3,4,5] should return 15 as average', function () {
    const array = [1, 2, 3, 4, 5];
    const result = average(array);
    assert.deepStrictEqual(result, 15, 'Numbers does not match');
});
