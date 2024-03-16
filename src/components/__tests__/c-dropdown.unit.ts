import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-dropdown.vue';

let wp: VueWrapper;

describe('c-dropdown.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-dropdown', () => {
		expect(wp.vm.$options.name).toBe('c-dropdown');
	});
});
