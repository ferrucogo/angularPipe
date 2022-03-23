import { OrderWithArgsPipe } from './order-with-args.pipe';

describe('OrderWithArgsPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderWithArgsPipe();
    expect(pipe).toBeTruthy();
  });
});
