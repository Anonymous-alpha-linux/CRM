import { AiFillCaretDown } from "react-icons/ai";

function MenuItem({ icon, label, link = null, subs = null }) {
    return (
        <>
            <div className="sidebar__item">
                <span className="sidebar__item--icon">{icon}</span>
                <span className="sidebar__item--label">{label}</span>
                {subs && (
                    <span className="sidebar__item--dropdown">
                        <AiFillCaretDown></AiFillCaretDown>
                    </span>
                )}
            </div>
            {subs && (
                <ul className="sidebar__sub-item">
                    <li>
                        <span className="sidebar__item--icon">{icon}</span>
                        <span className="sidebar__item--label">{label}</span>
                    </li>
                </ul>
            )}
        </>
    );
}

export default MenuItem;
