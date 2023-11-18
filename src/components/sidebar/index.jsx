import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Logo from "@/assets/images/logo/react.svg";
import HamburgerTrigger from "../common/hamburger";

function SidebarContainer({ menu = [] }) {
    return (
        <div className="sidebar__container">
            <div className="sidebar__header">
                <div className="sidebar__trigger">
                    <HamburgerTrigger></HamburgerTrigger>
                </div>
                <div className="text-center">
                    <img src={Logo} alt="logo crm system"></img>
                    <p>CRM System</p>
                </div>
            </div>

            <div className="sidebar__menu">
                <Sidebar>
                    <Menu>
                        {menu?.map?.((item, key) =>
                            item?.subs ? (
                                <SubMenu
                                    label={item?.label}
                                    key={key}
                                    icon={item?.icon}
                                >
                                    {item?.subs?.map?.((subItem, key_2) => (
                                        <MenuItem
                                            key={key_2}
                                            icon={subItem?.icon}
                                        >
                                            {subItem?.label}
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                            ) : (
                                <MenuItem {...item} key={key} icon={item?.icon}>
                                    {item?.label}
                                </MenuItem>
                            )
                        )}
                    </Menu>
                </Sidebar>
            </div>

            <div className="sidebar__footer">Footer</div>
        </div>
    );
}

export default SidebarContainer;
