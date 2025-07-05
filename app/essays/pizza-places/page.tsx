import Link from "next/link";

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
  { name: "Bleecker Street Pizza", category: "Traditional New York-style", takeaway: "No specific thoughts, Joe's like; the interior feels classic New York. Have only visited late at night." },
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
  { name: "Stretch Pizza", category: "Nontraditional", takeaway: "A truly premier nontraditional pizza spot. The pizzas follow the architecture of a NY slice but is creative with toppings. A curious and charming encounter with Wylie Dusfresne enhances the appeal of the spot for me." },
  { name: "Ace's", category: "Nontraditional", takeaway: "Good detroit style pizza; no specific takeaways as I was at the end of a pizza crawl and pizza'd out." },
  { name: "F&F's", category: "Traditional", takeaway: "Really good. One of the most charred-tasting pizzas, in a good way. Some interesting and innovative flavors too - e.g, a red onion & calabrian chili slice was excellent." },
];

export default function PizzaPlacesPage() {
  // Create a sorted copy of pizzaData for display
  const sortedPizzaData = [...pizzaData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="p-8 sm:p-20 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
      <h1 className="text-3xl font-bold mb-8 mt-4 text-center">Pizza Places Visited</h1>
      <p className="text-sm italic text-gray-500 text-center mb-6">
      This list reflects personal opinions only. In many instances I did not immediately jot thoughts down, and so takeaways are less strong. 
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
          <thead>
            <tr className="bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-zinc-200">
              <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Pizza place</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Takeaways</th>
            </tr>
          </thead>
          <tbody>
            {sortedPizzaData.map((row, idx) => (
              <tr
                key={row.name + idx}
                className={
                  idx % 2 === 0
                    ? "bg-zinc-50 dark:bg-zinc-800"
                    : "bg-white dark:bg-zinc-900"
                }
              >
                <td className="px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">{idx + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">{row.name}</td>
                <td className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300">{row.category}</td>
                <td className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300">{row.takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
} 
