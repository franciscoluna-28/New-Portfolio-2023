// FilterByMainTechnologyDropdown.tsx
import { useContext } from 'react';
import { MainTechnologyContext } from '../../context/MainTechnologyContext';

export function FilterByMainTechnology() {
  const { setSelectedTechnology } = useContext(MainTechnologyContext);

  function handleTechnologyChange(technology: string) {
    setSelectedTechnology(technology);
  }

  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex={0} className="btn m-1">
        Filter By Technology
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button onClick={() => handleTechnologyChange("")}>All</button>
        </li>
        <li>
          <button onClick={() => handleTechnologyChange("TypeScript")}>TypeScript</button>
        </li>
        <li>
          <button onClick={() => handleTechnologyChange("React")}>React</button>
        </li>
      </ul>
   </div>
  )
}