import { Link } from "@inertiajs/react"

export default function SideMenu({ menu }) {
    console.log(menu);
    return (
        <>
            <li className="main-menu">
                {menu.menus && menu.menus.length ? (
                    <>
                        <input className="cd-accordion__input" type="checkbox" name={'group-'+menu.key} id={'group-'+menu.key} />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={'group-'+menu.key}><span>{menu.title}</span></label>
                        <ul className="cd-accordion__sub cd-accordion__sub--l1">
                            {menu.menus.map((submenu, index) => {
                                return (
                                    <SideMenu menu={submenu} key={index}></SideMenu>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    <>
                        <Link role="button" href={menu.link}><label><span>{menu.title}</span></label></Link>
                    </>
                )}
            </li>
        </>
    )
}