import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-chip.vue';

let wp: VueWrapper;

describe('c-chip.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-image', () => {
		expect(wp.vm.$options.name).toBe('c-chip');
	});
});
