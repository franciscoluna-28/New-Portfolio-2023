import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Projects from '../pages/Projects';

describe('Projects component', () => {
  it('should render images with correct src', async () => {
    const { container } = render(<Projects />);
    const images = container.querySelectorAll('img');
    
    expect(images.length).toBe(2);
    expect(images[0].getAttribute('src')).toEqual(expect.stringContaining('blog.png'));
    expect(images[1].getAttribute('src')).toEqual(expect.stringContaining('weather-app.png'));
  });
});
 