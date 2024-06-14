import { useState } from "react";
import { FiMenu, FiX, FiList, FiGitPullRequest } from "react-icons/fi";
import { MdCampaign, MdCreateNewFolder, MdPets } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);



    return (
        <>
            <button
                title="Side navigation"
                type="button"
                className={`fixed right-0 top-[68px] z-50 order-10 h-10 w-10 self-center rounded bg-transparent  opacity-100 lg:hidden ${isSideNavOpen ? "visible opacity-100" : ""
                    }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? "true" : "false"}
                aria-controls="nav-menu-1"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
                {isSideNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <aside
                id="nav-menu-1"
                aria-label="Side navigation"
                className={`fixed top-[68px] bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                <nav aria-label="side navigation" className="flex-1 divide-y divide-slate-100 overflow-auto">
                    <div>
                        <ul className="flex flex-1 flex-col gap-1 py-3">
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/add-pet'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                >
                                    <MdPets className="h-6 w-6" aria-label="Dashboard icon" role="graphics-symbol" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Add pet
                                    </div>
                                </NavLink>
                            </li>
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/added-pets'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                    aria-current="page"
                                >
                                    <FiList className="h-6 w-6" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        My added pets
                                    </div>
                                </NavLink>
                            </li>
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/adoption-request'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                >
                                    <FiGitPullRequest className="h-6 w-6" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Adoption request
                                    </div>
                                </NavLink>
                            </li>
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/create-campaign'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                >
                                    <MdCreateNewFolder className="h-6 w-6" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        Create Donation Campaign
                                    </div>
                                </NavLink>
                            </li>
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/donation-campaigns'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                >
                                    <MdCampaign className="h-6 w-6" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        My Donation Campaigns
                                    </div>
                                </NavLink>
                            </li>
                            <li className="px-3">
                                <NavLink
                                    to='/dashboard/my-donations'
                                    className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-[#F2D4C8] hover:text-[#ff946b] focus:bg-[#F2D4C8]"
                                >
                                    <RiFileList2Line className="h-6 w-6" />
                                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                                        My Donations
                                    </div>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </aside>

            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
                    }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
        </>
    );
};

export default Sidebar;
