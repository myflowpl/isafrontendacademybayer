// Do a mock of postTask to check if it was called and write tests.

import { addTodo } from './todos-service';
import { postTask } from './server';

jest.mock('./server', () => ({
    postTask: jest.fn()
}))

describe('Todo service', () => {
    test('should return success for valid task', () => {
        const result = addTodo('new task');
        expect(result).toEqual({ success: true })
    });
    test('should post task for valid task', () => {
        addTodo('new task');
        expect(postTask).toHaveBeenCalledWith('new task')
    });
    test('should return error for invalid task', () => {
        const result = addTodo(null);
        expect(result).toEqual({ error: 'Given task is not valid'})
    });
})
