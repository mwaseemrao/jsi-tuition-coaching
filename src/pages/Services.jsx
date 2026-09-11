import { Link } from "react-router-dom"

function Services() {
  return (
    <div>

      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-blue-950">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-800 opacity-50 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-800 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:py-24 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            What We Offer
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Educational Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Supporting students through focused academic guidance,
            concept building, preparation, and continuous improvement.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Our Programs
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Learning Programs at JSI
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              JSI Tuition & Coaching Centre provides different learning
              programs designed to support students at different stages
              of their academic journey.
            </p>

          </div>


          {/* ================= FOUR JSI SERVICES ================= */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">


            {/* ================= SERVICE 1 ================= */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/service2.jpg"
                  alt="JSI Pre-Schooling"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    Program 01
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-white">
                    JSI PRE-SCHOOLING
                  </h3>

                </div>

              </div>


              <div className="p-6">

                <p className="text-sm leading-7 text-slate-600">
                  A supportive learning environment for young learners,
                  focusing on basic concepts, confidence building,
                  classroom habits, and early academic development.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-900">

                  <span className="h-2 w-2 rounded-full bg-blue-900" />

                  Strong foundations for early learning

                </div>

              </div>

            </div>


            {/* ================= SERVICE 2 ================= */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/service1.jpg"
                  alt="JSI Tuition Centre"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    Program 02
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-white">
                    JSI TUITION CENTRE
                  </h3>

                </div>

              </div>


              <div className="p-6">

                <p className="text-sm leading-7 text-slate-600">
                  Academic support focused on improving students'
                  understanding of subjects, completing coursework,
                  strengthening concepts, and maintaining consistent
                  academic progress.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-900">

                  <span className="h-2 w-2 rounded-full bg-blue-900" />

                  Focused academic support and guidance

                </div>

              </div>

            </div>


            {/* ================= SERVICE 3 ================= */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/service4.jpg"
                  alt="JSI Basic Classes"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    Program 03
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-white">
                    JSI BASIC CLASSES
                  </h3>

                </div>

              </div>


              <div className="p-6">

                <p className="text-sm leading-7 text-slate-600">
                  Structured classes designed to strengthen fundamental
                  knowledge, improve subject understanding, and help
                  students build confidence through clear and consistent
                  learning.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-900">

                  <span className="h-2 w-2 rounded-full bg-blue-900" />

                  Build concepts from the basics

                </div>

              </div>

            </div>


            {/* ================= SERVICE 4 ================= */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">

                <img
                  src="/images/campus.jpg"
                  alt="JSI Coaching Centre"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    Program 04
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-white">
                    JSI COACHING CENTRE
                  </h3>

                </div>

              </div>


              <div className="p-6">

                <p className="text-sm leading-7 text-slate-600">
                  Coaching support aimed at helping students prepare
                  effectively for examinations, improve performance,
                  manage academic challenges, and work toward better
                  results.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-900">

                  <span className="h-2 w-2 rounded-full bg-blue-900" />

                  Exam preparation and performance improvement

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEARNING PROCESS ================= */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              How We Help
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              A Simple Approach to Better Learning
            </h2>

          </div>


          <div className="relative mt-14 grid gap-10 md:grid-cols-4">

            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-blue-200 md:block" />


            {/* Step 1 */}
            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-900 text-lg font-bold text-white shadow-lg">
                01
              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Understand
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Focus on understanding concepts clearly.
              </p>

            </div>


            {/* Step 2 */}
            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-900 text-lg font-bold text-white shadow-lg">
                02
              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Practice
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Apply knowledge through consistent practice.
              </p>

            </div>


            {/* Step 3 */}
            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-900 text-lg font-bold text-white shadow-lg">
                03
              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Evaluate
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Identify strengths and areas that need improvement.
              </p>

            </div>


            {/* Step 4 */}
            <div className="relative text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-900 text-lg font-bold text-white shadow-lg">
                04
              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Improve
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Keep learning and move toward better performance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY JSI ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">

          {/* Content */}
          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Why Choose JSI
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Focused on Every Student's Progress
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              We believe that every student has the ability to
              improve when they receive the right guidance,
              practice, encouragement, and learning environment.
            </p>


            <div className="mt-8 space-y-5">

              {/* Point 1 */}
              <div className="flex gap-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">

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
                      d="m5 12 4 4L19 6"
                    />
                  </svg>

                </div>

                <div>

                  <h3 className="font-bold text-blue-950">
                    Clear Learning
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Focus on understanding rather than simply memorizing.
                  </p>

                </div>

              </div>


              {/* Point 2 */}
              <div className="flex gap-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">

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
                      d="m5 12 4 4L19 6"
                    />
                  </svg>

                </div>

                <div>

                  <h3 className="font-bold text-blue-950">
                    Consistent Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Encourage students to maintain regular learning habits.
                  </p>

                </div>

              </div>


              {/* Point 3 */}
              <div className="flex gap-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">

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
                      d="m5 12 4 4L19 6"
                    />
                  </svg>

                </div>

                <div>

                  <h3 className="font-bold text-blue-950">
                    Growth Mindset
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Motivate students to learn from mistakes and keep improving.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Visual Card */}
          <div className="relative">

            <div className="rounded-3xl bg-blue-950 p-8 shadow-2xl sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-900">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.6"
                  stroke="currentColor"
                  className="h-8 w-8"
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


              <h3 className="mt-7 text-3xl font-bold text-white">
                A Promise of Improvement
              </h3>

              <p className="mt-5 leading-7 text-blue-100">
                Every learning journey starts with a foundation.
                With consistent effort, guidance, and practice,
                students can continue building toward their goals.
              </p>


              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-white/10 p-5">

                  <p className="text-2xl font-bold text-white">
                    Learn
                  </p>

                  <p className="mt-1 text-sm text-blue-200">
                    Understand concepts
                  </p>

                </div>


                <div className="rounded-xl bg-white/10 p-5">

                  <p className="text-2xl font-bold text-white">
                    Grow
                  </p>

                  <p className="mt-1 text-sm text-blue-200">
                    Build confidence
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-slate-50 py-16">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
            Get Started
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Want to Know More About Our Services?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Contact JSI Tuition & Coaching Centre for more
            information about our educational support and services.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-lg bg-blue-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Services