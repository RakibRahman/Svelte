import { createTodo, deleteTodo, getTodos } from '$lib/server/db.js';
import { fail } from "@sveltejs/kit";


// type Todos = ReturnType<typeof getTodos>
export function load({ cookies }) {
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        todos: getTodos(id)
    };
}


export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        const userId = cookies.get('userid');
        console.log({ formData: data, userId });

        if (userId) {
            try {
                createTodo(userId, data.get('title') as string);
            } catch (error) {
                console.log({ error });

                return fail(422, {
                    description: data.get('description'),
                    error: error instanceof Error ? error.message : 'An error occurred'
                });
            }
        }
    },
    delete: async ({ cookies, request }) => {
        const data = await request.formData();
        const userId = cookies.get('userid');
        if (userId) {
            deleteTodo(userId, data.get('id') as string);
        }
    }
};