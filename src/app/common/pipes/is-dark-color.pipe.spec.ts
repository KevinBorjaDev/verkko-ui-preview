import { IsDarkColorPipe } from './is-dark-color.pipe';

describe('IsDarkColorPipe', () => {
  it('create an instance', () => {
    const pipe = new IsDarkColorPipe();
    expect(pipe).toBeTruthy();
  });
});
