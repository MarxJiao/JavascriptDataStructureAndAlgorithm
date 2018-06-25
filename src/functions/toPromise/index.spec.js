/**
 * @file toPromise unit test
 * @author Marx
 */

import toPromise from './index';

test('toPromise', done => {
    function add(a, b) {
        return a + b;
    }

    toPromise(add)(1, 2).then(res => {
        expect(res).toBe(3);
        done();
    })
    .catch(err => {
        console.log(err);
    });
});
