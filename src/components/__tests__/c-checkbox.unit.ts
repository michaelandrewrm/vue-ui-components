import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-checkbox.vue';

let wp: VueWrapper;

describe('c-checkbox.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-checkbox', () => {
		expect(wp.vm.$options.name).toBe('c-checkbox');
	});
});
