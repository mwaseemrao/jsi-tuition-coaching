import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappMessage = `Hello JSI Tuition & Coaching Centre.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`

    window.open(
      `https://wa.me/923120397239?text=${whatsappMessage}`,
      "_blank"
    )
  }

  return (
    <div>

      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-blue-950">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-800 opacity-50 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-800 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:py-24 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Contact JSI Tuition & Coaching Centre
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Have a question or want to learn more about our
            educational services? We would be happy to hear from you.
          </p>

        </div>

      </section>


      {/* ================= CONTACT INFORMATION ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}
            <a
              href="tel:+923120397239"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">

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
                    d="M2.25 6.75c0-1.24 1.01-2.25 2.25-2.25h2.1c.95 0 1.79.6 2.1 1.49l.75 2.24a2.25 2.25 0 0 1-.51 2.27l-1.28 1.28a16.5 16.5 0 0 0 6.76 6.76l1.28-1.28a2.25 2.25 0 0 1 2.27-.51l2.24.75c.89.31 1.49 1.15 1.49 2.1v2.1c0 1.24-1.01 2.25-2.25 2.25h-.75C10.73 21.75 2.25 13.27 2.25 2.25V6.75Z"
                  />
                </svg>

              </div>

              <p className="mt-5 text-sm font-semibold text-blue-800">
                Call Us
              </p>

              <p className="mt-2 font-bold text-blue-950">
                0312-0397239
              </p>

              <p className="mt-1 font-bold text-blue-950">
                0340-8977239
              </p>

            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/923120397239"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">

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
                    d="M20.5 11.5a8.5 8.5 0 0 1-12.84 7.3L3.5 20.5l1.7-4.03A8.5 8.5 0 1 1 20.5 11.5Z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 8.5c.3-.7.7-.8 1-.8h.7c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.1.1-.1.3 0 .5.5.8 1.2 1.5 2 2 .2.1.4.1.5 0l.7-.6c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.7c0 .3-.1.7-.8 1"
                  />
                </svg>

              </div>

              <p className="mt-5 text-sm font-semibold text-green-700">
                WhatsApp
              </p>

              <p className="mt-2 font-bold text-blue-950">
                0312-0397239
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Chat with us directly
              </p>

            </a>


            {/* Location */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

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
                    d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                  />

                  <circle
                    cx="12"
                    cy="9"
                    r="2.3"
                  />
                </svg>

              </div>

              <p className="mt-5 text-sm font-semibold text-blue-800">
                Visit Us
              </p>

              <p className="mt-2 font-bold leading-6 text-blue-950">
                Malir Halt, Karachi
              </p>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                Salman Farsi Society
              </p>

            </div>


            {/* Website */}
            <a
              href="https://www.jsieducationalnetwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-6 w-6"
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

              </div>

              <p className="mt-5 text-sm font-semibold text-blue-800">
                Website
              </p>

              <p className="mt-2 break-all font-bold text-blue-950">
                jsieducationalnetwork.com
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Visit our website
              </p>

            </a>

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM + MAP ================= */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
              Let's Talk
            </h2>

            <p className="mt-3 leading-6 text-slate-600">
              Fill out the form below and continue the conversation
              with us on WhatsApp.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                />

              </div>


              {/* Phone */}
              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                />

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
                />

              </div>


              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >

                Send via WhatsApp

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
                    d="m5 12 14-7-4 14-3-6-7-1Z"
                  />
                </svg>

              </button>

            </form>

          </div>


          {/* Location */}
          <div>

            <div className="mb-6">

              <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
                Find Us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
                Our Location
              </h2>

              <p className="mt-3 leading-6 text-slate-600">
                A-73/22 Salman Farsi Society, Malir Halt,
                Near Salman Farsi Masjid, Karachi.
              </p>

            </div>


            {/* Google Maps */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <iframe
                title="JSI Tuition & Coaching Centre Location"
                src="https://www.google.com/maps?q=Salman%20Farsi%20Society%20Malir%20Halt%20Karachi&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=A-73%2F22%20Salman%20Farsi%20Society%20Malir%20Halt%20Karachi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-900 hover:text-blue-700"
            >
              Open Location in Google Maps

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
                  d="M13 7h6m0 0v6m0-6-8 8"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
                />
              </svg>

            </a>

          </div>

        </div>

      </section>


      {/* ================= PAYMENT INFORMATION ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-800">
              Payment Information
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Online Payment Methods
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The following payment details are provided for
              convenient fee/payment transactions.
            </p>

          </div>


          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {/* HBL */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
                    Option 01
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-blue-950">
                    HBL
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-sm font-bold text-white">
                  HBL
                </div>

              </div>


              <div className="mt-7 space-y-4 text-sm">

                <div>
                  <p className="font-semibold text-slate-500">
                    Account Title
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    MUHAMMAD FAIZAN
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-slate-500">
                    Account Number
                  </p>

                  <p className="mt-1 break-all font-bold text-slate-800">
                    22837900565703
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-slate-500">
                    IBAN
                  </p>

                  <p className="mt-1 break-all font-bold text-slate-800">
                    PK11HABB0022837900565703
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-slate-500">
                    Branch
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    MERCHANT, MALIR HALT
                  </p>
                </div>

              </div>

            </div>


            {/* Easypaisa */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
                    Option 02
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-blue-950">
                    Easypaisa
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-xs font-bold text-white">
                  EP
                </div>

              </div>


              <div className="mt-7 space-y-4 text-sm">

                <div>
                  <p className="font-semibold text-slate-500">
                    Account Number
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    0312-0397239
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-slate-500">
                    Account Title
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    MUHAMMAD FAIZAN-UL-HAQ
                  </p>
                </div>

              </div>

            </div>


            {/* JazzCash */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-800">
                    Option 03
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-blue-950">
                    JazzCash
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-xs font-bold text-white">
                  JC
                </div>

              </div>


              <div className="mt-7 space-y-4 text-sm">

                <div>
                  <p className="font-semibold text-slate-500">
                    Account Number
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    0340-8977239
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-slate-500">
                    Account Title
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    MUHAMMAD FAIZAN-UL-HAQ
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bg-blue-950 py-16">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Take the Next Step?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact JSI Tuition & Coaching Centre today and
            learn more about our educational services.
          </p>


          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="tel:+923120397239"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Call Us
            </a>

            <a
              href="https://wa.me/923120397239"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact