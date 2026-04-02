const {
    getAllPosts,
    getPostById,
    getCommentsByPostId,
    getAllPhotos,
    createPost
} = require('../src/clients/postsApi');

describe('JSONPlaceholder API /posts', () => {
    test('GET /posts', async () => {
        const response = await getAllPosts();

        expect(response.status).toBe(200);
        expect(response.data.length).toBe(100);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0]).toHaveProperty('userId');
        expect(response.data[0]).toHaveProperty('title');
        expect(response.data[0]).toHaveProperty('body');

    });

    test('GET /posts/1', async () => {
        const response = await getPostById(2);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(2);
        expect(response.data).toHaveProperty('title');
    });

    test('GET /posts/1/comments', async () => {
        const response = await getCommentsByPostId(1);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data.length).toBe(5);
    });

    test('GET /photos', async () => {
        const response = await getAllPhotos();

        expect(response.status).toBe(200);
        expect(response.data.length).toBe(5000);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0]).toHaveProperty('albumId');
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('title');
        expect(response.data[0]).toHaveProperty('url');
        expect(response.data[0]).toHaveProperty('thumbnailUrl');
    });

    test('POST /posts', async () => {
        const newPost = {
            title: 'Test title',
            body: 'Test body text',
            userId: 1
        };

        const response = await createPost(newPost);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('title');
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);
    });
});