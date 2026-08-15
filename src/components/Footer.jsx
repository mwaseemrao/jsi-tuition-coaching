import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-900">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="h-7 w-7"
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


              <div>

                <p className="text-xl font-extrabold">
                  JSI
                </p>

                <p className="text-xs font-medium text-blue-200">
                  Tuition & Coaching Centre
                </p>

              </div>

            </Link>


            <p className="mt-6 max-w-md leading-7 text-blue-100">
              Supporting students through focused academic
              guidance, meaningful learning, consistent practice,
              and continuous improvement.
            </p>


            {/* WhatsApp */}
            <a
              href="https://wa.me/923120397239"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.5 11.5a8.5 8.5 0 0 1-12.84 7.3L3.5 20.5l1.7-4.03A8.5 8.5 0 1 1 20.5 11.5Z"
                />
              </svg>

              Chat on WhatsApp

            </a>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-blue-100 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-blue-100 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-blue-100 transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200">
              Contact
            </h3>


            <ul className="mt-5 space-y-4">

              <li className="flex gap-3">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                  />

                  <circle
                    cx="12"
                    cy="9"
                    r="2.3"
                  />
                </svg>

                <span className="text-sm leading-6 text-blue-100">
                  A-73/22 Salman Farsi Society,
                  Malir Halt, Karachi
                </span>

              </li>


              <li className="flex gap-3">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-1.24 1.01-2.25 2.25-2.25h2.1c.95 0 1.79.6 2.1 1.49l.75 2.24a2.25 2.25 0 0 1-.51 2.27l-1.28 1.28a16.5 16.5 0 0 0 6.76 6.76l1.28-1.28a2.25 2.25 0 0 1 2.27-.51l2.24.75c.89.31 1.49 1.15 1.49 2.1v2.1c0 1.24-1.01 2.25-2.25 2.25h-.75C10.73 21.75 2.25 13.27 2.25 2.25V6.75Z"
                  />
                </svg>

                <div className="text-sm text-blue-100">

                  <a
                    href="tel:+923120397239"
                    className="block hover:text-white"
                  >
                    0312-0397239
                  </a>

                  <a
                    href="tel:+923408977239"
                    className="mt-1 block hover:text-white"
                  >
                    0340-8977239
                  </a>

                </div>

              </li>


              <li className="flex gap-3">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-300"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9s-1.1 6.5-3.3 9c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z"
                  />
                </svg>

                <a
                  href="https://www.jsieducationalnetwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-sm text-blue-100 hover:text-white"
                >
                  jsieducationalnetwork.com
                </a>

              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-blue-900">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">

          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} JSI Tuition & Coaching Centre.
            All rights reserved.
          </p>

          <p className="text-sm text-blue-300">
            Education • Guidance • Improvement
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer