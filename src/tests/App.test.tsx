import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import React from 'react';

describe('App', () => {
  it('renders navbar', () => {
    render(<App />);
    // Check for "SmartTech" logo text. The logo has "Smart" and "Tech" spans.
    expect(screen.getByText('Smart')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
  });
});
