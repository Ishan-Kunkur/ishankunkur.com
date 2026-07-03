// Ishan's bookshelf. To update: change `status` ('reading' | 'read' | 'list'),
// or add a new { title, author, status } line. The page sorts each shelf by author.

export type Book = {
  title: string;
  author: string;
  status: 'reading' | 'read' | 'list';
};

export const books: Book[] = [
  // --- Currently reading ---
  { title: 'Swipe to Unlock', author: 'Mehta, Detroja, Agashe', status: 'reading' },

  // --- Read: Harry Potter (J.K. Rowling) ---
  { title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling', status: 'read' },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling', status: 'read' },

  // --- Read: Dan Brown ---
  { title: 'Digital Fortress', author: 'Dan Brown', status: 'read' },
  { title: 'Angels & Demons', author: 'Dan Brown', status: 'read' },
  { title: 'Deception Point', author: 'Dan Brown', status: 'read' },
  { title: 'The Da Vinci Code', author: 'Dan Brown', status: 'read' },
  { title: 'The Lost Symbol', author: 'Dan Brown', status: 'read' },
  { title: 'Inferno', author: 'Dan Brown', status: 'read' },
  { title: 'Origin', author: 'Dan Brown', status: 'read' },

  // --- Read: other ---
  { title: 'Building AI-Powered Products', author: "O'Reilly", status: 'read' },

  // --- Read: Sadhguru (edit these, I listed his best-known titles) ---
  { title: 'Inner Engineering: A Yogi’s Guide to Joy', author: 'Sadhguru', status: 'read' },
  { title: 'Karma: A Yogi’s Guide to Crafting Your Destiny', author: 'Sadhguru', status: 'read' },
  { title: 'Death: An Inside Story', author: 'Sadhguru', status: 'read' },

  // --- On the reading list (everything else I own / want to read) ---
  { title: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', status: 'list' },
  { title: 'The Restaurant at the End of the Universe', author: 'Douglas Adams', status: 'list' },
  { title: 'Life, the Universe and Everything', author: 'Douglas Adams', status: 'list' },
  { title: 'So Long, and Thanks for All the Fish', author: 'Douglas Adams', status: 'list' },
  { title: 'Mostly Harmless', author: 'Douglas Adams', status: 'list' },
  { title: 'The Intelligent Investor', author: 'Benjamin Graham', status: 'list' },
  { title: 'Inspired', author: 'Marty Cagan', status: 'list' },
  { title: 'Empowered', author: 'Marty Cagan', status: 'list' },
  { title: 'Transformed', author: 'Marty Cagan', status: 'list' },
  { title: 'Loved', author: 'Martina Lauchengco', status: 'list' },
  { title: 'Build', author: 'Tony Fadell', status: 'list' },
  { title: 'Escaping the Build Trap', author: 'Melissa Perri', status: 'list' },
  { title: 'The Lean Product Playbook', author: 'Dan Olsen', status: 'list' },
  { title: 'Measure What Matters', author: 'John Doerr', status: 'list' },
  { title: "Product Management's Sacred Seven", author: 'Mehta, Detroja, Agashe', status: 'list' },
  { title: 'Cracking the PM Interview', author: 'Gayle Laakmann McDowell', status: 'list' },
  { title: 'Cracking the PM Career', author: 'Jackie Bavaro', status: 'list' },
  { title: 'Decode and Conquer', author: 'Lewis C. Lin', status: 'list' },
  { title: 'AI Superpowers', author: 'Kai-Fu Lee', status: 'list' },
  { title: 'Architects of Intelligence', author: 'Martin Ford', status: 'list' },
  { title: "The AI Product Manager's Handbook", author: 'Irene Bratsis', status: 'list' },
  { title: 'The Great Mental Models (Vol. 1–4)', author: 'Shane Parrish', status: 'list' },
  { title: 'Co-Intelligence', author: 'Ethan Mollick', status: 'list' },
  { title: 'Thinking in Systems', author: 'Donella Meadows', status: 'list' },
  { title: 'The Design of Everyday Things', author: 'Don Norman', status: 'list' },
  { title: 'The Beginning of Infinity', author: 'David Deutsch', status: 'list' },
  { title: 'The Fabric of Reality', author: 'David Deutsch', status: 'list' },
  { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', status: 'list' },
  { title: 'The Black Swan', author: 'Nassim Taleb', status: 'list' },
  { title: 'Antifragile', author: 'Nassim Taleb', status: 'list' },
  { title: 'Skin in the Game', author: 'Nassim Taleb', status: 'list' },
  { title: 'Fooled by Randomness', author: 'Nassim Taleb', status: 'list' },
  { title: 'The Bed of Procrustes', author: 'Nassim Taleb', status: 'list' },
  { title: 'Naked Economics', author: 'Charles Wheelan', status: 'list' },
  { title: 'Naked Statistics', author: 'Charles Wheelan', status: 'list' },
  { title: 'Naked Money', author: 'Charles Wheelan', status: 'list' },
];

export type AuthorGroup = { author: string; books: Book[] };

// Group books by author, preserving series/reading order within each author.
// Groups are ordered by number of books (series first), then by last name.
export function groupByAuthor(list: Book[]): AuthorGroup[] {
  const groups: AuthorGroup[] = [];
  const idx = new Map<string, AuthorGroup>();
  for (const b of list) {
    let g = idx.get(b.author);
    if (!g) {
      g = { author: b.author, books: [] };
      idx.set(b.author, g);
      groups.push(g);
    }
    g.books.push(b);
  }
  const last = (a: string) => a.split(/[\s,&]+/).filter(Boolean).pop()!.toLowerCase();
  return groups.sort(
    (x, y) => y.books.length - x.books.length || last(x.author).localeCompare(last(y.author))
  );
}
