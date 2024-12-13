import { test } from 'node:test';
import assert from 'node:assert';
import { quickSort } from './quick_sort.js';
import { bubbleSort } from './bubble_sort.js';
import { selectionSort } from './selection_sort.js';
import { insertionSort } from './insertion_sort.js';

function randomArray(size: number) {
  return Array.from(Array(size), () => Math.floor(Math.random() * (size + 1)));
}

const ORIGIN_ARRAY: readonly number[] = Object.freeze(randomArray(10_000));
const EXPECTED_ARRAY: readonly number[] = ORIGIN_ARRAY.toSorted((a, b) => a - b);

test('quick sort', () => {
  const result = quickSort(ORIGIN_ARRAY);
  assert.deepEqual(result, EXPECTED_ARRAY);
});

test('insertion sort', () => {
  const result = insertionSort(ORIGIN_ARRAY);
  assert.deepEqual(result, EXPECTED_ARRAY);
});

test('selection sort', () => {
  const result = selectionSort(ORIGIN_ARRAY);
  assert.deepEqual(result, EXPECTED_ARRAY);
});

test('bubble sort', () => {
  const result = bubbleSort(ORIGIN_ARRAY);
  assert.deepEqual(result, EXPECTED_ARRAY);
});
