import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './CivicsFlashcardGame.css';
import DetailedExplanation from './DetailedExplanation';
import { detailedExplanations } from '../data/detailedExplanations';
import SettingsModal from './SettingsModal';

// Define difficulty levels
type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface CivicsQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
  category: string;
  explanation?: string; // Optional explanation for the correct answer
  difficulty?: DifficultyLevel; // Optional difficulty level
  hint?: string; // Optional hint to help answer the question
}

// Interface for the game state that will be saved to localStorage
interface GameState {
  currentCardIndex: number;
  hearts: number;
  progress: number;
  score: number;
  questionsAttempted: number;
  darkMode: boolean; // Add dark mode to saved state
  difficultyLevel: DifficultyLevel; // Add difficulty level to saved state
  hintsUsed: number; // Track how many hints the user has used
  timedMode: boolean; // Whether timed mode is enabled
  timeRemaining: number; // Time remaining in seconds
}

const CivicsFlashcardGame = () => {
  // Add loading and error states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check localStorage for saved game state
  const savedState = localStorage.getItem('civicsGameState');
  const initialState: GameState = savedState
    ? JSON.parse(savedState)
    : {
        currentCardIndex: 0,
        hearts: 5,
        progress: 1,
        score: 0,
        questionsAttempted: 0,
        darkMode: false, // Default to light mode
        difficultyLevel: 'medium', // Default to medium difficulty
        hintsUsed: 0, // Initialize hints used counter
        timedMode: false, // Default to non-timed mode
        timeRemaining: 20, // Default time (will be set based on difficulty)
      };

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(initialState.currentCardIndex);
  const [hearts, setHearts] = useState<number>(initialState.hearts);
  const [progress, setProgress] = useState<number>(initialState.progress);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(initialState.score);
  const [questionsAttempted, setQuestionsAttempted] = useState<number>(initialState.questionsAttempted);
  const [saveNotification, setSaveNotification] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(initialState.darkMode);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>(initialState.difficultyLevel);
  const [hintsUsed, setHintsUsed] = useState<number>(initialState.hintsUsed);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [hintPenalty, setHintPenalty] = useState<boolean>(false);
  const [timedMode, setTimedMode] = useState<boolean>(initialState.timedMode);
  const [timeRemaining, setTimeRemaining] = useState<number>(initialState.timeRemaining);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  
  // Ref to track if this is the first render
  const isFirstRender = useRef(true);

  const civicsQuestions: CivicsQuestion[] = [
    // AMERICAN GOVERNMENT
    // A: Principles of American Democracy
    {
      question: "What is the supreme law of the land?",
      correctAnswer: "The Constitution",
      options: ["The Constitution", "The Bill of Rights", "Declaration of Independence", "Federal Laws"],
      category: "A: Principles of Democracy",
      explanation: "The Constitution is the supreme law of the United States. It established the framework of the federal government and outlines the rights and freedoms of all Americans. It was adopted on September 17, 1787, and ratified by the states in 1788.",
      hint: "Think about the document that outlines the framework of the US government."
    },
    {
      question: "What does the Constitution do?",
      correctAnswer: "Sets up the government",
      options: ["Sets up the government", "Declares independence", "Defines state borders", "Creates political parties"],
      category: "A: Principles of Democracy",
      explanation: "The Constitution establishes the three branches of government (legislative, executive, and judicial), defines their powers and limitations, and protects the fundamental rights of American citizens through the Bill of Rights and other amendments.",
      hint: "Consider the role of the Constitution in establishing the US government."
    },
    {
      question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
      correctAnswer: "We the People",
      options: ["We the People", "Life and Liberty", "United States Constitution", "In Congress Assembled"],
      category: "A: Principles of Democracy",
      hint: "These words emphasize that the government's power comes from its citizens."
    },
    {
      question: "What is an amendment?",
      correctAnswer: "A change to the Constitution",
      options: ["A change to the Constitution", "A government law", "A judicial decision", "A presidential order"],
      category: "A: Principles of Democracy",
      hint: "The Constitution has been modified 27 times through this process."
    },
    {
      question: "What do we call the first ten amendments to the Constitution?",
      correctAnswer: "The Bill of Rights",
      options: ["The Bill of Rights", "The Declaration of Rights", "The Articles of Freedom", "The Constitutional Amendments"],
      category: "A: Principles of Democracy",
      hint: "These amendments protect individual liberties and were added in 1791."
    },
    {
      question: "What is one right or freedom from the First Amendment?",
      correctAnswer: "Freedom of speech",
      options: ["Freedom of speech", "Right to bear arms", "Right to a fair trial", "Freedom from unreasonable searches"],
      category: "A: Principles of Democracy"
    },
    {
      question: "How many amendments does the Constitution have?",
      correctAnswer: "27",
      options: ["27", "10", "25", "50"],
      category: "A: Principles of Democracy"
    },
    {
      question: "What did the Declaration of Independence do?",
      correctAnswer: "Declared our independence from Great Britain",
      options: ["Declared our independence from Great Britain", "Freed the slaves", "Gave women the right to vote", "Created the United States"],
      category: "A: Principles of Democracy"
    },
    {
      question: "What are two rights in the Declaration of Independence?",
      correctAnswer: "Life and liberty",
      options: ["Life and liberty", "Speech and religion", "Bear arms and fair trial", "Voting and education"],
      category: "A: Principles of Democracy"
    },
    {
      question: "What is freedom of religion?",
      correctAnswer: "You can practice any religion, or not practice a religion",
      options: ["You can practice any religion, or not practice a religion", "You must belong to a church", "You can only practice certain religions", "Freedom to change religions once a year"],
      category: "A: Principles of Democracy"
    },
    {
      question: "What is the economic system in the United States?",
      correctAnswer: "Capitalist economy",
      options: ["Capitalist economy", "Socialist economy", "Communist economy", "Mixed economy"],
      category: "A: Principles of Democracy"
    },
    {
      question: "What is the 'rule of law'?",
      correctAnswer: "Everyone must follow the law",
      options: ["Everyone must follow the law", "The President makes all laws", "Laws that govern rulers", "Laws made by judges"],
      category: "A: Principles of Democracy"
    },
    
    // B: System of Government
    {
      question: "Name one branch or part of the government.",
      correctAnswer: "Legislative",
      options: ["Legislative", "Department of Education", "Federal Bureau of Investigation", "United Nations"],
      category: "B: System of Government"
    },
    {
      question: "What stops one branch of government from becoming too powerful?",
      correctAnswer: "Checks and balances",
      options: ["Checks and balances", "The President", "The Supreme Court", "The United Nations"],
      category: "B: System of Government"
    },
    {
      question: "Who is in charge of the executive branch?",
      correctAnswer: "The President",
      options: ["The President", "The Chief Justice", "The Speaker of the House", "The Senate Majority Leader"],
      category: "B: System of Government"
    },
    {
      question: "Who makes federal laws?",
      correctAnswer: "Congress",
      options: ["Congress", "The President", "The Supreme Court", "State Governors"],
      category: "B: System of Government"
    },
    {
      question: "What are the two parts of the U.S. Congress?",
      correctAnswer: "The Senate and House of Representatives",
      options: ["The Senate and House of Representatives", "The House and the Cabinet", "The President and Vice President", "Democrats and Republicans"],
      category: "B: System of Government"
    },
    {
      question: "How many U.S. Senators are there?",
      correctAnswer: "100",
      options: ["100", "50", "435", "538"],
      category: "B: System of Government"
    },
    {
      question: "We elect a U.S. Senator for how many years?",
      correctAnswer: "6",
      options: ["6", "2", "4", "8"],
      category: "B: System of Government"
    },
    {
      question: "Who is one of your state's U.S. Senators now?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Nancy Pelosi", "John Roberts", "Mike Pence"],
      category: "B: System of Government"
    },
    {
      question: "The House of Representatives has how many voting members?",
      correctAnswer: "435",
      options: ["435", "100", "50", "538"],
      category: "B: System of Government"
    },
    {
      question: "We elect a U.S. Representative for how many years?",
      correctAnswer: "2",
      options: ["2", "4", "6", "8"],
      category: "B: System of Government"
    },
    {
      question: "Name your U.S. Representative.",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Nancy Pelosi", "Mitch McConnell", "John Roberts"],
      category: "B: System of Government"
    },
    {
      question: "Who does a U.S. Senator represent?",
      correctAnswer: "All people of the state",
      options: ["All people of the state", "Only those who voted for them", "Only their political party", "The President"],
      category: "B: System of Government"
    },
    {
      question: "Why do some states have more Representatives than other states?",
      correctAnswer: "Because of the state's population",
      options: ["Because of the state's population", "Because of the state's size", "Because of the state's age", "Because of the state's wealth"],
      category: "B: System of Government"
    },
    {
      question: "We elect a President for how many years?",
      correctAnswer: "4",
      options: ["4", "2", "6", "8"],
      category: "B: System of Government"
    },
    {
      question: "In what month do we vote for President?",
      correctAnswer: "November",
      options: ["November", "January", "October", "December"],
      category: "B: System of Government"
    },
    {
      question: "What is the name of the President of the United States now?",
      correctAnswer: "Donald Trump (as of 2024)",
      options: ["Donald Trump (as of 2024)", "Joe Biden", "Barack Obama", "George W. Bush"],
      category: "B: System of Government"
    },
    {
      question: "What is the name of the Vice President of the United States now?",
      correctAnswer: "J.D. Vance (as of 2024)",
      options: ["J.D. Vance (as of 2024)", "Kamala Harris", "Mike Pence", "Dick Cheney"],
      category: "B: System of Government"
    },
    {
      question: "If the President can no longer serve, who becomes President?",
      correctAnswer: "The Vice President",
      options: ["The Vice President", "The Speaker of the House", "The Secretary of State", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "If both the President and the Vice President can no longer serve, who becomes President?",
      correctAnswer: "The Speaker of the House",
      options: ["The Speaker of the House", "The Secretary of State", "The Chief Justice", "The Senate Majority Leader"],
      category: "B: System of Government"
    },
    {
      question: "Who is the Commander in Chief of the military?",
      correctAnswer: "The President",
      options: ["The President", "The Secretary of Defense", "The Joint Chiefs of Staff", "The Vice President"],
      category: "B: System of Government"
    },
    {
      question: "Who signs bills to become laws?",
      correctAnswer: "The President",
      options: ["The President", "The Vice President", "The Speaker of the House", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "Who vetoes bills?",
      correctAnswer: "The President",
      options: ["The President", "The Vice President", "The Senate Majority Leader", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "What does the President's Cabinet do?",
      correctAnswer: "Advises the President",
      options: ["Advises the President", "Makes laws", "Approves Supreme Court Justices", "Controls the budget"],
      category: "B: System of Government"
    },
    {
      question: "What are two Cabinet-level positions?",
      correctAnswer: "Secretary of State and Secretary of Defense",
      options: ["Secretary of State and Secretary of Defense", "Speaker of the House and Senate Majority Leader", "Chief Justice and Attorney General", "Treasury Secretary and Vice President"],
      category: "B: System of Government"
    },
    {
      question: "What does the judicial branch do?",
      correctAnswer: "Reviews laws",
      options: ["Reviews laws", "Makes laws", "Declares war", "Approves the budget"],
      category: "B: System of Government"
    },
    {
      question: "What is the highest court in the United States?",
      correctAnswer: "The Supreme Court",
      options: ["The Supreme Court", "The Federal Court", "The District Court", "The Court of Appeals"],
      category: "B: System of Government"
    },
    {
      question: "How many justices are on the Supreme Court?",
      correctAnswer: "9",
      options: ["9", "7", "12", "15"],
      category: "B: System of Government"
    },
    {
      question: "Who is the Chief Justice of the United States now?",
      correctAnswer: "John Roberts",
      options: ["John Roberts", "Samuel Alito", "Clarence Thomas", "Elena Kagan"],
      category: "B: System of Government"
    },
    {
      question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      correctAnswer: "To print money",
      options: ["To print money", "To issue driver's licenses", "To provide schooling", "To create local laws"],
      category: "B: System of Government"
    },
    {
      question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
      correctAnswer: "Provide education",
      options: ["Provide education", "Print money", "Create an army", "Make treaties"],
      category: "B: System of Government"
    },
    {
      question: "Who is the Governor of your state now?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "The state Secretary of State", "The Lieutenant Governor", "The state Attorney General"],
      category: "B: System of Government"
    },
    {
      question: "What is the capital of your state?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Washington D.C.", "New York City", "Los Angeles"],
      category: "B: System of Government"
    },
    {
      question: "What are the two major political parties in the United States?",
      correctAnswer: "Democratic and Republican",
      options: ["Democratic and Republican", "Liberal and Conservative", "Green and Independent", "Socialist and Libertarian"],
      category: "B: System of Government"
    },
    {
      question: "What is the political party of the President now?",
      correctAnswer: "Republican",
      options: ["Republican", "Democratic", "Independent", "Libertarian"],
      category: "B: System of Government"
    },
    {
      question: "What is the name of the Speaker of the House of Representatives now?",
      correctAnswer: "Mike Johnson",
      options: ["Mike Johnson", "Nancy Pelosi", "Kevin McCarthy", "Chuck Schumer"],
      category: "B: System of Government"
    },
    
    // C: Rights and Responsibilities
    {
      question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
      correctAnswer: "Citizens 18 and older can vote",
      options: ["Citizens 18 and older can vote", "You must pay a tax to vote", "Only men can vote", "You must own property to vote"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "What is one responsibility that is only for United States citizens?",
      correctAnswer: "Serve on a jury",
      options: ["Serve on a jury", "Pay taxes", "Obey the law", "Attend school"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "Name one right only for United States citizens.",
      correctAnswer: "Vote in a federal election",
      options: ["Vote in a federal election", "Freedom of speech", "Freedom of religion", "Right to bear arms"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "What are two rights of everyone living in the United States?",
      correctAnswer: "Freedom of speech and freedom of religion",
      options: ["Freedom of speech and freedom of religion", "Vote and run for federal office", "Carry a passport and serve on a jury", "Hold federal jobs and become President"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "What do we show loyalty to when we say the Pledge of Allegiance?",
      correctAnswer: "The United States and the flag",
      options: ["The United States and the flag", "The President", "The military", "The Constitution"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "What is one promise you make when you become a United States citizen?",
      correctAnswer: "Give up loyalty to other countries",
      options: ["Give up loyalty to other countries", "Learn English", "Serve in the military", "Vote in every election"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "How old do citizens have to be to vote for President?",
      correctAnswer: "18 and older",
      options: ["18 and older", "21 and older", "16 and older", "25 and older"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "What are two ways that Americans can participate in their democracy?",
      correctAnswer: "Vote and join a political party",
      options: ["Vote and join a political party", "Pay taxes and obey the law", "Get a driver's license and get a job", "Attend school and learn English"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "When is the last day you can send in federal income tax forms?",
      correctAnswer: "April 15",
      options: ["April 15", "January 1", "December 31", "July 4"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "When must all men register for the Selective Service?",
      correctAnswer: "At age 18",
      options: ["At age 18", "At age 21", "At age 16", "At age 25"],
      category: "C: Rights and Responsibilities"
    },
    
    // AMERICAN HISTORY
    // A: Colonial Period and Independence
    {
      question: "What is one reason colonists came to America?",
      correctAnswer: "Freedom",
      options: ["Freedom", "To build the railroad", "To escape famine", "To learn English"],
      category: "D: Colonial & Independence"
    },
    {
      question: "Who lived in America before the Europeans arrived?",
      correctAnswer: "Native Americans",
      options: ["Native Americans", "No one", "Pilgrims", "Colonists"],
      category: "D: Colonial & Independence"
    },
    {
      question: "What group of people was taken to America and sold as slaves?",
      correctAnswer: "Africans",
      options: ["Africans", "Europeans", "Native Americans", "Chinese"],
      category: "D: Colonial & Independence"
    },
    {
      question: "Why did the colonists fight the British?",
      correctAnswer: "Because of high taxes",
      options: ["Because of high taxes", "Because the British invaded", "To free the slaves", "To write the Constitution"],
      category: "D: Colonial & Independence"
    },
    {
      question: "Who wrote the Declaration of Independence?",
      correctAnswer: "Thomas Jefferson",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Benjamin Franklin"],
      category: "D: Colonial & Independence"
    },
    {
      question: "When was the Declaration of Independence adopted?",
      correctAnswer: "July 4, 1776",
      options: ["July 4, 1776", "July 4, 1789", "July 4, 1812", "July 4, 1865"],
      category: "D: Colonial & Independence"
    },
    {
      question: "There were 13 original states. Name three.",
      correctAnswer: "New York, Virginia, Massachusetts",
      options: ["New York, Virginia, Massachusetts", "California, Texas, Florida", "Ohio, Michigan, Indiana", "Washington, Oregon, Nevada"],
      category: "D: Colonial & Independence"
    },
    {
      question: "What happened at the Constitutional Convention?",
      correctAnswer: "The Constitution was written",
      options: ["The Constitution was written", "The Declaration of Independence was signed", "Washington became President", "The British surrendered"],
      category: "D: Colonial & Independence"
    },
    {
      question: "When was the Constitution written?",
      correctAnswer: "1787",
      options: ["1787", "1776", "1789", "1800"],
      category: "D: Colonial & Independence"
    },
    {
      question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      correctAnswer: "James Madison",
      options: ["James Madison", "Thomas Jefferson", "George Washington", "John Adams"],
      category: "D: Colonial & Independence"
    },
    {
      question: "What is one thing Benjamin Franklin is famous for?",
      correctAnswer: "U.S. diplomat",
      options: ["U.S. diplomat", "First President", "Wrote the Constitution", "Discovered electricity"],
      category: "D: Colonial & Independence"
    },
    {
      question: "Who is the 'Father of Our Country'?",
      correctAnswer: "George Washington",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
      category: "D: Colonial & Independence"
    },
    {
      question: "Who was the first President?",
      correctAnswer: "George Washington",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      category: "D: Colonial & Independence"
    },
    
    // B: 1800s
    {
      question: "What territory did the United States buy from France in 1803?",
      correctAnswer: "The Louisiana Territory",
      options: ["The Louisiana Territory", "Alaska", "Hawaii", "Texas"],
      category: "E: 1800s"
    },
    {
      question: "Name one war fought by the United States in the 1800s.",
      correctAnswer: "Civil War",
      options: ["Civil War", "World War I", "World War II", "Vietnam War"],
      category: "E: 1800s"
    },
    {
      question: "Name the U.S. war between the North and the South.",
      correctAnswer: "The Civil War",
      options: ["The Civil War", "The Revolutionary War", "World War I", "The War of 1812"],
      category: "E: 1800s"
    },
    {
      question: "Name one problem that led to the Civil War.",
      correctAnswer: "Slavery",
      options: ["Slavery", "Taxation", "Immigration", "Foreign invasion"],
      category: "E: 1800s"
    },
    {
      question: "What was one important thing that Abraham Lincoln did?",
      correctAnswer: "Freed the slaves (Emancipation Proclamation)",
      options: ["Freed the slaves (Emancipation Proclamation)", "Wrote the Constitution", "Declared independence from Britain", "Purchased Alaska"],
      category: "E: 1800s"
    },
    {
      question: "What did the Emancipation Proclamation do?",
      correctAnswer: "Freed the slaves",
      options: ["Freed the slaves", "Ended the Civil War", "Gave women the right to vote", "Gave citizenship to Native Americans"],
      category: "E: 1800s"
    },
    {
      question: "What did Susan B. Anthony do?",
      correctAnswer: "Fought for women's rights",
      options: ["Fought for women's rights", "First female member of Congress", "First female Supreme Court Justice", "Wrote the Declaration of Independence"],
      category: "E: 1800s"
    },
    
    // C: Recent American History
    {
      question: "Name one war fought by the United States in the 1900s.",
      correctAnswer: "World War I",
      options: ["World War I", "Civil War", "Revolutionary War", "French and Indian War"],
      category: "F: Recent History"
    },
    {
      question: "Who was President during World War I?",
      correctAnswer: "Woodrow Wilson",
      options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
      category: "F: Recent History"
    },
    {
      question: "Who was President during the Great Depression and World War II?",
      correctAnswer: "Franklin Roosevelt",
      options: ["Franklin Roosevelt", "Herbert Hoover", "Harry Truman", "Dwight Eisenhower"],
      category: "F: Recent History"
    },
    {
      question: "Who did the United States fight in World War II?",
      correctAnswer: "Japan, Germany, and Italy",
      options: ["Japan, Germany, and Italy", "Soviet Union, China, and Cuba", "North Korea and Vietnam", "Spain and Mexico"],
      category: "F: Recent History"
    },
    {
      question: "Before he was President, Eisenhower was a general. What war was he in?",
      correctAnswer: "World War II",
      options: ["World War II", "World War I", "Korean War", "Vietnam War"],
      category: "F: Recent History"
    },
    {
      question: "During the Cold War, what was the main concern of the United States?",
      correctAnswer: "Communism",
      options: ["Communism", "Terrorism", "Nuclear weapons", "Economic depression"],
      category: "F: Recent History"
    },
    {
      question: "What movement tried to end racial discrimination?",
      correctAnswer: "Civil Rights movement",
      options: ["Civil Rights movement", "Women's Suffrage", "Labor movement", "Environmental movement"],
      category: "F: Recent History"
    },
    {
      question: "What did Martin Luther King, Jr. do?",
      correctAnswer: "Fought for civil rights",
      options: ["Fought for civil rights", "First African American President", "Freed the slaves", "First African American Supreme Court Justice"],
      category: "F: Recent History"
    },
    {
      question: "What major event happened on September 11, 2001, in the United States?",
      correctAnswer: "Terrorists attacked the United States",
      options: ["Terrorists attacked the United States", "The Iraq War began", "The first African American President was elected", "Hurricane Katrina hit New Orleans"],
      category: "F: Recent History"
    },
    {
      question: "Name one American Indian tribe in the United States.",
      correctAnswer: "Cherokee",
      options: ["Cherokee", "African", "Hispanic", "Asian"],
      category: "F: Recent History"
    },
    
    // INTEGRATED CIVICS
    // A: Geography
    {
      question: "Name one of the two longest rivers in the United States.",
      correctAnswer: "Mississippi River",
      options: ["Mississippi River", "Colorado River", "Ohio River", "Hudson River"],
      category: "G: Geography"
    },
    {
      question: "What ocean is on the West Coast of the United States?",
      correctAnswer: "Pacific Ocean",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      category: "G: Geography"
    },
    {
      question: "What ocean is on the East Coast of the United States?",
      correctAnswer: "Atlantic Ocean",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      category: "G: Geography"
    },
    {
      question: "Name one U.S. territory.",
      correctAnswer: "Puerto Rico",
      options: ["Puerto Rico", "Hawaii", "Alaska", "Cuba"],
      category: "G: Geography"
    },
    {
      question: "Name one state that borders Canada.",
      correctAnswer: "Maine",
      options: ["Maine", "California", "Texas", "Florida"],
      category: "G: Geography"
    },
    {
      question: "Name one state that borders Mexico.",
      correctAnswer: "California",
      options: ["California", "Florida", "Hawaii", "Oregon"],
      category: "G: Geography"
    },
    {
      question: "What is the capital of the United States?",
      correctAnswer: "Washington, D.C.",
      options: ["Washington, D.C.", "New York City", "Chicago", "Los Angeles"],
      category: "G: Geography"
    },
    {
      question: "Where is the Statue of Liberty?",
      correctAnswer: "New York Harbor",
      options: ["New York Harbor", "Washington, D.C.", "Boston", "Philadelphia"],
      category: "G: Geography"
    },
    
    // B: Symbols
    {
      question: "Why does the flag have 13 stripes?",
      correctAnswer: "Because there were 13 original colonies",
      options: ["Because there were 13 original colonies", "To represent the 13 branches of government", "Because there were 13 original states", "To honor the 13 founding fathers"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "Why does the flag have 50 stars?",
      correctAnswer: "Because there are 50 states",
      options: ["Because there are 50 states", "To represent 50 years of independence", "To honor the 50 founding fathers", "Because there are 50 amendments"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "What is the name of the national anthem?",
      correctAnswer: "The Star-Spangled Banner",
      options: ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country 'Tis of Thee"],
      category: "H: Symbols & Holidays"
    },
    
    // C: Holidays
    {
      question: "When do we celebrate Independence Day?",
      correctAnswer: "July 4",
      options: ["July 4", "June 14", "December 25", "November 11"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "Name two national U.S. holidays.",
      correctAnswer: "Thanksgiving and Independence Day",
      options: ["Thanksgiving and Independence Day", "Labor Day and Easter", "Halloween and Valentine's Day", "St. Patrick's Day and Mother's Day"],
      category: "H: Symbols & Holidays"
    }
  ];

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Function to shuffle options for a question
  const shuffleQuestionOptions = (question: CivicsQuestion): CivicsQuestion => {
    const correctAnswer = question.correctAnswer;
    const shuffledOptions = shuffleArray(question.options);
    
    return {
      ...question,
      options: shuffledOptions,
      // correctAnswer stays the same, regardless of where it is in the options array
    };
  };

  // Add hints to questions that don't have them
  const ensureQuestionsHaveHints = (questions: CivicsQuestion[]): CivicsQuestion[] => {
    return questions.map(question => {
      if (!question.hint) {
        return {
          ...question,
          hint: `Think about key concepts related to ${question.category.split(': ')[1] || question.category}.`
        };
      }
      return question;
    });
  };

  // Process questions to add difficulty levels
  const civicsQuestionsWithDifficulty = civicsQuestions.map(question => {
    // Determine difficulty based on explanation length and number of options
    let difficulty: DifficultyLevel = 'medium'; // Default to medium
    
    if (question.explanation) {
      const explanationLength = question.explanation.length;
      if (explanationLength > 300 || question.options.length > 4) {
        difficulty = 'hard';
      } else if (explanationLength < 150 && question.options.length <= 3) {
        difficulty = 'easy';
      }
    } else {
      // If no explanation, consider it easy
      difficulty = 'easy';
    }
    
    return { ...question, difficulty };
  });

  // Ensure all questions have hints
  const civicsQuestionsWithHints = ensureQuestionsHaveHints(civicsQuestionsWithDifficulty);

  // Filter questions based on difficulty level
  const filteredQuestions = useMemo(() => {
    let filtered = [...civicsQuestionsWithHints];
    
    // Apply difficulty filtering
    if (difficultyLevel === 'easy') {
      filtered = filtered.filter(q => !q.difficulty || q.difficulty === 'easy');
    } else if (difficultyLevel === 'medium') {
      filtered = filtered.filter(q => !q.difficulty || q.difficulty === 'easy' || q.difficulty === 'medium');
    }
    
    // Randomize questions at the start of each game
    return shuffleArray(filtered);
  }, [difficultyLevel]);

  // Get current card with pre-shuffled options
  const currentCard = useMemo(() => {
    if (filteredQuestions.length === 0 || currentCardIndex >= filteredQuestions.length) {
      return null;
    }
    
    // Get the current question
    const question = filteredQuestions[currentCardIndex];
    
    // Return a new question object with shuffled options
    return {
      ...question,
      options: shuffleArray([...question.options])
    };
  }, [filteredQuestions, currentCardIndex]);

  // Function to handle game over
  const handleGameOver = useCallback(() => {
    setTimerActive(false); // Stop the timer
    // Show game over screen
    setHearts(0);
  }, []);

  // Function to set time based on difficulty level
  const getTimeForDifficulty = (): number => {
    switch (difficultyLevel) {
      case 'easy':
        return 30; // 30 seconds for easy
      case 'medium':
        return 20; // 20 seconds for medium
      case 'hard':
        return 15; // 15 seconds for hard
      default:
        return 20;
    }
  };

  // Reset timer function
  const resetTimer = useCallback(() => {
    if (timedMode) {
      setTimeRemaining(getTimeForDifficulty());
      setTimerActive(true);
    }
  }, [timedMode, getTimeForDifficulty]);

  // Function to handle next card
  const handleNextCard = useCallback(() => {
    // Set animation class for exit animation
    setAnimationClass('card-exit');
    
    // Set a loading state to prevent showing unshuffled options
    setIsLoading(true);
    
    setTimeout(() => {
      if (currentCardIndex < filteredQuestions.length - 1) {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
      } else {
        // Loop back to the first question when reaching the end
        setCurrentCardIndex(0);
      }
      // Reset hint state for the next card
      setShowHint(false);
      setHintPenalty(false);
      
      // Reset timer for the next question if in timed mode
      if (timedMode) {
        resetTimer();
      }
      
      // Trigger enter animation for the new card
      setAnimationClass('card-enter');
      
      // Short delay to ensure options are properly shuffled before showing
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }, 500);
  }, [currentCardIndex, filteredQuestions.length, timedMode, resetTimer]);

  // Handle time up event
  const handleTimeUp = useCallback(() => {
    console.log('Time up!');
    setTimerActive(false);
    setHearts(prevHearts => Math.max(prevHearts - 1, 0));
    setSelectedAnswer(null);
    setIsCorrect(false);
    
    // Check if game over
    if (hearts <= 1) {
      // Game over
      handleGameOver();
    } else {
      // Move to next question after delay
      setTimeout(() => {
        handleNextCard();
      }, 2500);
    }
  }, [hearts, handleGameOver, handleNextCard]);

  // Function to handle option click
  const handleOptionClick = (option: string) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    const currentCard = filteredQuestions[currentCardIndex];
    if (!currentCard) return;
    
    setSelectedAnswer(option);
    const correct = option === currentCard.correctAnswer;
    
    setIsCorrect(correct);
    
    // Update score and questions attempted
    setQuestionsAttempted(prev => prev + 1);
    
    if (correct) {
      // Apply hint penalty if hint was used (reduce score increase)
      if (hintPenalty && difficultyLevel !== 'easy') {
        // Half point for correct answer with hint (except in easy mode)
        setScore(prev => prev + 0.5);
      } else {
        // Full point for correct answer without hint or in easy mode
        setScore(prev => prev + 1);
      }
      
      // Add time bonus for correct answer if in timed mode
      if (timedMode) {
        addTimeBonus();
      }
    } else {
      // Lose a heart for incorrect answer
      setHearts(prev => Math.max(prev - 1, 0));
    }
    
    // Check if game over
    if (!correct && hearts <= 1) {
      handleGameOver();
    } else {
      // Automatically proceed to next question after 5 seconds
      setTimeout(() => {
        handleContinue();
      }, 5000);
    }
  };

  // Handle continue
  const handleContinue = () => {
    if (!currentCard) return;
    
    // Only proceed if an answer has been selected (isCorrect is not null)
    if (isCorrect !== null) {
      if (isCorrect) {
        setProgress(prev => Math.min(prev + 1, 100));
        handleNextCard();
      } else {
        // Lose a heart for incorrect answer (should already be deducted in handleOptionClick)
        if (hearts > 1) {
          handleNextCard();
        }
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  // Clear saved progress
  const clearSavedProgress = () => {
    localStorage.removeItem('civicsGameState');
    
    // Reset to default values
    setCurrentCardIndex(0);
    
    // Set hearts based on difficulty level
    if (difficultyLevel === 'easy') {
      setHearts(7); // More hearts for easy mode
    } else if (difficultyLevel === 'medium') {
      setHearts(5); // Default hearts for medium mode
    } else {
      setHearts(3); // Fewer hearts for hard mode
    }
    
    setProgress(1);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setQuestionsAttempted(0);
    setHintsUsed(0);
    setShowHint(false);
    setHintPenalty(false);
    
    // Trigger enter animation for the first card
    setAnimationClass('card-enter');
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    // Apply theme class to the document body
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Add time bonus for correct answer
  const addTimeBonus = () => {
    if (timedMode) {
      // Add bonus based on difficulty
      const bonus = difficultyLevel === 'easy' ? 5 : difficultyLevel === 'medium' ? 3 : 2;
      setTimeRemaining(prevTime => prevTime + bonus);
    }
  };

  // Save game state to localStorage whenever relevant state changes
  useEffect(() => {
    const gameState: GameState = {
      currentCardIndex,
      hearts,
      progress,
      score,
      questionsAttempted,
      darkMode, // Include dark mode in saved state
      difficultyLevel, // Include difficulty level in saved state
      hintsUsed, // Include hints used in saved state
      timedMode, // Include timed mode in saved state
      timeRemaining, // Include time remaining in saved state
    };
    localStorage.setItem('civicsGameState', JSON.stringify(gameState));
    
    // Show save notification briefly
    if (currentCardIndex > 0) {
      setSaveNotification(true);
      const timer = setTimeout(() => {
        setSaveNotification(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentCardIndex, hearts, progress, score, questionsAttempted, darkMode, difficultyLevel, hintsUsed, timedMode, timeRemaining]);

  // Set initial theme on first render
  useEffect(() => {
    // Apply initial theme class
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('dark-mode', 'light-mode');
    };
  }, []);

  // Reset animation class after animation completes
  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  // Set initial animation on first render
  useEffect(() => {
    if (isFirstRender.current) {
      // Set loading state to prevent showing unshuffled options
      setIsLoading(true);
      
      // Short delay to ensure options are properly shuffled before showing
      setTimeout(() => {
        setAnimationClass('card-enter');
        setIsLoading(false);
        isFirstRender.current = false;
      }, 300);
    }
  }, []);

  // Simulate loading data on initial render
  useEffect(() => {
    // Simulate data loading with a timeout
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // If we had actual data fetching, it would go here
        // For now, we're just simulating the loading state
        
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError('Failed to load game data. Please try again.');
        console.error('Error loading game data:', err);
      }
    };
    
    loadData();
  }, []);

  // Function to retry loading if there was an error
  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    
    // Simulate retry attempt
    setTimeout(() => {
      setIsLoading(false);
      // Randomly succeed or fail for demonstration purposes
      if (Math.random() > 0.2) { // 80% chance of success on retry
        // Success - do nothing as error is already null
      } else {
        setError('Failed to load game data. Please try again.');
      }
    }, 1000);
  };

  const handleShowHint = () => {
    if (currentCard) {
      setShowHint(true);
      // Ensure hintsUsed is a number before incrementing
      setHintsUsed(prevHints => (isNaN(prevHints) ? 1 : prevHints + 1));
      setHintPenalty(true);
    }
  };

  const handleHideHint = () => {
    setShowHint(false);
  };

  // Handle difficulty change
  const handleDifficultyChange = (difficulty: DifficultyLevel) => {
    setIsLoading(true);
    setDifficultyLevel(difficulty);
    
    // Reset game state for new difficulty
    setCurrentCardIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowHint(false);
    setHintPenalty(false);
    
    // Set hearts based on difficulty
    if (difficulty === 'easy') {
      setHearts(7);
    } else if (difficulty === 'medium') {
      setHearts(5);
    } else {
      setHearts(3);
    }
    
    // Set time based on difficulty if timed mode is enabled
    if (timedMode) {
      if (difficulty === 'easy') {
        setTimeRemaining(30);
      } else if (difficulty === 'medium') {
        setTimeRemaining(20);
      } else {
        setTimeRemaining(15);
      }
    }
    
    // Reset progress
    setProgress(1);
    setScore(0);
    setQuestionsAttempted(0);
    setHintsUsed(0);
    
    // Trigger enter animation for the first card
    setAnimationClass('card-enter');
    
    // Short delay to ensure options are properly shuffled before showing
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Reset game with current settings
  const resetGame = () => {
    setCurrentCardIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setProgress(1);
    setScore(0);
    setQuestionsAttempted(0);
    setHintsUsed(0);
    setShowHint(false);
    setHintPenalty(false);
    
    // Set hearts based on difficulty level
    if (difficultyLevel === 'easy') {
      setHearts(7); // More hearts for easy mode
    } else if (difficultyLevel === 'medium') {
      setHearts(5); // Default hearts for medium mode
    } else {
      setHearts(3); // Fewer hearts for hard mode
    }
    
    // Reset timer if in timed mode
    if (timedMode) {
      setTimeRemaining(getTimeForDifficulty());
      setTimerActive(true);
    }
  };

  // Toggle timed mode
  const toggleTimedMode = () => {
    const newTimedMode = !timedMode;
    setTimedMode(newTimedMode);
    
    // Reset timer when toggling
    if (newTimedMode) {
      // Set time based on current difficulty
      setTimeRemaining(getTimeForDifficulty());
      // Activate the timer immediately
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  };

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    // Only run timer if timed mode is active and timer is active
    if (timedMode && timerActive && timeRemaining > 0) {
      console.log('Starting timer with', timeRemaining, 'seconds');
      timer = setInterval(() => {
        setTimeRemaining(prevTime => {
          const newTime = prevTime - 1;
          console.log('Timer tick:', newTime);
          if (newTime <= 0) {
            // Time's up - handle game over
            handleTimeUp();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) {
        console.log('Clearing timer');
        clearInterval(timer);
      }
    };
  }, [timedMode, timerActive, handleTimeUp]);

  return (
    <div className={`game-container ${darkMode ? 'dark-mode' : 'light-mode'}`} role="application" aria-label="Civics Flashcard Game">
      {/* Header */}
      <header className="game-header">
        <button 
          className="exit-button" 
          onClick={resetGame} 
          aria-label="Restart game"
          tabIndex={0}
        >↻</button>
        <div 
          className="progress-bar"
          aria-label="Game progress"
        >
          <div 
            className="progress-bar-fill"
            style={{ width: `${(currentCardIndex / filteredQuestions.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={Math.round((currentCardIndex / filteredQuestions.length) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Game progress"
          ></div>
        </div>
        <div className="header-right">
          <div className="heart-container" aria-label={`${hearts} hearts remaining`} role="status">
            {Array.from({ length: hearts }).map((_, i) => (
              <span key={i} className="heart" aria-hidden="true">❤️</span>
            ))}
          </div>
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode} 
            aria-label={`Toggle to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {darkMode ? '☀️' : '🌙'}
            </span>
          </button>
          <button 
            className="timer-toggle" 
            onClick={toggleTimedMode} 
            aria-label={`Toggle timed mode`}
            title={timedMode ? "Disable Timed Mode" : "Enable Timed Mode"}
          >
            <span className="timer-toggle-icon" aria-hidden="true">
              {timedMode ? '🕒️' : '⏰'}
            </span>
            <span className="timer-toggle-text">
              {timedMode ? 'Timed' : 'Timed'}
            </span>
          </button>
          <button 
            className="settings-toggle" 
            onClick={() => setIsSettingsModalOpen(true)} 
            aria-label="Open settings modal"
          >
            <span className="settings-toggle-icon" aria-hidden="true">⚙️</span>
          </button>
        </div>
      </header>

      {/* Save Notification */}
      {saveNotification && (
        <div className="save-notification" role="status" aria-live="polite">
          Progress saved
        </div>
      )}

      {/* Loading and Error States */}
      {isLoading && (
        <div className="loading-container" role="status" aria-live="polite">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading game data...</p>
        </div>
      )}

      {error && (
        <div className="error-container" role="alert">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button"
            onClick={handleRetry}
            aria-label="Retry loading game data"
          >
            Retry
          </button>
        </div>
      )}

      {/* Only show game content when not loading and no errors */}
      {!isLoading && !error && (
        <>
          {/* Score Display */}
          <div className="score-display" role="region" aria-label="Game statistics">
            <div className="score-item">
              <span className="score-label">Score:</span>
              <span className="score-value" aria-live="polite">{score}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Accuracy:</span>
              <span className="score-value" aria-live="polite">
                {questionsAttempted > 0 
                  ? `${Math.round((score / questionsAttempted) * 100)}%` 
                  : '0%'}
              </span>
            </div>
            <div className="score-item">
              <span className="score-label">Hints Used:</span>
              <span className="score-value" aria-live="polite">{hintsUsed}</span>
            </div>
          </div>

          {/* Timer Display */}
          {timedMode && (
            <div 
              className={`timer-display ${timeRemaining <= 5 ? 'timer-warning' : ''}`} 
              role="timer" 
              aria-label="Time remaining"
            >
              <span className="timer-icon" aria-hidden="true">⏱️</span>
              <span className="timer-value" aria-live="polite">{timeRemaining}s</span>
            </div>
          )}

          {/* Main Content */}
          <main className="main-content" id="flashcard-content" role="region" aria-live="polite">
            {hearts > 0 ? (
              <div className={`card-container ${animationClass}`}>
                {/* Card */}
                {currentCard && !isLoading ? (
                  <article className="card" role="group" aria-label="Flashcard question">
                    <div className="card-body">
                      <h2 className="card-title" id="question-text">{currentCard.question}</h2>
                      <div className="options-container" role="group" aria-labelledby="question-text">
                        {currentCard.options.map((option, index) => (
                          <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedAnswer !== null}
                            className={`option-button ${
                              selectedAnswer === option
                                ? isCorrect
                                  ? 'option-correct'
                                  : 'option-incorrect'
                                : 'option-default'
                            }`}
                            tabIndex={selectedAnswer === null ? 0 : -1}
                            onKeyDown={(e) => {
                              if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                                e.preventDefault();
                                if (selectedAnswer === null) {
                                  const optionsLength = currentCard.options.length;
                                  const currentIndex = index;
                                  const newIndex = e.key === 'ArrowDown' 
                                    ? (currentIndex + 1) % optionsLength 
                                    : (currentIndex - 1 + optionsLength) % optionsLength;
                                  const buttons = document.querySelectorAll('.option-button');
                                  if (buttons[newIndex] instanceof HTMLElement) {
                                    (buttons[newIndex] as HTMLElement).focus();
                                  }
                                }
                              } else if (e.key === 'Enter' || e.key === ' ') {
                                if (selectedAnswer === null) {
                                  handleOptionClick(option);
                                }
                              }
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {selectedAnswer && isCorrect && (
                        <div className="explanation-container fade-in" aria-live="polite">
                          {currentCard.explanation && (
                            <>
                              <h3 className="explanation-title">Explanation:</h3>
                              <p className="explanation-text">{currentCard.explanation}</p>
                            </>
                          )}
                          
                          {/* Detailed explanation component */}
                          {detailedExplanations[currentCard.question] && (
                            <DetailedExplanation 
                              question={currentCard.question}
                              selectedAnswer={selectedAnswer}
                              isCorrect={isCorrect}
                            />
                          )}
                          
                          <button 
                            className="continue-button"
                            onClick={handleContinue}
                            tabIndex={0}
                            aria-label="Continue to next question"
                          >
                            Continue
                          </button>
                        </div>
                      )}
                      {selectedAnswer && !isCorrect && (
                        <div className="explanation-container fade-in" aria-live="polite">
                          <p className="incorrect-message">That's not correct. The correct answer is: {currentCard.correctAnswer}</p>
                          
                          {/* Detailed explanation component */}
                          {detailedExplanations[currentCard.question] && (
                            <DetailedExplanation 
                              question={currentCard.question}
                              selectedAnswer={selectedAnswer}
                              isCorrect={isCorrect}
                            />
                          )}
                          
                          <button 
                            className="continue-button"
                            onClick={handleContinue}
                            tabIndex={0}
                            aria-label="Continue to next question"
                          >
                            Continue
                          </button>
                        </div>
                      )}
                      {!selectedAnswer && currentCard && currentCard.hint && (
                        <div className="hint-container">
                          <button 
                            className="hint-button"
                            onClick={handleShowHint}
                            aria-label="Show hint"
                            aria-expanded={showHint ? "true" : "false"}
                          >
                            {showHint ? 'Hide Hint' : 'Show Hint'}
                          </button>
                          {showHint && (
                            <div className="hint-text" aria-live="polite">
                              <p><strong>Hint:</strong> {currentCard.hint}</p>
                              {difficultyLevel !== 'easy' ? (
                                <p className="hint-penalty-note">(Using a hint reduces the points earned for a correct answer)</p>
                              ) : (
                                <p className="hint-penalty-note">(In easy mode, using hints has no score penalty)</p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  <div className="loading-spinner-container" aria-label="Loading next question">
                    <div className="loading-spinner" aria-hidden="true"></div>
                  </div>
                )}
              </div>
            ) : (
              <div className="game-over fade-in" role="dialog" aria-labelledby="game-over-title">
                <h2 className="game-over-title" id="game-over-title">Game Over!</h2>
                <p className="game-over-message">You've run out of hearts. Try again?</p>
                <div className="game-stats" role="region" aria-label="Final game statistics">
                  <p>Final Score: <span aria-live="polite">{score}</span></p>
                  <p>Questions Attempted: <span aria-live="polite">{questionsAttempted}</span></p>
                  <p>Accuracy: <span aria-live="polite">{questionsAttempted > 0 
                    ? `${Math.round((score / questionsAttempted) * 100)}%` 
                    : '0%'}</span>
                  </p>
                  <p>Hints Used: <span aria-live="polite">{hintsUsed}</span></p>
                  <p>Time Remaining: <span aria-live="polite">{timeRemaining}</span></p>
                </div>
                <div className="game-over-buttons">
                  <button 
                    onClick={resetGame} 
                    className="restart-button"
                    tabIndex={0}
                    aria-label="Restart game"
                  >
                    Restart Game
                  </button>
                  <button 
                    onClick={clearSavedProgress} 
                    className="clear-progress-button"
                    tabIndex={0}
                    aria-label="Clear saved progress and restart game"
                  >
                    Clear Saved Progress
                  </button>
                </div>
              </div>
            )}
          </main>
        </>
      )}

      {/* Footer */}
      {isSettingsModalOpen && (
        <SettingsModal 
          isOpen={isSettingsModalOpen} 
          onClose={() => setIsSettingsModalOpen(false)} 
          difficultyLevel={difficultyLevel} 
          onDifficultyChange={handleDifficultyChange} 
          timedMode={timedMode} 
          onTimedModeChange={toggleTimedMode} 
        />
      )}
    </div>
  );

};

export default CivicsFlashcardGame;