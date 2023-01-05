// Wrote tests for filterClients and getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from '../fixtures/clients-data';

describe('filterClients', () => {
    test('filter internal clients', () => {
        const result = filterClients(clients, { type: 'INTERNAL'});
        expect(result.length).toBe(3);
    })

    test('filter external clients', () => {
        const result = filterClients(clients, { type: 'EXTERNAL'});
        expect(result.length).toBe(2);
    })

    test('should return all clients when filter in not specified', () => {
        const result = filterClients(clients, { type: undefined });
        expect(result.length).toBe(5);
    })
});

describe('getLatestRegisteredClient', () => {
    test('return the client with the latest registered date', () => {
        const result = getLatestRegisteredClient(clients);
        expect(result.name).toBe('Andrzej')
    });

    test('return only one client when there are 2 with the same latest date', () => {
        const clientsWithSameDate = [
            ...clients, 
            { id: 6, name: 'Franciszek', type: 'INTERNAL', registered: new Date(2023, 1, 3) },
            { id: 7, name: 'Bogdan', type: 'INTERNAL', registered: new Date(2023, 1, 3) },
        ]
        const result = getLatestRegisteredClient(clientsWithSameDate);
        expect(result.name).toBe('Franciszek')
    });
})