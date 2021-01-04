/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, createApp, h } from 'vue-demi';

type InstanceType<V> = V extends { new (...arg: any[]): infer X } ? X : never;
type VM<V> = InstanceType<V> & { unmount(): void };

/**
 * for test
 */
export function mount<V>(Comp: V) {
  const el = document.createElement('div');
  const app = createApp(Comp);

  type C = typeof Comp;

  const unmount = () => app.unmount();
  const comp = (app.mount(el) as any) as VM<C>;
  comp.unmount = unmount;
  return comp;
}

/**
 * for test
 */
export function useSetup<V>(setup: () => V) {
  const Comp = defineComponent({
    setup,
    render() {
      return h('div', []);
    },
  });

  return mount(Comp);
}
