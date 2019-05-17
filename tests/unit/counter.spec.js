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

  it('测试计数器computed total', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.increase').trigger('click');
    expect(wrapper.vm.total).toBe(11);
  });

  it('测试计数器filter numberType', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.increase').trigger('click');
    expect(wrapper.find('.type').text()).toBe('正数');
  });

  it('测试计数器filter numberType', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.decrease').trigger('click');
    expect(wrapper.find('.type').text()).toBe('负数');
  });

  it('测试计数器mixin square', () => {
    const wrapper = shallowMount(Counter);
    wrapper.setData({
      count: 3,
    });
    wrapper.vm.square();
    expect(wrapper.vm.count).toBe(9);
  });

  it('测试计数器emit', () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('.increase').trigger('click');
    wrapper.find('.emit').trigger('click');
    expect(wrapper.emitted('number')).toEqual([[1]]);
  });
});
