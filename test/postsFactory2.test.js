const { createPostOverrides } = require('../src/data/postFactory2.js');
const { createPost } = require('../src/clients/postsApi');

describe('JSONPlaceholder API /posts', () => {
    test('POST /posts', async () => {
        const generatedPost = createPostOverrides( { title: 'Custom title'} );
        const response = await createPost(generatedPost);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('title');
        expect(response.data.title).toBe(generatedPost.title);
        expect(response.data.body).toBe(generatedPost.body);
        expect(response.data.userId).toBe(generatedPost.userId);
    });
});