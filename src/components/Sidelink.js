import { NavLink } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';
import CONST from '../constants';
const Sidelink = ({
  title,
  Icon,
  IconSelected,
  path,
  activeMenu,
  setActiveMenu,
}) => {
  const size = useWindowSize();
  return (
    <li className="group inline-block" onClick={() => setActiveMenu(title)}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'block text-secondary-black font-bold'
            : 'block text-secondary-black'
        }
      >
        <div className="inline-block">
          <div className="flex items-center group-hover:bg-secondary-extraLightGray p-3 rounded-full transform transition-colors duration-150">
            {activeMenu !== title ? <Icon /> : <IconSelected />}
            {size.width > CONST.DESKTOP_SIZE && (
              <span className="text-xl ml-5 mr-4">{title}</span>
            )}
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidelink;
