import { createTodo, deleteTodo, getTodos } from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
    let userId = cookies.get('userid');

    if (!userId) {
        userId = crypto.randomUUID();
        cookies.set('userid', userId, { path: '/' });
    }

    return {
        todos: getTodos(userId)
    };
};

export const actions: Actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const userId = cookies.get('userid');

        if (!userId) {
            return fail(401, { error: 'Unauthorized', title: '' });
        }

        try {
            createTodo(userId, data.get('title') as string);
        } catch (error) {
            return fail(422, {
                title: (data.get('title') as string) || '',
                error: error instanceof Error ? error.message : 'An error occurred'
            });
        }
    },

    delete: async ({ cookies, request }) => {
        const data = await request.formData();
        const userId = cookies.get('userid');

        if (!userId) {
            return fail(401, { error: 'Unauthorized' });
        }

        deleteTodo(userId, data.get('id') as string);
    }
};