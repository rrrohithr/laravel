export default function Header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <img src="/img/logo.svg" alt />
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>
                <div className="top-menu">
                    <ul>
                        <li><a href="#" className="leads"><i className="bi bi-bar-chart" />Leads</a></li>
                        <li><a href="#" className="prospects"><i className="bi bi-binoculars" />Prospects</a></li>
                        <li><a href="#" className="members"> <i className="bi bi-people" />Members</a></li>
                        <li><a href="#" className="billing active"><i className="bi bi-receipt" />Billing</a></li>
                    </ul>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );
}