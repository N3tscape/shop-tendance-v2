import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container mx-auto my-screen">
      <div className="grid place-items-center px-6 py-60">
        <div className="text-center">
          <p className="text-4xl sm:text-6xl font-semibold text-pink-800">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page non trouvé
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Désolé, mais cette page n'existe pas.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="#"
              className="rounded-md bg-pink-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
