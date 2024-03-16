import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-carousel.vue';

let wp: VueWrapper;

describe('c-carousel.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-carousel', () => {
		expect(wp.vm.$options.name).toBe('c-carousel');
	});
});
