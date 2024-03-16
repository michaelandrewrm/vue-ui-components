import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-modal.vue';

let wp: VueWrapper;

describe('c-modal.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-image', () => {
		expect(wp.vm.$options.name).toBe('c-modal');
	});
});
