// Test setup configuration file
import "@testing-library/jest-dom";
import { afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import Modal from "react-modal";

// Setup ResizeObserver for jsdom (required for @xyflow/react)
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Setup Modal for tests
beforeAll(() => {
  Modal.setAppElement(document.body);
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
