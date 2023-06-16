import arr from '../app';

test('sort', () => {
  const result = arr;
  const arrExpect = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(arrExpect);
});
