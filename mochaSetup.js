import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<div id="app"></div>', {
    url: 'http://localhost:5173',
  });
  
  global.window = window;
  global.document = window.document;
  global.DocumentFragment = window.DocumentFragment;