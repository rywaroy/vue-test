import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('HelloWorld.vue', () => {
  it('测试计数器标题', () => {
    const title = '计数器标题';
    const wrapper = shallowMount(Counter, {
      propsData: {
        title,
      },
    });
    expect(wrapper.find('.title').text()).toBe(title);
  });

  it('测试计数器增加', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.increase').trigger('click');
    expect(wrapper.find('.count').text()).toBe('1');
  });

  it('测试计数器减少', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.decrease').trigger('click');
    expect(wrapper.find('.count').text()).toBe('-1');
  });
});
