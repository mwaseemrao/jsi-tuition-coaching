import { Link } from "react-router-dom"

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-5 py-20">

      <div className="mx-auto max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-100 text-4xl font-extrabold text-blue-900">
          404
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
          Page Not Found
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl">
          We couldn't find that page
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-7 text-slate-600">
          The page you're looking for may have been moved,
          removed, or the address may be incorrect.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-900 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
        >
          Back to Home
        </Link>

      </div>

    </section>
  )
}

export default NotFound