import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Rusty Dingo</h1>
      <div className="text-sm italic text-gray-400 mb-5">New York City, NY</div>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About me</h2>
        <p className="text-lg leading-relaxed">
          Making logistics more efficient. Previously consulted for healthcare
          and industrial companies. Enjoy cooking and reading.
        </p>
        <br/>
        <p className="text-lg leading-relaxed">
          <Link href="/essays/pizza-places" className="text-blue-600 hover:underline">
            Current project
          </Link>: eating as much pizza as possible before leaving NYC. Have visited 22 pizza places - 17 were traditional New York-style, 5 were other variations.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Essays</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              href="/essays/reflections"
              className="text-lg text-blue-600 hover:underline"
            >
              Reflections on the first half of 2025
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Favorite Books</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><i>Aosawa Murders</i> by Riku Onda</li>
          <li><i>Arbitrary Lines</i> by M. Nolan Gray</li>
          <li><i>Global Economic History: A Very Short Introduction</i> by Robert Allen</li>
          <li><i>A Clockwork Orange</i> by Anthony Burgess</li>
          <li><i>Catch-22</i> by Joseph Heller</li>
          <li><i>The Great Gatsby</i> by F. Scott Fitzgerald</li>
          <li><i>The Curious Incident of the Dog in the Night-time</i> by Mark Haddon</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Favorite Movies</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><i>Fargo</i></li>
          <li><i>Superbad</i></li>
          <li><i>Nope</i></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Favorite artworks
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              href="/art/charles-ethan-porter-peonies"
              className="text-lg text-blue-600 hover:underline"
            >
              Peonies in a Vase - Charles Ethan Porter
            </Link>
          </li>
          <li>
            <Link
              href="/art/the-passing-of-a-train"
              className="text-lg text-blue-600 hover:underline"
            >
              The Passing of a Train - Giuseppe De Nittis
            </Link>
          </li>
          <li>
            <Link
              href="/art/circus-horse"
              className="text-lg text-blue-600 hover:underline"
            >
              Circus Horse - Joan Miró
            </Link>
          </li>
          <li>
            <Link
              href="/art/white-ballet"
              className="text-lg text-blue-600 hover:underline"
            >
              The White Ballet - Everett Shinn
            </Link>
          </li>
          <li>
            <Link
              href="/art/franklin-d-roosevelt-chandor"
              className="text-lg text-blue-600 hover:underline"
            >
              Franklin D. Roosevelt - Douglas Chandor
            </Link>
          </li>
          <li>
            <Link
              href="/art/michael-hutter"
              className="text-lg text-blue-600 hover:underline"
            >
              Untitled - Michael Hutter
            </Link>
          </li>
          <li>
            <Link
              href="/art/darker-rooms-barton"
              className="text-lg text-blue-600 hover:underline"
            >
              Darker Rooms - Jenna Barton
            </Link>
          </li>
          <li>
            <Link
              href="/art/gold-scab-whistler"
              className="text-lg text-blue-600 hover:underline"
            >
              The Gold Scab - James McNeill Whistler
            </Link>
          </li>
          <li>
            <Link
              href="/art/cod-tureen-regan"
              className="text-lg text-blue-600 hover:underline"
            >
              Cod Tureen - David Regan
            </Link>
          </li>
          <li>
            <Link
              href="/art/dark-city-street-thiebaud"
              className="text-lg text-blue-600 hover:underline"
            >
              Day Streets - Wayne Thiebaud
            </Link>
          </li>
          <li>
            <Link
              href="/art/red-roses-sonata-thomas"
              className="text-lg text-blue-600 hover:underline"
            >
              Red Roses Sonata - Alma Thomas
            </Link>
          </li>
          <li>
            <Link
              href="/art/figure-5-in-gold-demuth"
              className="text-lg text-blue-600 hover:underline"
            >
              I Saw the Figure 5 in Gold - Charles Demuth
            </Link>
          </li>
          <li>
            <Link
              href="/art/sigmar-polke-untitled"
              className="text-lg text-blue-600 hover:underline"
            >
              Untitled - Sigmar Polke
            </Link>
          </li>
          <li>
            <Link
              href="/art/lucky-strike"
              className="text-lg text-blue-600 hover:underline"
            >
              Lucky Strike - Stuart Davis
            </Link>
          </li>
          <li>
            <Link
              href="/art/laurie-anderson-hirshhorn"
              className="text-lg text-blue-600 hover:underline"
            >
              The Weather - Laurie Anderson
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
