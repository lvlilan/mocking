import { getLevel } from './index.js';
import fetchData from './http.js';

jest.mock('./http.js');

test('returns level when status is ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 42 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 42');
});

test('returns fallback when status is not ok', () => {
  fetchData.mockReturnValue({ status: 'error' });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});