require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const User = require('../models/User');
const Book = require('../models/Book');
const Transaction = require('../models/Transaction');

const seedData = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/library_cipher');
    console.log('Seeder connected to MongoDB.');

    // Clear existing data
    await User.deleteMany();
    await Book.deleteMany();
    await Transaction.deleteMany();
    console.log('Existing users, books, and transactions cleared.');

    // 1. Seed Users
    // Librarian User
    const librarian = new User({
      name: 'Librarian Admin',
      email: 'librarian@cipher.com',
      password: 'password123',
      role: 'librarian'
    });
    await librarian.save();

    // Member User
    const member = new User({
      name: 'Jane Doe',
      email: 'jane@cipher.com',
      password: 'password123',
      role: 'member',
      monthlyGoal: 5 // Custom initial goal
    });
    await member.save();

    // Secondary Member User for reviews
    const member2 = new User({
      name: 'Alex Johnson',
      email: 'alex@cipher.com',
      password: 'password123',
      role: 'member'
    });
    await member2.save();

    console.log('Seeded Users:');
    console.log('  Librarian: librarian@cipher.com / password123');
    console.log('  Member 1 : jane@cipher.com / password123');
    console.log('  Member 2 : alex@cipher.com / password123');

    // 2. Mock Reviews
    const reviewsSet1 = [
      { user: member2._id, userName: 'Alex Johnson', rating: 5, comment: 'An absolute masterpiece of world-building. Read this book at least three times!' },
      { user: member._id, userName: 'Jane Doe', rating: 4, comment: 'Wonderful characters and cozy atmosphere. Perfect adventure tale.' }
    ];

    const reviewsSet2 = [
      { user: member2._id, userName: 'Alex Johnson', rating: 5, comment: 'Chilling, prophetic, and incredibly written. A warning that remains extremely relevant today.' }
    ];

    const reviewsSet3 = [
      { user: member._id, userName: 'Jane Doe', rating: 5, comment: 'Life-changing advice on building routine. Extremely actionable and well structured.' },
      { user: member2._id, userName: 'Alex Johnson', rating: 5, comment: 'The best self-improvement book ever written. Simple, powerful, and effective.' }
    ];

    // 3. Seed Books
    const books = [
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        isbn: '9780007440832',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 1937,
        coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400',
        description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep to whisk him away on an adventure to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.',
        reviews: reviewsSet1,
        ratingAverage: 4.5
      },
      {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        isbn: '9780451524935',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 1949,
        coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
        description: 'Winston Smith reins in his rebellion against the Party, which demands absolute allegiance and controls him through the Thought Police and the all-seeing Big Brother. But Winston finds love and an independent mind in Julia, leading them both into dangerous fields of rebellion.',
        reviews: reviewsSet2,
        ratingAverage: 5.0
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Sci-Fi',
        isbn: '9780441172719',
        copiesTotal: 5,
        copiesAvailable: 5,
        publishYear: 1965,
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness. A stunning blend of adventure, environmentalism, politics, and religion.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-Help',
        isbn: '9780735211292',
        copiesTotal: 6,
        copiesAvailable: 6,
        publishYear: 2018,
        coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400',
        description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
        reviews: reviewsSet3,
        ratingAverage: 5.0
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        isbn: '9780743273565',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 1925,
        coverImage: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&q=80&w=400',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. Written during the Roaring Twenties, this classic critique of the American Dream explores themes of wealth, love, obsession, class, and betrayal in jazz-age New York.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        isbn: '9780590353427',
        copiesTotal: 5,
        copiesAvailable: 5,
        publishYear: 1997,
        coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
        description: 'Harry Potter has no idea how famous he is. He lives in a cupboard under the stairs, bullied by his aunt and uncle. But everything changes when a mysterious letter arrives inviting him to attend Hogwarts School of Witchcraft and Wizardry, where he discovers his magical heritage and begins his legendary journey.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Neuromancer',
        author: 'William Gibson',
        genre: 'Sci-Fi',
        isbn: '9780441569595',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 1984,
        coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
        description: 'Case was the sharpest data-thief in the business, until he crossed the wrong people and they damaged his nervous system. Now, a new employer offers a cure in exchange for a high-risk hack against a powerful artificial intelligence. The Hugo, Nebula, and Philip K. Dick Award-winning cyberpunk classic.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Meditations',
        author: 'Marcus Aurelius',
        genre: 'History', // Categorizing under history/philosophy
        isbn: '9780812968255',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 180,
        coverImage: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=400',
        description: 'A series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy. It serves as an enduring guide on self-discipline, duty, ethics, and maintaining tranquility in a chaotic world.',
        reviews: [
          { user: member._id, userName: 'Jane Doe', rating: 5, comment: 'Timeless ancient wisdom. Essential reading for everyone seeking peace of mind.' }
        ],
        ratingAverage: 5.0
      },
      {
        title: 'Deep Work',
        author: 'Cal Newport',
        genre: 'Self-Help',
        isbn: '9781455586691',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 2016,
        coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
        description: 'One of the most valuable skills in our economy is becoming increasingly rare: the ability to focus without distraction on cognitively demanding tasks. Cal Newport explains how mastering this skill allows you to quickly comprehend complicated information and produce better results in less time.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        genre: 'Thriller',
        isbn: '9781250301697',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 2019,
        coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400',
        description: 'Alicia Berenson\'s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house in London. One evening her husband returns home, and Alicia shoots him five times in the face, and then never speaks another word. Theo Faber, a criminal psychotherapist, is determined to unravel her mystery.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        genre: 'History',
        isbn: '9780062316097',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 2011,
        coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
        description: 'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution. Yuval Noah Harari explores how biology, anthropology, and economics have shaped our societies, our cognitive structures, and our global ecosystems over 100,000 years.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        genre: 'Self-Help',
        isbn: '9780374275631',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 2011,
        coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
        description: 'Daniel Kahneman, recipient of the Nobel Prize in Economic Sciences, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think: System 1 (fast, intuitive, emotional) and System 2 (slow, deliberative, logical).',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        genre: 'Dystopian',
        isbn: '9781451673319',
        copiesTotal: 3,
        copiesAvailable: 3,
        publishYear: 1953,
        coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400',
        description: 'Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        genre: 'Biography',
        isbn: '9781451648539',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 2011,
        coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
        description: 'Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur.',
        reviews: [],
        ratingAverage: 0
      },
      {
        title: 'Zero to One',
        author: 'Peter Thiel',
        genre: 'Fiction', // Categorized generally under business/strategy
        isbn: '9780804139298',
        copiesTotal: 4,
        copiesAvailable: 4,
        publishYear: 2014,
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
        description: 'The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.',
        reviews: [],
        ratingAverage: 0
      }
    ];

    await Book.insertMany(books);
    console.log(`Seeded ${books.length} Books with full descriptions.`);

    // 4. Seed test borrowings (Jane Doe)
    const hobbit = await Book.findOne({ title: 'The Hobbit' });
    const atomic = await Book.findOne({ title: 'Atomic Habits' });
    const meditations = await Book.findOne({ title: 'Meditations' });

    // Active loan (Jane)
    const dueDate1 = new Date();
    dueDate1.setDate(dueDate1.getDate() + 8);
    const tx1 = new Transaction({
      user: member._id,
      book: hobbit._id,
      dueDate: dueDate1,
      status: 'borrowed'
    });
    await tx1.save();
    hobbit.copiesAvailable -= 1;
    await hobbit.save();

    // Overdue loan (Jane)
    const dueDate2 = new Date();
    dueDate2.setDate(dueDate2.getDate() - 4);
    const tx2 = new Transaction({
      user: member._id,
      book: atomic._id,
      borrowDate: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
      dueDate: dueDate2,
      status: 'overdue'
    });
    await tx2.save();
    atomic.copiesAvailable -= 1;
    await atomic.save();

    // Past returned loan (Jane) to count towards goal progress
    const tx3 = new Transaction({
      user: member._id,
      book: meditations._id,
      borrowDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      returnDate: new Date(),
      status: 'returned'
    });
    await tx3.save();
    // Meditations copiesAvailable remains 4 since it was returned!

    console.log('Seeded test borrowing history, overdues, and returned events.');

    console.log('Seeder completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Seeder failed:', error);
    process.exit(1);
  }
};

seedData();
