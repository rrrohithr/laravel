import menus from '../menus.json';
import SideMenu from './SideMenu';

export default function SideBar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav cd-accordion cd-accordion--animated" id="sidebar-nav">
                    {menus.map((menu, index) => (
                        <>
                            <SideMenu menu={menu}></SideMenu>
                        </>
                    ))}
                    {/* <li className="main-menu active">
                        <a role="button" href="#"><label><span>Home</span></label></a>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-1" id="group-1" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-1"><span>Sales</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>Create New Member</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>Upgrade a Subscription</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>General Sales</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>Paperless DD Signup</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>Sales Dashboard</span></label></a></li>
                            <li className="cd-accordion__item cd-accordion__item--has-children">
                                <input className="cd-accordion__input" type="checkbox" name="sub-group-1" id="sub-group-1" />
                                <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="sub-group-1"><span>Sales Records Settings</span></label>
                                <ul className="cd-accordion__sub cd-accordion__sub--l2">
                                    <li className="cd-accordion__item"><a href="#"><label><span>Team</span></label></a></li>
                                    <li className="cd-accordion__item"><a href="#"><label><span>Individual</span></label></a></li>
                                </ul>
                            </li>
                            <li className="cd-accordion__item"><a href="#"><label><span>Sales Report Dashboard</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-2" id="group-2" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-2"><span>Renewals</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-3" id="group-3" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-3"><span>File Maintenance</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-4" id="group-4" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-4"><span>Reports</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-5" id="group-5" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-5"><span>Settings</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-6" id="group-6" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-6"><span>Member Directory</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-7" id="group-7" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-7"><span>Users</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-8" id="group-8" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-8"><span>Training</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <input className="cd-accordion__input" type="checkbox" name="group-9" id="group-9" />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-9"><span>Sundry payments</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                            <li className="cd-accordion__item"><a href="#"><label><span>menu</span></label></a></li>
                        </ul>
                    </li> */}
                </ul>
            </aside>

        </>
    );
}