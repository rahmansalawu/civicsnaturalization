import React, { useState } from 'react';

const CivicsFlashcardGame = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hearts, setHearts] = useState(5);
  const [progress, setProgress] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const civicsQuestions = [
    // AMERICAN GOVERNMENT
    // A: Principles of American Democracy
    {
      question: "1. What is the supreme law of the land?",
      correctAnswer: "The Constitution",
      options: ["The Constitution", "The Bill of Rights", "Declaration of Independence", "Federal Laws"],
      category: "A: Principles of Democracy"
    },
    {
      question: "2. What does the Constitution do?",
      correctAnswer: "Sets up the government",
      options: ["Sets up the government", "Declares independence", "Defines state borders", "Creates political parties"],
      category: "A: Principles of Democracy"
    },
    {
      question: "3. The idea of self-government is in the first three words of the Constitution. What are these words?",
      correctAnswer: "We the People",
      options: ["We the People", "Life and Liberty", "United States Constitution", "In Congress Assembled"],
      category: "A: Principles of Democracy"
    },
    {
      question: "4. What is an amendment?",
      correctAnswer: "A change to the Constitution",
      options: ["A change to the Constitution", "A government law", "A judicial decision", "A presidential order"],
      category: "A: Principles of Democracy"
    },
    {
      question: "5. What do we call the first ten amendments to the Constitution?",
      correctAnswer: "The Bill of Rights",
      options: ["The Bill of Rights", "The Declaration of Rights", "The Articles of Freedom", "The Constitutional Amendments"],
      category: "A: Principles of Democracy"
    },
    {
      question: "6. What is one right or freedom from the First Amendment?",
      correctAnswer: "Freedom of speech",
      options: ["Freedom of speech", "Right to bear arms", "Right to a fair trial", "Freedom from unreasonable searches"],
      category: "A: Principles of Democracy"
    },
    {
      question: "7. How many amendments does the Constitution have?",
      correctAnswer: "27",
      options: ["27", "10", "25", "50"],
      category: "A: Principles of Democracy"
    },
    {
      question: "8. What did the Declaration of Independence do?",
      correctAnswer: "Declared our independence from Great Britain",
      options: ["Declared our independence from Great Britain", "Freed the slaves", "Gave women the right to vote", "Created the United States"],
      category: "A: Principles of Democracy"
    },
    {
      question: "9. What are two rights in the Declaration of Independence?",
      correctAnswer: "Life and liberty",
      options: ["Life and liberty", "Speech and religion", "Bear arms and fair trial", "Voting and education"],
      category: "A: Principles of Democracy"
    },
    {
      question: "10. What is freedom of religion?",
      correctAnswer: "You can practice any religion, or not practice a religion",
      options: ["You can practice any religion, or not practice a religion", "You must belong to a church", "You can only practice certain religions", "Freedom to change religions once a year"],
      category: "A: Principles of Democracy"
    },
    {
      question: "11. What is the economic system in the United States?",
      correctAnswer: "Capitalist economy",
      options: ["Capitalist economy", "Socialist economy", "Communist economy", "Mixed economy"],
      category: "A: Principles of Democracy"
    },
    {
      question: "12. What is the 'rule of law'?",
      correctAnswer: "Everyone must follow the law",
      options: ["Everyone must follow the law", "The President makes all laws", "Laws that govern rulers", "Laws made by judges"],
      category: "A: Principles of Democracy"
    },
    
    // B: System of Government
    {
      question: "13. Name one branch or part of the government.",
      correctAnswer: "Legislative",
      options: ["Legislative", "Department of Education", "Federal Bureau of Investigation", "United Nations"],
      category: "B: System of Government"
    },
    {
      question: "14. What stops one branch of government from becoming too powerful?",
      correctAnswer: "Checks and balances",
      options: ["Checks and balances", "The President", "The Supreme Court", "The United Nations"],
      category: "B: System of Government"
    },
    {
      question: "15. Who is in charge of the executive branch?",
      correctAnswer: "The President",
      options: ["The President", "The Chief Justice", "The Speaker of the House", "The Senate Majority Leader"],
      category: "B: System of Government"
    },
    {
      question: "16. Who makes federal laws?",
      correctAnswer: "Congress",
      options: ["Congress", "The President", "The Supreme Court", "State Governors"],
      category: "B: System of Government"
    },
    {
      question: "17. What are the two parts of the U.S. Congress?",
      correctAnswer: "The Senate and House of Representatives",
      options: ["The Senate and House of Representatives", "The House and the Cabinet", "The President and Vice President", "Democrats and Republicans"],
      category: "B: System of Government"
    },
    {
      question: "18. How many U.S. Senators are there?",
      correctAnswer: "100",
      options: ["100", "50", "435", "538"],
      category: "B: System of Government"
    },
    {
      question: "19. We elect a U.S. Senator for how many years?",
      correctAnswer: "6",
      options: ["6", "2", "4", "8"],
      category: "B: System of Government"
    },
    {
      question: "20. Who is one of your state's U.S. Senators now?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Nancy Pelosi", "John Roberts", "Mike Pence"],
      category: "B: System of Government"
    },
    {
      question: "21. The House of Representatives has how many voting members?",
      correctAnswer: "435",
      options: ["435", "100", "50", "538"],
      category: "B: System of Government"
    },
    {
      question: "22. We elect a U.S. Representative for how many years?",
      correctAnswer: "2",
      options: ["2", "4", "6", "8"],
      category: "B: System of Government"
    },
    {
      question: "23. Name your U.S. Representative.",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Nancy Pelosi", "Mitch McConnell", "John Roberts"],
      category: "B: System of Government"
    },
    {
      question: "24. Who does a U.S. Senator represent?",
      correctAnswer: "All people of the state",
      options: ["All people of the state", "Only those who voted for them", "Only their political party", "The President"],
      category: "B: System of Government"
    },
    {
      question: "25. Why do some states have more Representatives than other states?",
      correctAnswer: "Because of the state's population",
      options: ["Because of the state's population", "Because of the state's size", "Because of the state's age", "Because of the state's wealth"],
      category: "B: System of Government"
    },
    {
      question: "26. We elect a President for how many years?",
      correctAnswer: "4",
      options: ["4", "2", "6", "8"],
      category: "B: System of Government"
    },
    {
      question: "27. In what month do we vote for President?",
      correctAnswer: "November",
      options: ["November", "January", "October", "December"],
      category: "B: System of Government"
    },
    {
      question: "28. What is the name of the President of the United States now?",
      correctAnswer: "Donald Trump (as of 2024)",
      options: ["Donald Trump (as of 2024)", "Joe Biden", "Barack Obama", "George W. Bush"],
      category: "B: System of Government"
    },
    {
      question: "29. What is the name of the Vice President of the United States now?",
      correctAnswer: "J.D. Vance (as of 2024)",
      options: ["J.D. Vance (as of 2024)", "Kamala Harris", "Mike Pence", "Dick Cheney"],
      category: "B: System of Government"
    },
    {
      question: "30. If the President can no longer serve, who becomes President?",
      correctAnswer: "The Vice President",
      options: ["The Vice President", "The Speaker of the House", "The Secretary of State", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "31. If both the President and the Vice President can no longer serve, who becomes President?",
      correctAnswer: "The Speaker of the House",
      options: ["The Speaker of the House", "The Secretary of State", "The Chief Justice", "The Senate Majority Leader"],
      category: "B: System of Government"
    },
    {
      question: "32. Who is the Commander in Chief of the military?",
      correctAnswer: "The President",
      options: ["The President", "The Secretary of Defense", "The Joint Chiefs of Staff", "The Vice President"],
      category: "B: System of Government"
    },
    {
      question: "33. Who signs bills to become laws?",
      correctAnswer: "The President",
      options: ["The President", "The Vice President", "The Speaker of the House", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "34. Who vetoes bills?",
      correctAnswer: "The President",
      options: ["The President", "The Vice President", "The Senate Majority Leader", "The Chief Justice"],
      category: "B: System of Government"
    },
    {
      question: "35. What does the President's Cabinet do?",
      correctAnswer: "Advises the President",
      options: ["Advises the President", "Makes laws", "Approves Supreme Court Justices", "Controls the budget"],
      category: "B: System of Government"
    },
    {
      question: "36. What are two Cabinet-level positions?",
      correctAnswer: "Secretary of State and Secretary of Defense",
      options: ["Secretary of State and Secretary of Defense", "Speaker of the House and Senate Majority Leader", "Chief Justice and Attorney General", "Treasury Secretary and Vice President"],
      category: "B: System of Government"
    },
    {
      question: "37. What does the judicial branch do?",
      correctAnswer: "Reviews laws",
      options: ["Reviews laws", "Makes laws", "Declares war", "Approves the budget"],
      category: "B: System of Government"
    },
    {
      question: "38. What is the highest court in the United States?",
      correctAnswer: "The Supreme Court",
      options: ["The Supreme Court", "The Federal Court", "The District Court", "The Court of Appeals"],
      category: "B: System of Government"
    },
    {
      question: "39. How many justices are on the Supreme Court?",
      correctAnswer: "9",
      options: ["9", "7", "12", "15"],
      category: "B: System of Government"
    },
    {
      question: "40. Who is the Chief Justice of the United States now?",
      correctAnswer: "John Roberts",
      options: ["John Roberts", "Samuel Alito", "Clarence Thomas", "Elena Kagan"],
      category: "B: System of Government"
    },
    {
      question: "41. Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
      correctAnswer: "To print money",
      options: ["To print money", "To issue driver's licenses", "To provide schooling", "To create local laws"],
      category: "B: System of Government"
    },
    {
      question: "42. Under our Constitution, some powers belong to the states. What is one power of the states?",
      correctAnswer: "Provide education",
      options: ["Provide education", "Print money", "Create an army", "Make treaties"],
      category: "B: System of Government"
    },
    {
      question: "43. Who is the Governor of your state now?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "The state Secretary of State", "The Lieutenant Governor", "The state Attorney General"],
      category: "B: System of Government"
    },
    {
      question: "44. What is the capital of your state?",
      correctAnswer: "Answers will vary",
      options: ["Answers will vary", "Washington D.C.", "New York City", "Los Angeles"],
      category: "B: System of Government"
    },
    {
      question: "45. What are the two major political parties in the United States?",
      correctAnswer: "Democratic and Republican",
      options: ["Democratic and Republican", "Liberal and Conservative", "Green and Independent", "Socialist and Libertarian"],
      category: "B: System of Government"
    },
    {
      question: "46. What is the political party of the President now?",
      correctAnswer: "Republican",
      options: ["Republican", "Democratic", "Independent", "Libertarian"],
      category: "B: System of Government"
    },
    {
      question: "47. What is the name of the Speaker of the House of Representatives now?",
      correctAnswer: "Mike Johnson",
      options: ["Mike Johnson", "Nancy Pelosi", "Kevin McCarthy", "Chuck Schumer"],
      category: "B: System of Government"
    },
    
    // C: Rights and Responsibilities
    {
      question: "48. There are four amendments to the Constitution about who can vote. Describe one of them.",
      correctAnswer: "Citizens 18 and older can vote",
      options: ["Citizens 18 and older can vote", "You must pay a tax to vote", "Only men can vote", "You must own property to vote"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "49. What is one responsibility that is only for United States citizens?",
      correctAnswer: "Serve on a jury",
      options: ["Serve on a jury", "Pay taxes", "Obey the law", "Attend school"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "50. Name one right only for United States citizens.",
      correctAnswer: "Vote in a federal election",
      options: ["Vote in a federal election", "Freedom of speech", "Freedom of religion", "Right to bear arms"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "51. What are two rights of everyone living in the United States?",
      correctAnswer: "Freedom of speech and freedom of religion",
      options: ["Freedom of speech and freedom of religion", "Vote and run for federal office", "Carry a passport and serve on a jury", "Hold federal jobs and become President"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "52. What do we show loyalty to when we say the Pledge of Allegiance?",
      correctAnswer: "The United States and the flag",
      options: ["The United States and the flag", "The President", "The military", "The Constitution"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "53. What is one promise you make when you become a United States citizen?",
      correctAnswer: "Give up loyalty to other countries",
      options: ["Give up loyalty to other countries", "Learn English", "Serve in the military", "Vote in every election"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "54. How old do citizens have to be to vote for President?",
      correctAnswer: "18 and older",
      options: ["18 and older", "21 and older", "16 and older", "25 and older"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "55. What are two ways that Americans can participate in their democracy?",
      correctAnswer: "Vote and join a political party",
      options: ["Vote and join a political party", "Pay taxes and obey the law", "Get a driver's license and get a job", "Attend school and learn English"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "56. When is the last day you can send in federal income tax forms?",
      correctAnswer: "April 15",
      options: ["April 15", "January 1", "December 31", "July 4"],
      category: "C: Rights and Responsibilities"
    },
    {
      question: "57. When must all men register for the Selective Service?",
      correctAnswer: "At age 18",
      options: ["At age 18", "At age 21", "At age 16", "At age 25"],
      category: "C: Rights and Responsibilities"
    },
    
    // AMERICAN HISTORY
    // A: Colonial Period and Independence
    {
      question: "58. What is one reason colonists came to America?",
      correctAnswer: "Freedom",
      options: ["Freedom", "To build the railroad", "To escape famine", "To learn English"],
      category: "D: Colonial & Independence"
    },
    {
      question: "59. Who lived in America before the Europeans arrived?",
      correctAnswer: "Native Americans",
      options: ["Native Americans", "No one", "Pilgrims", "Colonists"],
      category: "D: Colonial & Independence"
    },
    {
      question: "60. What group of people was taken to America and sold as slaves?",
      correctAnswer: "Africans",
      options: ["Africans", "Europeans", "Native Americans", "Chinese"],
      category: "D: Colonial & Independence"
    },
    {
      question: "61. Why did the colonists fight the British?",
      correctAnswer: "Because of high taxes",
      options: ["Because of high taxes", "Because the British invaded", "To free the slaves", "To write the Constitution"],
      category: "D: Colonial & Independence"
    },
    {
      question: "62. Who wrote the Declaration of Independence?",
      correctAnswer: "Thomas Jefferson",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Benjamin Franklin"],
      category: "D: Colonial & Independence"
    },
    {
      question: "63. When was the Declaration of Independence adopted?",
      correctAnswer: "July 4, 1776",
      options: ["July 4, 1776", "July 4, 1789", "July 4, 1812", "July 4, 1865"],
      category: "D: Colonial & Independence"
    },
    {
      question: "64. There were 13 original states. Name three.",
      correctAnswer: "New York, Virginia, Massachusetts",
      options: ["New York, Virginia, Massachusetts", "California, Texas, Florida", "Ohio, Michigan, Indiana", "Washington, Oregon, Nevada"],
      category: "D: Colonial & Independence"
    },
    {
      question: "65. What happened at the Constitutional Convention?",
      correctAnswer: "The Constitution was written",
      options: ["The Constitution was written", "The Declaration of Independence was signed", "Washington became President", "The British surrendered"],
      category: "D: Colonial & Independence"
    },
    {
      question: "66. When was the Constitution written?",
      correctAnswer: "1787",
      options: ["1787", "1776", "1789", "1800"],
      category: "D: Colonial & Independence"
    },
    {
      question: "67. The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
      correctAnswer: "James Madison",
      options: ["James Madison", "Thomas Jefferson", "George Washington", "John Adams"],
      category: "D: Colonial & Independence"
    },
    {
      question: "68. What is one thing Benjamin Franklin is famous for?",
      correctAnswer: "U.S. diplomat",
      options: ["U.S. diplomat", "First President", "Wrote the Constitution", "Discovered electricity"],
      category: "D: Colonial & Independence"
    },
    {
      question: "69. Who is the 'Father of Our Country'?",
      correctAnswer: "George Washington",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
      category: "D: Colonial & Independence"
    },
    {
      question: "70. Who was the first President?",
      correctAnswer: "George Washington",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      category: "D: Colonial & Independence"
    },
    
    // B: 1800s
    {
      question: "71. What territory did the United States buy from France in 1803?",
      correctAnswer: "The Louisiana Territory",
      options: ["The Louisiana Territory", "Alaska", "Hawaii", "Texas"],
      category: "E: 1800s"
    },
    {
      question: "72. Name one war fought by the United States in the 1800s.",
      correctAnswer: "Civil War",
      options: ["Civil War", "World War I", "World War II", "Vietnam War"],
      category: "E: 1800s"
    },
    {
      question: "73. Name the U.S. war between the North and the South.",
      correctAnswer: "The Civil War",
      options: ["The Civil War", "The Revolutionary War", "World War I", "The War of 1812"],
      category: "E: 1800s"
    },
    {
      question: "74. Name one problem that led to the Civil War.",
      correctAnswer: "Slavery",
      options: ["Slavery", "Taxation", "Immigration", "Foreign invasion"],
      category: "E: 1800s"
    },
    {
      question: "75. What was one important thing that Abraham Lincoln did?",
      correctAnswer: "Freed the slaves (Emancipation Proclamation)",
      options: ["Freed the slaves (Emancipation Proclamation)", "Wrote the Constitution", "Declared independence from Britain", "Purchased Alaska"],
      category: "E: 1800s"
    },
    {
      question: "76. What did the Emancipation Proclamation do?",
      correctAnswer: "Freed the slaves",
      options: ["Freed the slaves", "Ended the Civil War", "Gave women the right to vote", "Gave citizenship to Native Americans"],
      category: "E: 1800s"
    },
    {
      question: "77. What did Susan B. Anthony do?",
      correctAnswer: "Fought for women's rights",
      options: ["Fought for women's rights", "First female member of Congress", "First female Supreme Court Justice", "Wrote the Declaration of Independence"],
      category: "E: 1800s"
    },
    
    // C: Recent American History
    {
      question: "78. Name one war fought by the United States in the 1900s.",
      correctAnswer: "World War I",
      options: ["World War I", "Civil War", "Revolutionary War", "French and Indian War"],
      category: "F: Recent History"
    },
    {
      question: "79. Who was President during World War I?",
      correctAnswer: "Woodrow Wilson",
      options: ["Woodrow Wilson", "Franklin Roosevelt", "Theodore Roosevelt", "Herbert Hoover"],
      category: "F: Recent History"
    },
    {
      question: "80. Who was President during the Great Depression and World War II?",
      correctAnswer: "Franklin Roosevelt",
      options: ["Franklin Roosevelt", "Herbert Hoover", "Harry Truman", "Dwight Eisenhower"],
      category: "F: Recent History"
    },
    {
      question: "81. Who did the United States fight in World War II?",
      correctAnswer: "Japan, Germany, and Italy",
      options: ["Japan, Germany, and Italy", "Soviet Union, China, and Cuba", "North Korea and Vietnam", "Spain and Mexico"],
      category: "F: Recent History"
    },
    {
      question: "82. Before he was President, Eisenhower was a general. What war was he in?",
      correctAnswer: "World War II",
      options: ["World War II", "World War I", "Korean War", "Vietnam War"],
      category: "F: Recent History"
    },
    {
      question: "83. During the Cold War, what was the main concern of the United States?",
      correctAnswer: "Communism",
      options: ["Communism", "Terrorism", "Nuclear weapons", "Economic depression"],
      category: "F: Recent History"
    },
    {
      question: "84. What movement tried to end racial discrimination?",
      correctAnswer: "Civil Rights movement",
      options: ["Civil Rights movement", "Women's Suffrage", "Labor movement", "Environmental movement"],
      category: "F: Recent History"
    },
    {
      question: "85. What did Martin Luther King, Jr. do?",
      correctAnswer: "Fought for civil rights",
      options: ["Fought for civil rights", "First African American President", "Freed the slaves", "First African American Supreme Court Justice"],
      category: "F: Recent History"
    },
    {
      question: "86. What major event happened on September 11, 2001, in the United States?",
      correctAnswer: "Terrorists attacked the United States",
      options: ["Terrorists attacked the United States", "The Iraq War began", "The first African American President was elected", "Hurricane Katrina hit New Orleans"],
      category: "F: Recent History"
    },
    {
      question: "87. Name one American Indian tribe in the United States.",
      correctAnswer: "Cherokee",
      options: ["Cherokee", "African", "Hispanic", "Asian"],
      category: "F: Recent History"
    },
    
    // INTEGRATED CIVICS
    // A: Geography
    {
      question: "88. Name one of the two longest rivers in the United States.",
      correctAnswer: "Mississippi River",
      options: ["Mississippi River", "Colorado River", "Ohio River", "Hudson River"],
      category: "G: Geography"
    },
    {
      question: "89. What ocean is on the West Coast of the United States?",
      correctAnswer: "Pacific Ocean",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      category: "G: Geography"
    },
    {
      question: "90. What ocean is on the East Coast of the United States?",
      correctAnswer: "Atlantic Ocean",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      category: "G: Geography"
    },
    {
      question: "91. Name one U.S. territory.",
      correctAnswer: "Puerto Rico",
      options: ["Puerto Rico", "Hawaii", "Alaska", "Cuba"],
      category: "G: Geography"
    },
    {
      question: "92. Name one state that borders Canada.",
      correctAnswer: "Maine",
      options: ["Maine", "California", "Texas", "Florida"],
      category: "G: Geography"
    },
    {
      question: "93. Name one state that borders Mexico.",
      correctAnswer: "California",
      options: ["California", "Florida", "Hawaii", "Oregon"],
      category: "G: Geography"
    },
    {
      question: "94. What is the capital of the United States?",
      correctAnswer: "Washington, D.C.",
      options: ["Washington, D.C.", "New York City", "Chicago", "Los Angeles"],
      category: "G: Geography"
    },
    {
      question: "95. Where is the Statue of Liberty?",
      correctAnswer: "New York Harbor",
      options: ["New York Harbor", "Washington, D.C.", "Boston", "Philadelphia"],
      category: "G: Geography"
    },
    
    // B: Symbols
    {
      question: "96. Why does the flag have 13 stripes?",
      correctAnswer: "Because there were 13 original colonies",
      options: ["Because there were 13 original colonies", "To represent the 13 branches of government", "Because there were 13 original states", "To honor the 13 founding fathers"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "97. Why does the flag have 50 stars?",
      correctAnswer: "Because there are 50 states",
      options: ["Because there are 50 states", "To represent 50 years of independence", "To honor the 50 founding fathers", "Because there are 50 amendments"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "98. What is the name of the national anthem?",
      correctAnswer: "The Star-Spangled Banner",
      options: ["The Star-Spangled Banner", "America the Beautiful", "God Bless America", "My Country 'Tis of Thee"],
      category: "H: Symbols & Holidays"
    },
    
    // C: Holidays
    {
      question: "99. When do we celebrate Independence Day?",
      correctAnswer: "July 4",
      options: ["July 4", "June 14", "December 25", "November 11"],
      category: "H: Symbols & Holidays"
    },
    {
      question: "100. Name two national U.S. holidays.",
      correctAnswer: "Thanksgiving and Independence Day",
      options: ["Thanksgiving and Independence Day", "Labor Day and Easter", "Halloween and Valentine's Day", "St. Patrick's Day and Mother's Day"],
      category: "H: Symbols & Holidays"
    }
  ];

  const categories = [
    "All", 
    "A: Principles of Democracy", 
    "B: System of Government", 
    "C: Rights and Responsibilities", 
    "D: Colonial & Independence", 
    "E: 1800s", 
    "F: Recent History", 
    "G: Geography", 
    "H: Symbols & Holidays"
  ];
  
  const filteredQuestions = categoryFilter === "All" 
    ? civicsQuestions 
    : civicsQuestions.filter(q => q.category === categoryFilter);

  const currentCard = filteredQuestions[currentCardIndex % filteredQuestions.length];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    const correct = option === currentCard.correctAnswer;
    setIsCorrect(correct);
    
    setTimeout(() => {
      if (correct) {
        setProgress(prev => Math.min(prev + 1, 100));
        nextCard();
      } else {
        setHearts(prev => Math.max(prev - 1, 0));
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1000);
  };

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const resetGame = () => {
    setCurrentCardIndex(0);
    setHearts(5);
    setProgress(1);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    setCurrentCardIndex(0);
    resetGame();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="text-gray-400 text-3xl">✕</div>
        <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex">
          {Array.from({ length: hearts }).map((_, i) => (
            <span key={i} className="text-red-500 text-xl">❤️</span>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-4 bg-white mb-4">
        <div className="flex overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
                categoryFilter === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {hearts > 0 ? (
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-center mb-4">{currentCard.question}</h2>
                <div className="space-y-3">
                  {currentCard.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-3 rounded-lg text-left transition ${
                        selectedAnswer === option
                          ? isCorrect
                            ? 'bg-green-100 border-green-500 border-2'
                            : 'bg-red-100 border-red-500 border-2'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
            <p className="mb-6">You've used all your hearts.</p>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CivicsFlashcardGame;