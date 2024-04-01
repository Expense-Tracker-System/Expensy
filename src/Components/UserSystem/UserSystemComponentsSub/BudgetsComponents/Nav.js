import { NavLink } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid'


const Nav = () => {
  return (
    <nav>
      <NavLink to="/userDashBoard" aria-label="Go to home">
        <img src="{logomark}" alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>

      <button type="submit" className="btn btn--warning" method="post" action="/userDashBoard" onSubmit={(event) => {
        if (!confirm("Delete user data?")) {
            event.preventDefault()
        }
      }}>
        <span>Delete Records</span>
        <TrashIcon width={20}/>
      </button>
    </nav>
  );
};
export default Nav;
