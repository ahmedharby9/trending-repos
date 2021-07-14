import { ConciseNumberPipe } from './concise-number.pipe';

describe('ConciseNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ConciseNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
