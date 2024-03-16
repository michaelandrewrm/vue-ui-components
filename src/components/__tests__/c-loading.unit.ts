import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-loading.vue';

let wp: VueWrapper;

describe('c-loading.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-image', () => {
		expect(wp.vm.$options.name).toBe('c-loading');
	});
});
