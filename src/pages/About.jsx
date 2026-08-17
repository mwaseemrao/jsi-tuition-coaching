import { Link } from "react-router-dom"

function About() {
  return (
    <div>

      {/* ================= PAGE HERO ================= */}
      <section
        className="relative overflow-hidden bg-blue-950 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/classroom.jpg')",
        }}
      >

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/35" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 sm:min-h-[520px] lg:min-h-[560px] lg:px-8">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-3">

              <span className="h-0.5 w-10 bg-blue-400" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                About JSI
              </p>

            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              About{" "}

              <span className="text-blue-400">
                JSI
              </span>{" "}

              Tuition & Coaching Centre

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              A learning environment focused on understanding,
              academic growth, confidence, and continuous improvement.
            </p>

            {/* Button */}
            <div className="mt-8">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Join Our Learning Community

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

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">

          {/* LEFT IMAGE */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/teacher-helping.jpg"
                alt="Teacher helping students"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  JSI Tuition & Coaching Centre
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  A Promise of Improvement
                </h3>

              </div>

            </div>

            {/* Floating Supervision Card */}
            <div className="absolute -bottom-7 right-5 max-w-xs rounded-2xl border border-blue-100 bg-white p-5 shadow-xl sm:right-8">

              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Under the Supervision of
              </p>

              <p className="mt-1 text-sm font-bold leading-5 text-blue-950">
                Sir Engr. Hafiz Muhammad Faizan-ul-Haq
              </p>

            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Helping Students Learn With Confidence
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-slate-600">

              <p>
                JSI Tuition & Coaching Centre is an educational
                institute committed to supporting students in their
                academic journey through focused teaching and
                consistent guidance.
              </p>

              <p>
                We believe that effective education is not only
                about memorizing information. Students should
                understand concepts, ask questions, practice what
                they learn, and gradually develop confidence in
                their abilities.
              </p>

              <p>
                Our approach is centered around improvement —
                helping students identify areas where they need
                support and encouraging them to keep progressing.
              </p>

            </div>


            {/* Supervision Card */}
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">

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

                  <p className="text-sm font-semibold text-blue-800">
                    Under the Supervision of
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    Sir Engr. Hafiz Muhammad Faizan-ul-Haq
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="bg-slate-50 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Learning With Purpose
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our educational approach is built around creating
              meaningful learning experiences and encouraging
              students to continuously improve.
            </p>

          </div>


          {/* SECTION IMAGE */}
          <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/students.jpg"
              alt="Students learning together"
              className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[400px]"
            />

          </div>


          {/* Vision + Mission */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Vision */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-900">

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
                    d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                  />

                </svg>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To encourage students to become confident,
                capable, and motivated learners who continue
                improving throughout their educational journey.
              </p>

            </div>


            {/* Mission */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-900">

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

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To provide focused academic support through
                clear teaching, regular guidance, meaningful
                practice, and an environment that encourages
                students to learn and improve.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              What We Value
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Our Educational Values
            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Excellence */}
            <div className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">

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
                    d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
                  />

                </svg>

              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Excellence
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Encouraging students to aim higher.
              </p>

            </div>


            {/* Trust */}
            <div className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">

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
                    d="M12 21s8-4.5 8-10.5V5l-8-3-8 3v5.5C4 16.5 12 21 12 21Z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12 2 2 4-4"
                  />

                </svg>

              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Trust
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Building positive relationships with students.
              </p>

            </div>


            {/* Consistency */}
            <div className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">

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
                    d="M12 6v6l4 2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />

                </svg>

              </div>

              <h3 className="mt-5 font-bold text-blue-950">
                Consistency
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Supporting regular learning and practice.
              </p>

            </div>


            {/* Improvement */}
            <div className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">

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

              <h3 className="mt-5 font-bold text-blue-950">
                Improvement
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Helping students become better every day.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Have Questions About JSI?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Contact us to learn more about our educational
            services and how JSI can support your academic journey.
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

export default About