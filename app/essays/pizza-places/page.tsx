import Link from "next/link";

const pizzaData = [
  { name: "Scarr's", category: "Traditional New York-style", takeaway: "" },
  { name: "Best pizza", category: "Traditional New York-style", takeaway: "" },
  { name: "L'industrie", category: "Traditional New York-style", takeaway: "" },
  { name: "Paulie Gee's", category: "Traditional New York-style", takeaway: "" },
  { name: "Di Fara", category: "Traditional New York-style", takeaway: "" },
  { name: "Two boots", category: "Traditional New York-style", takeaway: "" },
  { name: "Speedy Romeo", category: "Traditional New York-style", takeaway: "" },
  { name: "Unregular", category: "Traditional New York-style", takeaway: "" },
  { name: "Mama's Too", category: "Traditional New York-style", takeaway: "" },
  { name: "Village Square", category: "Traditional New York-style", takeaway: "" },
  { name: "Prince Street Pizza", category: "Traditional New York-style", takeaway: "" },
  { name: "John's on Bleecker", category: "Traditional New York-style", takeaway: "" },
  { name: "Fini", category: "Traditional New York-style", takeaway: "" },
  { name: "Lucia", category: "Traditional New York-style", takeaway: "" },
  { name: "Bleecker Street Pizza", category: "Traditional New York-style", takeaway: "" },
  { name: "Sal and John's", category: "Traditional New York-style", takeaway: "" },
  { name: "Joe's", category: "Traditional New York-style", takeaway: "" },
  { name: "Appa's", category: "Nontraditional", takeaway: "" },
  { name: "Oma Grassa", category: "Nontraditional", takeaway: "" },
  { name: "Artichoke Basille's", category: "Nontraditional", takeaway: "" },
  { name: "Song E Napule", category: "Nontraditional", takeaway: "" },
  { name: "Nate's", category: "Nontraditional", takeaway: "" },
];

export default function PizzaPlacesPage() {
  return (
    <main className="p-8 sm:p-20 max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
      <h1 className="text-3xl font-bold mb-8 mt-4 text-center">Pizza Places</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <th className="px-6 py-4 text-left text-lg font-semibold">Pizza place</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Category</th>
              <th className="px-6 py-4 text-left text-lg font-semibold">Takeaways</th>
            </tr>
          </thead>
          <tbody>
            {pizzaData.map((row, idx) => (
              <tr
                key={row.name + idx}
                className={
                  idx % 2 === 0
                    ? "bg-zinc-50 dark:bg-zinc-800"
                    : "bg-white dark:bg-zinc-900"
                }
              >
                <td className="px-6 py-3 text-base font-medium text-zinc-800 dark:text-zinc-100">{row.name}</td>
                <td className="px-6 py-3 text-base text-zinc-700 dark:text-zinc-300">{row.category}</td>
                <td className="px-6 py-3 text-base text-zinc-700 dark:text-zinc-300 italic">{row.takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
} 
