import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-50">

        {/* Background Decorative Elements */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

          {/* ================= HERO CONTENT ================= */}
          <div>

            {/* Small Label */}
            <div className="flex items-center gap-3">

              <span className="h-0.5 w-10 bg-blue-700" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-800">
                JSI Tuition & Coaching Centre
              </p>

            </div>


            {/* Heading */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">

              Building Strong
              <span className="block text-blue-700">
                Foundations
              </span>

              For Better Learning

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A focused learning environment designed to help
              students understand concepts, improve academically,
              build confidence, and continue progressing.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Contact JSI

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 19 10m0 0-5.5 5.5M19 10H5"
                  />
                </svg>

              </Link>


              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-blue-950 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                Learn More
              </Link>

            </div>


            {/* Small Trust Message */}
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">

              <div className="flex -space-x-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-blue-800">
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
                      d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 21a7.5 7.5 0 0 1 15 0"
                    />
                  </svg>
                </div>


                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-200 text-blue-900">
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
                      d="M12 3v18M3 12h18"
                    />
                  </svg>
                </div>


                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-900 text-white">
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
                      d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
                    />
                  </svg>
                </div>

              </div>

              <p>
                Focused learning. Continuous improvement.
              </p>

            </div>

          </div>


          {/* ================= HERO IMAGE ================= */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/classroom.jpg"
                alt="Students learning in a classroom"
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[540px]"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

              {/* Bottom Image Text */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Learn • Understand • Improve
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Creating Better Learning Experiences
                </h2>

              </div>

            </div>


            {/* Floating Card */}
            {/* <div className="absolute -bottom-6 -left-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-xl sm:-left-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">

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
                      d="M4 19V5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 5c4-2 8 2 16 0v10c-8 2-12-2-16 0"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19h16"
                    />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-bold text-blue-950">
                    Learn & Improve
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Every step matters
                  </p>

                </div>

              </div>

            </div> */}

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">

          {/* Item 1 */}
          <div className="group px-5 py-7 text-center transition-all duration-300 hover:bg-blue-50/50">

            {/* Image */}
            <div className="mx-auto h-28 w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

              <img
                src="/images/Focused-Learning.jpeg"
                alt="Focused Learning"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <p className="mt-5 text-sm font-extrabold text-blue-950">
              Focused Learning
            </p>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
              A learning environment designed to keep students focused.
            </p>

          </div>


          {/* Item 2 */}
          <div className="group px-5 py-7 text-center transition-all duration-300 hover:bg-blue-50/50">

            {/* Image */}
            <div className="mx-auto h-28 w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

              <img
                src="/images/Personal-Attention.jpg"
                alt="Personal Attention"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <p className="mt-5 text-sm font-extrabold text-blue-950">
              Personal Attention
            </p>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
              Supporting students according to their learning needs.
            </p>

          </div>


          {/* Item 3 */}
          <div className="group px-5 py-7 text-center transition-all duration-300 hover:bg-blue-50/50">

            {/* Image */}
            <div className="mx-auto h-28 w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

              <img
                src="/images/Clear-Guidance.avif"
                alt="Clear Guidance"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <p className="mt-5 text-sm font-extrabold text-blue-950">
              Clear Guidance
            </p>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
              Helping students understand concepts with confidence.
            </p>

          </div>


          {/* Item 4 */}
          <div className="group px-5 py-7 text-center transition-all duration-300 hover:bg-blue-50/50">

            {/* Image */}
            <div className="mx-auto h-28 w-full max-w-[220px] overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">

              <img
                src="/images/Better-Results.jpg"
                alt="Better Results"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <p className="mt-5 text-sm font-extrabold text-blue-950">
              Better Results
            </p>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-slate-500">
              Encouraging consistent learning and academic progress.
            </p>

          </div>

        </div>

      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Welcome to JSI
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Education That Focuses on Improvement
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We believe students learn best when they understand
              what they are studying, receive proper guidance, and
              have the confidence to keep improving.
            </p>

          </div>


          {/* ================= INTRODUCTION IMAGE ================= */}
          <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/students.jpg"
              alt="Students studying together"
              className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[400px]"
            />

          </div>


          {/* ================= WHY CHOOSE JSI ================= */}
          <div className="mt-12 border-t border-slate-200 pt-10">

            <div className="grid gap-8 md:grid-cols-3">

              {/* Item 1 */}
              <div className="group flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white shadow-md transition duration-300 group-hover:scale-105">

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
                      d="M4 19V5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 5c4-2 8 2 16 0v10c-8 2-12-2-16 0"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19h16"
                    />
                  </svg>

                </div>


                <div>

                  <h3 className="text-base font-extrabold text-blue-950">
                    Strong Foundations
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Building clear understanding from the basics.
                  </p>

                </div>

              </div>


              {/* Item 2 */}
              <div className="group flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white shadow-md transition duration-300 group-hover:scale-105">

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
                      d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 21a7.5 7.5 0 0 1 15 0"
                    />
                  </svg>

                </div>


                <div>

                  <h3 className="text-base font-extrabold text-blue-950">
                    Personal Attention
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Supporting students according to their learning needs.
                  </p>

                </div>

              </div>


              {/* Item 3 */}
              <div className="group flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white shadow-md transition duration-300 group-hover:scale-105">

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
                      d="M12 20V10"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m7 15 5-5 5 5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 4h14"
                    />
                  </svg>

                </div>


                <div>

                  <h3 className="text-base font-extrabold text-blue-950">
                    Continuous Improvement
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Encouraging progress through regular practice and guidance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-blue-950 shadow-xl">

            {/* Decorative Circle */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-800/40 blur-2xl" />

            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-900/60 blur-2xl" />


            <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">

              {/* ================= CTA CONTENT ================= */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                  Start Your Journey
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Give Your Learning
                  <span className="block text-blue-300">
                    the Right Direction
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
                  Take the next step toward better understanding,
                  stronger academic foundations, and continuous
                  improvement with JSI Tuition & Coaching Centre.
                </p>


                {/* Button */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-blue-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Contact JSI

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 19 10m0 0-5.5 5.5M19 10H5"
                      />
                    </svg>

                  </Link>


                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-blue-700 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-900"
                  >
                    Explore Services
                  </Link>

                </div>

              </div>


              {/* ================= CTA IMAGE ================= */}
              <div className="relative lg:ml-auto lg:w-full lg:max-w-md">

                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

                  <img
                    src="/images/teacher.png"
                    alt="Teacher helping students learn"
                    className="h-64 w-full object-fit sm:h-72 lg:h-80"
                  />

                </div>


                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-4 rounded-xl border border-blue-100 bg-white px-5 py-4 shadow-xl sm:-left-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    JSI Tuition
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-blue-950">
                    Learn • Improve • Succeed
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home