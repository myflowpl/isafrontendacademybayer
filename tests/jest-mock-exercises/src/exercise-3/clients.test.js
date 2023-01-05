import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';

const clients = [
    { id: 1, name: 'Jan', type: 'INTERNAL', registered: new Date(2019, 4, 12) },
    { id: 2, name: 'Maria', type: 'INTERNAL', registered: new Date(2018, 3, 11) },
    { id: 3, name: 'Anna', type: 'EXTERNAL', registered: new Date(2017, 2, 10) },
    { id: 4, name: 'Andrzej', type: 'EXTERNAL', registered: new Date(2020, 10, 9) },
    { id: 5, name: 'Janina', type: 'INTERNAL', registered: new Date(2019, 11, 3) },
  ];  

jest.mock('./clients-data', () => ({
    getClients: jest.fn()
}));

jest.mock('./logger', () => ({
    logger: {
        error: jest.fn()
    }
}))


describe('filterClients', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should filter only INTERNAL clients for INTERNAL type', async () => {
    getClients.mockReturnValue(Promise.resolve(clients));

    const result = await filterClients({ type: 'INTERNAL'});

    expect(result.length).toEqual(3)
  });

  test('should return empty clients when empty list fetched', async () => {
    getClients.mockReturnValue(Promise.resolve([]));

    const result = filterClients({ type: 'INTERNAL'});

    expect(result).resolves.toEqual([])
  });

  test('should return empty list when fetching clients failed', async () => {
    getClients.mockReturnValue(Promise.reject(Error('error')));

    const result = filterClients({ type: 'INTERNAL'});

    expect(result).resolves.toEqual([])
  });

  test('should log error when fetching clients failed', async () => {
    const error = Error('error');
    getClients.mockReturnValue(Promise.reject(error));

    await filterClients({ type: 'INTERNAL'});

    expect(logger.error).toHaveBeenCalledWith('fetching clients failed!', error)
  });

  test('should not log error when fetching clients successful', async () => {
    getClients.mockReturnValue(Promise.resolve([]));

    await filterClients({ type: 'INTERNAL'});

    expect(logger.error).not.toHaveBeenCalled()
  });
});
