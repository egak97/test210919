import endpoint from '../endpoints/post';
import { data } from '../data/dataPost';
import {positive} from '../schema/post';

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

describe('Post Data - Positive Case', () => {
    test('As a backend system i can post a new json and validate the data input', async () => {
        const response = await endpoint(data);
        expect(response.status).toEqual(201);
        expect(response.body).toMatchSchema(positive);
        expect(response.body).toMatchObject(data);
    });
});