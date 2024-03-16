import { describe, it, beforeEach, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import Component from '../c-dialog.vue';

let wp: VueWrapper;

describe('c-dialog.vue', () => {
	beforeEach(() => {
		wp = shallowMount(Component, {});
	});

	it('should has a name equal to c-dialog', () => {
		expect(wp.vm.$options.name).toBe('c-dialog');
	});
});
