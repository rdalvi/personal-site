import Link from "next/link";

// Import pizza data from the pizza places page
const pizzaData = [
  { name: "Scarr's", category: "Traditional New York-style", takeaway: "The platonic ideal of the Standard New York Slice - pizza and sauce are a single unified layer; crispy undercarriage" },
  { name: "Best pizza", category: "Traditional New York-style", takeaway: "Chewy and thick; I think I prefer a bit more sweetness. Grandma slice is unique, with large pulpy, less cooked tomatoes" },
  { name: "L'industrie", category: "Traditional New York-style", takeaway: "Objectively great with fantastic with a 72-hour fermented dough, but a bit too fancy for me. Not enough sauce and cheese to be satisfying." },
  { name: "Paulie Gee's", category: "Traditional New York-style", takeaway: "Vodka slice is interesting and effectively a very cheesy white pie with a splattering of vodka sauce; solves the dual problems of vodka sauce being overwhelming and also of a plain white slice being boring." },
  { name: "Di Fara", category: "Traditional New York-style", takeaway: "Visited in 2018 in Midwood - I recall it tasting somewhere between a neapolitan and a NY slice and being excellent. I am skeptical of the chainification." },
  { name: "Two boots", category: "Traditional New York-style", takeaway: "Good, Joe's-like; no specific thoughts" },
  { name: "Speedy Romeo", category: "Nontraditional", takeaway: "Good Neapolitan, no specific thoughts" },
  { name: "Unregular", category: "Traditional New York-style", takeaway: "There's something obscene about the bulging burrata and coupled with the gaudy decor" },
  { name: "Mama's Too", category: "Traditional New York-style", takeaway: "A great Prince Street competitor on the square; I think the pear gorgonzola square is fantastic save the superfluous addition of hot honey" },
  { name: "Village Square", category: "Traditional New York-style", takeaway: "Middling at best compared to Prince Street on the square; felt doughy and somewhat undercooked" },
  { name: "Prince Street Pizza", category: "Traditional New York-style", takeaway: "The ideal square slice, especially the Spicy Spring. The first time I had one was the first time I visited NYC in college, and I didn't like it at all. Since then I have come to appreciate the thick bite of a Sicilian  and its crispy edges" },
  { name: "John's on Bleecker", category: "Traditional New York-style", takeaway: "A unique slice with its spotting of cheese and sauce." },
  { name: "Fini", category: "Traditional New York-style", takeaway: "The tomato slice is excellent, and really spotlights the taste of the tomato. The undercarriage is sturdy and crisp" },
  { name: "Lucia", category: "Traditional New York-style", takeaway: "No specific thoughts" },
  { name: "Bleecker Street Pizza", category: "Traditional New York-style", takeaway: "No specific thoughts, pretty solid Standard New York Slice; the interior feels classic New York. Have only visited late at night. This is a major archetype of NY pizza spots." },
  { name: "Williamsburg Pizza (LES)", category: "Traditional New York-style", takeaway: "Almost identical takeaways to Bleecker Street Pizza but in LES instead of West Village" },
  { name: "East Village Pizza", category: "Traditional New York-style", takeaway: "Almost identical takeaways to Bleecker Street Pizza but in East Village instead of West Village" },
  { name: "Sal and John's", category: "Traditional New York-style", takeaway: "Don't remember" },
  { name: "Joe's", category: "Traditional New York-style", takeaway: "I actually really enjoy this slice. Cheese heavy but I find that satisfying." },
  { name: "Appa's", category: "Nontraditional", takeaway: "Korean style pizza (sweet potatoes, corn, seafood, bulgogi toppings). The first time I really enjoyed it, the second time I thought it was too decadent" },
  { name: "Roberta's", category: "Nontraditional", takeaway: "A well-executed neapolitan" },
  { name: "Oma Grassa", category: "Nontraditional", takeaway: "Neapolitan style; no specific thoughts. Had an interesting potato white pie but felt it was a bit too carby" },
  { name: "Artichoke Basille's", category: "Nontraditional", takeaway: "Artichoke slice is conceptually interesting but far too heavy. I could see a thinner slice with less of the artichoke spread succeeding" },
  { name: "Song E Napule", category: "Nontraditional", takeaway: "Well-executed neapolitan" },
  { name: "Nate's", category: "Nontraditional", takeaway: "Good detroit style pizza, uses mozzarella instead of brick cheese. The hawaiian was exciting." },
  { name: "Stretch Pizza", category: "Nontraditional", takeaway: "A truly premier nontraditional pizza spot. The pizzas follow the architecture of a NY slice but is creative with toppings. A curious and friendly encounter with Wylie Dusfresne enhances the appeal of the spot for me." },
  { name: "Ace's", category: "Nontraditional", takeaway: "Good detroit style pizza; no specific takeaways as I was at the end of a pizza crawl and pizza'd out." },
];

export default function Home() {
  // Calculate pizza statistics
  const totalPizzaPlaces = pizzaData.length;
  const traditionalCount = pizzaData.filter(place => place.category === "Traditional New York-style").length;
  const nontraditionalCount = pizzaData.filter(place => place.category === "Nontraditional").length;

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
          </Link>: eating as much pizza as possible before leaving NYC. Have visited {totalPizzaPlaces} pizza places - {traditionalCount} were traditional New York-style, {nontraditionalCount} were other variations.
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
