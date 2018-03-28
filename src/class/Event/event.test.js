import Event from './index';

describe('Event class test', () => {
    const eventA = new Event();
    test('add events', () => {
        eventA.on('getA', function (a) {
            expect(a).toBe('A');
        })
        eventA.once('getA', function (a) {
            expect(a).toBe('A');
            
        })
        expect(eventA._events.getA.length).toBe(2);
    });
    test('once', () => {
        eventA.emmit('getA', 'A');
        expect(eventA._events.getA.length).toBe(1);
    })

    test('off', () => {
        eventA.off('getA');
        expect(eventA._events.getA).toBeFalsy();
    })
});
