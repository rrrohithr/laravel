import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <>
                <div>
                    <div className="card">
                        <div className="card-body inner-menu">
                            <ul>
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">Create New Member</a></li>
                                <li><a href="#">Up/Downgrades</a></li>
                                <li><a href="#">Process Payment</a></li>
                                <li><a href="#">New General Sale</a></li>
                                <li><a href="#">Missed Callbacks</a></li>
                            </ul>
                        </div>
                        <div className="card-body inner-menu-mobile-only">
                            <ul className="sidebar-nav" id="mobile-nav">
                                <li className="nav-item">
                                    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                                        <i className="bi bi-bar-chart" /><span>Leads</span><i className="bi bi-chevron-down ms-auto" />
                                    </a>
                                    <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#mobile-nav">
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu4</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                                        <i className="bi bi-binoculars" /><span>Prospects</span><i className="bi bi-chevron-down ms-auto" />
                                    </a>
                                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                                        <i className="bi bi-people" /><span>Members</span><i className="bi bi-chevron-down ms-auto" />
                                    </a>
                                    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>menu3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                                        <i className="bi bi-receipt" /><span>Billing</span><i className="bi bi-chevron-down ms-auto" />
                                    </a>
                                    <ul id="icons-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">
                                        <li>
                                            <a href="#" className="active">
                                                <i className="bi bi-circle" /><span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>Create New Member</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>Up/Downgrades</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>Process Payment</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>New General Sale</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-circle" /><span>Missed Callbacks</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <section className="section dashboard">
                        <div className="row">
                            {/* Left side columns */}
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="month-select">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected value={1}>January</option>
                                                        <option value={2}>February</option>
                                                        <option value={3}>March</option>
                                                        <option value={4}>April</option>
                                                        <option value={5}>May</option>
                                                        <option value={6}>June</option>
                                                        <option value={7}>July</option>
                                                        <option value={8}>August</option>
                                                        <option value={9}>September</option>
                                                        <option value={10}>October</option>
                                                        <option value={11}>November</option>
                                                        <option value={12}>December</option>
                                                    </select>
                                                </div>
                                                <div className="main-table">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Reports</th>
                                                                <th>Internal CX</th>
                                                                <th>Internal HX</th>
                                                                <th>a</th>
                                                                <th>Courier Exchange</th>
                                                                <th>Haulage Exchange</th>
                                                                <th>Fair pricing Exchange</th>
                                                                <th>Advertisers</th>
                                                                <th>Integra</th>
                                                                <th>Enterprise</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="main-title-table-bg">
                                                                <td colSpan={10}>Today</td>
                                                            </tr>
                                                            <tr>
                                                                <td>New Sales</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals&nbsp;(Cash)</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals (DD)</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Upgrades</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TEG Pay</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>General</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Refunds </td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr className="main-title-table-bg">
                                                                <td colSpan={10}>This Week</td>
                                                            </tr>
                                                            <tr>
                                                                <td>New Sales</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>(1) £649.00</td>
                                                                <td>(3) £4,301.99</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals (Cash)</td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>(3) £4,632.00</td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals (DD)</td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>(1) £633.00</td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                                <td>- </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Upgrades</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TEG Pay</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>General</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Refunds</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr className="main-title-table-bg">
                                                                <td colSpan={10}>This Month</td>
                                                            </tr>
                                                            <tr>
                                                                <td>New Sales</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>(1) £649.00</td>
                                                                <td>(3) £4,301.99</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals (Cash)</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>(3) £4,632.00</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Renewals (DD)</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>(1) £633.00</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Upgrades</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TEG Pay</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>General</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Refunds</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Passed Cash Renewals Due This Month</b></td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Remaining Cash Renewals Falling Due This Month</b></td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>DD's due this month</b></td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr className="footer-table-bg">
                                                                <td colSpan={10}><span>Export Report To:<a href="#"><img src="assets/img/pdf.gif" width={16} height={16} alt /> PDF</a><a href="#"><img src="assets/img/xls.gif" width={16} height={16} alt /> Excel</a></span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Left side columns */}
                        </div>
                    </section>
                </div>

            </>
        </AuthenticatedLayout>
    );
}
