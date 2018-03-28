import {Event} from './index';
describe('test', () => {
    test('test event', () => {
        const eventA = new Event();
        expect(eventA instanceof Event).toBeTruthy();
    })
})