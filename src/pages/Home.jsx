import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-50">

        {/* Decorative Background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-100 opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-sm font-semibold text-blue-900">
                Quality Education • Better Future
              </span>

            </div>


            {/* Main Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">

              Building Strong
              <span className="block text-blue-800">
                Foundations for
              </span>

              <span className="block">
                Brighter Futures
              </span>

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">

              Welcome to JSI Tuition & Coaching Centre, where dedicated
              teaching, individual attention, and continuous improvement
              help students achieve their academic goals.

            </p>


            {/* Supervision */}
            <p className="mt-4 text-sm font-medium text-slate-500">

              Under the Supervision of{" "}
              <span className="font-semibold text-blue-900">
                Sir Engr. Hafiz Muhammad Faizan-ul-Haq
              </span>

            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Get In Touch

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0-5 5m5-5H6"
                  />
                </svg>

              </Link>


              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900"
              >
                Learn More
              </Link>

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main Education Card */}
            <div className="relative mx-auto max-w-md">

              {/* Decorative Circle */}
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border-8 border-blue-100" />

              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border-8 border-sky-100" />


              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl bg-blue-900 p-7 shadow-2xl shadow-blue-950/20 sm:p-9">

                {/* Top Pattern */}
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-800" />

                <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-800" />


                <div className="relative">

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-900 shadow-lg">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-9 w-9"
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


                  <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-blue-200">
                    JSI Education
                  </p>


                  <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
                    A Promise of
                    <span className="block text-blue-200">
                      Improvement
                    </span>
                  </h2>


                  <p className="mt-5 leading-7 text-blue-100">
                    Helping students learn with confidence,
                    strengthen their academic foundation, and
                    move toward a successful future.
                  </p>


                  {/* Mini Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">
                        4+
                      </p>

                      <p className="mt-1 text-xs text-blue-200">
                        Core Services
                      </p>
                    </div>


                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-bold text-white">
                        100%
                      </p>

                      <p className="mt-1 text-xs text-blue-200">
                        Student Focus
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* Floating Card */}
              <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl sm:right-0">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Learn & Improve
                  </p>

                  <p className="text-xs text-slate-500">
                    Every single day
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-5 sm:grid-cols-4 lg:px-8">

          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-blue-900">
              Quality
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Education
            </p>
          </div>

          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-blue-900">
              Personal
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Attention
            </p>
          </div>

          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-blue-900">
              Regular
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Guidance
            </p>
          </div>

          <div className="px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-blue-900">
              Better
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Results
            </p>
          </div>

        </div>

      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Welcome to JSI
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Education That Focuses on Improvement
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              At JSI Tuition & Coaching Centre, our goal is to create
              an environment where students can understand concepts,
              improve their academic performance, and develop the
              confidence needed to face their educational journey.
            </p>

          </div>


          {/* Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.5v11M6.5 12h11"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Strong Foundation
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                We focus on developing clear concepts and strong
                academic foundations.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                  />

                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Individual Attention
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                Students receive guidance designed around their
                learning needs and academic progress.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3 17 6-6 4 4 8-8"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 7h4v4"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Continuous Improvement
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                We encourage students to keep learning, practicing,
                evaluating, and improving.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-blue-950">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-14 text-center lg:flex-row lg:px-8 lg:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
              Start Your Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Ready to improve your learning?
            </h2>

            <p className="mt-3 max-w-2xl text-blue-100">
              Get in touch with JSI Tuition & Coaching Centre
              to learn more about our educational services.
            </p>

          </div>


          <Link
            to="/contact"
            className="shrink-0 rounded-lg bg-white px-7 py-3.5 font-bold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Contact JSI
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Home