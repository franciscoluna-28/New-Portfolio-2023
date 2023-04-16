import { DropdownProps } from "./DropDownProps";
  
  export function FilterByTags({ options }: DropdownProps) {
    return (
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">
          Filter By Tags
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>None</a>
          </li>
          {options.map((option) => (
            <li key={option}>
              <a>{option}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // And this would be used as the following

//const tags = ["React Hooks", "SASS"];
//const dates = ["Last Week", "Last Month", "Last Year"];