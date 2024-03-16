import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-icon.vue';

let wp: VueWrapper;

describe('c-icon.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-icon', () => {
		expect(wp.vm.$options.name).toBe('c-icon');
	});
});
