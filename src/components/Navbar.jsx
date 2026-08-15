import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ]

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">

            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* ================= LOGO ================= */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-white shadow-md">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.7"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"
                            />

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 10.5v5.5c2.8 2.1 7.2 2.1 10 0v-5.5"
                            />

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8v6"
                            />
                        </svg>

                    </div>


                    <div className="leading-tight">

                        <p className="text-lg font-extrabold tracking-tight text-blue-950">
                            JSI
                        </p>

                        <p className="hidden text-[11px] font-semibold text-slate-500 sm:block">
                            Tuition & Coaching Centre
                        </p>

                    </div>

                </Link>


                {/* ================= DESKTOP NAV ================= */}
                <div className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${isActive
                                    ? "font-extrabold text-[#0f172a] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-[#0f172a]"
                                    : "text-slate-600 hover:font-bold hover:text-blue-950 hover:after:absolute hover:after:bottom-1 hover:after:left-4 hover:after:right-4 hover:after:h-0.5 hover:after:rounded-full hover:after:bg-blue-900"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* ================= DESKTOP CTA ================= */}
                <div className="hidden md:block">

                    <a
                        href="https://wa.me/923120397239"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#20BD5A]"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.8"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.5 11.5a8.5 8.5 0 0 1-12.84 7.3L3.5 20.5l1.7-4.03A8.5 8.5 0 1 1 20.5 11.5Z"
                            />
                        </svg>

                        WhatsApp

                    </a>

                </div>


                {/* ================= MOBILE BUTTON ================= */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
                >

                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6l12 12M18 6 6 18"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}

                </button>

            </nav>


            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className="border-t border-slate-100 bg-white md:hidden">

                    <div className="mx-auto max-w-7xl px-5 py-4">

                        <div className="space-y-1">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-4 py-3 text-sm font-semibold transition ${isActive
                                            ? "bg-blue-50 text-blue-900"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}

                        </div>


                        <a
                            href="https://wa.me/923120397239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-4 py-3 text-sm font-bold text-white"
                        >
                            WhatsApp Us
                        </a>

                    </div>

                </div>
            )}

        </header>
    )
}

export default Navbar