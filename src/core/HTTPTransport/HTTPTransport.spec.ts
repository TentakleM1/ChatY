// @ts-nocheck
import { expect } from 'chai';
import * as sinon from 'sinon';
import { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import HTTPTransport, { METHODS } from './HTTPTransport';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    let requests: SinonFakeXMLHttpRequest[] = [];
    const endpoint = '/user';
    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        global.XMLHttpRequest = xhr;

        xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        };

        instance = new HTTPTransport(endpoint);
    });

    afterEach(() => {
        requests = [];
    });

    it('.get() send GET request', () => {
        instance.get('/user');
        const [request] = requests;
        expect(request.method).to.eq(METHODS.GET);
    });

    it('.post() send POST request', () => {
        instance.post('/user/search');
        const [request] = requests;
        expect(request.method).to.eq(METHODS.POST);
    });

    it('.put() send PUT request', () => {
        instance.put('/user/profile');
        const [request] = requests;
        expect(request.method).to.eq(METHODS.PUT);
    });

    it('.delete() send DELETE request', () => {
        instance.delete('/chats');
        const [request] = requests;
        expect(request.method).to.eq(METHODS.DELETE);
    });

});
