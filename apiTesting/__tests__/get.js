import endpoint from '../endpoints/get';
import * as schema from '../schema/get';
const chai = require('chai');

const expectChai = chai.expect;

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let response;
describe('Validation -- Positive Case', () => {
    test('as a backend system, i can validate endpoint data type', async () => {
        response = await endpoint();
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.positive);
        (response.body).forEach(element => {
            expectChai(element.userId).to.be.a('number');
            expectChai(element.id).to.be.a('number');
            expectChai(element.title).to.be.a('string');
            expectChai(element.body).to.be.a('string');
        });
    });
});