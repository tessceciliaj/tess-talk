const links = ["/dealbreaker", "/nowronganswers", "/bonding", "/tesstalk"];
const randomIndex = Math.floor(Math.random() * links.length);

const games = [
  {
    id: "1",
    name: "random game",
    link: links[randomIndex],
  },
  {
    id: "3",
    name: "no wrong answers",
    link: "/nowronganswers",
    cards: [
      {
        id: "1",
        text: "Well it finally happened, you're the Piano Man. Which song are you singing us tonight?",
      },
      {
        id: "2",
        text: "You just got accepted to Hogwarts! Why are you immediately expelled?",
      },
      {
        id: "3",
        text: "If you could have a conversation with any fictional character, who would you choose and why?",
      },
      {
        id: "4",
        text: "If you were stranded on a deserted island and could only bring three items with you, what would they be and why?",
      },
      {
        id: "5",
        text: "If you could create a new holiday, what would it be called and how would it be celebrated?",
      },
      {
        id: "6",
        text: "You have the power to travel back in time and witness any historical event. Which event would you choose to experience and why?",
      },
      {
        id: "7",
        text: "If you were an ice cream flavor, what would you be called and what ingredients would you have?",
      },
      {
        id: "8",
        text: "Imagine you discover a secret passageway in your house that leads to a hidden room. What do you find inside?",
      },
      {
        id: "9",
        text: "If you could speak fluently in any language other than your native tongue, which language would you choose and why?",
      },
      {
        id: "10",
        text: "Imagine you could be any mythical creature for a day. What creature would you choose to be and how would you spend your day?",
      },
      {
        id: "11",
        text: "What famous villian (fictional or historic) would make the best prom date?",
      },
      {
        id: "12",
        text: "If you could have a personal mascot that follows you around everywhere, what/who would it be and why?",
      },
      {
        id: "13",
        text: "If you could replace one body part with a super-powered bionic version, which body part would you choose and what special abilities would it have?",
      },
      {
        id: "14",
        text: "If you could invent a new flavor of potato chips that would make the headlines, what outrageous flavor combination would you create?",
      },
      {
        id: "15",
        text: "If you could create a wacky holiday tradition, what would it be and how would people celebrate it?",
      },
      {
        id: "16",
        text: "If you woke up one day with the ability to understand and speak the language of insects, what funny conversations do you imagine having with them?",
      },
      {
        id: "17",
        text: "If you were a superhero with a completely useless superpower, what would your power be and how would you try to save the day?",
      },
      { id: "18", text: "Which historical figure probably had the best butt?" },
      {
        id: "19",
        text: "Time for a round of shots! But the bar only has condiments left. What condiment are you throwin' back?",
      },
      {
        id: "20",
        text: "When it's all said and done, what's the sexiest ice cream flavor?",
      },
      {
        id: "21",
        text: "Let's dance! Choose a historical figure to be your dance partner on a reality TV",
      },
    ],
  },
  {
    id: "4",
    name: "Tess Talk",
    link: "/tesstalk",
    cards: [
      { id: 1, text: "Fruktlöst letande efter Storsjöodjuret." },
      { id: 2, text: "Dricker öl till frukost." },
      { id: 3, text: "Har ett behov av att suga på dina tår innan läggdags." },
      {
        id: 4,
        text: "Rimmar när personen talar, även under allvarliga samtal.",
      },
      {
        id: 5,
        text: "Vill tillbringa lite för mycket tid med din syskon.",
      },
      {
        id: 6,
        text: "Insisterar på att bära clownklädsel vid varje socialt evenemang, inklusive bröllop och begravningar.",
      },
      { id: 7, text: "Dubbeldippar chips." },
      { id: 8, text: "Tar inte sista biten av pizzan." },
      { id: 9, text: "Tillåter dig inte att låna deras huvtröja." },
      { id: 10, text: "En ord, snorunge." },
      { id: 11, text: "Förlamas på ena halvan av kroppen." },
      {
        id: 12,
        text: "Kommer ut från badrummet med mjöl i mustaschen.",
      },
      { id: 13, text: "Självdiagnosticerar sig." },
      { id: 14, text: "Djupt inne i konspirationsteoriernas värld." },
      {
        id: 15,
        text: "Efter några månader visar det sig att personen är hemlös.",
      },
      { id: 16, text: "Gillar att krypa nära när de sover." },
      { id: 17, text: "Gillar inte att krypa nära när de sover." },
      { id: 18, text: "Gråter alltid under allsång." },
      { id: 19, text: "Tvättar inte händerna efter toalettbesök." },
      {
        id: 20,
        text: "Vägrar att äta något som inte är lila, även om det innebär att överleva på druvsaft och auberginer.",
      },
      {
        id: 21,
        text: "Tror att utomjordingar har implanterat en mikrochip i hen & att de nu är en del av ett hemligt experiment.",
      },
      { id: 22, text: "Använder en varmluftsballong som färdsätt." },
      { id: 23, text: "Har en vana att peta i näsan utan filter." },
      {
        id: 24,
        text: "Har en vana att prata som en pirat och vill att du ska vara med på skämtet.",
      },
      {
        id: 25,
        text: "Vägrar att använda någon form av teknologi och insisterar på att leva som på 1800-talet.",
      },
      { id: 26, text: "Samlar på tånagelspill som hobby." },
      { id: 27, text: "Har en irrationell rädsla för dörrhandtag." },
      { id: 28, text: "Äter glass med gaffel." },
      { id: 29, text: "Kysser dig med öppna ögon." },
      {
        id: 30,
        text: "Har ett altare dedikerat till en kändisförälskelse i deras garderob.",
      },
      {
        id: 31,
        text: "Försöker vara en vampyr och insisterar på att dricka röda drycker för att bibehålla fasaden.",
      },
      { id: 32, text: "Hävdar att de har psykiska förmågor." },
      { id: 33, text: "Har suttit i fängelset." },
      { id: 34, text: "Kommunicerar enbart genom kroppsspråk." },
      {
        id: 35,
        text: "Hänvisar till sig själv i tredje person hela tiden.",
      },
      { id: 36, text: "Älskar extrem kuponganvändning." },
      { id: 37, text: "Äter godis till frukost." },
      { id: 38, text: "Måste sova med nattlampa, oavsett ålder." },
      { id: 39, text: "Skrattar som skurkarna i skräckfilmer." },
      {
        id: 40,
        text: "Insisterar på att bära strumpor och sandaler överallt.",
      },
      { id: 41, text: "Vill ha ett öppet förhållande." },
      {
        id: 42,
        text: "Har starka politiska åsikter som är det motsatta av dina.",
      },
      {
        id: 43,
        text: "Vill bo i ett trähus resten av sitt liv.",
      },
      { id: 44, text: "Pratar med dig som ett spädbarn." },
      {
        id: 45,
        text: "Bär brusreducerande hörlurar konstant, även på sociala sammankomster.",
      },
      {
        id: 46,
        text: "Har en vana att samla på gammal, utgången mat som hobby.",
      },
      { id: 47, text: "Hävdar att de är en tidsresenär från framtiden." },
      { id: 48, text: "Bär monokel och cylinderhatt hela tiden." },
      {
        id: 49,
        text: "Vägrar att sitta på något som inte är en träningsboll.",
      },
      {
        id: 50,
        text: "Tror på de mystiska krafterna hos kristallhealing och insisterar på dess dagliga användning.",
      },
    ],
    cardsEng: [
      {
        id: "1",
        text: "If you were a god, which song would play on repeat in heaven and in hell?",
      },
      {
        id: "2",
        text: "Would you never be able to eat meat or vegetables again?",
      },
      { id: "3", text: "Which Astrid Lindgren character are you most like?" },
      {
        id: "4",
        text: "Would you rather be physically paralyzed or emotionally paralyzed?",
      },
      { id: "5", text: "What is the best costume you've seen someone wear?" },
      { id: "6", text: "Which fear would you like to overcome?" },
      {
        id: "7",
        text: "Would you rather have a flying carpet or a car that can drive underwater?",
      },
      { id: "8", text: "What is the strangest thing you've eaten?" },
      { id: "9", text: "What is the weirdest allergy you've heard of?" },
      {
        id: "10",
        text: "Name one thing you would always like to carry with you.",
      },
      { id: "11", text: "Would you prefer to follow or lead a group?" },
      { id: "12", text: "Would you prefer to work alone or collaborate?" },
      {
        id: "13",
        text: "Would you rather have no one show up on your birthdays or at your funeral?",
      },
      {
        id: "14",
        text: "If you could live in a fictional world from a book or movie, which one would it be?",
      },
      { id: "15", text: "What do you prefer to do on a rainy day?" },
      {
        id: "16",
        text: "Have you ever performed in front of a large audience?",
      },
      {
        id: "17",
        text: "Would you rather get lost in a dangerous part of your city or lost in the woods?",
      },
      {
        id: "18",
        text: "When was the last time you learned something completely new (big or small)?",
      },
      {
        id: "19",
        text: "In a post-apocalyptic world, what skill or specialized knowledge would you contribute?",
      },
      { id: "20", text: "If you changed careers, what would you switch to?" },
      { id: "21", text: "What role would you have if you were in a cult?" },
      { id: "22", text: "Which artist would you like to see live?" },
      {
        id: "23",
        text: "Have you ever dated someone who didn't speak the same language as you?",
      },
      { id: "24", text: "Which hour of the day do you think is the best?" },
      { id: "25", text: "Name a criminal act that you have committed." },
      {
        id: "26",
        text: "Describe a person who is your complete opposite in three words.",
      },
      { id: "27", text: "What's your favourite creative thing to do?" },
      {
        id: "28",
        text: "Name something you haven't done yet but is on your bucket list.",
      },
      {
        id: "29",
        text: "How do you think your life will be in 10 years from now?",
      },
      { id: "30", text: "Are you the type to cry during sad movies?" },
      {
        id: "31",
        text: "Tell us about a time when you were extremely nervous.",
      },
      { id: "32", text: "What do you want to be remembered for?" },
      // {id: '33', text: ""},
      // {id: '34', text: ""},
      // {id: '35', text: ""}
    ],
  },
  {
    id: "5",
    name: "dealbreaker",
    link: "/dealbreaker",
    cards: [
      { id: 1, text: "Frantically searching for Bigfoot." },
      { id: 2, text: "Drinking beer for breakfast." },
      { id: 3, text: "Has a need to suck on your toes before bedtime." },
      {
        id: 4,
        text: "Rhymes when the person speaks, even in serious conversations.",
      },
      {
        id: 5,
        text: "Wants to spend a little too much time with your sibling.",
      },
      {
        id: 6,
        text: "Insists on wearing a clown costume at every social event, including weddings and funerals.",
      },
      { id: 7, text: "Double-dips chips." },
      { id: 8, text: "Does not take the last slice of pizza." },
      { id: 9, text: "Does not allow you to borrow their hoodie." },
      { id: 10, text: "One word, moocher." },
      { id: 11, text: "Becomes paralyzed in any half of the body." },
      {
        id: 12,
        text: "Comes out of the bathroom with flour on their mustache.",
      },
      { id: 13, text: "Self-diagnoses themselves." },
      { id: 14, text: "Deep into the realm of conspiracy theories." },
      {
        id: 15,
        text: "After a few months, it turns out the person is homeless.",
      },
      { id: 16, text: "Likes to snuggle up close when sleeping." },
      { id: 17, text: "Does not like to snuggle when sleeping." },
      { id: 18, text: "Always wails during sing-alongs." },
      { id: 19, text: "Does not wash hands after using the toilet." },
      {
        id: 20,
        text: "Refuses to eat anything that is not purple, even if it means surviving on grape juice and eggplants.",
      },
      {
        id: 21,
        text: "Believes that aliens have implanted a microchip in…nd that they are now part of a secret experiment.",
      },
      { id: 22, text: "Uses a hot air balloon as a mode of transportation." },
      { id: 23, text: "Has a habit of picking their nose unfiltered." },
      {
        id: 24,
        text: "Has a habit of speaking in pirate slang and wants you to join in on the fun.",
      },
      {
        id: 25,
        text: "Refuses to use any form of technology and insists on living like it's the 19th century.",
      },
      { id: 26, text: "Collects toenail clippings as a hobby." },
      { id: 27, text: "Has an irrational fear of door handles." },
      { id: 28, text: "Eats ice cream with a fork." },
      { id: 29, text: "Kisses you with their eyes open." },
      {
        id: 30,
        text: "Has a shrine dedicated to a celebrity crush in their closet.",
      },
      {
        id: 31,
        text: "Pretends to be a vampire and insists on drinking red-colored beverages to maintain the facade.",
      },
      { id: 32, text: "Claims to have psychic abilities." },
      { id: 33, text: "Has been in jail." },
      { id: 34, text: "Only communicates through bod language." },
      {
        id: 35,
        text: "Refers to themselves in the third person at all times.",
      },
      { id: 36, text: "Has an insatiable love for extreme couponing." },
      { id: 37, text: "Eats candy for breakfast." },
      { id: 38, text: "Must sleep with a nightlight, regardless of age." },
      { id: 39, text: "Laughs like the bad guys in horror movies." },
      { id: 40, text: "Insists on wearing socks and sandals everywhere." },
      { id: 41, text: "Want to have an open relationship." },
      {
        id: 42,
        text: "Have strong political opinions thats the opposite of yours.",
      },
      {
        id: 43,
        text: "Wants to live in a treehouse for the rest of their life.",
      },
      { id: 44, text: "Talks to you like a baby." },
      {
        id: 45,
        text: "Wears noise-canceling headphones constantly, even in social gatherings.",
      },
      {
        id: 46,
        text: "Has a habit of collecting old, expired food as a hobby.",
      },
      { id: 47, text: "Claims to be a time traveler from the future." },
      { id: 48, text: "Wears a monocle and top hat at all times." },
      {
        id: 49,
        text: "Refuses to sit on anything that isn't an exercise ball.",
      },
      {
        id: 50,
        text: "Believes in the mystical power of crystal healing and insists on its daily practice.",
      },
    ],
  },
  {
    id: "6",
    name: "Bonding Questions",
    link: "/bonding",
    strangerCards: [
      { id: "1", text: "What quality do you value the most in a friend?" },
      {
        id: "2",
        text: "If you could have one object with you in your pocket all the time, no matter the size, what would that object be?",
      },
      {
        id: "3",
        text: "If you could change one thing about the world, what would it be and why?",
      },
      { id: "4", text: "What is one goal or dream you have for your future?" },
      {
        id: "5",
        text: "What is your favorite book or movie, and why does it resonate with you?",
      },
      { id: "6", text: "What do you like cooking the most?" },
      {
        id: "7",
        text: "Name a hobby or interest you would like to implement in your life.",
      },
      { id: "8", text: "Do you believe in karma?" },
      { id: "9", text: "Where would you like to go for a vacation?" },
      { id: "10", text: "Have you ever broken a bone?" },
      { id: "11", text: "Which food could you eat all year long?" },
      { id: "12", text: "Are you a morning person or a night owl?" },
      { id: "13", text: "Which art do you like the most?" },
      {
        id: "14",
        text: "If you were stranded on a deserted island and could only bring three items with you, what would they be and why?",
      },
    ],
    friendCards: [
      { id: "1", text: "What quality do you value the most in a friend?" },
      {
        id: "2",
        text: "If your life were a TV show or movie, what genre would it be?",
      },
      {
        id: "3",
        text: "What do you usually do to avoid an uncomfortable situation?",
      },
      { id: "4", text: "Who is a brave person according to you?" },
      { id: "5", text: "Tell one goal or dream you have in life?" },
      { id: "6", text: "Which emotion drives you the most?" },
      { id: "7", text: "What makes you feel most loved?" },
      { id: "8", text: "What inspires you?" },
      { id: "9", text: "Do you like solo trips or going out with everyone?" },
      {
        id: "10",
        text: "Would you like to live on after your death as a ghost?",
      },
      { id: "11", text: "What is the most expensive thing you own?" },
      { id: "12", text: "What is your ideal weekend?" },
      {
        id: "13",
        text: "If you could travel anywhere in the world, where would you go and what would you do there?",
      },
      { id: "14", text: "Who was your biggest celebrity crush?" },
      { id: "15", text: "When did you make yourself the proudest?" },
      { id: "16", text: "Do you believe in ghosts?" },
      { id: "17", text: "Buying what keeps you the happiest?" },
      { id: "18", text: "What is your best skill?" },
      { id: "19", text: "Which is the most used app on your phone?" },
      { id: "20", text: "How would you choose to relax after a tiring day?" },
      { id: "21", text: "What small things do people do that make your day?" },
      {
        id: "22",
        text: "What would your first question be if you woke up after 10 years?",
      },
      { id: "23", text: "Are you addicted to anything? What is it?" },
    ],
    bestFriendCards: [
      {
        id: "1",
        text: "Describe a challenging experience you have had and how it shaped you as a person.",
      },
      { id: "2", text: "What are you most afraid of?" },
      { id: "3", text: "Do you listen to your heart or your head?" },
      { id: "4", text: "How do you express your anger?" },
      { id: "5", text: "What is the best phase of your life so far?" },
      {
        id: "6",
        text: "If you are hurt, would you rather be left alone or be hugged tight?",
      },
      {
        id: "7",
        text: "What is that one thing you would never exchange in your life for anything?",
      },
      { id: "8", text: "Would you adopt a child left at your doorstep?" },
      { id: "9", text: "Which date would you never forget?" },
      {
        id: "10",
        text: "What is the one thing you always wanted as a child but did not get?",
      },
      { id: "11", text: "What would you want to be remembered for?" },
      { id: "12", text: "What makes you feel free?" },
      { id: "13", text: "What makes you upset?" },
    ],
    coupleCards: [
      {
        id: "1",
        text: "If you are hurt, would you rather be left alone or be hugged tight?",
      },
      { id: "2", text: "How would you choose to relax after a tiring day?" },
      {
        id: "3",
        text: "What is the one thing you always wanted as a child but did not get?",
      },
      {
        id: "4",
        text: "What is your favorite memory of us as a couple, and why does it stand out to you?",
      },
      {
        id: "5",
        text: "If we could travel anywhere in the world together, where would you want to go and why?",
      },
      {
        id: "6",
        text: "What is one thing you appreciate about our relationship that you might not have expected when we first started dating?",
      },
      {
        id: "7",
        text: "If you could choose one activity for us to do together regularly, what would it be and why?",
      },
      {
        id: "8",
        text: "What is one personal goal you have for yourself, and how can I support you in achieving it?",
      },
      {
        id: "9",
        text: "What is your love language, and how can we better express love and affection to each other in ways that resonate with our individual needs?",
      },
      {
        id: "10",
        text: "What is something new or adventurous that you would like to try as a couple?",
      },
      {
        id: "11",
        text: "What are three qualities or characteristics you admire in me, and how do they contribute to our relationship?",
      },
      {
        id: "12",
        text: "How do you envision our future together, and what are some goals or dreams you have for us as a couple?",
      },
      {
        id: "13",
        text: "What is one thing that you believe sets our relationship apart from others, and why is it significant to you?",
      },
    ],
  },
  // {
  //   id: '7',
  //   name: 'explosive kitten',
  //   link: '/dealbreaker',
  // },
  // {
  //   id: '8',
  //   name: 'icebreaker questions',
  //   link: '/dealbreaker',
  // },
  {
    id: "9",
    name: "create game with ai",
    link: "/",
  },
];

export default games;
