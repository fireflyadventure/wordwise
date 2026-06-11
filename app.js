// ===================== DATA =====================
const DAILY_WORDS = [
  {w:"eloquent",p:"adjective",m:"Fluent or persuasive in speaking or writing",s:["She gave an eloquent speech at the ceremony.","His eloquent writing moved many readers.","The lawyer made an eloquent argument.","Her eloquent words brought tears to everyone.","He is known for his eloquent presentation style."]},
  {w:"resilient",p:"adjective",m:"Able to recover quickly from difficulties",s:["Children are often more resilient than adults think.","The resilient community rebuilt after the storm.","She proved resilient in the face of challenges.","A resilient economy bounces back from recession.","He remained resilient despite many setbacks."]},
  {w:"pragmatic",p:"adjective",m:"Dealing with things sensibly and realistically",s:["We need a pragmatic approach to this problem.","She is a pragmatic leader who gets results.","The pragmatic solution saved time and money.","Being pragmatic helped him succeed in business.","Let's be pragmatic about our budget."]},
  {w:"abundant",p:"adjective",m:"Existing or available in large quantities",s:["The garden had abundant flowers in spring.","There is abundant evidence to support the claim.","The region has abundant natural resources.","She has abundant energy for her age.","Food was abundant at the festival."]},
  {w:"diligent",p:"adjective",m:"Having or showing care in one's work or duties",s:["She is a diligent student who always studies hard.","Diligent workers are valued in every company.","His diligent research led to a breakthrough.","Be diligent about checking your work.","The diligent nurse cared for every patient."]},
  {w:"ambiguous",p:"adjective",m:"Open to more than one interpretation",s:["The message was ambiguous and confused everyone.","Avoid ambiguous language in legal documents.","His ambiguous reply left us uncertain.","The ending of the movie was ambiguous.","She gave an ambiguous smile."]},
  {w:"candid",p:"adjective",m:"Truthful and straightforward; frank",s:["He gave a candid interview about his struggles.","I appreciate your candid feedback.","She was candid about her mistakes.","The candid photo captured her real personality.","Let me be candid with you about this."]},
  {w:"endeavor",p:"noun",m:"An attempt to achieve a goal; a serious effort",s:["Starting a business is a challenging endeavor.","We wish you success in your new endeavor.","Scientific endeavor requires patience.","This endeavor will take several months.","Her artistic endeavor earned her fame."]},
  {w:"flourish",p:"verb",m:"To grow or develop in a healthy way",s:["Plants flourish in the right conditions.","The business began to flourish after the redesign.","Children flourish when they feel loved.","Arts and culture flourished during that era.","She flourished in her new role."]},
  {w:"gratitude",p:"noun",m:"The quality of being thankful",s:["She expressed her gratitude with a kind letter.","I feel deep gratitude for your help.","Gratitude can improve your mental health.","Show gratitude to those who support you.","His eyes filled with gratitude."]},
  {w:"humble",p:"adjective",m:"Having a modest view of one's importance",s:["Despite his success, he remained humble.","She comes from humble beginnings.","A humble attitude earns respect.","The humble farmer helped his neighbors.","Be humble enough to learn from others."]},
  {w:"innovate",p:"verb",m:"To introduce new methods, ideas, or products",s:["Companies must innovate to stay competitive.","She loves to innovate in the kitchen.","Technology allows us to innovate faster.","We need to innovate our approach.","The team was encouraged to innovate."]},
  {w:"meticulous",p:"adjective",m:"Showing great attention to detail",s:["She is meticulous about her work.","The meticulous planning paid off.","He kept meticulous records of expenses.","A meticulous chef measures every ingredient.","The report was meticulous and thorough."]},
  {w:"nurture",p:"verb",m:"To care for and encourage growth",s:["Parents nurture their children with love.","Teachers nurture creativity in students.","She nurtures her garden every morning.","Good managers nurture talent in their teams.","We must nurture the environment."]},
  {w:"optimistic",p:"adjective",m:"Hopeful and confident about the future",s:["She is optimistic about the project's success.","An optimistic outlook helps during tough times.","The doctor was optimistic about recovery.","Stay optimistic even when things are hard.","The team felt optimistic after the meeting."]},
  {w:"persevere",p:"verb",m:"To continue despite difficulty or delay",s:["She persevered through many hardships.","You must persevere to achieve your dreams.","He persevered and finally passed the exam.","Athletes persevere through pain and fatigue.","Persevere and you will see results."]},
  {w:"versatile",p:"adjective",m:"Able to adapt to many different functions",s:["She is a versatile actress who plays many roles.","This versatile tool can be used for many tasks.","A versatile player is valuable to any team.","The fabric is versatile and easy to work with.","He is a versatile musician."]},
  {w:"authentic",p:"adjective",m:"Of undisputed origin; genuine",s:["The restaurant serves authentic Italian food.","Her authentic personality attracts people.","Make sure you buy authentic products.","The painting was confirmed as authentic.","Being authentic builds trust with others."]},
  {w:"benevolent",p:"adjective",m:"Well-meaning and kindly",s:["The benevolent donor funded the school.","She had a benevolent smile.","A benevolent leader cares for the people.","His benevolent nature was known by all.","The organization has benevolent goals."]},
  {w:"compelling",p:"adjective",m:"Evoking interest or attention in a powerful way",s:["The book tells a compelling story.","She made a compelling case for change.","The evidence was compelling.","It was a compelling performance.","He gave a compelling reason to stay."]},
  {w:"elaborate",p:"adjective",m:"Involving many carefully arranged parts; detailed",s:["The wedding had elaborate decorations.","She gave an elaborate explanation.","The plan was elaborate but effective.","He cooked an elaborate dinner for guests.","The costume was elaborate and beautiful."]},
  {w:"feasible",p:"adjective",m:"Possible and practical to do easily",s:["Is this plan feasible within our budget?","The engineer confirmed the design was feasible.","We need to find a feasible solution.","It is not feasible to finish by tomorrow.","The idea sounds feasible to me."]},
  {w:"generous",p:"adjective",m:"Showing readiness to give more than necessary",s:["She made a generous donation to charity.","He is generous with his time.","Thank you for your generous offer.","A generous portion of food was served.","The company has a generous leave policy."]},
  {w:"harmony",p:"noun",m:"The state of being in agreement or peace",s:["The team works in harmony.","Music creates a sense of harmony.","They live in harmony with nature.","Harmony among neighbors makes life pleasant.","The colors are in perfect harmony."]},
  {w:"initiative",p:"noun",m:"The ability to act independently and with a fresh approach",s:["She took the initiative to start the project.","Employers value workers who show initiative.","The government launched a new health initiative.","On his own initiative, he organized the event.","Take the initiative and introduce yourself."]},
  {w:"justify",p:"verb",m:"To show or prove to be right or reasonable",s:["Can you justify the extra expense?","He tried to justify his decision.","The results justify our investment.","Nothing can justify that kind of behavior.","She justified her absence with a doctor's note."]},
  {w:"keen",p:"adjective",m:"Eager or enthusiastic; sharp",s:["She has a keen interest in science.","He has a keen eye for detail.","The students were keen to participate.","A keen sense of smell helped the dog.","She is keen on learning new languages."]},
  {w:"lament",p:"verb",m:"To express sorrow or regret",s:["He lamented the loss of his old friend.","She lamented not studying harder.","The community lamented the closing of the park.","Don't lament what you cannot change.","They lamented the damage caused by the fire."]},
  {w:"magnificent",p:"adjective",m:"Extremely beautiful, elaborate, or impressive",s:["The view from the mountain was magnificent.","She wore a magnificent gown to the ball.","The palace had magnificent architecture.","What a magnificent performance!","The sunset was truly magnificent."]},
  {w:"noteworthy",p:"adjective",m:"Interesting or significant enough to deserve attention",s:["Her achievement is truly noteworthy.","The report highlights several noteworthy trends.","A noteworthy event occurred last week.","His contribution was noteworthy.","That is a noteworthy improvement."]},
  {w:"obstacle",p:"noun",m:"A thing that blocks or hinders progress",s:["Lack of funding was the main obstacle.","She overcame every obstacle in her path.","Don't let obstacles discourage you.","The team found a way around the obstacle.","Language can be an obstacle for travelers."]},
  {w:"profound",p:"adjective",m:"Very great or intense; deep",s:["The book had a profound impact on me.","She made a profound observation.","His words had a profound effect on the audience.","The loss had a profound effect on the family.","It was a profound moment of realization."]},
  {w:"quest",p:"noun",m:"A long search for something",s:["She is on a quest for knowledge.","The quest for the perfect recipe continues.","His quest took him around the world.","The quest for truth is never easy.","They began a quest to find the treasure."]},
  {w:"revere",p:"verb",m:"To feel deep respect or admiration",s:["People revere her for her kindness.","He is revered as a great leader.","The community reveres its elders.","She is revered in the music industry.","Students revere the dedicated professor."]},
  {w:"sustain",p:"verb",m:"To keep going over time; to maintain",s:["We need to sustain this level of effort.","Good nutrition helps sustain energy levels.","The project aims to sustain local jobs.","She struggled to sustain her attention.","Trees help sustain the environment."]},
  {w:"thrive",p:"verb",m:"To prosper or flourish",s:["Businesses thrive in a stable economy.","She thrives under pressure.","Plants thrive in sunlight and water.","Children thrive when given encouragement.","The community continues to thrive."]},
  {w:"unique",p:"adjective",m:"Being the only one of its kind",s:["Every person has a unique fingerprint.","The shop sells unique handmade items.","Her style is truly unique.","This is a unique opportunity.","The restaurant has a unique atmosphere."]},
  {w:"vivid",p:"adjective",m:"Producing strong, clear images in the mind",s:["She has vivid memories of her childhood.","The artist used vivid colors.","He gave a vivid description of the scene.","The dream was so vivid it felt real.","Vivid storytelling captivates the audience."]},
  {w:"wholesome",p:"adjective",m:"Conducive to good health and well-being",s:["She prepared a wholesome meal for the family.","The show promotes wholesome values.","Fresh air and exercise are wholesome activities.","It was a wholesome community event.","He grew up in a wholesome environment."]},
  {w:"zealous",p:"adjective",m:"Having great energy or enthusiasm",s:["She is a zealous advocate for animal rights.","The zealous volunteer worked every weekend.","His zealous effort impressed the team.","Zealous fans cheered throughout the game.","She was zealous about fitness."]},
  {w:"advocate",p:"verb",m:"To publicly support or recommend",s:["She advocates for equal rights.","Doctors advocate regular exercise.","He advocates a balanced diet.","They advocate for better education.","The group advocates policy changes."]},
  {w:"brevity",p:"noun",m:"Concise and exact use of words",s:["Brevity is the soul of wit.","He is known for the brevity of his speeches.","The brevity of the meeting surprised everyone.","Write with brevity and clarity.","The brevity of summer makes it precious."]},
  {w:"contemplate",p:"verb",m:"To think about something deeply",s:["She sat by the lake to contemplate life.","He contemplated his next career move.","Take time to contemplate before deciding.","She contemplated the meaning of the poem.","They contemplated the offer for a week."]},
  {w:"deliberate",p:"adjective",m:"Done consciously and intentionally",s:["It was a deliberate choice, not an accident.","She made a deliberate effort to be kind.","The pace of the meeting was slow and deliberate.","His deliberate actions showed great care.","The decision was calm and deliberate."]},
  {w:"enhance",p:"verb",m:"To improve the quality or value of something",s:["Spices enhance the flavor of food.","Technology can enhance learning.","She enhanced her skills through practice.","Good lighting enhances the room's appearance.","The update enhances user experience."]},
  {w:"frugal",p:"adjective",m:"Sparing or economical with money or food",s:["She lives a frugal but happy life.","Being frugal helped him save money.","The frugal shopper always finds deals.","Frugal habits lead to financial security.","He prepared a frugal but tasty meal."]},
  {w:"grit",p:"noun",m:"Courage and determination despite difficulty",s:["She showed real grit during the competition.","Grit is more important than talent.","His grit helped him overcome poverty.","The soldiers showed incredible grit.","Success requires both skill and grit."]},
  {w:"hinder",p:"verb",m:"To make it difficult for something to happen",s:["Bad weather can hinder travel plans.","Don't let fear hinder your progress.","Lack of sleep hinders concentration.","Nothing should hinder your education.","The injury hindered his performance."]},
  {w:"impeccable",p:"adjective",m:"In accordance with the highest standards; faultless",s:["Her taste in clothing is impeccable.","The service at the hotel was impeccable.","He has an impeccable record.","She speaks with impeccable grammar.","The timing was impeccable."]},
  {w:"jubilant",p:"adjective",m:"Feeling or expressing great happiness",s:["The team was jubilant after winning.","Jubilant crowds filled the streets.","She felt jubilant on her graduation day.","The jubilant fans celebrated all night.","He was jubilant when he got the job."]},
  {w:"kindle",p:"verb",m:"To arouse or inspire an emotion or feeling",s:["The teacher kindled a love for reading.","Music can kindle deep emotions.","The trip kindled her interest in history.","His words kindled hope in the audience.","She kindled the fire and warmed the room."]},
  {w:"lucid",p:"adjective",m:"Expressed clearly; easy to understand",s:["She gave a lucid explanation of the theory.","His writing style is lucid and engaging.","The instructions were lucid and simple.","He had a lucid dream last night.","The professor's lectures are always lucid."]},
  {w:"mundane",p:"adjective",m:"Lacking interest or excitement; dull",s:["She found the mundane tasks boring.","Even mundane chores can be meditative.","He escaped mundane life through books.","The movie was disappointingly mundane.","Don't overlook the beauty in mundane moments."]},
  {w:"novice",p:"noun",m:"A person new to or inexperienced in a field",s:["As a novice, she made some mistakes.","The class is designed for novice learners.","Even a novice can learn to cook well.","He started as a novice and became an expert.","The novice gardener asked for advice."]},
  {w:"obscure",p:"adjective",m:"Not discovered or known about; uncertain",s:["The village is in an obscure corner of the country.","He referenced an obscure historical fact.","The meaning of the text was obscure.","She found an obscure but interesting book.","The path was obscure and hard to follow."]},
  {w:"peculiar",p:"adjective",m:"Strange or odd; unusual",s:["She noticed a peculiar smell in the room.","He has a peculiar habit of talking to plants.","The weather has been peculiar lately.","There was something peculiar about the letter.","The town has its own peculiar charm."]},
  {w:"quench",p:"verb",m:"To satisfy a thirst or desire",s:["Cold water quenched her thirst.","Nothing could quench his curiosity.","The rain quenched the dry earth.","She quenched her desire for adventure.","A good book quenches the mind's thirst."]},
  {w:"reluctant",p:"adjective",m:"Unwilling and hesitant",s:["She was reluctant to speak in public.","He gave a reluctant nod of agreement.","The reluctant hero saved the day.","They were reluctant to change their plans.","She was reluctant to leave her hometown."]},
  {w:"serene",p:"adjective",m:"Calm, peaceful, and untroubled",s:["The lake was serene at dawn.","She maintained a serene expression.","The garden provides a serene escape.","He felt serene after meditation.","The serene countryside calmed her nerves."]},
  {w:"tenacious",p:"adjective",m:"Holding firmly to something; persistent",s:["She is a tenacious negotiator.","His tenacious spirit never gave up.","The tenacious athlete recovered from injury.","A tenacious grip on the rope saved him.","Her tenacious research led to a discovery."]},
  {w:"unveil",p:"verb",m:"To show or reveal something for the first time",s:["The company will unveil its new product today.","She unveiled her painting at the gallery.","The mayor unveiled the new park.","Scientists unveiled groundbreaking research.","He unveiled his plans for the future."]},
  {w:"vibrant",p:"adjective",m:"Full of energy and life",s:["The market was vibrant with colors and sounds.","She has a vibrant personality.","The city has a vibrant cultural scene.","Vibrant flowers filled the garden.","The painting uses vibrant shades of blue."]},
  {w:"wander",p:"verb",m:"To walk or move in a leisurely or aimless way",s:["She loves to wander through old bookshops.","They wandered along the beach at sunset.","His mind began to wander during the lecture.","We wandered the streets of the old city.","Don't wander too far from the group."]},
  {w:"yearn",p:"verb",m:"To have an intense feeling of longing",s:["She yearned for a peaceful life.","He yearned to see his family again.","The travelers yearned for home.","She yearned for adventure and freedom.","He yearned to learn new things."]},
  {w:"alleviate",p:"verb",m:"To make suffering or a problem less severe",s:["The medicine helped alleviate the pain.","Exercise can alleviate stress.","The charity works to alleviate poverty.","Good communication alleviates misunderstandings.","She tried to alleviate his worries."]},
  {w:"benign",p:"adjective",m:"Gentle and kind; not harmful",s:["The tumor was found to be benign.","He has a benign personality.","The benign climate is good for farming.","She gave a benign smile to the child.","The comment was meant to be benign."]},
  {w:"coherent",p:"adjective",m:"Logical and consistent; easy to follow",s:["She presented a coherent argument.","The essay was well-organized and coherent.","Make sure your ideas are coherent.","He was barely coherent after waking up.","A coherent plan will lead to success."]},
  {w:"deter",p:"verb",m:"To discourage someone from doing something",s:["The alarm system deters burglars.","Rain did not deter the hikers.","High prices deter some customers.","Nothing could deter her from her goal.","The warning sign deters trespassers."]},
  {w:"empathy",p:"noun",m:"The ability to understand and share feelings of another",s:["She showed great empathy toward the victims.","Empathy is key to good leadership.","He listened with empathy and care.","Teaching empathy helps build a better society.","Empathy bridges the gap between people."]},
  {w:"formidable",p:"adjective",m:"Inspiring fear or respect through size or capability",s:["She is a formidable chess player.","The mountain presented a formidable challenge.","He faced a formidable opponent.","The team has a formidable reputation.","Learning a new language can seem formidable."]},
  {w:"gratify",p:"verb",m:"To give pleasure or satisfaction",s:["It gratified her to see the students succeed.","The results gratified the researchers.","He was gratified by the warm welcome.","Helping others gratifies the soul.","The response was gratifying."]},
];

const IMAGE_PROMPTS = [
  {emoji:"🏠🌳🌤️🐕",theme:"Home & Garden",hints:["house","tree","garden","dog","sunny","yard","roof","fence","grass","pet","porch","window","door","plant","flower","lawn","sky","cloud","warm","family"]},
  {emoji:"🏖️🌊🐚☀️",theme:"Beach Day",hints:["beach","ocean","wave","sand","shell","sun","swim","surf","coast","shore","tide","towel","water","palm","island","boat","fish","dive","salt","breeze"]},
  {emoji:"🍳🥗🍞🧀",theme:"Kitchen",hints:["cook","food","meal","bread","salad","cheese","egg","plate","knife","fork","spoon","bowl","oven","fry","mix","chop","taste","recipe","fresh","lunch"]},
  {emoji:"📚✏️🎒🏫",theme:"School",hints:["book","study","learn","teach","class","desk","pen","paper","read","write","exam","grade","math","note","board","chair","school","pupil","lesson","test"]},
  {emoji:"🏋️🏃🧘🥇",theme:"Sports & Fitness",hints:["sport","run","jump","gym","fit","train","medal","race","win","team","play","kick","throw","catch","score","coach","strong","fast","goal","match"]},
  {emoji:"🎵🎸🎹🎤",theme:"Music",hints:["music","song","sing","play","band","drum","note","tune","beat","dance","piano","sound","loud","soft","choir","stage","show","live","hear","voice"]},
  {emoji:"🌧️🍂🧣☕",theme:"Autumn Day",hints:["rain","leaf","fall","cold","coat","scarf","warm","drink","tea","wind","storm","brown","damp","cloud","chill","crisp","fog","dew","mist","cozy"]},
  {emoji:"🚗🛣️⛽🗺️",theme:"Road Trip",hints:["drive","road","car","trip","fuel","map","turn","speed","lane","sign","stop","park","ride","tire","seat","mile","route","bridge","truck","view"]},
];

const MAKER_WORDS = ["extraordinary","comfortable","dictionary","wonderful","butterfly","beautiful","adventure","knowledge","education","celebrate","happiness","wonderful","landscape","brilliant","discovery","incredible","experience","understand","strawberry","generation"];

// 2-3 element photo themes that give learners plenty to describe
const PHOTO_THEMES = [
  ['dog', 'park'], ['cat', 'window'], ['children', 'playing'], ['market', 'fruit'],
  ['rain', 'umbrella', 'street'], ['beach', 'family'], ['train', 'station'], ['kitchen', 'cooking'],
  ['bird', 'tree'], ['bicycle', 'street'], ['boat', 'river'], ['horse', 'field'],
  ['flowers', 'garden'], ['snow', 'mountain'], ['coffee', 'book'], ['football', 'children'],
  ['bridge', 'city', 'night'], ['farmer', 'field'], ['musician', 'street'], ['temple', 'people']
];

const COMMON_WORDS = new Set(["the","of","and","a","to","in","is","it","that","was","for","on","are","with","as","at","be","this","have","from","or","an","by","not","but","what","all","were","when","we","there","can","had","one","each","which","do","how","if","will","up","other","about","out","many","then","them","her","like","so","these","its","would","make","has","him","two","more","no","time","very","your","could","over","such","after","use","into","just","also","any","may","some","than","new","you","way","who","did","get","my","been","now","long","come","made","find","day","most","part","take","got","know","run","see","set","well","back","big","end","put","old","too","same","tell","does","where","hand","high","keep","last","let","say","great","help","low","line","turn","move","live","real","left","far","lot","kind","go","give","good","much","still","own","work","try","ask","men","our","even","right","look","here","thing","why","came","want","call","need","house","sure","head","body","room","name","feel","play","small","home","read","off","big","saw","went","year","few","once","told","open","seem","next","walk","begin","grow","both","city","hard","book","bit","door","best","miss","plan","hour","game","food","land","rest","free","full","life","side","able","hold","pull","pick","flat","drop","lead","done","bring","close","stay","stand","fall","hope","learn","write","black","eat","leave","idea","note","late","less","main","fine","girl","stop","fish","mark","river","send","dark","point","sea","star","draw","tree","form","fact","hear","love","word","act","deal","true","care","deep","step","fast","test","ball","air","wide","pass","nice","age","rose","shop","ring","fire","area","east","art","west","fill","key","lay","poor","top","add","cup","cut","fit","hot","job","sad","sit","bit","dry","mix","nor","eat","bar","sky","tie","won","own","age","act","bed","bit","box","bus","buy","cry","cup","dog","ear","eat","egg","end","far","fee","fit","fly","fun","gas","got","gun","hat","hit","hot","ice","job","key","kid","lay","leg","lie","lip","map","net","nor","odd","oil","pop","raw","row","sad","saw","sir","sit","six","son","sum","tea","ten","tip","top","toy","try","van","via","war","win","won","yes","yet","age","aid","aim","air","arm","art","bag","ban","bar","bat","bay","bed","bet","bid","bit","bow","box","bug","bus","buy","cab","cap","cat","cop","cow","cry","cup","cut","dad","dam","dig","dip","dot","due","dug","dye","era","fan","fat","fed","fee","few","fig","fin","fly","fog","for","fox","fur","gap","gay","god","got","gum","gun","gut","gym","hat","hay","hen","hid","him","hip","hit","hog","hop","hot","hub","hug","hut","ice","ill","ink","inn","ion","jam","jar","jaw","jet","joy","jug","key","kid","kit","lab","lad","lag","lap","law","lay","leg","lid","lie","lip","log","lot","low","mad","man","map","mat","may","mix","mob","mod","mom","mop","mud","mug","nap","net","new","nod","nor","not","now","nun","nut","oak","odd","oil","old","one","ore","our","out","owe","owl","own","pad","pan","pat","paw","pay","pea","peg","pen","per","pet","pie","pig","pin","pit","pod","pop","pot","pub","pug","pun","pup","put","rag","ram","ran","rat","raw","ray","red","ref","rib","rid","rim","rip","rod","rot","row","rub","rug","run","rut","sad","sag","sap","sat","saw","say","sea","set","sew","shy","sin","sip","sir","sis","sit","six","ski","sky","sly","sob","sod","son","sop","sow","spa","spy","sum","sun","tab","tad","tag","tan","tap","tar","tax","tea","ten","the","tie","tin","tip","toe","ton","too","top","tow","toy","try","tub","tug","two","urn","use","van","vat","vet","via","vow","wag","war","was","wax","way","web","wed","wet","who","why","wig","win","wit","woe","wok","won","woo","wow","yam","yap","yaw","yes","yet","yew","you","zap","zen","zip","zoo","able","also","area","army","away","baby","back","ball","band","bank","base","bath","bear","beat","been","bell","belt","bend","best","bill","bird","bite","blow","blue","boat","body","bomb","bond","bone","book","born","boss","both","burn","busy","call","calm","came","camp","card","care","case","cash","cast","cell","chat","chip","city","club","coal","coat","code","cold","come","cook","cool","copy","core","cost","crew","crop","cure","dare","dark","data","date","dawn","dead","deaf","deal","dear","debt","deck","deep","deer","diet","dirt","dish","disk","dock","does","done","door","dose","down","draw","drew","drop","drum","dual","duke","dumb","dump","dust","duty","each","earn","ease","east","easy","edge","else","even","ever","evil","exam","exit","face","fact","fade","fail","fair","fall","fame","farm","fast","fate","fear","feed","feel","feet","fell","file","fill","film","find","fine","fire","firm","fish","flag","flat","fled","flew","flip","flow","folk","font","food","fool","foot","ford","fore","fork","form","fort","foul","four","free","from","fuel","full","fund","fury","fuse","gain","game","gang","gate","gave","gaze","gear","gene","gift","girl","give","glad","glow","glue","goat","goes","gold","golf","gone","good","grab","gray","grew","grey","grid","grin","grip","grow","gulf","gust","guys","hair","half","hall","halt","hand","hang","hard","harm","hate","have","head","heal","heap","hear","heat","heel","held","help","here","hero","hide","high","hike","hill","hint","hire","hold","hole","holy","home","hook","hope","horn","host","huge","hung","hunt","hurt","idea","inch","into","iron","item","jack","jail","jean","joke","jump","jury","just","keen","keep","kept","kick","kids","kill","kind","king","knee","knew","knit","knot","know","lack","lady","laid","lake","lamp","land","lane","last","late","lawn","lead","leaf","lean","left","lend","lens","less","liar","lick","life","lift","like","limb","lime","limp","line","link","lion","list","live","load","loan","lock","loft","logo","lone","long","look","loop","lord","lose","loss","lost","lots","loud","love","luck","lump","lung","made","mail","main","make","male","mall","many","mark","mass","mate","math","meal","mean","meat","meet","melt","memo","menu","mere","mess","mild","mile","milk","mill","mind","mine","miss","mode","mood","moon","more","most","move","much","must","myth","nail","name","navy","neat","neck","need","nest","news","next","nine","node","none","noon","norm","nose","note","noun","odds","okay","once","only","onto","open","oral","ours","oven","over","pace","pack","page","paid","pain","pair","pale","palm","pant","park","part","pass","past","path","peak","peer","pick","pile","pine","pink","pipe","plan","play","plea","plot","plug","plus","poem","poet","poll","pond","pool","poor","pope","pork","port","pose","post","pour","pray","pull","pump","pure","push","quit","race","rack","rage","rail","rain","rank","rare","rate","read","real","rear","rely","rent","rest","rice","rich","ride","ring","riot","rise","risk","road","roam","rock","rode","role","roll","roof","room","root","rope","rose","rough","round","route","rude","ruin","rule","rush","sack","safe","sage","said","sake","sale","salt","same","sand","sang","sank","save","seal","seat","seed","seek","seem","seen","self","sell","send","sent","shed","shin","ship","shock","shoe","shook","shop","shore","short","shot","show","shut","sick","side","sigh","sign","silk","sing","sink","site","size","skin","skip","slam","slap","slip","slot","slow","snap","snow","soak","soar","sock","soft","soil","sold","sole","some","song","soon","sort","soul","sour","spin","spit","spot","star","stay","stem","step","stir","stop","such","suit","sure","swap","swim","tail","take","tale","talk","tall","tank","tape","task","team","tear","tell","tend","tent","term","test","text","than","that","them","then","they","thin","this","tick","tide","tidy","tied","till","time","tiny","tire","toes","told","toll","tone","took","tool","tops","tore","torn","tour","town","trap","tray","tree","trim","trio","trip","true","tube","tuck","tuna","tune","turn","twin","type","ugly","undo","unit","upon","urge","used","user","uses","vain","vast","verb","very","vice","view","vine","void","vote","wage","wait","wake","walk","wall","want","ward","warm","warn","wash","wave","weak","wear","weed","week","well","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","woke","wolf","wood","wool","word","wore","work","worm","worn","wrap","yard","yeah","year","yoga","zero","zone"]);

// ===================== DATABASE =====================
let db;
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('wordwise', 3);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('words')) {
        const s = d.createObjectStore('words', { keyPath: 'word' });
        s.createIndex('date', 'dateAdded');
      }
      if (!d.objectStoreNames.contains('scores')) {
        d.createObjectStore('scores', { keyPath: 'game' });
      }
      if (!d.objectStoreNames.contains('game_words')) {
        const gs = d.createObjectStore('game_words', { autoIncrement: true });
        gs.createIndex('dateKey', 'dateKey');
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror = e => reject(e.target.error);
  });
}

function dbPut(store, data) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(data);
    tx.oncomplete = () => resolve();
    tx.onerror = e => reject(e.target.error);
  });
}

function dbGet(store, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = e => reject(e.target.error);
  });
}

function dbGetAll(store) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = e => reject(e.target.error);
  });
}

function dbAdd(store, data) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).add(data);
    tx.oncomplete = () => resolve();
    tx.onerror = e => reject(e.target.error);
  });
}

function dbDelete(store, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = e => reject(e.target.error);
  });
}

// ===================== STATE =====================
let allWords = [];
let currentView = 'dashboard';
let currentGame = null;
let gameTimer = null;
let gameTimeLeft = 300;
let gameScore = 0;
let gameWords = [];
let gameState = {};
let gameTotalTime = 300;
let addWordWarned = '';
let addWordChecking = false;

// ===================== GAME PHOTO =====================
function loadGamePhoto() {
  const photo = document.getElementById('prompt-photo');
  const fallback = document.getElementById('emoji-fallback');
  if (!photo) return;

  const lock = Math.floor(Math.random() * 100000);
  const url = `https://picsum.photos/seed/${lock}/600/380`;

  // On first load show emoji while waiting; on shuffle keep current view
  const firstLoad = !photo.src || photo.classList.contains('hidden');
  if (firstLoad) {
    photo.classList.add('hidden');
    fallback?.classList.remove('hidden');
  }

  // Preload into a temp image — swap the visible element only when ready
  const tmp = new Image();
  const giveUp = setTimeout(() => { tmp.src = ''; }, 10000);

  tmp.onload = () => {
    clearTimeout(giveUp);
    photo.src = url;
    photo.classList.remove('hidden');
    fallback?.classList.add('hidden');
  };
  tmp.onerror = () => {
    clearTimeout(giveUp);
    // Offline or failed — emoji stays visible (already shown on first load)
    if (!firstLoad) {
      // Keep whatever was showing before shuffle
    }
  };
  tmp.src = url;
}

// ===================== SPELL CHECK =====================
// Local 10k-word list (words.js) answers instantly and offline;
// unknown words are verified against the dictionary API when online.
const WORD_SET = new Set(typeof WORD_LIST !== 'undefined' ? WORD_LIST : []);
const spellCache = new Map();

// Supplementary list for common words missing from the content-filtered 10k list
const EXTRA_WORDS = new Set((
  'hell yell dull gull gill sill cull lull mull null bull hull ' +
  'bell sell tell fell cell well dell jell err burr purr blur ' +
  'fuzz buzz jazz fizz whiz fizz ' +
  'awe axe ebb eel elf eon foe fir fur gem gel hem hew hoe hub ' +
  'lye maw nub ode pew roe rye vim awl elm ivy peg pry raj sap ' +
  'beg bog bop bud bun cob cog cot cub cud cur din dud fob gag ' +
  'gob hob jag jig jog jot keg kin lob lop nag nip nix nog pip ' +
  'rig sup tot urn vex vow yak yam yap ' +
  'balm bony boon cozy gory hazy helm loon pony puny wavy gravy ' +
  'blur slur smug snob snug throb thud thug trod trot tryst ' +
  'drab dreg drip drub drum dusk gust gust husk husk lust must ' +
  'rust bust just dust crust trust crest brisk crisp ' +
  'whim whin whip whit writ ' +
  'clod clop clot clog clam clap clan claw cling clip ' +
  'blob blot blew blip blimp ' +
  'flab flag flap flat flaw flay flea fled flew flip flit ' +
  'glob glop glut glow glum ' +
  'plod plop plot plow pluck plug plum ' +
  'slob slop slot slow slug slum slur ' +
  'snag snap snip snob snod snog snog ' +
  'span spar spat spew spin spit spot spud spun spur ' +
  'stab stag slab slam slap star stem stew stir ' +
  'swab swam swap swat sway swum ' +
  'twit twos ' +
  'abet ache acme acne acre afar ague airy akin aloe aloe also ' +
  'amok anal anew ankh ante anti ants apex apex arcs ' +
  'bard bawl bray brim brow ' +
  'calx carb carp cede celt cess chap char chat chef chew chic chop chum ' +
  'clew cloy clue coax coda coin cola comp cord corp coup coupe cove cowl coy ' +
  'daft dale damp dank daps dare darn dart daze deft dele dent derp ' +
  'egad egad epic ' +
  'fain fake fame fang faze feat fern feud fief file fisc fist fjord flab flan ' +
  'gait gale garb gawk gaze gibe gild gimp gird girn gist glad glib glob ' +
  'hale hank hare harm harp hash hasp hast hath haul haunt haven heed hemp hilt ' +
  'idle iamb icon icky ikon imam imps inch inks inky isle itch itsy ' +
  'jeer jibe jink jinx jibs joust jowl junk ' +
  'kale keel keen kelp kerf kern kilt knob knop ' +
  'lace lain lard lark lath laud lax laze laze lean leer lilt limp lint loll ' +
  'mace malt mane mare mask mast meld melt mime mint mire mire ' +
  'naff nape nave neap need neon nebs nick niff nigh nimb nips node noir nosh notch ' +
  'oafs oaks oast oath oats oboe odds ohms omen omit orbs orca orgy orts ouph ' +
  'pace pact pang pare pare pave pawl penal pend perk pert pica pier pine pith pixy plaid plie ploy ' +
  'quad quid quip quit quiz quod ' +
  'rack raft rake ramp rand rang rant rasp raze reef reek rend rent rick rife rift rime rimy rind rive ' +
  'sack sage sail sake sang sank sari sash sate saul scab scad scam scamp scar scow seep serf shah shed shin shiv shiv shot shod shrug shun shut ' +
  'tack tads tale tang tare tart taut teem than thee them then thin this thorn tint tire toad toll tome tong toot torc tote trek trim trio trod trop ' +
  'ulna urea urge ' +
  'vale vale vamp vane veld vent verb vibe vole volt vortex vote vouch vroom ' +
  'wade wail wane warp wary weal weal wean weep weld welt wend whet whim whir wile wisp woad woad woke wolf woof wren writ ' +
  'yore yogi yuan yurt ' +
  'zeal zest zinc zing zone zoom zoos'
).split(' ').filter(Boolean));

function isKnownLocal(w) {
  if (WORD_SET.has(w) || COMMON_WORDS.has(w) || EXTRA_WORDS.has(w)) return true;
  // Accept common inflections of known base words: cats, boxes, walked, running, cities
  const tries = [
    [/s$/, ''], [/es$/, ''], [/ed$/, ''], [/ed$/, 'e'],
    [/ing$/, ''], [/ing$/, 'e'], [/ies$/, 'y'], [/er$/, ''], [/est$/, '']
  ];
  for (const [suf, rep] of tries) {
    if (suf.test(w)) {
      const base = w.replace(suf, rep);
      if (base.length >= 2 && (WORD_SET.has(base) || COMMON_WORDS.has(base))) return true;
    }
  }
  return false;
}

// true = real word, false = not found (misspelled), null = can't check (offline)
async function verifyWordOnline(word) {
  if (spellCache.has(word)) return spellCache.get(word);
  if (!navigator.onLine) return null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, { signal: ctrl.signal });
    clearTimeout(t);
    if (res.status === 404) { spellCache.set(word, false); return false; }
    if (!res.ok) return null;
    spellCache.set(word, true);
    return true;
  } catch {
    return null;
  }
}

// ===================== WORD HELPERS =====================
function canMakeFrom(word, letters) {
  const available = [...letters];
  for (const ch of word) {
    const idx = available.indexOf(ch);
    if (idx === -1) return false;
    available.splice(idx, 1);
  }
  return true;
}

// Word Maker rule: any letter present in the source may be reused freely
function canUseSourceLetters(word, sourceSet) {
  for (const ch of word) {
    if (!sourceSet.has(ch)) return false;
  }
  return true;
}

function wordsFromLetters(source) {
  const sourceSet = new Set(source.toLowerCase());
  const result = [];
  for (const w of COMMON_WORDS) {
    if (w.length >= 3 && w.length <= source.length && canUseSourceLetters(w, sourceSet)) result.push(w);
  }
  return result.sort((a, b) => a.length - b.length || a.localeCompare(b));
}

// ===================== NAVIGATION =====================
function navigate(view, skipPush) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) el.classList.add('active');
  currentView = view;
  document.body.classList.toggle('in-game', view === 'game-play');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { dashboard: 0, dictionary: 1, games: 2, stats: 3 };
  if (navMap[view] !== undefined) {
    document.querySelectorAll('.nav-item')[navMap[view]].classList.add('active');
  }

  if (view === 'dashboard') refreshDashboard();
  if (view === 'dictionary') refreshDictionary();
  if (view === 'stats') refreshStats();
  if (view === 'games') refreshGameCards();
}

document.getElementById('bottom-nav')?.addEventListener('click', e => {
  const item = e.target.closest('.nav-item');
  if (!item) return;
  navigate(item.dataset.view);
});

// ===================== USER PROFILE =====================
function getProfile() {
  try { return JSON.parse(localStorage.getItem('apexlex-profile')); } catch { return null; }
}

function saveProfile(name) {
  const prev = getProfile() || {};
  localStorage.setItem('apexlex-profile', JSON.stringify({
    name,
    since: prev.since || new Date().toISOString()
  }));
}

function showWelcomeScreen() {
  const p = getProfile();
  if (p?.name) document.getElementById('welcome-name').value = p.name;
  document.getElementById('welcome-screen').classList.remove('hidden');
  setTimeout(() => document.getElementById('welcome-name')?.focus(), 400);
}

function applyProfile() {
  const profile = getProfile();
  const avatar = document.getElementById('avatar-btn');
  if (profile?.name) {
    avatar.textContent = profile.name[0].toUpperCase();
    avatar.classList.remove('hidden');
  }
  refreshDashboard();
}

document.getElementById('welcome-start')?.addEventListener('click', () => {
  const name = document.getElementById('welcome-name').value.trim();
  if (!name) {
    document.getElementById('welcome-name').focus();
    return;
  }
  saveProfile(name);
  document.getElementById('welcome-screen').classList.add('hidden');
  applyProfile();
  showSnackbar(`Welcome to Apexlex, ${name}!`);
});
document.getElementById('welcome-name')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('welcome-start').click();
});

// Avatar -> profile sheet
document.getElementById('avatar-btn')?.addEventListener('click', () => {
  document.getElementById('profile-name').value = getProfile()?.name || '';
  document.getElementById('modal-profile').classList.add('active');
});
document.getElementById('profile-save')?.addEventListener('click', () => {
  const name = document.getElementById('profile-name').value.trim();
  if (!name) { document.getElementById('profile-name').focus(); return; }
  saveProfile(name);
  document.getElementById('modal-profile').classList.remove('active');
  applyProfile();
  showSnackbar('Profile updated!');
});
document.getElementById('profile-logout')?.addEventListener('click', () => {
  localStorage.removeItem('apexlex-profile');
  document.getElementById('modal-profile').classList.remove('active');
  document.getElementById('avatar-btn').classList.add('hidden');
  refreshDashboard();
  navigate('dashboard');
  showWelcomeScreen();
});
document.getElementById('modal-profile')?.addEventListener('click', e => {
  if (e.target.id === 'modal-profile') document.getElementById('modal-profile').classList.remove('active');
});

// ===================== BACKUP & RESTORE =====================
async function exportBackup() {
  const words = await dbGetAll('words');
  const scores = await dbGetAll('scores');
  const data = {
    app: 'apexlex', version: 1, exportedAt: new Date().toISOString(),
    profile: getProfile(), words, scores
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `apexlex-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
  showSnackbar(`Backup saved: ${words.length} words`);
}

async function importBackupData(data) {
  if (!data || data.app !== 'apexlex' || !Array.isArray(data.words)) throw new Error('invalid backup');
  let added = 0;
  for (const w of data.words) {
    if (w?.word && !allWords.some(x => x.word === w.word)) {
      await dbPut('words', w);
      added++;
    }
  }
  for (const s of (data.scores || [])) {
    if (s?.game) {
      const cur = await dbGet('scores', s.game);
      if (!cur || s.score > cur.score) await dbPut('scores', s);
    }
  }
  if (data.profile?.name) saveProfile(data.profile.name);
  allWords = await dbGetAll('words');
  refreshDashboard();
  refreshDictionary();
  refreshStats();
  refreshGameCards();
  applyProfile();
  if (getProfile()?.name) document.getElementById('welcome-screen').classList.add('hidden');
  return added;
}

document.getElementById('backup-export')?.addEventListener('click', exportBackup);
document.getElementById('backup-import')?.addEventListener('click', () => document.getElementById('backup-file').click());
document.getElementById('welcome-restore')?.addEventListener('click', () => document.getElementById('backup-file').click());
document.getElementById('backup-file')?.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const added = await importBackupData(data);
    document.getElementById('modal-profile').classList.remove('active');
    showSnackbar(`Backup restored! ${added} new words added`);
  } catch {
    showSnackbar('That file is not a valid Apexlex backup');
  }
  e.target.value = '';
});

// ===================== DASHBOARD =====================
function getGreeting() {
  const h = new Date().getHours();
  const name = getProfile()?.name;
  let base;
  if (h < 12) base = 'Good Morning';
  else if (h < 17) base = 'Good Afternoon';
  else base = 'Good Evening';
  return name ? `${base}, ${name}!` : `${base}!`;
}

function getDailyWords() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  const start = (dayOfYear * 5) % DAILY_WORDS.length;
  const words = [];
  for (let i = 0; i < 5; i++) words.push(DAILY_WORDS[(start + i) % DAILY_WORDS.length]);
  return words;
}

async function refreshDashboard() {
  document.getElementById('greeting').textContent = getGreeting();
  document.getElementById('stat-collected').textContent = allWords.length;
  try {
    const gw = await dbGetAll('game_words');
    document.getElementById('stat-recalled').textContent = new Set(gw.map(e => e.word)).size;
  } catch(e) {
    document.getElementById('stat-recalled').textContent = '0';
  }

  const dw = getDailyWords();
  document.getElementById('daily-words').innerHTML = dw.map(d => `
    <div class="daily-word" data-word="${d.w}">
      <div style="flex:1">
        <div class="dw-word">${d.w} <span class="dw-pos">${d.p}</span></div>
        <div class="dw-meaning">${d.m}</div>
      </div>
      <span class="material-icons-round" style="color:var(--md-outline);font-size:20px">chevron_right</span>
    </div>
  `).join('');

  document.getElementById('daily-words').addEventListener('click', e => {
    const el = e.target.closest('.daily-word');
    if (el) showWordDetail(el.dataset.word, true);
  });

  const recent = [...allWords].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded)).slice(0, 5);
  if (recent.length) {
    document.getElementById('recent-activity').innerHTML = recent.map(w => `
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--md-outline-var)">
        <span style="font-weight:500;font-size:.9rem">${w.word}</span>
        <span style="font-size:.75rem;color:var(--md-on-surface-var)">${formatDate(w.dateAdded)}</span>
      </div>
    `).join('');
  } else {
    document.getElementById('recent-activity').innerHTML = '<p style="font-size:.85rem;color:var(--md-on-surface-var);padding:8px 0">No words added yet. Start collecting!</p>';
  }
}

// ===================== DICTIONARY =====================
function refreshDictionary() {
  const search = document.getElementById('dict-search').value.toLowerCase();
  let filtered = allWords.filter(w => w.word.toLowerCase().includes(search));
  filtered.sort((a, b) => a.word.localeCompare(b.word));

  document.getElementById('dict-count').textContent = allWords.length;

  if (!filtered.length) {
    document.getElementById('dict-list').innerHTML = `
      <div class="empty-state">
        <span class="material-icons-round">menu_book</span>
        <p>${search ? 'No words match your search' : 'Your collection is empty'}</p>
        ${!search ? '<button class="btn btn-tonal" onclick="openAddModal()">Add Your First Word</button>' : ''}
      </div>`;
    return;
  }

  let html = '';
  let lastLetter = '';
  filtered.forEach(w => {
    const letter = w.word[0].toUpperCase();
    if (letter !== lastLetter) {
      lastLetter = letter;
      html += `<div class="alpha-header">${letter}</div>`;
    }
    html += `
      <div class="word-item" data-word="${w.word}">
        <div>
          <div class="word-text">${w.word}</div>
          <div class="word-date">${formatDate(w.dateAdded)}</div>
        </div>
        <span class="material-icons-round" style="color:var(--md-outline);font-size:20px">chevron_right</span>
      </div>`;
  });
  document.getElementById('dict-list').innerHTML = html;
}

document.getElementById('dict-search')?.addEventListener('input', refreshDictionary);

document.getElementById('dict-list')?.addEventListener('click', e => {
  const item = e.target.closest('.word-item');
  if (item) showWordDetail(item.dataset.word);
});

// ===================== WORD DETAIL =====================
async function showWordDetail(word, isDaily) {
  navigate('detail');
  const container = document.getElementById('detail-content');
  container.innerHTML = '<div class="text-center mt-16"><span class="material-icons-round" style="font-size:40px;color:var(--md-outline)">hourglass_top</span><p style="margin-top:8px;color:var(--md-on-surface-var)">Looking up word...</p></div>';

  let data = null;
  if (isDaily) {
    const d = DAILY_WORDS.find(dw => dw.w === word);
    if (d) {
      data = { word: d.w, phonetic: '', meanings: [{ partOfSpeech: d.p, definitions: [{ definition: d.m }] }], sentences: d.s };
    }
  }

  if (!data) {
    try {
      const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      if (resp.ok) {
        const json = await resp.json();
        const entry = json[0];
        data = {
          word: entry.word,
          phonetic: entry.phonetic || (entry.phonetics?.[0]?.text) || '',
          audioUrl: entry.phonetics?.find(p => p.audio)?.audio || '',
          meanings: entry.meanings || [],
          sentences: []
        };
        entry.meanings?.forEach(m => {
          m.definitions?.forEach(d => { if (d.example) data.sentences.push(d.example); });
        });
      }
    } catch (_) {}
  }

  if (!data) {
    const saved = allWords.find(w => w.word.toLowerCase() === word.toLowerCase());
    data = {
      word: word,
      phonetic: '',
      meanings: saved?.meanings || [{ partOfSpeech: 'word', definitions: [{ definition: saved?.definition || 'Definition not available offline. Connect to internet to look up this word.' }] }],
      sentences: saved?.sentences || []
    };
  }

  while (data.sentences.length < 5) {
    const templates = [
      `I use the word "${data.word}" in my daily conversation.`,
      `Can you explain the meaning of "${data.word}"?`,
      `The teacher asked us to use "${data.word}" in a sentence.`,
      `She learned the word "${data.word}" from a newspaper article.`,
      `Understanding "${data.word}" will improve your vocabulary.`,
      `He looked up "${data.word}" in the dictionary.`,
      `The word "${data.word}" appears frequently in English.`
    ];
    data.sentences.push(templates[data.sentences.length % templates.length]);
  }

  container.innerHTML = `
    <div class="detail-word">${data.word}</div>
    <div class="detail-phonetic">${data.phonetic || `/${data.word}/`}</div>
    <button class="play-btn" id="play-audio" data-word="${data.word}" ${data.audioUrl ? `data-url="${data.audioUrl}"` : ''}>
      <span class="material-icons-round">volume_up</span> Listen
    </button>

    ${data.meanings.map(m => `
      <div class="meaning-block">
        <div class="meaning-pos">${m.partOfSpeech}</div>
        ${m.definitions.slice(0, 3).map(d => `<div class="meaning-def">${d.definition}</div>`).join('')}
      </div>
    `).join('')}

    <div class="card mt-16">
      <div class="card-title"><span class="material-icons-round">format_quote</span> Example Sentences</div>
      <ul class="sentence-list">
        ${data.sentences.slice(0, 5).map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    ${!allWords.find(w => w.word.toLowerCase() === word.toLowerCase()) ? `
      <button class="btn btn-primary btn-full mt-16" id="add-from-detail" data-word="${data.word}">
        <span class="material-icons-round">add</span> Add to My Collection
      </button>
    ` : ''}
  `;

  document.getElementById('play-audio')?.addEventListener('click', function () {
    const url = this.dataset.url;
    const w = this.dataset.word;
    if (url) {
      new Audio(url).play().catch(() => speak(w));
    } else {
      speak(w);
    }
  });

  document.getElementById('add-from-detail')?.addEventListener('click', async function () {
    await addWord(this.dataset.word);
    this.remove();
    showSnackbar('Word added to your collection!');
  });

  document.getElementById('detail-delete').onclick = async () => {
    const saved = allWords.find(w => w.word.toLowerCase() === word.toLowerCase());
    if (saved) {
      await dbDelete('words', saved.word);
      allWords = allWords.filter(w => w.word !== saved.word);
      showSnackbar('Word removed');
    }
    navigate('dictionary');
  };
}

document.getElementById('detail-back').addEventListener('click', () => {
  navigate(document.querySelector('.nav-item.active')?.dataset.view || 'dictionary');
});

function speak(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.85;
    speechSynthesis.speak(u);
  }
}

// ===================== ADD WORD =====================
function openAddModal() {
  document.getElementById('modal-add').classList.add('active');
  document.getElementById('add-word-input').value = '';
  const statusEl = document.getElementById('add-word-status');
  statusEl.textContent = '';
  statusEl.style.color = '';
  addWordWarned = '';
  addWordChecking = false;
  setTimeout(() => document.getElementById('add-word-input').focus(), 300);
}

function closeAddModal() {
  document.getElementById('modal-add').classList.remove('active');
}

document.getElementById('fab-add')?.addEventListener('click', openAddModal);
document.getElementById('add-cancel')?.addEventListener('click', closeAddModal);
document.getElementById('modal-add')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeAddModal();
});

document.getElementById('add-save')?.addEventListener('click', async () => {
  if (addWordChecking) return;
  const input = document.getElementById('add-word-input');
  const statusEl = document.getElementById('add-word-status');
  const saveBtn = document.getElementById('add-save');
  const word = input.value.trim().toLowerCase();

  if (!word) { statusEl.textContent = 'Please enter a word'; statusEl.style.color = ''; return; }
  if (!/^[a-z]+$/.test(word)) { statusEl.textContent = 'Only English letters allowed'; statusEl.style.color = ''; return; }
  if (allWords.find(w => w.word === word)) { statusEl.textContent = 'Word already in your collection'; statusEl.style.color = ''; return; }

  // Second tap after warning — user confirmed, save regardless
  if (addWordWarned === word) {
    addWordWarned = '';
    statusEl.textContent = '';
    statusEl.style.color = '';
    await addWord(word);
    closeAddModal();
    showSnackbar(`"${word}" added to your collection!`);
    refreshDictionary();
    return;
  }

  // Spell check: local list is instant; unknown words hit the API
  if (!isKnownLocal(word)) {
    addWordChecking = true;
    saveBtn.disabled = true;
    statusEl.style.color = 'var(--md-on-surface-var)';
    statusEl.textContent = 'Checking spelling…';
    const ok = await verifyWordOnline(word);
    addWordChecking = false;
    saveBtn.disabled = false;
    if (ok === false) {
      addWordWarned = word;
      statusEl.style.color = 'var(--md-amber)';
      statusEl.textContent = '⚠️ Might be misspelled. Tap Add again to save anyway.';
      return;
    }
    statusEl.textContent = '';
    statusEl.style.color = '';
  }

  await addWord(word);
  closeAddModal();
  showSnackbar(`"${word}" added to your collection!`);
  refreshDictionary();
});

document.getElementById('add-word-input')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('add-save').click();
});
document.getElementById('add-word-input')?.addEventListener('input', () => {
  addWordWarned = '';
  const statusEl = document.getElementById('add-word-status');
  if (statusEl.style.color) { statusEl.style.color = ''; statusEl.textContent = ''; }
});

async function addWord(word) {
  word = word.trim().toLowerCase();
  let definition = '';
  let meanings = [];
  let sentences = [];

  try {
    const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (resp.ok) {
      const json = await resp.json();
      const entry = json[0];
      meanings = entry.meanings || [];
      definition = meanings[0]?.definitions?.[0]?.definition || '';
      meanings.forEach(m => m.definitions?.forEach(d => { if (d.example) sentences.push(d.example); }));
    }
  } catch (_) {}

  const data = {
    word,
    dateAdded: new Date().toISOString(),
    definition,
    meanings,
    sentences
  };

  await dbPut('words', data);
  allWords.push(data);
}

// ===================== STATS =====================
function refreshStats() {
  document.getElementById('stats-all-total').textContent = allWords.length;
  const period = document.querySelector('#stats-period .chip.active')?.dataset.period || 'week';
  renderChart(period);
  renderMilestones();
  refreshGameLog();
}

async function refreshGameLog() {
  const el = document.getElementById('game-log');
  if (!el) return;

  const period = document.querySelector('#log-period .chip.active')?.dataset.period || 'week';
  let all;
  try { all = await dbGetAll('game_words'); } catch(e) { all = []; }

  const now = new Date();
  const weekAgo    = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const monthStart = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-01`;
  const yearStart  = `${now.getFullYear()}-01-01`;

  const filtered = all.filter(w => {
    if (period === 'week')  return w.dateKey >= weekAgo;
    if (period === 'month') return w.dateKey >= monthStart;
    return w.dateKey >= yearStart;
  });

  const periodUnique = [...new Set(filtered.map(e => e.word))].sort();
  const total = periodUnique.length;

  const grandEl = document.getElementById('recalled-grand-total');
  if (grandEl) grandEl.textContent = total;

  if (!filtered.length) {
    el.innerHTML = `<p class="log-empty">Play Fun Zone games to build your recall log!</p>`;
    return;
  }

  // Bar chart data
  let labels = [], counts = [];
  if (period === 'week') {
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      labels.push(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]);
      counts.push(filtered.filter(w => w.dateKey === key).length);
    }
  } else if (period === 'month') {
    const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= days; i++) {
      const key = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
      labels.push(i);
      counts.push(filtered.filter(w => w.dateKey === key).length);
    }
  } else {
    ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].forEach((m, i) => {
      const key = `${now.getFullYear()}-${String(i+1).padStart(2,'0')}`;
      labels.push(m);
      counts.push(filtered.filter(w => w.dateKey.startsWith(key)).length);
    });
  }
  const maxC = Math.max(...counts, 1);
  const chartHTML = counts.map((c, i) => `
    <div class="bar-col">
      <div class="bar ${c > 0 ? 'has-value recalled-bar' : ''}" style="height:${Math.max((c/maxC)*140,2)}px">
        ${c > 0 ? `<span class="bar-value">${c}</span>` : ''}
      </div>
      <span class="bar-label">${labels[i]}</span>
    </div>`).join('');

  // A-Z letter tabs + word panel
  const byLetter = {};
  for (const w of periodUnique) {
    const l = w[0].toUpperCase();
    (byLetter[l] = byLetter[l] || []).push(w);
  }
  const letters = Object.keys(byLetter).sort();
  const firstLetter = letters[0];

  const renderPanel = l => `
    <div class="letter-panel">
      <div class="letter-panel-hd">
        <span class="letter-panel-big">${l}</span>
        <span class="letter-panel-count">${byLetter[l].length} word${byLetter[l].length !== 1 ? 's' : ''}</span>
      </div>
      <div class="letter-cloud">
        ${byLetter[l].map(w => `<span class="log-word">${w}</span>`).join('')}
      </div>
    </div>`;

  el.innerHTML = `
    <div class="chart-wrap" style="margin-bottom:16px">
      <div class="bar-chart">${chartHTML}</div>
    </div>
    <div class="letter-tabs">
      ${letters.map(l => `<button class="letter-tab${l === firstLetter ? ' active' : ''}" data-letter="${l}">${l}</button>`).join('')}
    </div>
    <div class="letter-panel-wrap">${renderPanel(firstLetter)}</div>`;

  el.querySelectorAll('.letter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      el.querySelectorAll('.letter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      el.querySelector('.letter-panel-wrap').innerHTML = renderPanel(tab.dataset.letter);
    });
  });
}

function renderChart(period) {
  const now = new Date();
  let labels = [], counts = [];

  if (period === 'week') {
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      labels.push(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]);
      counts.push(allWords.filter(w => w.dateAdded.startsWith(key)).length);
    }
  } else if (period === 'month') {
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const key = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
      labels.push(i);
      counts.push(allWords.filter(w => w.dateAdded.startsWith(key)).length);
    }
  } else {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for (let i = 0; i < 12; i++) {
      const key = `${now.getFullYear()}-${String(i+1).padStart(2,'0')}`;
      labels.push(months[i]);
      counts.push(allWords.filter(w => w.dateAdded.startsWith(key)).length);
    }
  }

  const max = Math.max(...counts, 1);
  const chart = document.getElementById('stats-chart');
  chart.innerHTML = counts.map((c, i) => `
    <div class="bar-col">
      <div class="bar ${c > 0 ? 'has-value' : ''}" style="height:${Math.max((c/max)*140, 2)}px">
        ${c > 0 ? `<span class="bar-value">${c}</span>` : ''}
      </div>
      <span class="bar-label">${labels[i]}</span>
    </div>
  `).join('');
}

function renderMilestones() {
  const milestones = [10, 25, 50, 100, 250, 500, 1000];
  const total = allWords.length;
  document.getElementById('milestones').innerHTML = milestones.map(m => {
    const done = total >= m;
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--md-outline-var)">
      <span class="material-icons-round" style="color:${done ? 'var(--md-primary)' : 'var(--md-outline-var)'}">${done ? 'emoji_events' : 'radio_button_unchecked'}</span>
      <div style="flex:1">
        <div style="font-weight:600;font-size:.9rem">${m} Words</div>
        <div style="font-size:.75rem;color:var(--md-on-surface-var)">${done ? 'Achieved!' : `${m - total} more to go`}</div>
      </div>
      ${done ? '<span style="font-size:.75rem;font-weight:600;color:var(--md-primary)">Done</span>' : `<span style="font-size:.75rem;color:var(--md-on-surface-var)">${Math.round(total/m*100)}%</span>`}
    </div>`;
  }).join('');
}

document.getElementById('stats-period')?.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#stats-period .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderChart(chip.dataset.period);
});

document.getElementById('log-period')?.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#log-period .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  refreshGameLog();
});

// ===================== GAMES =====================
async function refreshGameCards() {
  for (const g of ['chain','image','maker','az']) {
    const score = await dbGet('scores', g);
    const el = document.getElementById('hs-' + g);
    if (el) el.textContent = score ? `Best: ${score.score}` : '';
  }
}

document.querySelector('.game-grid')?.addEventListener('click', e => {
  const card = e.target.closest('.game-card');
  if (card) startGame(card.dataset.game);
});

document.getElementById('game-back')?.addEventListener('click', () => {
  endGame(true);
  navigate('games');
});

function startGame(type) {
  currentGame = type;
  gameScore = 0;
  gameWords = [];
  gameTimeLeft = 300;
  gameState = {};

  navigate('game-play');
  document.getElementById('game-score').textContent = '0';
  updateTimerDisplay();

  const area = document.getElementById('game-area');

  if (type === 'chain') {
    const starters = ['apple','beach','cloud','dance','eagle','flame','grape','house','ivory','jungle'];
    gameState.lastWord = starters[Math.floor(Math.random() * starters.length)];
    area.innerHTML = `
      <div class="game-prompt">
        <div class="prompt-label">Start a chain! Next word must begin with:</div>
        <div class="prompt-word" id="chain-letter">${gameState.lastWord[gameState.lastWord.length-1].toUpperCase()}</div>
        <div class="prompt-hint">Last word: <strong id="chain-last">${gameState.lastWord}</strong></div>
      </div>
      <div class="game-input-row">
        <input type="text" id="game-input" placeholder="Type a word..." autocomplete="off" autocapitalize="none">
        <button class="btn btn-primary" id="game-submit"><span class="material-icons-round">send</span></button>
      </div>
      <div class="word-tags" id="game-tags"></div>`;
  } else if (type === 'image') {
    const prompt = IMAGE_PROMPTS[Math.floor(Math.random() * IMAGE_PROMPTS.length)];
    gameState.imagePrompt = prompt;
    area.innerHTML = `
      <div class="game-prompt">
        <div class="prompt-top">
          <button class="shuffle-btn" id="shuffle-img" title="Change picture">
            <span class="material-icons-round">shuffle</span>
          </button>
        </div>
        <img class="prompt-photo" id="prompt-photo" alt="Picture to describe">
        <div class="prompt-image hidden" id="emoji-fallback">${prompt.emoji}</div>
        <div class="prompt-hint">Type words about this picture - objects, colors, feelings</div>
      </div>
      <div class="game-input-row">
        <input type="text" id="game-input" placeholder="Type a word..." autocomplete="off" autocapitalize="none">
        <button class="btn btn-primary" id="game-submit"><span class="material-icons-round">send</span></button>
      </div>
      <div class="word-tags" id="game-tags"></div>`;
    document.getElementById('shuffle-img').addEventListener('click', loadGamePhoto);
    loadGamePhoto();
  } else if (type === 'maker') {
    const source = MAKER_WORDS[Math.floor(Math.random() * MAKER_WORDS.length)];
    gameState.sourceWord = source;
    gameState.sourceSet = new Set(source.toLowerCase());
    gameState.possibleWords = wordsFromLetters(source);
    gameState.foundWords = [];
    area.innerHTML = `
      <div class="game-prompt">
        <div class="prompt-label">Make words using these letters:</div>
        <div class="prompt-word" style="font-size:1.4rem;letter-spacing:4px">${source.toUpperCase()}</div>
        <div class="prompt-hint">Use any of these letters (repeats allowed!)</div>
        <div class="prompt-progress" id="maker-progress">0 / ${gameState.possibleWords.length} common words found</div>
      </div>
      <div class="game-input-row">
        <input type="text" id="game-input" placeholder="Type a word..." autocomplete="off" autocapitalize="none">
        <button class="btn btn-primary" id="game-submit"><span class="material-icons-round">send</span></button>
      </div>
      <div class="word-tags" id="game-tags"></div>`;
  } else if (type === 'az') {
    area.innerHTML = `
      <div class="time-choice-screen">
        <p class="prompt-label" style="text-align:center;margin-bottom:24px">How long do you want to play?</p>
        <div class="time-choice">
          <button class="time-btn" data-time="300">
            <span class="time-num">5</span>
            <span class="time-unit">minutes</span>
          </button>
          <button class="time-btn" data-time="600">
            <span class="time-num">10</span>
            <span class="time-unit">minutes</span>
          </button>
        </div>
      </div>`;
    area.querySelectorAll('.time-btn').forEach(btn => {
      btn.addEventListener('click', () => setupAZGame(parseInt(btn.dataset.time)));
    });
    return; // timer + input wired up inside setupAZGame
  }

  const input = document.getElementById('game-input');
  document.getElementById('game-submit')?.addEventListener('click', () => submitGameWord());
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') submitGameWord(); });
  input?.addEventListener('focus', () => {
    setTimeout(() => { updateCompactMode(); window.scrollTo({ top: 0 }); }, 300);
  });
  setTimeout(() => input?.focus(), 300);

  startGameTimer();
}

function setupAZGame(seconds) {
  gameTimeLeft = seconds;
  gameTotalTime = seconds;
  updateTimerDisplay();

  gameState.currentLetter = 0;
  gameState.letterWords = {};
  for (let i = 0; i < 26; i++) gameState.letterWords[i] = [];

  const area = document.getElementById('game-area');
  area.innerHTML = `
    <div class="az-progress" id="az-progress"></div>
    <div class="game-prompt">
      <div class="prompt-label">Type 5 words starting with:</div>
      <div class="prompt-word" id="az-letter">A</div>
      <div class="prompt-hint" id="az-count">0 / 5 words</div>
    </div>
    <div class="game-input-row">
      <input type="text" id="game-input" placeholder="Type a word..." autocomplete="off" autocapitalize="none">
      <button class="btn btn-primary" id="game-submit"><span class="material-icons-round">send</span></button>
    </div>
    <div class="word-tags" id="game-tags"></div>`;
  renderAZProgress();

  const input = document.getElementById('game-input');
  document.getElementById('game-submit').addEventListener('click', () => submitGameWord());
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submitGameWord(); });
  input.addEventListener('focus', () => {
    setTimeout(() => { updateCompactMode(); window.scrollTo({ top: 0 }); }, 300);
  });
  setTimeout(() => input.focus(), 300);
  startGameTimer();
}

async function submitGameWord() {
  const input = document.getElementById('game-input');
  const word = input.value.trim().toLowerCase();
  input.value = '';
  if (!word || word.length < 2) return;

  if (gameWords.includes(word)) {
    flashInput('Already used!');
    return;
  }
  if (!/^[a-z]+$/.test(word)) {
    flashInput('Letters only!');
    return;
  }

  // Game rules first; state changes wait in `commit` until spelling passes
  const gameAtSubmit = currentGame;
  let commit = null;

  if (currentGame === 'chain') {
    const needed = gameState.lastWord[gameState.lastWord.length - 1];
    if (word[0] !== needed) { flashInput(`Must start with "${needed.toUpperCase()}"`); return; }
    commit = () => {
      gameState.lastWord = word;
      document.getElementById('chain-letter').textContent = word[word.length - 1].toUpperCase();
      document.getElementById('chain-last').textContent = word;
    };
  } else if (currentGame === 'image') {
    commit = () => {
      if (gameState.imagePrompt.hints.includes(word)) gameScore += 1; // hint bonus
    };
  } else if (currentGame === 'maker') {
    if (word.length < 3) { flashInput('3+ letters needed'); return; }
    if (!canUseSourceLetters(word, gameState.sourceSet)) { flashInput('Letters not available!'); return; }
    commit = () => {
      if (gameState.possibleWords.includes(word) && !gameState.foundWords.includes(word)) {
        gameState.foundWords.push(word);
        const progress = document.getElementById('maker-progress');
        if (progress) progress.textContent = `${gameState.foundWords.length} / ${gameState.possibleWords.length} common words found`;
      }
    };
  } else if (currentGame === 'az') {
    const letter = String.fromCharCode(65 + gameState.currentLetter).toLowerCase();
    if (word[0] !== letter) { flashInput(`Must start with "${letter.toUpperCase()}"`); return; }
    commit = () => {
      gameState.letterWords[gameState.currentLetter].push(word);
      const count = gameState.letterWords[gameState.currentLetter].length;
      document.getElementById('az-count').textContent = `${count} / 5 words`;
      if (count >= 5 && gameState.currentLetter < 25) {
        gameState.currentLetter++;
        document.getElementById('az-letter').textContent = String.fromCharCode(65 + gameState.currentLetter);
        document.getElementById('az-count').textContent = `${gameState.letterWords[gameState.currentLetter].length} / 5 words`;
        renderAZProgress();
      }
    };
  } else {
    return;
  }

  // Spelling gate: local list answers instantly; otherwise ask the
  // dictionary API when online. Offline unknowns get the benefit of the doubt.
  if (!isKnownLocal(word)) {
    const ok = await verifyWordOnline(word);
    // Bail out if the game ended or changed while we were checking
    if (currentGame !== gameAtSubmit || !gameTimer) return;
    if (ok === false) {
      flashInput('Check spelling!');
      showSnackbar(`"${word}" not found in the dictionary`);
      addWordTag(word, false);
      return;
    }
  }

  commit();
  gameWords.push(word);
  gameScore++;
  document.getElementById('game-score').textContent = gameScore;
  addWordTag(word, true);
}

function addWordTag(word, valid) {
  const tags = document.getElementById('game-tags');
  const tag = document.createElement('span');
  tag.className = 'word-tag' + (valid ? '' : ' invalid');
  tag.textContent = word;
  tags.prepend(tag);
}

function flashInput(msg) {
  const input = document.getElementById('game-input');
  input.style.borderColor = 'var(--md-error)';
  input.placeholder = msg;
  input.classList.remove('shake');
  void input.offsetWidth; // restart the animation
  input.classList.add('shake');
  showSnackbar(msg); // placeholder text hides behind the phone keyboard
  setTimeout(() => {
    input.style.borderColor = '';
    input.placeholder = 'Type a word...';
    input.classList.remove('shake');
  }, 1200);
}

function renderAZProgress() {
  const el = document.getElementById('az-progress');
  if (!el) return;
  el.innerHTML = '';
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const count = gameState.letterWords[i].length;
    let cls = 'az-letter';
    if (count >= 5) cls += ' done';
    else if (i === gameState.currentLetter) cls += ' current';
    el.innerHTML += `<div class="${cls}">${letter}</div>`;
  }
}

function startGameTimer() {
  updateTimerDisplay();
  gameTimer = setInterval(() => {
    gameTimeLeft--;
    updateTimerDisplay();
    const pct = (gameTimeLeft / gameTotalTime) * 100;
    const fill = document.getElementById('timer-bar-fill');
    if (fill) {
      fill.style.width = pct + '%';
      fill.classList.toggle('low', gameTimeLeft < 60);
    }
    document.getElementById('game-timer')?.classList.toggle('warning', gameTimeLeft < 30);
    if (gameTimeLeft <= 0) endGame();
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(gameTimeLeft / 60);
  const s = gameTimeLeft % 60;
  const el = document.getElementById('timer-text');
  if (el) el.textContent = `${m}:${String(s).padStart(2, '0')}`;
}

async function endGame(cancelled) {
  clearInterval(gameTimer);
  gameTimer = null;

  if (cancelled) return;

  const game = currentGame;

  // Persist all accepted words to the game log
  if (gameWords.length > 0) {
    const dateKey = new Date().toISOString().slice(0, 10);
    try {
      await Promise.all(gameWords.map(word => dbAdd('game_words', { word, game, dateKey })));
    } catch(e) {}
  }

  const existing = await dbGet('scores', game);
  const isHighScore = !existing || gameScore > existing.score;
  if (isHighScore) await dbPut('scores', { game, score: gameScore, date: new Date().toISOString() });

  const timeTaken = gameTotalTime - Math.max(gameTimeLeft, 0);
  const tm = Math.floor(timeTaken / 60);
  const ts = timeTaken % 60;

  let makerStat = '';
  let makerReveal = '';
  if (game === 'maker' && gameState.possibleWords?.length) {
    const found = new Set(gameState.foundWords || []);
    makerStat = `
      <div class="go-stat">
        <div class="go-num">${found.size}/${gameState.possibleWords.length}</div>
        <div class="go-label">Possible Words</div>
      </div>`;
    makerReveal = `
      <button class="btn btn-tonal" id="reveal-words">
        <span class="material-icons-round">visibility</span> See All ${gameState.possibleWords.length} Words
      </button>
      <div class="card hidden" id="reveal-list" style="text-align:left;margin-top:12px">
        <div class="card-title"><span class="material-icons-round">lightbulb</span> Green = words you found</div>
        <div class="word-tags reveal">
          ${gameState.possibleWords.map(w => `<span class="word-tag ${found.has(w) ? '' : 'missed'}">${w}</span>`).join('')}
        </div>
      </div>`;
  }

  document.getElementById('game-area').innerHTML = `
    <div class="game-over">
      <span class="material-icons-round">emoji_events</span>
      <h2>${gameTimeLeft <= 0 ? "Time's Up!" : 'Finished!'}</h2>
      <div class="final-score">${gameScore}</div>
      <div class="final-label">points ${isHighScore ? '- New High Score!' : ''}</div>
      <div class="go-stats">
        <div class="go-stat">
          <div class="go-num">${gameWords.length}</div>
          <div class="go-label">Total Words</div>
        </div>
        ${makerStat}
        <div class="go-stat">
          <div class="go-num">${tm}:${String(ts).padStart(2, '0')}</div>
          <div class="go-label">Time Taken</div>
        </div>
      </div>
      <button class="btn btn-primary" id="game-retry"><span class="material-icons-round">replay</span> Play Again</button>
      <button class="btn btn-outline" id="game-exit"><span class="material-icons-round">home</span> Back to Games</button>
      ${makerReveal ? `<div class="mt-8">${makerReveal}</div>` : ''}
    </div>`;

  document.getElementById('game-retry')?.addEventListener('click', () => startGame(game));
  document.getElementById('game-exit')?.addEventListener('click', () => navigate('games'));
  document.getElementById('reveal-words')?.addEventListener('click', function () {
    document.getElementById('reveal-list').classList.remove('hidden');
    this.classList.add('hidden');
  });
}

// ===================== PWA INSTALL =====================
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  document.getElementById('install-banner')?.classList.remove('hidden');
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  document.getElementById('install-banner')?.classList.add('hidden');
  showSnackbar('Apexlex installed! Find it on your home screen');
});

document.getElementById('install-btn')?.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById('install-banner')?.classList.add('hidden');
});

// ===================== MOBILE KEYBOARD HANDLING =====================
function updateCompactMode() {
  const vv = window.visualViewport;
  const h = Math.min(window.innerHeight, vv ? vv.height : Infinity);
  document.body.classList.toggle('kb-compact', h < 620);
  // Keep the timer and prompt in view while the keyboard is open
  if (currentView === 'game-play' && h < 620) window.scrollTo(0, 0);
}
window.addEventListener('resize', updateCompactMode);
if (window.visualViewport) window.visualViewport.addEventListener('resize', updateCompactMode);

// ===================== UTILITY =====================
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function showSnackbar(msg) {
  const el = document.getElementById('snackbar');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ===================== INIT =====================
async function init() {
  // Login check runs first and synchronously - a broken DB can never hide it
  if (!getProfile()?.name) showWelcomeScreen();
  localStorage.removeItem('apexlex-pings'); // leftover from removed email tracking

  // Ask the browser to protect our data from being evicted or cleared
  if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});

  try {
    await openDB();
    allWords = await dbGetAll('words');
  } catch (e) {
    allWords = [];
  }

  navigate('dashboard');
  updateCompactMode();
  applyProfile();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
      .then(reg => {
        const showUpdateBanner = () => {
          if (document.getElementById('update-banner')) return;
          const b = document.createElement('div');
          b.id = 'update-banner';
          b.textContent = '✨ New update ready — tap to refresh';
          b.style.cssText = 'position:fixed;bottom:72px;left:50%;transform:translateX(-50%);background:#3730C4;color:#fff;padding:10px 20px;border-radius:24px;font-size:.85rem;font-weight:600;z-index:9999;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.25);white-space:nowrap';
          b.onclick = () => window.location.reload();
          document.body.appendChild(b);
        };
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          nw.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) showUpdateBanner();
          });
        });
        // Check for update immediately on launch, then on every foreground
        reg.update().catch(() => {});
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') reg.update().catch(() => {});
        });
      })
      .catch(() => {});

    // When a new service worker takes over, reload once to pick up new files
    let hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController) { hadController = true; return; }
      window.location.reload();
    });
  }
}

init();
