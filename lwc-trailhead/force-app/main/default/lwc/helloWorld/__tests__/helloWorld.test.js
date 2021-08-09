import { createElement } from 'lwc';
import HelloWorld from 'c/helloWorld';

describe('c-helloWorld', () => {
    // Clear DOM tree.
    afterEach(() => {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders hello world component', () => {
        const element = createElement('c-helloWorld', {
            is: HelloWorld
        });

        document.body.appendChild(element);
        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toBe('Hello, World!');
    });
});