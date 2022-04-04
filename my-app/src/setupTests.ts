// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mocking `window.matchMedia()` method which are not implemented in JSDOM

global.matchMedia = global.matchMedia || function () {
  return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
  };
};