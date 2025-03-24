// Detailed explanations for civics questions
// References the USCIS Civics Textbook for content

// Official USCIS Civics Textbook URL
export const USCIS_TEXTBOOK_URL = "https://www.uscis.gov/sites/default/files/document/brochures/OOC_M-1175_CivicsTextbook_8.5x11_V7_RGB_English_508.pdf";

interface DetailedExplanation {
  questionId: string;
  correctAnswerExplanation: string;
  incorrectAnswerExplanations?: Record<string, string>; // Option -> explanation why it's wrong
  textbookPageReference?: number;
  category?: string; // To help organize explanations by category
}

// Map question text to detailed explanations
export const detailedExplanations: Record<string, DetailedExplanation> = {
  // A: PRINCIPLES OF AMERICAN DEMOCRACY
  "What is the supreme law of the land?": {
    questionId: "constitution-supreme-law",
    correctAnswerExplanation: "The Constitution is the supreme law of the United States because it establishes the framework of our government, defines the powers and limitations of each branch, and protects the fundamental rights of all citizens. All other laws, regulations, and government actions must comply with the Constitution. The Supremacy Clause in Article VI explicitly states that the Constitution and federal laws made under it are 'the supreme law of the land.'",
    incorrectAnswerExplanations: {
      "The Bill of Rights": "While the Bill of Rights consists of the first ten amendments to the Constitution and protects specific rights, it is part of the Constitution, not separate from it. The Constitution as a whole is the supreme law.",
      "Declaration of Independence": "While the Declaration of Independence is a founding document that announced our separation from Great Britain and outlined our ideals, it does not establish our system of government or have legal authority. The Constitution, not the Declaration, serves as the basis for our legal system.",
      "Federal Laws": "Federal laws must conform to the Constitution, not the other way around. The Constitution is the supreme law that authorizes and limits the power of Congress to make federal laws."
    },
    textbookPageReference: 2,
    category: "Principles of American Democracy"
  },
  
  "What does the Constitution do?": {
    questionId: "constitution-purpose",
    correctAnswerExplanation: "The Constitution establishes our system of government with three co-equal branches (legislative, executive, and judicial), each with specific powers and limitations. It creates a federal system dividing power between national and state governments, establishes procedures for amending the document, and protects fundamental rights through the Bill of Rights and subsequent amendments. This framework has provided stability while allowing for change through amendments and interpretation.",
    incorrectAnswerExplanations: {
      "Declares independence": "The Declaration of Independence (1776), not the Constitution (1787), declared our independence from Great Britain.",
      "Defines state borders": "The Constitution does not define state borders. These were established through various treaties, agreements, and congressional acts throughout U.S. history.",
      "Creates political parties": "The Constitution makes no mention of political parties. In fact, many of the Founding Fathers warned against 'factions.' Political parties developed organically outside the constitutional framework."
    },
    textbookPageReference: 3,
    category: "Principles of American Democracy"
  },
  
  "The idea of self-government is in the first three words of the Constitution. What are these words?": {
    questionId: "constitution-first-words",
    correctAnswerExplanation: "\"We the People\" are the first three words of the Constitution's Preamble. This phrase is significant because it establishes that the authority of the government comes from the people themselves, not from a monarch or ruling class. It emphasizes that the Constitution was created by and for the American people, establishing a government based on popular sovereignty - the principle that governmental power is derived from the consent of the governed.",
    incorrectAnswerExplanations: {
      "Life and Liberty": "While 'life' and 'liberty' are important concepts in American governance, they appear in the Declaration of Independence ('life, liberty, and the pursuit of happiness'), not as the opening words of the Constitution.",
      "United States Constitution": "This is the title of the document, not the opening words of the text itself. The Constitution begins with 'We the People.'",
      "In Congress Assembled": "This phrase was used in the Articles of Confederation, not the Constitution. The Constitution begins with 'We the People.'"
    },
    textbookPageReference: 4,
    category: "Principles of American Democracy"
  },
  
  "What is an amendment?": {
    questionId: "amendment-definition",
    correctAnswerExplanation: "An amendment is a change or addition to the Constitution. The Founding Fathers created a process for amending the Constitution in Article V, recognizing that the document would need to evolve over time. The amendment process is intentionally difficult, requiring a proposal to be passed by two-thirds of both houses of Congress and then ratified by three-fourths of the states. This ensures that only changes with broad national support become part of our fundamental law.",
    incorrectAnswerExplanations: {
      "A government law": "While amendments become part of our law once ratified, they are specifically changes to the Constitution, not ordinary laws. Regular laws can be passed by a simple majority in Congress and signed by the President, while amendments require a much more rigorous process.",
      "A judicial decision": "Judicial decisions interpret the Constitution but do not change its text. Only the amendment process outlined in Article V can actually change the Constitution.",
      "A presidential order": "Presidents can issue executive orders to direct the operations of the federal government, but they cannot change the Constitution. Only the amendment process can do that."
    },
    textbookPageReference: 6,
    category: "Principles of American Democracy"
  },
  
  "What do we call the first ten amendments to the Constitution?": {
    questionId: "bill-of-rights",
    correctAnswerExplanation: "The first ten amendments to the Constitution are collectively called the Bill of Rights. They were proposed in 1789 and ratified in 1791 to address concerns that the original Constitution did not adequately protect individual liberties from government power. These amendments protect fundamental rights such as freedom of speech, religion, and the press; the right to bear arms; protection from unreasonable searches and seizures; and rights of the accused in criminal proceedings, among others.",
    incorrectAnswerExplanations: {
      "The Declaration of Rights": "While this term is sometimes used generically, the official name for the first ten amendments to the U.S. Constitution is the Bill of Rights, not the Declaration of Rights.",
      "The Articles of Freedom": "This is not the correct term. The first ten amendments are officially called the Bill of Rights.",
      "The Constitutional Amendments": "While the first ten amendments are indeed constitutional amendments, the specific collective name for these particular amendments is the Bill of Rights."
    },
    textbookPageReference: 7,
    category: "Principles of American Democracy"
  },
  
  "What is one right or freedom from the First Amendment?": {
    questionId: "first-amendment-rights",
    correctAnswerExplanation: "Freedom of speech is one of the five fundamental freedoms protected by the First Amendment. The First Amendment states: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.' These freedoms are essential to democratic government, allowing citizens to express opinions, practice their faith, access information, gather together, and ask the government to address problems.",
    incorrectAnswerExplanations: {
      "Right to bear arms": "The right to bear arms is protected by the Second Amendment, not the First Amendment.",
      "Right to a fair trial": "The right to a fair trial is primarily protected by the Sixth Amendment, which guarantees the right to a speedy and public trial by an impartial jury, along with other rights in criminal proceedings.",
      "Freedom from unreasonable searches": "Protection from unreasonable searches and seizures is guaranteed by the Fourth Amendment, not the First Amendment."
    },
    textbookPageReference: 8,
    category: "Principles of American Democracy"
  },
  
  "How many amendments does the Constitution have?": {
    questionId: "constitution-amendments-count",
    correctAnswerExplanation: "The Constitution has 27 amendments. The first ten amendments, known as the Bill of Rights, were ratified in 1791 and protect fundamental rights and liberties. The remaining 17 amendments address various issues including voting rights, presidential succession, and other changes to our system of government. The most recent amendment (the 27th) was ratified in 1992, though it was originally proposed in 1789 as part of the original Bill of Rights.",
    incorrectAnswerExplanations: {
      "10": "There are 10 amendments in the Bill of Rights, which are the first ten amendments to the Constitution, but there are 27 amendments in total.",
      "25": "While the 25th Amendment (regarding presidential succession) is notable, there are 27 total amendments to the Constitution, not 25.",
      "50": "The Constitution has 27 amendments, not 50. You may be confusing this with the 50 states."
    },
    textbookPageReference: 7,
    category: "Principles of American Democracy"
  },
  
  "What did the Declaration of Independence do?": {
    questionId: "declaration-independence-purpose",
    correctAnswerExplanation: "The Declaration of Independence, adopted on July 4, 1776, formally announced the colonies' separation from Great Britain and explained the reasons for this decision. Written primarily by Thomas Jefferson, it outlined the philosophical principles of self-government, stating that 'all men are created equal' with 'unalienable rights' including 'life, liberty, and the pursuit of happiness.' It also listed grievances against King George III to justify the break from British rule. While it did not establish our government structure (the Constitution did that later), it marked the birth of the United States as an independent nation.",
    incorrectAnswerExplanations: {
      "Freed the slaves": "The Declaration of Independence did not free the slaves. Slavery continued in the United States until the Emancipation Proclamation (1863) and the 13th Amendment (1865).",
      "Gave women the right to vote": "The Declaration of Independence did not address voting rights for women. Women gained the right to vote through the 19th Amendment, ratified in 1920.",
      "Created the United States": "While the Declaration announced the colonies' intention to form a new nation, the actual governmental structure of the United States was established later by the Articles of Confederation (1781) and then more permanently by the Constitution (1789)."
    },
    textbookPageReference: 40,
    category: "Principles of American Democracy"
  },
  
  "What are two rights in the Declaration of Independence?": {
    questionId: "declaration-rights",
    correctAnswerExplanation: "The Declaration of Independence states that all people have certain 'unalienable rights,' and specifically mentions 'Life, Liberty, and the pursuit of Happiness' as examples. These natural rights were considered self-evident truths that governments should protect rather than violate. While not legally binding like constitutional rights, these principles have profoundly influenced American political thought and have been invoked throughout our history in struggles for equality and justice.",
    incorrectAnswerExplanations: {
      "Speech and religion": "While freedom of speech and religion are fundamental American rights, they are explicitly protected by the First Amendment to the Constitution, not the Declaration of Independence.",
      "Bear arms and fair trial": "The right to bear arms is in the Second Amendment, and the right to a fair trial comes from the Sixth Amendment to the Constitution, not the Declaration of Independence.",
      "Voting and education": "Neither voting rights nor education rights are mentioned in the Declaration of Independence. Various constitutional amendments address voting rights."
    },
    textbookPageReference: 41,
    category: "Principles of American Democracy"
  },
  
  "What is freedom of religion?": {
    questionId: "freedom-religion",
    correctAnswerExplanation: "Freedom of religion means that you can practice any religion you choose, or no religion at all, without government interference. The First Amendment protects this freedom through two clauses: the Establishment Clause, which prohibits the government from establishing an official religion or favoring one religion over others; and the Free Exercise Clause, which protects your right to practice your religious beliefs. This fundamental freedom was especially important to the founders, many of whom had fled religious persecution in Europe.",
    incorrectAnswerExplanations: {
      "You must belong to a church": "This is the opposite of religious freedom. The First Amendment protects your right to practice any religion or no religion at all.",
      "You can only practice certain religions": "This would be religious discrimination, not freedom. The First Amendment protects all religious practices (with very narrow exceptions for practices that would violate other laws).",
      "Freedom to change religions once a year": "Religious freedom has no time restrictions. You can change your religious beliefs or practices at any time, as often as you wish."
    },
    textbookPageReference: 9,
    category: "Principles of American Democracy"
  },
  
  "What is the economic system in the United States?": {
    questionId: "economic-system",
    correctAnswerExplanation: "The United States has a capitalist economy, also known as a free market or free enterprise system. In this system, individuals and businesses, not the government, own most of the resources and means of production. People are free to make their own economic decisions, such as what jobs to take, what to buy, and how to invest their money. Competition among businesses is encouraged, and prices are generally determined by supply and demand rather than government controls. While the U.S. does have some government regulation and social programs, the foundation of the economy remains capitalist.",
    incorrectAnswerExplanations: {
      "Socialist economy": "In a socialist economy, the government owns or controls many of the means of production and makes major economic decisions. The U.S. has some social programs but is fundamentally a capitalist system where private ownership and free markets predominate.",
      "Communist economy": "Communism involves government ownership of virtually all economic resources with central planning of the economy. The U.S. economic system is based on private ownership and free markets, not government control.",
      "Mixed economy": "While the U.S. does have some elements of a mixed economy with both private enterprise and government involvement, it is predominantly capitalist and is correctly classified as a capitalist economy."
    },
    textbookPageReference: 11,
    category: "Principles of American Democracy"
  },
  
  "What is the 'rule of law'?": {
    questionId: "rule-of-law",
    correctAnswerExplanation: "The 'rule of law' means that everyone must follow the law, including citizens, government leaders, and government institutions. No one is above the law. This principle is fundamental to American democracy and distinguishes it from authoritarian systems where rulers may act with impunity. The rule of law ensures that laws are applied equally and fairly to all people, that due process is followed, and that government power is limited by law. It provides stability and predictability in society and protects individual rights from arbitrary government action.",
    incorrectAnswerExplanations: {
      "The President makes all laws": "This is incorrect. Under the U.S. Constitution, Congress (not the President) makes laws. The President can sign or veto legislation but cannot unilaterally create laws. This separation of powers is part of the rule of law.",
      "Laws that govern rulers": "While the rule of law does mean that government officials must follow the law, it applies to everyone in society, not just rulers.",
      "Laws made by judges": "Judges interpret laws but generally do not make them (though judicial precedent does shape how laws are applied). In our system, laws are primarily made by elected legislators, not appointed judges."
    },
    textbookPageReference: 4,
    category: "Principles of American Democracy"
  },
  
  "What are the three branches of government?": {
    questionId: "three-branches",
    correctAnswerExplanation: "The three branches of the U.S. government are Legislative (Congress), Executive (President), and Judicial (Supreme Court). This separation of powers was designed by the Framers to prevent any single branch from becoming too powerful. Each branch has specific powers and responsibilities: Congress makes laws, the President enforces laws, and the Supreme Court interprets laws. The system of checks and balances allows each branch to limit the powers of the others, creating a balanced government that protects against tyranny.",
    incorrectAnswerExplanations: {
      "Executive, Military, Judicial": "While the Executive and Judicial branches are correct, the Military is not a separate branch of government. The Military falls under the Executive branch, with the President serving as Commander-in-Chief. The third branch is Legislative (Congress).",
      "Federal, State, Local": "These are levels of government, not branches. The three branches at the federal level are Legislative, Executive, and Judicial.",
      "Democratic, Republican, Independent": "These are political parties, not branches of government. The three branches established by the Constitution are Legislative, Executive, and Judicial."
    },
    textbookPageReference: 12,
    category: "System of Government"
  },
  
  "Name one branch or part of the government.": {
    questionId: "government-branch",
    correctAnswerExplanation: "The Legislative branch (Congress) is one of the three branches of the U.S. federal government. The Legislative branch makes laws and consists of the Senate and the House of Representatives. The Constitution grants Congress various powers, including the authority to levy taxes, declare war, regulate commerce, and establish federal courts. The separation of powers between the three branches (Legislative, Executive, and Judicial) is a fundamental principle of American government designed to prevent any single branch from becoming too powerful.",
    incorrectAnswerExplanations: {
      "Department of Education": "The Department of Education is a cabinet-level department within the Executive branch, not a branch of government itself. The three branches are Legislative, Executive, and Judicial.",
      "Federal Bureau of Investigation": "The FBI is an agency within the Department of Justice, which is part of the Executive branch. It is not one of the three branches of government.",
      "United Nations": "The United Nations is an international organization, not a branch or part of the U.S. government."
    },
    textbookPageReference: 12,
    category: "System of Government"
  },
  
  "What stops one branch of government from becoming too powerful?": {
    questionId: "checks-balances",
    correctAnswerExplanation: "Checks and balances is the system that allows each branch of government to limit the powers of the other branches. This prevents any one branch from becoming too powerful. For example, the President can veto laws passed by Congress, but Congress can override a veto with a two-thirds vote. The Supreme Court can declare laws unconstitutional, but the President nominates Supreme Court justices with Senate approval. This intricate system of shared powers and oversight was designed by the Framers to prevent tyranny and protect liberty.",
    incorrectAnswerExplanations: {
      "The President": "The President alone does not stop other branches from becoming too powerful. In fact, the President is subject to checks from the other branches, such as congressional oversight and judicial review.",
      "The Supreme Court": "While the Supreme Court can declare laws unconstitutional, it is itself subject to checks from the other branches. The entire system of checks and balances, not just one institution, prevents the concentration of power.",
      "The United Nations": "The United Nations has no authority over the internal governance of the United States. The U.S. Constitution, not international organizations, establishes our system of checks and balances."
    },
    textbookPageReference: 13,
    category: "System of Government"
  },
  
  "Who is in charge of the executive branch?": {
    questionId: "executive-branch-head",
    correctAnswerExplanation: "The President of the United States is in charge of the executive branch. As Chief Executive, the President is responsible for enforcing and implementing the laws written by Congress. The President serves as Commander-in-Chief of the armed forces, conducts diplomacy with other nations, appoints federal officials (with Senate confirmation), and can veto legislation. The executive branch includes the Vice President, the Cabinet, and numerous federal agencies and departments that carry out the daily operations of the government.",
    incorrectAnswerExplanations: {
      "The Chief Justice": "The Chief Justice leads the Supreme Court and the judicial branch, not the executive branch.",
      "The Speaker of the House": "The Speaker of the House is the leader of the House of Representatives, which is part of the legislative branch, not the executive branch.",
      "The Senate Majority Leader": "The Senate Majority Leader is a key figure in the Senate, which is part of the legislative branch, not the executive branch."
    },
    textbookPageReference: 14,
    category: "System of Government"
  },
  
  "Who makes federal laws?": {
    questionId: "federal-lawmaking",
    correctAnswerExplanation: "Congress makes federal laws. Congress is the legislative branch of the U.S. government and consists of two chambers: the Senate and the House of Representatives. Bills can originate in either chamber (except revenue bills, which must start in the House). For a bill to become law, it must pass both chambers of Congress and then be signed by the President. If the President vetoes a bill, Congress can override the veto with a two-thirds majority vote in both chambers. This process of lawmaking is outlined in Article I of the Constitution.",
    incorrectAnswerExplanations: {
      "The President": "While the President can propose legislation and must sign bills for them to become law (or Congress must override a veto), the President does not make laws. The legislative power is vested in Congress.",
      "The Supreme Court": "The Supreme Court interprets laws and can declare them unconstitutional, but it does not make laws. The Court's role is to apply the law, not create it.",
      "State Governors": "State governors have authority at the state level, but they do not make federal laws. Federal laws are made by Congress."
    },
    textbookPageReference: 15,
    category: "System of Government"
  },
  
  "What are the two parts of the U.S. Congress?": {
    questionId: "congress-parts",
    correctAnswerExplanation: "The two parts of the U.S. Congress are the Senate and the House of Representatives. The Senate has 100 members (two from each state) who serve six-year terms. The House has 435 voting members apportioned among the states based on population, serving two-year terms. This bicameral (two-chamber) structure was created as a compromise at the Constitutional Convention, with the Senate providing equal representation for states and the House providing representation based on population.",
    incorrectAnswerExplanations: {
      "The House and the Cabinet": "While the House of Representatives is one chamber of Congress, the Cabinet is part of the executive branch, not the legislative branch. The two parts of Congress are the Senate and the House of Representatives.",
      "The President and Vice President": "The President and Vice President are part of the executive branch, not the legislative branch. They are not parts of Congress.",
      "Democrats and Republicans": "Democrats and Republicans are political parties, not structural components of Congress. Regardless of which parties hold majorities, Congress always consists of the Senate and the House of Representatives."
    },
    textbookPageReference: 15,
    category: "System of Government"
  },
  
  "How many U.S. Senators are there?": {
    questionId: "senator-count",
    correctAnswerExplanation: "There are 100 U.S. Senators. Each state has two Senators, regardless of the state's population. This equal representation was established to ensure that smaller states would have an equal voice in at least one chamber of Congress. Senators serve six-year terms, with approximately one-third of the Senate up for election every two years. This staggered election system was designed to provide stability and continuity in the upper chamber of Congress.",
    incorrectAnswerExplanations: {
      "50": "There are 50 states, but each state has two Senators, for a total of 100 Senators.",
      "435": "435 is the number of voting members in the House of Representatives, not the number of Senators.",
      "538": "538 is the total number of electoral votes in presidential elections (435 Representatives + 100 Senators + 3 for D.C.), not the number of Senators."
    },
    textbookPageReference: 16,
    category: "System of Government"
  },
  
  "We elect a U.S. Senator for how many years?": {
    questionId: "senator-term",
    correctAnswerExplanation: "U.S. Senators are elected for six-year terms. The Constitution established this longer term (compared to the two-year terms for Representatives) to make the Senate a more deliberative body less subject to rapid shifts in public opinion. Elections for Senate seats are staggered so that approximately one-third of the Senate is up for election every two years. This system ensures both continuity and regular democratic accountability in the upper chamber of Congress.",
    incorrectAnswerExplanations: {
      "2": "Representatives in the House serve two-year terms, but Senators serve six-year terms.",
      "4": "The President serves a four-year term, but Senators serve six-year terms.",
      "8": "No federal elected official serves an eight-year term. Senators serve six-year terms, though they can be re-elected multiple times."
    },
    textbookPageReference: 16,
    category: "System of Government"
  },
  
  "The House of Representatives has how many voting members?": {
    questionId: "house-members",
    correctAnswerExplanation: "The House of Representatives has 435 voting members. This number has been fixed by law since 1929, though it was temporarily increased to 437 when Alaska and Hawaii became states. Representatives are apportioned among the states based on population, with each state guaranteed at least one Representative. After each decennial census, the distribution of Representatives among the states may change to reflect population shifts, though the total remains 435. Representatives serve two-year terms, with the entire House up for election every even-numbered year.",
    incorrectAnswerExplanations: {
      "100": "100 is the number of Senators (two from each of the 50 states), not the number of Representatives.",
      "50": "50 is the number of states, not the number of Representatives. Each state has at least one Representative, with additional seats apportioned based on population.",
      "538": "538 is the total number of electoral votes in presidential elections (435 Representatives + 100 Senators + 3 for D.C.), not the number of Representatives."
    },
    textbookPageReference: 17,
    category: "System of Government"
  },
  
  "We elect a U.S. Representative for how many years?": {
    questionId: "representative-term",
    correctAnswerExplanation: "U.S. Representatives are elected for two-year terms. The Framers of the Constitution designed the House to be more directly responsive to public opinion than the Senate, which is why Representatives face election every two years while Senators serve six-year terms. All 435 seats in the House are up for election every even-numbered year. This frequent election cycle helps ensure that the House reflects current public sentiment, though it also means that Representatives must constantly prepare for re-election campaigns.",
    incorrectAnswerExplanations: {
      "4": "The President serves a four-year term, but Representatives serve two-year terms.",
      "6": "Senators serve six-year terms, but Representatives serve two-year terms.",
      "8": "No federal elected official serves an eight-year term. Representatives serve two-year terms."
    },
    textbookPageReference: 17,
    category: "System of Government"
  },
  
  "Who does a U.S. Senator represent?": {
    questionId: "senator-representation",
    correctAnswerExplanation: "A U.S. Senator represents all people of their state. Once elected, a Senator's constitutional duty is to represent the interests of all residents of their state, not just those who voted for them or belong to their political party. Each state has two Senators regardless of population, ensuring equal representation for all states in the Senate. This system was established as part of the Great Compromise at the Constitutional Convention to balance the interests of large and small states in the new government.",
    incorrectAnswerExplanations: {
      "Only those who voted for them": "While Senators are elected by voters, once in office, they have a constitutional duty to represent all people in their state, not just those who voted for them.",
      "Only their political party": "Senators may belong to political parties, but their official role is to represent all constituents in their state, regardless of party affiliation.",
      "The President": "Senators are part of the legislative branch and represent their states, not the President. In fact, the separation of powers means that Senators often serve as a check on presidential power."
    },
    textbookPageReference: 16,
    category: "System of Government"
  },
  
  "Why do some states have more Representatives than other states?": {
    questionId: "representative-apportionment",
    correctAnswerExplanation: "States have different numbers of Representatives because House seats are apportioned based on state population. After each decennial census, the 435 House seats are redistributed among the states according to their share of the total U.S. population. States with larger populations receive more Representatives, while less populous states receive fewer (though each state is guaranteed at least one Representative). This population-based representation in the House balances the equal representation of states in the Senate, fulfilling the Great Compromise reached at the Constitutional Convention.",
    incorrectAnswerExplanations: {
      "Because of the state's size": "While larger states often have more people, it's specifically the population count, not the geographic size, that determines representation. Alaska is the largest state by area but has only one Representative due to its small population.",
      "Because of the state's age": "The age of a state (when it joined the Union) does not affect its representation in the House. Representation is based on current population, not historical factors.",
      "Because of the state's wealth": "A state's wealth or economic output does not determine its representation in Congress. The Constitution specifies that representation is based on population, not economic factors."
    },
    textbookPageReference: 17,
    category: "System of Government"
  },
  
  "We elect a President for how many years?": {
    questionId: "president-term",
    correctAnswerExplanation: "The President of the United States is elected for a four-year term. This term length was established by the Constitution and has remained unchanged since the founding of the republic. The 22nd Amendment, ratified in 1951, limits Presidents to two elected terms (or a maximum of 10 years if they assumed office following the death or resignation of a predecessor). Before this amendment, the two-term limit was a tradition established by George Washington but not a legal requirement.",
    incorrectAnswerExplanations: {
      "2": "Representatives serve two-year terms, but the President serves a four-year term.",
      "6": "Senators serve six-year terms, but the President serves a four-year term.",
      "8": "While a President can serve up to eight years (two four-year terms) under the 22nd Amendment, each individual term is four years."
    },
    textbookPageReference: 18,
    category: "System of Government"
  },
  
  "In what month do we vote for President?": {
    questionId: "presidential-election-month",
    correctAnswerExplanation: "Presidential elections are held in November. Specifically, they occur on the Tuesday after the first Monday in November of years divisible by four (e.g., 2020, 2024). This date was established by an 1845 federal law. The November timing was chosen because the harvest would be complete but winter weather would not yet make travel difficult in most of the country. The Tuesday timing allowed voters to travel on Monday (after Sunday religious observances) to reach polling places.",
    incorrectAnswerExplanations: {
      "January": "January is when the President is inaugurated (specifically January 20th since the 20th Amendment), not when elections are held.",
      "October": "While some early voting may begin in October, the official Election Day for President is in November.",
      "December": "December is when the Electoral College officially votes (the Monday after the second Wednesday in December), not when the general public votes."
    },
    textbookPageReference: 18,
    category: "System of Government"
  },
  
  "If the President can no longer serve, who becomes President?": {
    questionId: "presidential-succession",
    correctAnswerExplanation: "If the President can no longer serve, the Vice President becomes President. This line of succession is established in the Constitution and was clarified by the 25th Amendment (ratified in 1967). The Vice President is first in the line of succession and assumes the presidency immediately upon the death, resignation, or removal from office of the President. This has happened nine times in U.S. history: eight times due to the death of the President and once due to resignation (Nixon in 1974).",
    incorrectAnswerExplanations: {
      "The Speaker of the House": "The Speaker of the House is second in the line of succession after the Vice President, not first. The Vice President becomes President if the President can no longer serve.",
      "The Secretary of State": "The Secretary of State is in the line of succession, but only after the Vice President, Speaker of the House, and President Pro Tempore of the Senate.",
      "The Chief Justice": "The Chief Justice of the Supreme Court is not in the presidential line of succession at all. The judiciary is kept separate from the executive succession process."
    },
    textbookPageReference: 19,
    category: "System of Government"
  },
  
  "If both the President and the Vice President can no longer serve, who becomes President?": {
    questionId: "presidential-succession-extended",
    correctAnswerExplanation: "If both the President and Vice President can no longer serve, the Speaker of the House becomes President. This line of succession is established by the Presidential Succession Act of 1947. After the Speaker, the line continues with the President Pro Tempore of the Senate, followed by Cabinet secretaries in order of their department's creation (starting with the Secretary of State). This extended line of succession has never been needed beyond the Vice President in U.S. history, but it ensures continuity of government in case of a catastrophic event.",
    incorrectAnswerExplanations: {
      "The Secretary of State": "While the Secretary of State is in the line of succession, they would only become President if the President, Vice President, Speaker of the House, and President Pro Tempore of the Senate were all unable to serve.",
      "The Chief Justice": "The Chief Justice of the Supreme Court is not in the presidential line of succession at all. The judiciary is kept separate from the executive succession process.",
      "The Senate Majority Leader": "The Senate Majority Leader is not specifically named in the line of succession. The President Pro Tempore of the Senate (usually the most senior member of the majority party) is third in line, after the Vice President and Speaker of the House."
    },
    textbookPageReference: 19,
    category: "System of Government"
  },
  
  "Who is the Commander in Chief of the military?": {
    questionId: "commander-in-chief",
    correctAnswerExplanation: "The President of the United States is the Commander in Chief of the military. This civilian control of the military is established in Article II, Section 2 of the Constitution, which states that 'The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States.' This authority gives the President ultimate command over all U.S. military forces, ensuring that the military remains under civilian control and accountable to democratically elected leadership.",
    incorrectAnswerExplanations: {
      "The Secretary of Defense": "The Secretary of Defense is the principal defense policy advisor to the President and oversees the Department of Defense, but the President is the Commander in Chief with ultimate authority over the military.",
      "The Joint Chiefs of Staff": "The Joint Chiefs of Staff serve as military advisors to the President, Secretary of Defense, and National Security Council, but they are not in the chain of command and do not have command authority. The President is the Commander in Chief.",
      "The Vice President": "The Vice President has no constitutional authority over the military unless the President dies, resigns, or is removed from office. Only the President is Commander in Chief."
    },
    textbookPageReference: 20,
    category: "System of Government"
  },
  
  "Who signs bills to become laws?": {
    questionId: "bill-signing",
    correctAnswerExplanation: "The President signs bills to become laws. After a bill passes both chambers of Congress (the House of Representatives and the Senate), it goes to the President for consideration. The President has three options: sign the bill into law, veto it and return it to Congress with objections, or take no action. If the President takes no action for ten days while Congress is in session, the bill automatically becomes law. If Congress adjourns before the ten days expire and the President takes no action, the bill does not become law (known as a 'pocket veto').",
    incorrectAnswerExplanations: {
      "The Vice President": "The Vice President has no constitutional role in signing bills into law. This power belongs exclusively to the President.",
      "The Speaker of the House": "While the Speaker of the House is an important figure in passing legislation through the House of Representatives, they do not sign bills to make them law. That is the President's role.",
      "The Chief Justice": "The Chief Justice interprets laws in Supreme Court cases but has no role in the legislative process of creating laws. The President signs bills to make them law."
    },
    textbookPageReference: 21,
    category: "System of Government"
  },
  
  "Who vetoes bills?": {
    questionId: "veto-power",
    correctAnswerExplanation: "The President has the power to veto bills. When Congress passes a bill, the President can reject it by refusing to sign it and returning it to Congress with objections (a regular veto) or by taking no action while Congress is adjourned (a pocket veto). This veto power is an important check on the legislative branch. However, Congress can override a regular veto with a two-thirds majority vote in both chambers, demonstrating the system of checks and balances. The pocket veto cannot be overridden because Congress is not in session to reconsider the bill.",
    incorrectAnswerExplanations: {
      "The Vice President": "The Vice President has no constitutional authority to veto legislation. The veto power belongs exclusively to the President.",
      "The Senate Majority Leader": "While the Senate Majority Leader has significant influence over what legislation comes to a vote in the Senate, they cannot veto bills that have passed Congress. Only the President has veto power.",
      "The Chief Justice": "The Chief Justice and the Supreme Court can declare laws unconstitutional after they have been enacted, but they cannot veto bills during the legislative process. Only the President has veto power."
    },
    textbookPageReference: 21,
    category: "System of Government"
  },
  
  "What does the President's Cabinet do?": {
    questionId: "cabinet-role",
    correctAnswerExplanation: "The President's Cabinet advises the President on important policy matters. Cabinet members are the heads of the executive departments (such as State, Defense, Treasury, and Justice) and are nominated by the President and confirmed by the Senate. They serve at the President's pleasure and can be removed at any time. While not explicitly mentioned in the Constitution, the Cabinet has evolved as an important institution that helps the President make decisions and implement policies across the vast federal bureaucracy. Cabinet members also lead their respective departments in carrying out federal laws and policies.",
    incorrectAnswerExplanations: {
      "Makes laws": "The Cabinet does not make laws; that is the role of Congress (the legislative branch). The Cabinet advises the President and helps implement laws.",
      "Approves Supreme Court Justices": "The Senate, not the Cabinet, confirms Supreme Court Justices after they are nominated by the President.",
      "Controls the budget": "While Cabinet secretaries oversee their departments' budgets, the overall federal budget is proposed by the President and approved by Congress. The Cabinet itself does not control the budget."
    },
    textbookPageReference: 22,
    category: "System of Government"
  },
  
  "What are two Cabinet-level positions?": {
    questionId: "cabinet-positions",
    correctAnswerExplanation: "The Secretary of State and Secretary of Defense are two Cabinet-level positions. The Secretary of State is the President's chief foreign affairs adviser and leads the State Department, which conducts U.S. diplomacy. The Secretary of Defense oversees the Department of Defense and serves as the principal defense policy advisor to the President. Other Cabinet positions include the Secretaries of Treasury, Justice (the Attorney General), Interior, Agriculture, Commerce, Labor, Health and Human Services, Housing and Urban Development, Transportation, Energy, Education, Veterans Affairs, and Homeland Security.",
    incorrectAnswerExplanations: {
      "Speaker of the House and Senate Majority Leader": "These are congressional leadership positions in the legislative branch, not Cabinet positions in the executive branch.",
      "Chief Justice and Attorney General": "While the Attorney General (head of the Justice Department) is a Cabinet member, the Chief Justice leads the judicial branch and is not part of the Cabinet.",
      "Treasury Secretary and Vice President": "The Treasury Secretary is indeed a Cabinet member, but the Vice President is not technically a Cabinet member, though they often attend Cabinet meetings. The Vice President is an elected official, while Cabinet members are appointed."
    },
    textbookPageReference: 22,
    category: "System of Government"
  },
  
  "What does the judicial branch do?": {
    questionId: "judicial-branch-role",
    correctAnswerExplanation: "The judicial branch reviews laws to ensure they comply with the Constitution. This power, known as judicial review, was established in the landmark case Marbury v. Madison (1803). The federal court system, headed by the Supreme Court, also resolves disputes between parties, interprets federal laws, and ensures that the other branches of government act within their constitutional limits. Federal judges and Supreme Court justices are appointed by the President, confirmed by the Senate, and serve lifetime appointments to ensure their independence from political pressure.",
    incorrectAnswerExplanations: {
      "Makes laws": "The legislative branch (Congress), not the judicial branch, makes laws. The judicial branch interprets and applies laws but does not create them.",
      "Declares war": "Only Congress has the constitutional authority to declare war, though the President, as Commander in Chief, directs military operations.",
      "Approves the budget": "The budget process involves the President (who proposes a budget) and Congress (which passes appropriations bills). The judicial branch has no role in approving the federal budget."
    },
    textbookPageReference: 23,
    category: "System of Government"
  },
  
  "What is the highest court in the United States?": {
    questionId: "highest-court",
    correctAnswerExplanation: "The Supreme Court is the highest court in the United States. Established by Article III of the Constitution, it is the final interpreter of federal constitutional law and the head of the judicial branch. The Court consists of nine justices who are nominated by the President and confirmed by the Senate. They serve lifetime appointments to ensure judicial independence. The Supreme Court has the power to review decisions made by lower federal courts and state supreme courts on federal matters, and its interpretations of the Constitution and federal law are binding throughout the country.",
    incorrectAnswerExplanations: {
      "The Federal Court": "This is a general term that could refer to any federal court, not specifically the highest court. The Supreme Court is the highest federal court.",
      "The District Court": "District Courts are the general trial courts of the federal system and are at the lowest level of the federal court hierarchy, not the highest.",
      "The Court of Appeals": "Courts of Appeals (also called Circuit Courts) review decisions from District Courts but are below the Supreme Court in the federal judicial hierarchy."
    },
    textbookPageReference: 23,
    category: "System of Government"
  },
  
  "How many justices are on the Supreme Court?": {
    questionId: "supreme-court-justices",
    correctAnswerExplanation: "There are nine justices on the Supreme Court. This number is not specified in the Constitution but has been set by Congress since 1869. The Court consists of the Chief Justice of the United States and eight Associate Justices. All are nominated by the President and must be confirmed by the Senate. They serve lifetime appointments, which helps insulate them from political pressure and ensures judicial independence. The Court typically hears cases as a full body, with decisions made by majority vote.",
    incorrectAnswerExplanations: {
      "7": "The Supreme Court had seven justices at various points in its early history, but it has had nine justices since 1869.",
      "12": "The Supreme Court has never had 12 justices. It has had nine justices since 1869.",
      "15": "The Supreme Court has never had 15 justices. It has had nine justices since 1869."
    },
    textbookPageReference: 24,
    category: "System of Government"
  },
  
  "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?": {
    questionId: "federal-government-power",
    correctAnswerExplanation: "The power to print money is one of the enumerated powers granted to the federal government by the Constitution. Article I, Section 8 gives Congress the power 'To coin Money, regulate the Value thereof, and of foreign Coin.' This exclusive federal authority ensures a uniform currency throughout the nation. Other federal powers include declaring war, creating an army and navy, making treaties, regulating interstate and foreign commerce, establishing post offices, and creating immigration laws. These powers are reserved for the federal government to maintain national unity and address matters of national concern.",
    incorrectAnswerExplanations: {
      "To issue driver's licenses": "Issuing driver's licenses is a state power, not a federal power. Each state has its own department of motor vehicles or similar agency that handles driver licensing.",
      "To provide schooling": "Education is primarily a state and local responsibility, not a federal one. While the federal government provides some funding and guidelines, the actual provision of public education is controlled at the state and local levels.",
      "To create local laws": "Creating local laws is the responsibility of state and local governments. The federal government creates national laws that apply across all states but does not directly create laws for specific localities."
    },
    textbookPageReference: 25,
    category: "System of Government"
  },
  
  "Under our Constitution, some powers belong to the states. What is one power of the states?": {
    questionId: "state-government-power",
    correctAnswerExplanation: "Providing education is one of the powers reserved for the states. The 10th Amendment states that powers not delegated to the federal government are reserved to the states or to the people. Education has traditionally been considered a state and local responsibility. States establish public school systems, set educational standards, certify teachers, and determine curriculum requirements. Other state powers include conducting elections, issuing licenses (driver's, professional, marriage), establishing local governments, and regulating intrastate commerce. These powers allow states to address the specific needs and preferences of their residents.",
    incorrectAnswerExplanations: {
      "Print money": "The power to print or coin money is exclusively a federal power, not a state power. States are explicitly prohibited from coining money by Article I, Section 10 of the Constitution.",
      "Create an army": "Creating and maintaining military forces is primarily a federal power. While states have National Guard units, these can be federalized, and states cannot maintain independent armies.",
      "Make treaties": "The Constitution explicitly prohibits states from entering into treaties with foreign nations. Treaty-making is an exclusive federal power handled by the President with the advice and consent of the Senate."
    },
    textbookPageReference: 26,
    category: "System of Government"
  },
  
  "What are the two major political parties in the United States?": {
    questionId: "major-political-parties",
    correctAnswerExplanation: "The two major political parties in the United States are the Democratic Party and the Republican Party. The Democratic Party was founded in the 1820s during the Andrew Jackson era, while the Republican Party was founded in the 1850s with opposition to the expansion of slavery as a key principle. These two parties have dominated American politics since the Civil War. While other parties exist, the electoral system tends to favor a two-party structure. The parties differ on various policy issues, including the role of government, economic policy, and social issues.",
    incorrectAnswerExplanations: {
      "Liberal and Conservative": "These are political ideologies or philosophies, not the names of the major political parties in the United States.",
      "Green and Independent": "While the Green Party and independent candidates do participate in U.S. elections, they are not the two major parties. The Democratic and Republican parties are the major parties.",
      "Socialist and Libertarian": "The Socialist Party and Libertarian Party exist in the United States but are considered minor or third parties, not the two major parties."
    },
    textbookPageReference: 27,
    category: "System of Government"
  },
  
  // American History: Colonial Period and Independence
  "Who wrote the Declaration of Independence?": {
    questionId: "declaration-author",
    correctAnswerExplanation: "Thomas Jefferson was the principal author of the Declaration of Independence. In June 1776, the Continental Congress appointed a committee of five men to draft a declaration: Jefferson, John Adams, Benjamin Franklin, Roger Sherman, and Robert Livingston. Jefferson was chosen to write the first draft, which was then edited by the committee and the Continental Congress. While the final document represented a collaborative effort, Jefferson is credited as its primary author.",
    incorrectAnswerExplanations: {
      "George Washington": "While George Washington was a key founding father and the commander of the Continental Army during the Revolutionary War, he did not write the Declaration of Independence. Thomas Jefferson was the principal author.",
      "Benjamin Franklin": "Franklin was on the five-person committee that oversaw the creation of the Declaration and made some suggestions, but Thomas Jefferson was the primary author who drafted the document.",
      "John Adams": "Adams was on the committee that oversaw the creation of the Declaration and advocated for Jefferson to be the principal writer, but he himself was not the author."
    },
    textbookPageReference: 40,
    category: "American History"
  },
  
  // American History: 1800s
  "What territory did the United States buy from France in 1803?": {
    questionId: "louisiana-purchase-territory",
    correctAnswerExplanation: "The United States bought the Louisiana Territory from France in 1803. This massive land purchase of approximately 827,000 square miles doubled the size of the United States for $15 million (about 4 cents per acre). The territory encompassed all or part of 15 current U.S. states and two Canadian provinces, extending from the Mississippi River to the Rocky Mountains and from the Gulf of Mexico to Canada. President Thomas Jefferson negotiated this purchase with Napoleon Bonaparte, who needed funds for his European military campaigns. The acquisition opened vast new lands for American settlement and significantly strengthened the young nation.",
    incorrectAnswerExplanations: {
      "Alaska": "Alaska was purchased from Russia in 1867 for $7.2 million, not from France in 1803. This purchase was nicknamed 'Seward's Folly' after Secretary of State William Seward who negotiated it.",
      "Hawaii": "Hawaii was not purchased but was initially an independent kingdom. It was annexed by the United States in 1898, long after 1803, following a controversial overthrow of the Hawaiian monarchy.",
      "Texas": "Texas was not purchased from France. It was an independent republic after breaking away from Mexico in 1836, and it was annexed by the United States in 1845."
    },
    textbookPageReference: 83,
    category: "1800s"
  },
  
  "Name one war fought by the United States in the 1800s.": {
    questionId: "us-war-1800s",
    correctAnswerExplanation: "The Civil War (1861-1865) was a major war fought by the United States in the 1800s. This devastating conflict between the Union (Northern states) and the Confederacy (Southern states that had seceded) resulted in approximately 620,000 deaths, making it the deadliest war in American history. The war began after decades of tension over slavery, states' rights, and westward expansion. President Abraham Lincoln's primary goal was to preserve the Union, though the war ultimately led to the abolition of slavery through the Emancipation Proclamation and later the 13th Amendment.",
    incorrectAnswerExplanations: {
      "World War I": "World War I took place from 1914 to 1918, in the 20th century, not the 1800s. The United States entered this war in 1917.",
      "World War II": "World War II occurred from 1939 to 1945, in the 20th century, not the 1800s. The United States entered this war in 1941 after the attack on Pearl Harbor.",
      "Vietnam War": "The Vietnam War took place primarily in the 1960s and early 1970s, not in the 1800s."
    },
    textbookPageReference: 84,
    category: "1800s"
  },
  
  "Name the U.S. war between the North and the South.": {
    questionId: "north-south-war",
    correctAnswerExplanation: "The Civil War was the war between the North (Union) and the South (Confederate States of America) from 1861 to 1865. It began after several Southern states seceded following the election of Abraham Lincoln, whom they feared would restrict or abolish slavery. Major battles included Bull Run, Antietam, Gettysburg, and Vicksburg. The war ended with Confederate General Robert E. Lee's surrender to Union General Ulysses S. Grant at Appomattox Court House in April 1865. The conflict transformed American society by ending slavery and strengthening the federal government's authority over the states.",
    incorrectAnswerExplanations: {
      "The Revolutionary War": "The Revolutionary War (1775-1783) was fought between American colonists and Great Britain, not between the North and South regions of the United States.",
      "World War I": "World War I (1914-1918) was a global conflict primarily fought in Europe, not a war between the North and South regions of the United States.",
      "The War of 1812": "The War of 1812 (1812-1815) was fought between the United States and Great Britain, not between the North and South regions of the United States."
    },
    textbookPageReference: 85,
    category: "1800s"
  },
  
  "Name one problem that led to the Civil War.": {
    questionId: "civil-war-cause",
    correctAnswerExplanation: "Slavery was the central problem that led to the Civil War. The economic and social systems of the South had become dependent on enslaved labor, while many in the North increasingly opposed the institution on moral grounds. This fundamental disagreement was exacerbated by related issues including: states' rights (particularly whether states could nullify federal laws or secede from the Union), economic differences between the industrial North and agricultural South, westward expansion (and whether new territories would allow slavery), and cultural divergence between the regions. The election of Abraham Lincoln in 1860, who opposed the expansion of slavery, triggered the secession of Southern states.",
    incorrectAnswerExplanations: {
      "Taxation": "While there were economic disagreements between North and South, including tariff policies, taxation itself was not a primary cause of the Civil War in the way that slavery was.",
      "Immigration": "Immigration was not a significant cause of the Civil War. Major immigration waves, particularly from Ireland and Germany, occurred in the decades before the war but did not directly contribute to the conflict.",
      "Foreign invasion": "There was no foreign invasion that contributed to the start of the Civil War. The conflict was entirely domestic in nature."
    },
    textbookPageReference: 86,
    category: "1800s"
  },
  
  "What was one important thing that Abraham Lincoln did?": {
    questionId: "lincoln-achievement",
    correctAnswerExplanation: "Abraham Lincoln freed the slaves through the Emancipation Proclamation, which he issued on January 1, 1863. This executive order declared that all enslaved people in Confederate states in rebellion against the Union 'shall be then, thenceforward, and forever free.' While the proclamation could not be immediately enforced in areas still under Confederate control, it fundamentally transformed the character of the Civil War by making the abolition of slavery an explicit war aim. It also allowed Black men to join the Union Army, with nearly 200,000 serving by the war's end. Lincoln later pushed for the 13th Amendment, which permanently abolished slavery throughout the United States.",
    incorrectAnswerExplanations: {
      "Wrote the Constitution": "The Constitution was written in 1787, long before Lincoln was born in 1809. James Madison is often considered the primary author of the Constitution.",
      "Declared independence from Britain": "The Declaration of Independence was written primarily by Thomas Jefferson in 1776, decades before Lincoln was born.",
      "Purchased Alaska": "Alaska was purchased from Russia in 1867 during the administration of President Andrew Johnson, after Lincoln's assassination in 1865. The purchase was negotiated by Secretary of State William Seward."
    },
    textbookPageReference: 87,
    category: "1800s"
  },
  
  "What did the Emancipation Proclamation do?": {
    questionId: "emancipation-proclamation",
    correctAnswerExplanation: "The Emancipation Proclamation freed the slaves in Confederate states that were in rebellion against the Union. Issued by President Abraham Lincoln on January 1, 1863, this executive order declared that all enslaved people in these states 'are, and henceforward shall be free.' While the proclamation did not immediately free all slaves (it didn't apply to border states that remained in the Union or to Confederate areas already under Union control), it was a crucial turning point that transformed the Civil War into a fight not just to preserve the Union but to end slavery. It also allowed Black men to enlist in the Union Army, with nearly 200,000 serving by the war's end.",
    incorrectAnswerExplanations: {
      "Ended the Civil War": "The Civil War continued for more than two years after the Emancipation Proclamation, ending with Confederate surrender in April 1865.",
      "Gave women the right to vote": "Women's suffrage came much later with the 19th Amendment in 1920, not through the Emancipation Proclamation.",
      "Gave citizenship to Native Americans": "Native American citizenship was not addressed by the Emancipation Proclamation. Most Native Americans were not granted U.S. citizenship until the Indian Citizenship Act of 1924."
    },
    textbookPageReference: 88,
    category: "1800s"
  },
  
  "What did Susan B. Anthony do?": {
    questionId: "susan-b-anthony",
    correctAnswerExplanation: "Susan B. Anthony fought for women's rights, particularly women's suffrage (the right to vote). As a leading figure in the women's suffrage movement of the 19th century, she co-founded the National Woman Suffrage Association with Elizabeth Cady Stanton in 1869. Anthony was arrested in 1872 for voting illegally (as women could not yet vote) to challenge discriminatory voting laws. She traveled extensively, giving speeches and organizing for women's rights. Though she died in 1906, fourteen years before women gained the right to vote through the 19th Amendment, her decades of activism were instrumental in advancing the cause of women's suffrage in the United States.",
    incorrectAnswerExplanations: {
      "First female member of Congress": "The first woman elected to Congress was Jeannette Rankin in 1916, ten years after Anthony's death.",
      "First female Supreme Court Justice": "The first female Supreme Court Justice was Sandra Day O'Connor, appointed in 1981, long after Anthony's lifetime.",
      "Wrote the Declaration of Independence": "The Declaration of Independence was written primarily by Thomas Jefferson in 1776, before Anthony was born in 1820."
    },
    textbookPageReference: 89,
    category: "1800s"
  },
  
  // American History: Recent
  "Name one war fought by the United States in the 1900s.": {
    questionId: "us-war-1900s",
    correctAnswerExplanation: "World War II was a major war fought by the United States in the 1900s. The U.S. entered this global conflict in December 1941 after the Japanese attack on Pearl Harbor and fought until the war's end in 1945. Over 16 million Americans served in the armed forces during this conflict, with more than 400,000 losing their lives. The U.S. played a decisive role in both the European and Pacific theaters, contributing significantly to the Allied victory. The war transformed America into a global superpower and ushered in significant social and economic changes at home, including increased opportunities for women and minorities in the workforce.",
    incorrectAnswerExplanations: {
      "The Revolutionary War": "The Revolutionary War was fought from 1775 to 1783, in the 1700s, not the 1900s.",
      "The Civil War": "The Civil War was fought from 1861 to 1865, in the 1800s, not the 1900s.",
      "The War of 1812": "The War of 1812 was fought from 1812 to 1815, in the 1800s, not the 1900s."
    },
    textbookPageReference: 90,
    category: "Recent American History"
  },
  
  "Who was President during World War I?": {
    questionId: "wwi-president",
    correctAnswerExplanation: "Woodrow Wilson was President during World War I, serving from 1913 to 1921. Initially, Wilson maintained U.S. neutrality when the war began in 1914, but German submarine warfare against American ships eventually led him to ask Congress for a declaration of war in April 1917. Wilson outlined his vision for peace in his famous 'Fourteen Points' speech and personally attended the Paris Peace Conference in 1919. There, he advocated for the League of Nations, an international organization designed to prevent future conflicts. Although the Senate rejected U.S. membership in the League, Wilson's internationalist vision influenced American foreign policy throughout the 20th century.",
    incorrectAnswerExplanations: {
      "Franklin Roosevelt": "Franklin D. Roosevelt was President during World War II (1939-1945), not World War I. He took office in 1933, long after World War I had ended.",
      "Herbert Hoover": "Herbert Hoover was President from 1929 to 1933, after World War I had ended.",
      "Theodore Roosevelt": "Theodore Roosevelt was President from 1901 to 1909, before World War I began in 1914."
    },
    textbookPageReference: 91,
    category: "Recent American History"
  },
  
  "Who was President during the Great Depression and World War II?": {
    questionId: "depression-wwii-president",
    correctAnswerExplanation: "Franklin Roosevelt was President during both the Great Depression and World War II. Elected in 1932 during the depths of the Depression, Roosevelt implemented his New Deal programs to provide relief, recovery, and reform. When World War II began in Europe in 1939, he gradually moved the U.S. from neutrality to supporting the Allies through programs like Lend-Lease. After the Japanese attack on Pearl Harbor in December 1941, Roosevelt led the nation through most of the war until his death in April 1945, just weeks before victory in Europe. He was the only president elected to four terms, serving from 1933 until 1945.",
    incorrectAnswerExplanations: {
      "Herbert Hoover": "Hoover was President when the Great Depression began (1929-1933), but he was defeated by Roosevelt in the 1932 election and was not president during World War II.",
      "Harry Truman": "Truman became President after Roosevelt's death in April 1945. While he oversaw the end of World War II, he was not President during the Great Depression or most of the war.",
      "Dwight Eisenhower": "Eisenhower was the Supreme Allied Commander in Europe during World War II, but he did not become President until 1953, well after both the Depression and the war had ended."
    },
    textbookPageReference: 92,
    category: "Recent American History"
  },
  
  "Who did the United States fight in World War II?": {
    questionId: "wwii-enemies",
    correctAnswerExplanation: "The United States fought Japan, Germany, and Italy in World War II. These three nations formed the Axis Powers. The U.S. entered the war after Japan attacked Pearl Harbor on December 7, 1941. Germany and Italy, as Japan's allies, declared war on the United States days later. The U.S. adopted a 'Germany first' strategy, focusing initial efforts on defeating Nazi Germany in Europe while maintaining a defensive posture in the Pacific. After Germany's surrender in May 1945, the full might of American military power was directed against Japan, culminating in Japan's surrender in August 1945 following the atomic bombings of Hiroshima and Nagasaki.",
    incorrectAnswerExplanations: {
      "Soviet Union": "The Soviet Union was actually one of America's major allies during World War II, not an enemy. They were part of the 'Big Three' Allied Powers along with the United States and Great Britain.",
      "China": "China was an important ally of the United States during World War II, fighting against Japanese aggression in Asia. China was not an enemy of the U.S.",
      "France": "While France was initially defeated and occupied by Germany in 1940, Free French forces continued to fight alongside the Allies. France was not an enemy of the United States."
    },
    textbookPageReference: 93,
    category: "Recent American History"
  },
  
  "Before he was President, Eisenhower was a general. What war was he in?": {
    questionId: "eisenhower-war",
    correctAnswerExplanation: "Before becoming President, Eisenhower was a general in World War II. He served as the Supreme Commander of the Allied Expeditionary Force in Europe, where he planned and supervised the successful invasion of France and Germany from the Western Front. His most famous operation was the D-Day invasion of Normandy on June 6, 1944, which began the liberation of Western Europe from Nazi control. Eisenhower's leadership skills, diplomatic abilities, and strategic vision made him highly effective in coordinating the diverse Allied forces. His military success propelled him to national prominence and eventually to the presidency in 1953.",
    incorrectAnswerExplanations: {
      "World War I": "While Eisenhower served in the Army during World War I, he did not see combat and was not yet a general. He trained tank crews in the United States during that conflict.",
      "Korean War": "The Korean War occurred from 1950 to 1953. By this time, Eisenhower had already retired from active military service and was president of Columbia University before running for President.",
      "Vietnam War": "The Vietnam War escalated primarily in the 1960s, after Eisenhower's presidency (1953-1961). He was not involved as a military general in this conflict."
    },
    textbookPageReference: 94,
    category: "Recent American History"
  },
  
  "During the Cold War, what was the main concern of the United States?": {
    questionId: "cold-war-concern",
    correctAnswerExplanation: "During the Cold War, the main concern of the United States was communism spreading around the world. This fear, often called 'containment policy,' shaped American foreign policy for over four decades after World War II. The U.S. sought to prevent the Soviet Union and China from expanding their influence and communist ideology to other nations. This led to proxy wars in Korea, Vietnam, and elsewhere; nuclear arms race; space race; and various diplomatic, economic, and covert operations. The policy manifested in initiatives like the Marshall Plan, NATO, and the Truman Doctrine, all designed to strengthen democratic nations against communist influence.",
    incorrectAnswerExplanations: {
      "Global warming": "Global warming was not a major political concern during most of the Cold War period (1945-1991). Environmental issues gained significant political attention primarily in the later stages and after the Cold War.",
      "Economic recession": "While economic issues were important, they were not the main geopolitical concern driving U.S. foreign policy during the Cold War.",
      "Nuclear war with Canada": "This is completely incorrect. Canada was (and remains) one of America's closest allies. There was never any threat of nuclear war with Canada."
    },
    textbookPageReference: 95,
    category: "Recent American History"
  },
  
  "What movement tried to end racial discrimination?": {
    questionId: "civil-rights-movement",
    correctAnswerExplanation: "The Civil Rights Movement tried to end racial discrimination in the United States, particularly from the mid-1950s through the late 1960s. Led by figures such as Martin Luther King Jr., Rosa Parks, and John Lewis, this movement employed nonviolent protest, civil disobedience, legal challenges, and mass mobilization to combat segregation and discrimination against African Americans. Key achievements included the Supreme Court's Brown v. Board of Education decision (1954), the Civil Rights Act of 1964, and the Voting Rights Act of 1965. These landmark laws prohibited discrimination in public accommodations, employment, and voting, fundamentally transforming American society and advancing the nation toward its stated ideals of equality.",
    incorrectAnswerExplanations: {
      "The Conservation Movement": "The Conservation Movement focused on protecting natural resources and the environment, not on ending racial discrimination.",
      "The Women's Suffrage Movement": "The Women's Suffrage Movement fought for women's right to vote, which was achieved in 1920 with the 19th Amendment, not for racial equality.",
      "The Labor Movement": "While the Labor Movement sometimes addressed racial issues, its primary focus was on workers' rights, wages, and working conditions, not specifically on ending racial discrimination."
    },
    textbookPageReference: 96,
    category: "Recent American History"
  },
  
  "What did Martin Luther King, Jr. do?": {
    questionId: "mlk-achievement",
    correctAnswerExplanation: "Martin Luther King, Jr. fought for civil rights and worked for equality for all Americans. As the most prominent leader of the Civil Rights Movement, he advocated nonviolent resistance to racial injustice, inspired by Mahatma Gandhi's philosophy. King led the Montgomery Bus Boycott (1955-56), helped found the Southern Christian Leadership Conference, delivered his famous 'I Have a Dream' speech during the 1963 March on Washington, and led the Selma to Montgomery marches for voting rights in 1965. His efforts contributed significantly to landmark legislation including the Civil Rights Act of 1964 and the Voting Rights Act of 1965. King was awarded the Nobel Peace Prize in 1964 and is honored with a national holiday.",
    incorrectAnswerExplanations: {
      "Served as President": "King never served as President of the United States. He was a Baptist minister and civil rights leader, not an elected official.",
      "Fought in World War II": "King was a teenager during World War II and did not serve in the military. He was born in 1929 and was only 16 when the war ended in 1945.",
      "Wrote the Bill of Rights": "The Bill of Rights consists of the first ten amendments to the Constitution and was written in 1789, long before King was born in 1929."
    },
    textbookPageReference: 97,
    category: "Recent American History"
  },
  
  "What major event happened on September 11, 2001 in the United States?": {
    questionId: "september-11-event",
    correctAnswerExplanation: "Terrorists attacked the United States on September 11, 2001. Nineteen members of the terrorist group al-Qaeda hijacked four commercial airplanes, deliberately crashing two into the Twin Towers of the World Trade Center in New York City and one into the Pentagon in Arlington, Virginia. The fourth plane, believed to be targeting the U.S. Capitol or White House, crashed in a field in Pennsylvania after passengers fought the hijackers. Nearly 3,000 people were killed in these coordinated attacks, which led to significant changes in U.S. foreign policy, domestic security measures, and the global 'War on Terror,' including military operations in Afghanistan and Iraq.",
    incorrectAnswerExplanations: {
      "The first man walked on the moon": "The first moon landing occurred on July 20, 1969, when Neil Armstrong became the first person to walk on the moon, not on September 11, 2001.",
      "The Civil War ended": "The Civil War ended in 1865 with General Robert E. Lee's surrender at Appomattox Court House on April 9, not on September 11, 2001.",
      "The Declaration of Independence was signed": "The Declaration of Independence was adopted on July 4, 1776, and most delegates signed it on August 2, 1776, not on September 11, 2001."
    },
    textbookPageReference: 98,
    category: "Recent American History"
  },
  
  "Name one American Indian tribe in the United States.": {
    questionId: "native-american-tribe",
    correctAnswerExplanation: "The Cherokee are one of the largest and most prominent American Indian tribes in the United States. Originally from the southeastern United States (primarily Georgia, North Carolina, and Tennessee), many Cherokee were forcibly relocated to present-day Oklahoma in the 1830s along the 'Trail of Tears.' Today, the Cherokee Nation is the largest federally recognized tribe in the U.S., with over 390,000 tribal citizens. The Cherokee have a rich cultural heritage and made significant adaptations to European-American society, including developing a written language (the Cherokee syllabary created by Sequoyah) and establishing constitutional government. They maintain their sovereign status as a tribal nation within the United States.",
    incorrectAnswerExplanations: {
      "Aztec": "The Aztec civilization was primarily located in central Mexico, not within the present-day United States. They are not a federally recognized tribe in the U.S.",
      "Inuit": "While the Inuit are indigenous peoples, they primarily inhabit the Arctic regions of Canada, Greenland, and Alaska. In the U.S., Alaska Native groups are typically identified by specific tribal or regional corporations rather than generally as 'Inuit.'",
      "Mayan": "The Maya civilization was centered in southern Mexico and Central America (particularly Guatemala, Belize, Honduras), not within the present-day United States. They are not a federally recognized tribe in the U.S."
    },
    textbookPageReference: 99,
    category: "Recent American History"
  },
  
  // Geography
  "Name one state that borders Canada.": {
    questionId: "canada-border-state",
    correctAnswerExplanation: "Maine is one of thirteen states that border Canada. The U.S.-Canada border is the longest international border in the world at 5,525 miles. The thirteen states that share a land or maritime border with Canada are: Alaska, Washington, Idaho, Montana, North Dakota, Minnesota, Michigan, Ohio, Pennsylvania, New York, Vermont, New Hampshire, and Maine. This northern border has historically been peaceful and is often referred to as the world's longest undefended border, though security measures have increased since the September 11, 2001 attacks.",
    incorrectAnswerExplanations: {
      "California": "California is located on the west coast of the United States and borders the Pacific Ocean, Mexico, Oregon, Nevada, and Arizona—but not Canada.",
      "Texas": "Texas is in the southern United States and shares a border with Mexico, but it does not border Canada.",
      "Florida": "Florida is in the southeastern United States and is surrounded by the Gulf of Mexico, the Atlantic Ocean, and the states of Georgia and Alabama—it does not border Canada."
    },
    textbookPageReference: 100,
    category: "Geography"
  },
  
  "Name one U.S. territory.": {
    questionId: "us-territory",
    correctAnswerExplanation: "Puerto Rico is a U.S. territory located in the Caribbean Sea. It was acquired by the United States in 1898 following the Spanish-American War. As a territory, Puerto Rico has its own government with limited autonomy, but is ultimately under U.S. sovereignty. Puerto Ricans are U.S. citizens by birth but cannot vote in presidential elections unless they reside in one of the 50 states. The island has a non-voting Resident Commissioner in the U.S. House of Representatives. Other U.S. territories include Guam, U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands.",
    incorrectAnswerExplanations: {
      "Hawaii": "Hawaii is not a territory but a full U.S. state, having been admitted to the Union in 1959 as the 50th state.",
      "Cuba": "Cuba is an independent country in the Caribbean, not a U.S. territory.",
      "Philippines": "The Philippines was a U.S. territory from 1898 until 1946, when it gained independence. It is now a sovereign nation."
    },
    textbookPageReference: 101,
    category: "Geography"
  },
  
  "Name one state that borders Mexico.": {
    questionId: "mexico-border-state",
    correctAnswerExplanation: "California is one of four states that border Mexico. The U.S.-Mexico border stretches approximately 1,954 miles from the Pacific Ocean to the Gulf of Mexico. The four states that share this international boundary are California, Arizona, New Mexico, and Texas. This border region has significant cultural and economic exchange, with numerous 'sister cities' on opposite sides of the border. It's also an area of complex political issues related to immigration, trade, and security.",
    incorrectAnswerExplanations: {
      "Nevada": "Nevada is located in the western United States but does not share a border with Mexico. It borders California, Oregon, Idaho, Utah, and Arizona.",
      "Florida": "Florida is in the southeastern United States and is surrounded by the Gulf of Mexico, the Atlantic Ocean, and the states of Georgia and Alabama—it does not border Mexico.",
      "Alabama": "Alabama is located in the southeastern United States and does not share a border with Mexico. It borders Tennessee, Georgia, Florida, and Mississippi."
    },
    textbookPageReference: 102,
    category: "Geography"
  },
  
  "What is the capital of the United States?": {
    questionId: "us-capital",
    correctAnswerExplanation: "Washington, D.C. is the capital of the United States. Officially known as the District of Columbia, it was established by the Constitution as a federal district under the exclusive jurisdiction of Congress. The city was founded in 1791 and named after George Washington. As the seat of the federal government, it houses all three branches: the White House (Executive), the Capitol Building (Legislative), and the Supreme Court (Judicial). Unlike states, D.C. has no voting representation in Congress, though residents can vote in presidential elections. The district's unique status has led to ongoing debates about D.C. statehood.",
    incorrectAnswerExplanations: {
      "New York City": "New York City was the first capital of the United States under the Constitution (1789-1790), but it was temporary. The capital was moved to Philadelphia and then permanently established in Washington, D.C. in 1800.",
      "Philadelphia": "Philadelphia served as the temporary capital from 1790 to 1800 while Washington, D.C. was being constructed, but it is not the current capital.",
      "Boston": "Boston was never the capital of the United States, though it was an important city during the American Revolution and colonial period."
    },
    textbookPageReference: 103,
    category: "Geography"
  },
  
  "Where is the Statue of Liberty?": {
    questionId: "statue-of-liberty-location",
    correctAnswerExplanation: "The Statue of Liberty is located in New York Harbor on Liberty Island. This colossal neoclassical sculpture was a gift from the people of France to the United States, dedicated in 1886. Designed by French sculptor Frédéric Auguste Bartholdi, the statue represents Libertas, the Roman goddess of freedom, holding a torch and tablet inscribed with the date of American independence. It has served as a welcoming symbol for immigrants arriving in America and is recognized worldwide as a symbol of freedom and democracy. The statue is managed by the National Park Service and was designated a UNESCO World Heritage Site in 1984.",
    incorrectAnswerExplanations: {
      "Washington, D.C.": "The Statue of Liberty is not located in Washington, D.C. The nation's capital has many monuments and memorials, but not the Statue of Liberty.",
      "Boston": "The Statue of Liberty is not located in Boston. Boston has its own significant historical landmarks, such as the Freedom Trail and Bunker Hill Monument.",
      "Philadelphia": "The Statue of Liberty is not located in Philadelphia. Philadelphia is home to Independence Hall and the Liberty Bell, but not the Statue of Liberty."
    },
    textbookPageReference: 104,
    category: "Geography"
  },
  
  // Symbols and Holidays
  "Why does the flag have 13 stripes?": {
    questionId: "flag-stripes-reason",
    correctAnswerExplanation: "The flag has 13 stripes because they represent the original thirteen colonies. These colonies declared independence from Great Britain in 1776 and became the first states of the Union. The stripes alternate between red and white, with 7 red stripes and 6 white stripes. The original thirteen colonies/states were: Delaware, Pennsylvania, New Jersey, Georgia, Connecticut, Massachusetts, Maryland, South Carolina, New Hampshire, Virginia, New York, North Carolina, and Rhode Island. While the number of stars on the flag has increased as more states joined the Union (now 50), the 13 stripes have remained constant to honor the nation's origins.",
    incorrectAnswerExplanations: {
      "Because there were 13 original states": "This is technically correct but imprecise. The 13 stripes specifically represent the 13 original colonies that declared independence, which then became the first 13 states.",
      "Because there were 13 presidents": "This is incorrect. The 13 stripes have nothing to do with presidents. The United States has had 46 presidents, not 13.",
      "Because there were 13 signers of the Constitution": "This is incorrect. There were 39 signers of the Constitution, not 13. The 13 stripes represent the original colonies."
    },
    textbookPageReference: 105,
    category: "Symbols and Holidays"
  },
  
  "Why does the flag have 50 stars?": {
    questionId: "flag-stars-reason",
    correctAnswerExplanation: "The flag has 50 stars because there are 50 states in the Union. Each star represents one state. The current 50-star design became official on July 4, 1960, after Hawaii became the 50th state in 1959. Throughout American history, the flag has been redesigned multiple times as new states joined the Union. The arrangement of stars has varied, but since 1818, the practice has been to have one star for each state while keeping the 13 stripes constant. The current design features the stars arranged in nine alternating rows of six and five stars.",
    incorrectAnswerExplanations: {
      "Because there were 50 original colonies": "This is incorrect. There were 13 original colonies, not 50. The 50 stars represent the current number of states in the Union.",
      "Because there were 50 signers of the Declaration of Independence": "This is incorrect. There were 56 signers of the Declaration of Independence, not 50. The 50 stars represent the current number of states.",
      "Because there were 50 Constitutional amendments": "This is incorrect. There are 27 amendments to the U.S. Constitution, not 50. The 50 stars represent the current number of states."
    },
    textbookPageReference: 106,
    category: "Symbols and Holidays"
  },
  
  "What is the name of the national anthem?": {
    questionId: "national-anthem",
    correctAnswerExplanation: "The Star-Spangled Banner is the national anthem of the United States. It was written by Francis Scott Key in 1814 after witnessing the bombardment of Fort McHenry by British ships during the War of 1812. The lyrics describe Key's relief at seeing the American flag still flying over the fort after a night of intense shelling, signifying that the Americans had not surrendered. The poem was set to the tune of a popular British song and became increasingly popular throughout the 19th century. In 1931, President Herbert Hoover signed a law officially designating 'The Star-Spangled Banner' as the national anthem.",
    incorrectAnswerExplanations: {
      "America the Beautiful": "While 'America the Beautiful' is a patriotic song often sung at national events, it is not the official national anthem of the United States.",
      "God Bless America": "Although 'God Bless America' is a well-known patriotic song written by Irving Berlin, it is not the official national anthem.",
      "My Country, 'Tis of Thee": "This patriotic song, also known as 'America,' was often used as an unofficial national anthem before 'The Star-Spangled Banner' was officially adopted, but it is not the current national anthem."
    },
    textbookPageReference: 107,
    category: "Symbols and Holidays"
  },
  
  "When do we celebrate Independence Day?": {
    questionId: "independence-day-date",
    correctAnswerExplanation: "Independence Day is celebrated on July 4th. This holiday commemorates the adoption of the Declaration of Independence by the Continental Congress on July 4, 1776, which declared the thirteen American colonies as a new nation, independent from Great Britain. The day is typically celebrated with fireworks, parades, barbecues, concerts, and other public and private events celebrating American history, government, and traditions. Independence Day has been a federal holiday since 1941, though celebrations date back to the 18th century, shortly after the American Revolution.",
    incorrectAnswerExplanations: {
      "January 1": "January 1 is New Year's Day, not Independence Day.",
      "December 25": "December 25 is Christmas Day, not Independence Day.",
      "November 11": "November 11 is Veterans Day, which honors military veterans, not Independence Day."
    },
    textbookPageReference: 108,
    category: "Symbols and Holidays"
  },
  
  "Name two national U.S. holidays.": {
    questionId: "national-holidays",
    correctAnswerExplanation: "Independence Day (July 4) and Thanksgiving (fourth Thursday in November) are two national U.S. holidays. Independence Day commemorates the adoption of the Declaration of Independence in 1776, while Thanksgiving celebrates the harvest and blessings of the past year, dating back to a 1621 celebration by the Pilgrims. Other federal holidays include New Year's Day, Martin Luther King Jr. Day, Presidents Day, Memorial Day, Juneteenth, Labor Day, Columbus Day/Indigenous Peoples' Day, Veterans Day, and Christmas. These holidays recognize significant historical events, honor important figures, and celebrate cultural traditions that have shaped American identity.",
    incorrectAnswerExplanations: {
      "Flag Day and Arbor Day": "While these are observed in the United States, neither Flag Day (June 14) nor Arbor Day (usually the last Friday in April) is a federal holiday.",
      "Valentine's Day and Halloween": "These are widely celebrated cultural holidays but are not federal holidays in the United States.",
      "April Fools' Day and Groundhog Day": "These are traditional observances but not federal holidays in the United States."
    },
    textbookPageReference: 109,
    category: "Symbols and Holidays"
  }
};
