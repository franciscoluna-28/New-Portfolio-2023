import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav className='flex justify-center gap-16 dark:text-white'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="tech-stack">Tech Stack</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}