import { Link } from "react-router-dom"

function Services() {
  const services = [
    {
      number: "01",
      title: "Academic Support",
      description:
        "Focused academic guidance to help students understand their coursework, strengthen concepts, and stay consistent with their studies.",
      icon: (
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
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 6h8M8 10h8M8 14h5"
          />
        </svg>
      ),
    },

    {
      number: "02",
      title: "Concept Building",
      description:
        "We emphasize understanding concepts clearly so students can develop a stronger academic foundation instead of relying only on memorization.",
      icon: (
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
            d="M12 3v18"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 8h14M5 16h14"
          />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },

    {
      number: "03",
      title: "Exam Preparation",
      description:
        "Structured preparation and practice can help students approach their academic assessments with greater understanding and confidence.",
      icon: (
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
            d="M6 3h12v18H6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h6M9 11h6M9 15h3"
          />
        </svg>
      ),
    },

    {
      number: "04",
      title: "Regular Guidance",
      description:
        "Consistent guidance helps students identify areas that need attention and maintain a steady approach toward their academic goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
          stroke="currentColor"
          className="h-7 w-7"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v5l3 2"
          />
        </svg>
      ),
    },

    {
      number: "05",
      title: "Student Development",
      description:
        "Beyond academic work, we encourage students to develop confidence, discipline, consistency, and a positive attitude toward learning.",
      icon: (
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
            d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
          />
        </svg>
      ),
    },

    {
      number: "06",
      title: "Continuous Improvement",
      description:
        "Our approach encourages students to review their progress, learn from mistakes, practice regularly, and keep improving.",
      icon: (
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
            d="m4 16 5-5 4 4 7-8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7h4v4"
          />
        </svg>
      ),
    },
  ]

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
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              More Than Just Tuition
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              At JSI Tuition & Coaching Centre, we aim to create
              a learning environment where students can understand
              their subjects, receive guidance, practice consistently,
              and work toward continuous improvement.
            </p>

          </div>


          {/* ================= SERVICES GRID ================= */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-blue-50">
                  {service.number}
                </span>


                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                  {service.icon}
                </div>


                <h3 className="relative mt-6 text-xl font-bold text-blue-950">
                  {service.title}
                </h3>


                <p className="relative mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>


                <div className="mt-6 h-1 w-10 rounded-full bg-blue-900 transition-all duration-300 group-hover:w-20" />

              </div>
            ))}

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

              {/* Point */}
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


              {/* Point */}
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


              {/* Point */}
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