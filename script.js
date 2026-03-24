// ── Known shows ──
// Add more shows here in the same format as needed.
const SHOWS = {
  "the empress of ireland": {
    title: "The Empress of Ireland",
    lines: [
      // Scene 1
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Miss West, is my \"10 o'clock\" here yet?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Not yet, sir. I'm sure he'll arrive shortly. He's rarely late." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Hmm. My faith in his timing isn't as sure as yours, Miss West. Time is money in the banking business, as it is everywhere else in the world." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Yes, Mr. Thorne. Anything else the bother, sir?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Not at all. Things are fine. Well, no. Actually, I've just been told by my superiors that I need someone to go to London." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "London, sir?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "You heard me. London." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Oh, I heard you. I just wasn't clear which London you meant, sir." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Oh, the one across from Paris." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Paris sir?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Oh, forget Paris. London as in Stratford." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Still not helping." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "London! As in England, not Ontario!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "You could have opened with that, sir." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "They have to embark on the Empress of Ireland to Liverpool and escort some silver. Then, see to it that they make it all the way to London and that every bar is safely deposited." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "I see. Sounds like a nice little getaway for someone." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Getaway? It's not a getaway. At least not for the one who will stay behind in London." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Stay?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "That's right. They will relocate there and set up operations in London. At least for a few years. It's what the bank Fellowship wants. I need you to find the right person." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Me sir?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Of course. That's what I pay you for. You know the ins and outs of this office. It'll be a step up in salary for whomever you find, and can lead to bigger things for them, if they play their cards right. The bank will look after all their expenses in England. It's a dream opportunity." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "And just how much silver is travelling on the Empress?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Exactly 252 bars. Not a single bar more, and not a single bar less. They had better all make it there!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Sir, that's about…" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Mr. Thorne", text: "Over $150,000. Yes, in 1914, that's a lot of money. Find the right person!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Understood, Mr. Thorne. I'll get on it immediately." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Samuel", text: "Ah, Miss West, good to see you. I've got some figures here that need your attention—accounts receivable, mostly. We've got a few discrepancies on the ledger." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Certainly, Samuel. I'll get to these in just a moment." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Samuel", text: "Thank you, Miss West. You're a lifesaver. By the way, I heard some rumblings about an Empress of Ireland trip. They're looking for someone to head to London. Sounds exciting! I've always dreamed of seeing the world!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Yes, Samuel. The bank needs someone to travel with a shipment of silver bars to London, via Liverpool. Whoever goes will also need to stay there for several years to manage operations. It's a big opportunity." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Samuel", text: "Ah, London! A city of business and industry! I could be quite the asset there, I imagine. Count me in!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "It's not just a short trip, Samuel. The position requires several years of commitment overseas." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Samuel", text: "Perfect. I think that I…years? Did you say years? Hmm... Well, you see, I've grown quite attached to my desk chair. It's custom-fitted to my back and—uh, I've heard it's quite damp in London. The humidity, you know...could be quite difficult for my joints." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Right. I'll make a note of it, Samuel. We'll keep you here, then." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Henry", text: "Miss West, I've got these cheques here that need your signature. We've got a few important transactions to finalize before the end of the day." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Got it, Henry. I'll take care of these right away." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Henry", text: "I overheard some talk about the Empress of Ireland job. London, huh? Now that's something! The open sea, travel, business, opportunity! That's exactly what I've been looking for." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Really, Henry. You told me you hate travelling. Well, it's a great opportunity the Fellowship is offering." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Henry", text: "London? Brilliant! Expansion, deals, career prestige—I could be there yesterday! I'd love to go! Sign me up!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "It's not a short trip, Henry. The role requires a long-term commitment. You'd need to settle in London…for several years." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Henry", text: "Several years? Well... about that...you see, Miss West, my family has just started a baking business on the side. Yes, baking. I'm quite the expert in breads—brioche, baguettes, you name it. The problem is, my signature recipe for sourdough is rather…finicky. If I leave for a long period of time, my starter culture could die! And then I'd be back to square one." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "So... you're telling me that your bread-making business is stopping you from going to Liverpool?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Henry", text: "Exactly! Our customers rely on me. I can't just leave them in the lurch. They need their bread, Miss West. They'd be devastated." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "I see...well, I'll make sure to let you keep your sourdough in peace, Henry." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Miss West, I've got these papers for you to review—loan applications, mostly. They're a bit complicated, but I'm sure you'll handle them splendidly." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Thank you, Edgar. I'll take care of this. Anything else?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Well, did I hear something about a London trip?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "They really should get me my own office with walls." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Quite the opportunity, I'd say. But then again, it's just the sort of thing a man of my experience could handle with ease." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Yes, Edgar. It's a high-responsibility position. The bank needs someone to escort the silver bars on the Empress of Ireland." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "London, eh? The perfect place for a man of my stature. I'm ready to expand my influence abroad. This could be my big break!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "It is a big step up. And, you'd be staying…" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "I know, for several years. I'm just fooling with you. I'm not interested. You had me at \"opportunity,\" but lost me at \"years.\" It's a nice place to visit but, last time I went, I got lost in Harrods for three hours. I eventually stumbled into a cathedral and joined a choir by accident. And let's not even talk about the pigeons. One stole my sandwich and my dignity. By the way, I overheard your earlier rejections from Henry and Sam. Although rather phony, you've got to credit them for their feeble attempts at creativity." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Think you can top them?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Of course. As much as I love a good adventure, there's something far more pressing that's keeping me tied here in Toronto. You see, Miss West, I have recently—how should I put this—committed myself to an important charity project that I simply cannot abandon." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "You? A charity?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Oh, yes. I'm the lead sponsor of an initiative called The Toronto Mustache Society. We're on a mission to revive the great tradition of the mustache. You know, for years, men have been shaving it all off, but we aim to bring back the majestic moustache. It's about honour, dignity, and—most importantly—the face. It's an investment in style, Miss West." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "The Toronto Mustache Society?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Yes. It's a bold vision, but we've already garnered a great deal of attention. The society's annual Mustache Gala is just around the corner, and I'm expected to give the keynote speech—on the importance of mustache maintenance. The world is watching Miss West. Without my leadership, the whole movement could crumble." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "I see. Well, I'll be sure to let the people of Toronto know how much you've sacrificed for their mustache cause." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Thank you, Miss West. The world is full of great causes, but this is one that's close to my heart...well, my upper lip. Oh, hey what about Carl?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Carl", text: "Nope!" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Tough sell. Hey, there's Hathaway." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Jeremiah? Oh, no. I couldn't ask him. He just moved here from New York City a year ago. We can't ask him to relocate again. What with him losing his wife. He told me that it's been difficult for his daughter to move here to Toronto after…well, you know. I wouldn't want to upset them again." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Edgar", text: "Are you sure? It could be helpful to them as a whole. A larger salary. A new country. You just never know." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Jeremiah…" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "Yes, Miss West. These accounts need to be checked over. A few discrepancies between deposits and withdrawals. Could you look them over when you have a moment?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "Of course. I'll take care of it shortly. Listen, Jeremiah. I don't know how to say this, so let me just be blunt. The bank fellowship is telling Mr. Thorne to promote someone and send them to Liverpool aboard the Empress of Ireland at the end of the month. They'll be escorting a load of silver bars to Liverpool, and will start a new job with the bank in London for a few years, at least. It's a promotion. The bank will handle all the expenses. You and Grace would be looked after. The bank senior leadership will support you. I know it's a longshot, but…" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "Grace... she's been having a difficult time adjusting to life here after leaving memories of her mother behind in New York." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "I'm sorry to even mention it. Just forget that I…" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "Maybe change will help. How sure is this job?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "I mean, it's yours if you want it. Mr. Thorne said the Fellowship is looking for someone they can count on. It could be you…if you want it to be." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "I've always wanted to move up into management. I just didn't think it would be realistic now, given my current situation. But, maybe a fresh start could help. A better life. I've been thinking about that a lot lately." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "In that case, this job offers more financial security, Jeremiah. You could provide Grace with a new home, better opportunities, and—more importantly—a sense of stability once again." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "I think the time is right. Time to take action. Alright. I'll do it. I'll take the job." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Miss West", text: "You will?" },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", text: "I will. I'll go to Liverpool, and London—for Grace. I'm ready." },
      { scene: "Scene 1 - The Toronto Bank Office", char: "Jeremiah", type: "song", title: "I'm Ready", text: "This news really changes everything / A distant dream becoming real / I convinced myself it wasn't happening / And now I'm surprised how good it feels // I've worked so hard for this and now the Fellowship / Sees me as one of their own / The sky is the limit, my future is infinite / My possibilities are endless / I'm ready // I've been seeing life through camera obscura / Now my canvas is wide as the open horizon // I've worked so hard for this and now the Fellowship / Sees me as one of their own / The sky is the limit, my future is infinite / With possibilities // It's freedom and I like it / My spark has been ignited / If I need to leave you, I won't fight it // I'm ready / I am ready / I'm ready" },

      // Scene 2
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "You did well, today, Grace. We did well. To make the train, that is. For a minute there, I thought we ran out of time and it was going to leave without us. Wouldn't that have been awkward?" },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Yes. A real tragedy." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "It was good of Aunt Nona to come see us off at the train station. I'll miss my sister. Maybe she'll come to visit us soon." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Perhaps." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "I hear the ship is quite nice. The Empress. She's been sailing since 1906. Bringing many-a-family back and forth. Many newcomers to Canada as well." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "The Empress of Ireland? I'm heading onboard as well." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "Is that so?" },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "Heading home to Ireland. Haven't seen my family in four years. I won't recognize my little nieces and nephews. There's no stopping time. Probably sprouted up faster than a mushroom after a rainfall." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "They do grow up fast." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "That they do. There's no slowing time. It's always pushing ahead." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "Thank you." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Yes, thank you." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "Better not forget this lovely lady too. Is that your mother? That's a lovely purple dress." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Yes. That…is her." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "Have you been on the Empress before?" },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "Our first time." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "I had a pleasant trip aboard the Empress coming here in 1910. Of course, I was riding in third class, but it was nice enough." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "I don't feel strong enough." },
      { scene: "Scene 2 - The Train", char: "Train Passenger", text: "Is she talking to someone?" },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "Her mother. She writes conversations with her mother in her diary. It's a way of coping with…" },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Woah. Is this your ball?" },
      { scene: "Scene 2 - The Train", char: "Little Grace", text: "That's my ball!" },
      { scene: "Scene 2 - The Train", char: "Bandmaster Hanagan", text: "Grace! Sorry about her. She shouldn't be running. You shouldn't be running on the train." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "Your name is Grace? My name is Grace, too." },
      { scene: "Scene 2 - The Train", char: "Little Grace", text: "I'm Grace. And Daddy leads the band." },
      { scene: "Scene 2 - The Train", char: "Grace", text: "The band?" },
      { scene: "Scene 2 - The Train", char: "Bandmaster Hanagan", text: "We have to return to our seats. We want to get rest so we can climb the stairs on the boat." },
      { scene: "Scene 2 - The Train", char: "Little Grace", text: "Daddy, will our room be small?" },
      { scene: "Scene 2 - The Train", char: "Bandmaster Hanagan", text: "It'll be just the perfect size for our family." },
      { scene: "Scene 2 - The Train", char: "Little Grace", text: "I don't want to sleep on the side near the window. That's where the water will come in." },
      { scene: "Scene 2 - The Train", char: "Bandmaster Hanagan", text: "I'm sorry to have bothered you. Edward Hanagan. Nice to meet you. I'm the bandmaster of the Canadian Staff Band. You've probably seen many of us on the train. Anyway, she keeps saying that. I don't know why. Come on, Grace. Let's find your mother." },
      { scene: "Scene 2 - The Train", char: "Jeremiah", text: "All right, then." },

      // Scene 3
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "There once was a ship that put to sea, the name of the ship was the Billy O' Tea, the winds blew up, her bow dipped down, oh blow, my bully boys, blow." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 3", text: "She'd not been two weeks from shore, when down on her a right whale bore, the captain called all hands and swore, he'd take that whale in tow." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "Before the boat had hit the water, the whale's tail came up and caught her, all hands to the side, harpooned and fought her, when she dived down low." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 3", text: "No line was cut, no whale was freed, the captain's mind was not of greed, and he belonged to the Whaleman's creed, she took that ship in tow." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "Oh, will you watch out!" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", type: "song", title: "Wellerman", text: "There once was a ship that put to sea / The name of the ship was the Billy O' Tea / The winds blew up, her bow dipped down / Oh blow, my bully boys, blow (huh) // [ALL] Soon may the Wellerman come / To bring us sugar and tea and rum / One day, when the tonguing is done / We'll take our leave and go // [DH3] She'd not been two weeks from shore / When down on her a right whale bore / The captain called all hands and swore / He'd take that whale in tow // [ALL] Soon may the Wellerman come... // [DH1] Before the boat had hit the water / The whale's tail came up and caught her / All hands to the side, harpooned and fought her / When she dived down low // [DH3] No line was cut, no whale was freed / The captain's mind was not of greed / And he belonged to the Whaleman's creed / She took that ship in tow // [ALL] Soon may the Wellerman come..." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 2", text: "What? Me? You're the one who needs to watch out." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 3", text: "Alright, cut it out. Here comes the security officer and the captain's wife." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "What is happening here? This is not becoming behaviour. Mr. Gardner." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Gardner", text: "I'll handle this, Mrs. Kendall. I don't know what all this fuss is about. Just get back to work. We have passengers arriving any moment and we need this deck mopped and dried." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 4", text: "Yes, sir." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 4", text: "You lot! And in front of the new captain, too." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "That Gardner is always busting us. Since he moved up to security, he's been a real pain." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 3", text: "Maybe if you two would behave. You embarrassed Gardner in front of his boss, Steward Thomas." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 4", text: "And you embarrassed Mr. Thomas, in front of his boss, Captain Kendall." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 2", text: "And you embarrassed Captain Kendall in front of his boss." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "His boss?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 2", text: "Yeah. Mrs. Kendall." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 4", text: "Will you stop?! We're already in enough trouble." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "She's a fine ship, as you know Captain Kendall." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Oh, I'm quite aware. I served here on the Empress as Chief Officer, before leaving to captain the Montrose in 1908. But, it's great to be back. I look forward to my maiden voyage as captain of the Empress." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "One day, I hope to become a ship's captain. It's great to have you at the helm." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "I have no doubt you will, Steward Thomas. But, I won't be taking control of the steering until Pilot Bernier here guides us out of the St. Lawrence. With your years of experience navigating the St. Lawrence's unpredictable waters, I welcome your expertise before we drop you off at Father Point." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Bernier", text: "Oui. Point au Pere. Merci, sir. I know this channel like the back of my hand–the little islands, low depth areas, changing currents–all that." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Excellent." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Mr. Thomas. What can you report to us about this crossing? Anything unusual?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "Yes, Mrs. Kendall. Just that we have a smaller passenger complement than normal in First and Second Class. Third Class and Steerage are full. There are some noteworthy passengers as well. Stage performers, Laurence Irving and wife, Mabel Hackney have just finished a Canadian stage tour and are with us." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "How interesting." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "In First Class, we have Sir Henry Seton-Karr, who I understand is a famous big-game hunter. Several other socialites. Ethel Paton, whose husband is in wool manufacturing. Clayton Burt with the Russell Motor Car Company. Also, there is a Johann August Reinhold Bach, who I understand, is a descendant of…THE Bach." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Really?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "Ah, Bach. Will Johann be sailing in third class, because I heard he was Bar-oque." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "How's the floor coming along?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "I'll just get back to it, then." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Brilliant idea." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "You were saying, Mr. Thomas…" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "In Second and Third Class, we have a large delegation from The Salvation Army, including a group known as The Canadian Staff Band." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Now, that's quite the variety of guests." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Ah, Mr. Ferguson. Did you have something come over the wireless?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Ferguson", text: "Yes, sir. Looks like we may be leaving a bit later than scheduled." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "What's this? Let me see. Says here, \"From Toronto CPR Commissioner for Captain Kendall. STOP. Train late arriving in Quebec City from Toronto. STOP. Excess baggage and instruments to blame. STOP. Will need to hold ship.\"" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "STOP! Instruments? The band? I hope they'll perform for us at least, to make up for our inconvenience." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "I told you. I'm not going. I'm done." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "First a fight. Now what?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Trombone Player", text: "Now, Maisie. Calm down. You can't leave. You have a contract." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Leave? What's all this? And who are you, may I ask?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Trombone Player", text: "I'm the ship's new 1st trombone player." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "1st trombone? How many do we have?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Trumpet Player", text: "Just him." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "And, I suppose you're the 1st trumpet player." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Trumpet Player", text: "No, I'm 2nd trumpet." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "How many trumpet players do we have?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Trumpet Player", text: "Just me." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "Oh, bother. Dr. Grant, can you explain what is happening here with Maisie?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Dr. Grant", text: "She was brought to me to see if she is ill. Apparently, she says she can't sail anymore. Says it makes her sea sick to even think about." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "I'm done singing on this moving piece of metal. I want to sing on stage or in a club, where I get to go home to a room that doesn't constantly move. Then, the next day, I'll visit my favourite shops, purchase heeled shoes that I can wear without the fear of losing my balance, and dine at some…exquisite French cafe, perched at a table and be waited on while..." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Gardner", text: "Come on now, Maisie. Let's get you back inside." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "See. There. On that storage shed. Shed 27." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Dr. Grant", text: "Is that, Emmy?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Who's Emmy?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Ferguson", text: "Our ship's cat. He's never left the ship before." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "If he leaves, I leave." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Gardner", text: "Now, calm down, Maisie. You can't leave now. The passengers are arriving. Let's go back to my office and talk about this. You wouldn't want to be in breach of contract. It gets nasty. There's paperwork and questions. Lawyers and all." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "I just want to be free…like Emmy. It should be me at that shed, not that little ball of fur!" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Gardner", text: "First a tussle on deck by this lot over here, and now primadonna Maisie. And we haven't even set sail yet. What are we going to do?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "Right, everyone. Let's calm down. Listen, people. We have passengers arriving any minute. We all need to be the great crew that you've always been. We need to put an end to this chaos. You've got a great reputation for teamwork with the Canadian Pacific Railway. Working together...that's what you're best at doing. Don't forget that." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", type: "song", title: "We Are One", text: "[MRS. KENDALL] This is where it all leads / The Emp-eress / Is it my destiny to save us all? No / It's my job to disrupt the chaos / Find a purpose for us // We're all rushing around / We're confused and upended / Let's refocus now / Our bond is imperative / Let's bring our collective together / As we fight for our lives // [DH1] Mrs. Kendall, I really needed to hear that / Our community is only as strong as our unity // [DR. GRANT] When I practise medicine / It reveals truth and gives meaning / It's what I'm meant to do // [ALL] The danger's not over yet / When we gain control again / I confess I'll miss the singing / Now let's bring this thing out // [ALL] We know our purpose is / To protect the mission / Our directive / 'Cause we work better / All together / We overcome / Our obstacles as one // [THOMAS] I have to give credit when due / And if I make Captain / It'll be thanks to all of you // [BERNIER] And I don't take for granted / My role to command // [MAISIE] I can't believe how much / I'll miss this crew // [KENDALL] The steamship Empress / Feels just excellent / I'm so proud to / Be your Captain // [ALL] We know our purpose is / To protect the mission... // [MRS. KENDALL] I look around and everyone I see / A pinnacle of guts and resiliency // [DR. GRANT] Desperates are nothing new to us / It takes monumental strength and trust // [ALL] Mrs. Kendall you saved us // [ALL] We know our purpose is / To protect the mission / Our prime directive / Will this work? / Who can say? / We're gonna sing it anyway / Our voices will rise / Through seas and through time / We're the unbreakable / Unshakeable / Improbable / Unstoppable / Sensational / Ovational / We're boldly transportational / Crew of the Empress!" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Deckhand 1", text: "Mrs. Kendall, I really needed to hear that. Our community is only as strong as our unity." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Dr. Grant", text: "When I practise medicine, it reveals truth and gives meaning. It's what I'm meant to do." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "I have to give credit when due. And if I make Captain, it'll be thanks to all of you." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Bernier", text: "And I don't take for granted my role to command." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "I can't believe how much I'll miss this crew." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "The steamship Empress feels just excellent. I'm so proud to be your Captain." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Kendall", text: "I look around and everyone I see, a pinnacle of guts and resiliency." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Dr. Grant", text: "Desperates are nothing new to us. It takes monumental strength and trust." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Time to get the passengers aboard. Did that cat really jump ship? Isn't that him on that shed…see, shed 27?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Gardner", text: "Ungrateful feline. After all the scraps I fed him from the kitchen." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Thomas", text: "Looks like he's moving. Yes, he's definitely on the move. Think he changed his mind?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "He's onto something. It looks like…it looks like." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Dr. Grant", text: "It's a mouse." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Maisie", text: "Eww! Disgusting." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Kendall", text: "Yes, well everyone. Let's get back to work. Passengers are boarding." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mr. Burt", type: "walkon", text: "Crosses stage with trunk (no lines)" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Karr", type: "walkon", text: "Crosses stage with trunk (no lines)" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Paton", text: "Mind that trunk! I don't want to damage any of my jewelry!" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mr. Steele", text: "Ms. Thomas. Where is this trunk going?" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Peyton", text: "Mrs Paton's room, sir." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mr. Steele", text: "Mrs. Paton's room?! This is marked \"Unwanted baggage.\" You know it's meant to go down in the hold for the remainder of the trip—not Mrs. Paton's room." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Peyton", text: "I understand sir, but…" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Paton", text: "I will not part with all my jewelry." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mr. Steele", text: "I'm sorry, but you will have to take out what you need. It cannot go to…" },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mrs. Paton", text: "Continue on, lads." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Mr. Steele", text: "Ms. Thomas! Do something." },
      { scene: "Scene 3 - The Lower Promenade Deck", char: "Peyton", text: "Mrs. Paton. Please." },

      // Scene 4
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Jeremiah", text: "It's a beautiful ship. Oh, Here's a steward. Grace, I'll find out where we are going." },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Peyton", text: "Oh. Very sorry, sir. How clumsy of me. Seems we got our signals crossed." },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Jeremiah", text: "No harm done, I suppose, Miss. Uh, steward. Uh…" },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Peyton", text: "Steward Peyton Thomas. That's what everyone calls me. Can I direct you to your room? Your names?" },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Grace", type: "walkon", text: "Follows father to meet Peyton (no lines yet)" },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Jeremiah", text: "Yes. Jeremiah Hathaway, and this is my daughter, Grace. Grace, let's follow this steward to our rooms." },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Thomas", text: "Where are you off to?" },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Peyton", text: "Taking Mr. Hathaway and his daughter to their rooms." },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Mr. Steele", text: "Shall I escort them, sir?" },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Thomas", text: "No. Very well. Be sure to look after them." },
      { scene: "Scene 4 - Lower Promenade Deck A", char: "Peyton", text: "Of course. They're always kidding like that." },

      // Scene 5
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "And, here is your room. If you get lost, just remember you pass straight through the music room before you get to the hall to your room." },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Grace, maybe you can favour us with a selection on the piano later." },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "I'm alright. Don't worry about me. Who put that chair there, anyway?" },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Grace, this will do just fine. Look there's even a window with a view." },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "I guess I'll be leaving you two then." },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "All right. Thank you. One moment. Allow me to…" },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "Is there a problem, sir?" },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "My Wallet. It's missing! Where could it have gone?" },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "You sure, sir?" },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Yes. I had it just before coming on board. I must have dropped it in one of the passageways. I must look for it immediately." },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "I'm sure it'll surface, sir. In fact, I'll check with the other crew on this deck–see if they've spotted anything." },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Thank you. I shall be in dire circumstances if we don't find it. I knew I should've kept some of my money in the ship vault with the bank silver. Nothing would happen to it, then." },
      { scene: "Scene 5 - Grace's Room", char: "Peyton", text: "I shall be on my way, then, sir." },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Grace, I need to go look. Will you be alright?" },
      { scene: "Scene 5 - Grace's Room", char: "Grace", text: "I'm fine, Father. Maybe I'll go out on deck and get some air. Look at the land one last time before we leave." },
      { scene: "Scene 5 - Grace's Room", char: "Jeremiah", text: "Very well." },
      { scene: "Scene 5 - Grace's Room", char: "Grace", type: "song", title: "Boat Song", text: "We packed our bags and said farewell / Untied the knot and raised the sail / We threw our hearts into the sea / Forgot all of our memories // The wind was sweet and smelled of home / The sea was rough and felt unknown / Escaping shores of eternity / Dawn light, twilight, infinity // Can we keep our bearing straight? / Or will we be blown off course? / Are we instruments of fate? / Or do we really have a choice?" },

      // Scene 6
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "The train was late arriving here in Quebec City. I didn't tell Father this, but I was secretly hoping we would miss the ship and turn around and head home." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "I'm sorry, too." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "You alright? You were bending a little generously over that railing." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "What! I wasn't…bending. I was just looking down on the deck below." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Well, you looked distracted. Were you just talking to someone that isn't here? And, if you don't mind me saying, you're not behaving like a well-to-do young lady, climbing a railing in a dress." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Oh really? And, you're not what I expect from a ship's officer, or steward, or whatever you are. You barely look 15." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "I'm seventeen, come June 5." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Are you sure you're not an impostor, masquerading in uniform." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Honorary steward. First Class. Well, Second and Third Class too, I suppose." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "What does that mean?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Father is the Chief Steward. He was appointed by Captain Kendall himself. And me, well let's just say I have a full run of the ship. They have me filling in wherever needs be. I have the Crippen Curse to thank for that." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "The what?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "The Crippen…you mean you haven't heard of the curse? Hawley Harvey Crippen, or Doctor Crippen, as he referred to himself. He was a wanted fugitive. Scotland Yard had been chasing him for a terrible crime back in England." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "What crime?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "I better spare you the details. Anyway, he and his new lady friend were on the run from the law and they secured passage on board a Canadian Steamship called the Montrose, which was Captain Kendall's former ship." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "What did the Captain do?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "A series of wireless messages were sent back and forth to Scotland Yard. A Scotland Yard detective, posing as the ship's pilot, came on board at Father Point. He arrested Crippen. The world followed the drama in the newspapers. Captain Kendall became an instant hero. He even kept an eye on Crippen during the sailing by playing cards with him." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Oh my. What a story. And the clever crewman who first alerted Captain Kendall?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "My father. He immediately promoted him from the lower decks on the Empress, to Chief Steward." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "So, let me see if I've got this straight. Crippen was pretending to be a doctor, and went on-the-run with a woman and they pretended to be father and son, all the while, Captain Kendall pretended to entertain the doctor. And the Scotland Yard detective pretended to be the ship's pilot. And now, you're in disguise, pretending to be some sort of free-to-roam-the-ship steward." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "It's no disguise, really. I'm a well-respected part of this crew. You'll see." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Will I?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "And speaking of disguise, there's Laurence Irving." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Who?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "According to several crew mates, he's extremely famous in England and Canada for the theatre. He and his wife, Mabel Hackney, just finished a Canadian tour on stage." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "He has a strange manner of disguise if he doesn't wish to be noticed. It's all a disguise, isn't it? Those that pursue their money, like it's the most important thing. Dim moon-eyed fishes near, Gaze at the gilded gear, and query; What does this vaingloriusness down here?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "I didn't understand any of that?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Sorry. It's part of a poem by Thomas Hardy. I studied it in school. It's about the Titanic. It's about being vain. It's all about appearances–like giving people what they want." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Giving the people what they want, yes. Before I left to come aboard the Empress, Mother told me a story about an architect named Christopher Wren. It seems he designed the Windsor Hall, near London, a couple hundred years ago." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "What did he do?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "He gave them what they wanted. He built another four pillars. Only these ones didn't quite reach the ceiling. They only gave the appearance of support. In fact, Mother says they still stand today and act as a bit of a tourist sight." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Huh." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Irving", type: "walkon", text: "Shares a loud laugh with Hackney across the stage (no lines)" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Hackney", type: "walkon", text: "Shares a loud laugh with Irving across the stage (no lines)" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "So, you see, Grace. That's my role here. And my father's too. Catering to the whims of those who don't know any better than we. So, Grace, what about you? What is your disguise? Who are you trying to please?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Music. It sounds like, \"O Canada.\"" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "What do you know? I guess it's that Canadian Staff Band. Looks like they're giving a bit of a concert on the deck over there." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Little Grace", text: "Mummy. I'm coming." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Grace!" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Little Grace", text: "That's my father. Leading the band. I have to go. My mother is waiting." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Friend of yours?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Just someone I met on the train. Her name is Grace, too." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "Huh." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Oh? Ok. Was it something I said?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "I can't tell Father how I really feel. He won't understand. I don't even want to bother trying." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Our life in New York seems so far away now. I just want to be home." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Crall", text: "Stop making excuses! You know what must be done." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Peyton", text: "I'm not making excuses!" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Oh!" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Mr. Steele", text: "Everything ok, miss?" },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "Yes. I'm…fine." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Jeremiah", text: "Oh, there you are, Grace." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Mr. Steele", text: "Ah, Mr. Hathaway. I've put in a report about your wallet. Nothing has surfaced yet, but we'll get to the bottom of it." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Jeremiah", text: "I'd be very much obliged if you did, Mr. Steele." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Mr. Steele", text: "Good day, sir. Miss." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Jeremiah", text: "I hate to see you out here all by yourself." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Grace", text: "I'm fine. Actually, I think I made a friend. That steward who took us to our room. Her father is the Chief Steward." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Jeremiah", text: "I see. I'm also speaking with others–trying to make connections in the finance world ahead of arriving in Liverpool." },
      { scene: "Scene 6 - Lower Promenade Deck C", char: "Jeremiah", text: "Grace. Dinner is at 7. Why don't we go to our cabin and unpack. Maybe freshen up. Have a short rest?" },

      // Scene 7
      { scene: "Scene 7 - The First Class Dining Room", char: "Pianist", text: "Any sign of her?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Trombone Player", text: "None. I haven't seen her since we pulled away from Quebec City." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Trumpet Player", text: "Maybe that chap who is the descendant of Bach can sub in. I wonder if he sings." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Pianist", text: "I'm sorry, but I don't do fugues. They're disagreeable during dinner." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "Maisie?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", text: "You can't do this. I demand an evening off." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Gardner", text: "As Security Officer, I can, and you are in no position to demand anything. Consider yourself lucky I don't report you to the Captain for being derelict of your duties." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", text: "Hmph!" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Pianist", text: "How about we tune?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", text: "How about \"see ya later?\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Gardner", text: "Maisie! That's enough. You will stay here, and start singing. The guests will be arriving any minute. And, I don't want to hear any more talk about you leaving. Is that clear?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", text: "Yes! I won't talk about leaving." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", type: "song", title: "When I'm Gone (Cup Song)", text: "I got my ticket for the long way 'round / Two bottle of whiskey for the way / And I sure would like some sweet company / And I'm leaving tomorrow, what do you say? // When I'm gone, when I'm gone / You're gonna miss me when I'm gone / You're gonna miss me by my hair / You're gonna miss me everywhere, oh / You're gonna miss me when I'm gone // I got my ticket for the long way 'round / The one with the prettiest of views / It's got mountains, it's got rivers, it's got sights to give you shivers / But it sure would be prettier with you // When I'm gone, when I'm gone / You're gonna miss me when I'm gone / You're gonna miss me by my walk / You're gonna miss me by my talk, oh / You're gonna miss me when I'm gone" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "I'm sorry, we didn't quite get that." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Good evening, folks. I'm Mr. Steele, assistant Chief Steward. I hope you are all well." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "Oh, I had their admiration until you said, \"politician.\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "We are honoured." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "Thank you, Mr. Steele. I've just come from British Columbia, where they have the final say on location for hunting and outdoor recreation. I've even brought a moose along with me on the ship. You think I'm joking." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "I assure you, he is not. I couldn't help but notice one large set of antlers packed away in the luggage below." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "Now, let's hope they are serving some good game for dinner." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "And Mrs. Paton. Lovely to have you aboard. As well, not to pull the wool over your eyes…Mrs. Paton's husband, one William E. Paton, is a successful wool manufacturer out of Sherbrooke." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Very clever, young man." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "How interesting. Will your husband be joining us?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "He's tied up with business, and I'm off to rendezvous with my brothers, Fred and Robert who are journalists working in Egypt. I'm afraid I didn't have room for my husband on this trip–just a rather large box of jewelry." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Well, Mrs. Paton. We'll be certain to look after you then. No pressure, am I right? Although, that is how diamonds are forged." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Clever." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "And, over here, we have Mr. Clayton Burt, manager of the Russell Motor Car Company, in West Toronto." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Motor cars? Fascinating." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "Yes. Don't get me started. We are currently working on the Russell-Knight motorcar. It boasts power and comfort, with an upholstery over twelve inches thick. Our cars are 'made up to a standard, not down to a price.'" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Sounds extravagant. What kind of price might we expect for one of your vehicles?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "Just shy of $3000." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "That's nothing to be shy about, I'd say." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "I'm heading over to Europe to investigate some overseas manufacturers and suppliers. We're particularly interested in the magneto for our electric starters." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Sounds magnificent, Mr. Burt. And over here, needing little introduction, we have Laurence Irving and Mabel Hackney, famous stage actors." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Irving", text: "What is death? Death is nothing but the passing to another life. For I will not bow to worshiping bits of pasteboard, but rather the spirit which is Sonia." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "I would never have guessed you were an actor." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Hackney", text: "Please forgive my husband. We're just fresh from Winnipeg where we performed \"Typhoon.\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "I should have thought you would have an entire company travelling with you." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Hackney", text: "There was insufficient time to strike all the sets and pack costumes, so they will all travel on White Star's Teutonic in a few days." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Irving", text: "Just us, without our maid and valet. Oh well." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "With your tour finished, what is next?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Irving", text: "I have a completed manuscript based on the character of Napoleon in my stateroom. So far, it's the only copy." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Better hold it tight then, lest you lose it." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Hackney", text: "That's what I've been telling him." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Mr. Hathaway, everyone. Is everything alright, Mr. Hathaway?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Yes, I suppose. It's just that I left my young daughter in the room to rest. I didn't want to disturb her, but told her to join us when she was ready." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Shall I send someone to fetch her, sir?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "No, I suppose that's quite alright for now." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Ah, Grace. I hope you're feeling better. Young Steward Thomas. I wanted to thank you first of all for finding my wallet." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Your wallet has been found?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Yes, Grace. Ms. Thomas here found it and personally delivered it to me." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "I see." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Now, Miss Thomas. I wonder if you would like to join my daughter, Grace, for dinner." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Oh, I'm afraid that's not possible, Mr. Hathaway. I have my duties to perform." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Looking after the First Class passengers–is that not one of your duties, Steward Thomas? I could speak with one of your superiors, if needed. It's just that you're the closest person in age to my Grace, and I think she would be better off with you." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "I suppose. I'll come and join you. Just give me a moment and I'll be right back." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Looks like things are straightened out with your daughter now. Mr. Hathaway is in banking. Here on official business, although I won't go into specifics." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "Sounds suspicious, and maybe a trifle corrupt. I think I like you already." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "I assure you it's nothing illegal." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "And finally, we have our own marconi operator, Mr. Ronald Ferguson joining us, sending out good signals, I might add." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "Yes. I'm afraid I will only be here for a short while at dinner, although I am wondering about dinner, as we have yet to receive our table settings." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Steele", text: "Ah, yes, there seems to have been a bit of a slow-up with the dishwashers. The rest of our dishes should arrive shortly." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "Well, at any rate, my shift will be starting soon. I will need to check in with my junior officer." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Grace. Sorry about that. Also, sorry about earlier…when I left you on deck. I had to leave so…abruptly. What's so interesting there…in that book?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "It's a mystery. I think I figured out who did it." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Really. Let me hear a bit." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "The most successful of crimes, spoke Mr. Kimberly to the others, are those that are committed with partial truths. That way, the culprit may capitalize on the truth, in order to mask the deception." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "\"The most successful of crimes,\" spoke Mr. Kimberly to the others, \"are those that are committed with partial truths. That way, the culprit may capitalize on the truth, in order to mask the deception.\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "I see. I'm afraid I'm not much of a reader, unless of course it's a menu. I'm starved. Do you read very often?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "All the time. It calms me." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "What about writing? The first time I saw you on deck, you were writing something." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "I keep a diary." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Really? Sounds exciting." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Not really. It's mostly…conversations I write between my mother and I." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Oh. Where is your mother?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "She's no longer alive." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "I'm sorry to hear that." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "I was told that it was good therapy to write these conversations. Sometimes, I even close my eyes and I imagine she's with me–talking with me. I mean, I know she's not really here–it's not like that. But, it helps me feel better if I can envision her with me. You probably think that to be strange." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "No, I do not. I think that's a very good idea. What does she look like when you see her?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "She's always wearing her purple dress, and the earrings my father gave her. And her hair is up." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "That's very specific. Hair. Earrings. A purple dress." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Yes. I even have the dress with me. In my suitcase. Back in our room. I couldn't bear to leave it behind." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "And what of your father? What's he all about?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "He's more interested in keeping up social cues and building a financial future." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Yes, I've heard that your father is responsible for a load of silver bars on board." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "How did you hear about that?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Word travels fast on a ship like this. But, your father must be doing well financially if his employer put him in charge of that kind of loot." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Loot?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Well, you know what I mean. Sounds like he's secured a prominent position." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "And what about you, Peyton? You mentioned your father was Chief Steward. Where is your mother?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "She lives in the East end of London. That is, we do–my parents and me, when we're together on land. Mother works hard cleaning houses for a string of rich folk, and Father and I…well, we have to go at it here at sea. He's become real important here. But, we go home together after every crossing." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "That doesn't seem like much family time together." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "There'll be lots of time for that later. Right now, Father and I have to make a bit of money. He promised Mother that we'd be done with this life in a few years. Although, as Mother keeps reminding him–\"time is the coin of your life. Be careful lest you let others spend it for you.\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Sounds like your mother is wise. My mother gave Father similar advice." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Oh, what's that?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Whenever he would run off to quickly try and fix a situation, she would often say, Jeremiah, sometimes the best action is no action at all." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "Whenever he would run off to quickly try and fix a situation, she would often say, \"Jeremiah, sometimes the best action is no action at all.\"" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "Interesting. I guess my Father is a man of action too. But he's really trying, my Father. He's a good man." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Irving", text: "I mean, really dear, we should do a Titanic production. There's so much there that we could explore in the theatre." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Hackney", text: "It practically writes itself." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Irving", text: "That's good. It'll save me the work." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Karr", text: "You could do your research this week–here on the Empress. I'm sure there are plenty of similarities to the Titanic." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "Uh, perhaps this topic is still a little too tender to be having at this time." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Yes. Perhaps it's a little too soon." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "Too soon for what?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "I believe we were simply entertaining the connection between this liner and the…the Titanic." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "Connection? I wasn't aware that there was any…connection." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "I think what Mr. Hathaway means is that being aboard a liner such as this one…when you don't travel by steamship too often…well, sometimes people cannot help but forge the association. But, I'm sure that someone of your sea experience would not worry about such things." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "Indeed. There is hardly any resemblance to our tragic counterpart. I'm sure you would find, if you were to investigate further and be duly educated, that we are in a far better position than those on the Titanic, to say the least." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mrs. Paton", text: "Well, that's a relief." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "Much planning went into the crafting and building of this ship. From the first sketches in 1904, to her completion and maiden voyage in 1906. She's perfectly fitted and smoothly operational on all eight decks. Modern electric lights. A ventilation and heating system that allows for a change of air in every compartment every ten minutes." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Mr. Burt", text: "Amazing. And, I'm sure she has many safety features." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "As I am sure you are all fully aware, most of the casualties surrounding the Titanic disaster came about from a deficiency of lifeboats. You may have noticed as you walked the Upper Promenade deck, that we have many said boats. We have navigational telephones, and wireless communication. Eleven watertight compartments, as well as watertight doors, ensure that we can stay afloat in the event we take on water." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "We have navigational telephones, and wireless communication. Eleven watertight compartments, as well as watertight doors, ensure that we can stay afloat in the event we take on water. Daily drills ensure that our crew successfully operate the gears needed to close these doors. Captain Kendall has the crew running a variety of drills and inspections on safety equipment from fire extinguishers to emergency oil lamps in the passageways. This is the Empress of Ireland—not the Titanic." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Ferguson", text: "And I too, sir. Evening." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Thomas", text: "Miss. Thomas! What are you doing here?! Isn't there a job you should be doing right now?! Back to your post, immediately! And you! I don't want to hear another word, either spoken or neatly wrapped up in a cute lyrical chorus about you leaving the ship. Do you understand?! Oh, for goodness sake, sing something already!" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", text: "Yes, sir." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "What a monster! Who was that awful man?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Maisie", type: "song", title: "I'll Be Seeing You", text: "I'll be seeing you / In all the old familiar places / That this heart of mine embraces / All day through / In a small cafe / The park across the way / The children's carousel / The chestnut tree / The wishing well // And I'll be seeing you / In every lovely summer's day / In everything that comes what may / I'll always think of you that way / I'll find you in the morning sun / And when the night is new / I'll be looking at the moon / But I'll be seeing you // In a small cafe / The park across the way / The children's carousel / The chestnut tree / The wishing well // And I'll be seeing you / In every lovely summer's day / In everything that comes what may / I'll always think of you that way / I'll find you in the morning sun / And when the night is new / I'll be looking at the moon / But I'll be seeing you" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Peyton", text: "That man–that man is my father." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "I think I'll turn in. I'm not feeling the best." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Are you sure? Should I accompany you?" },
      { scene: "Scene 7 - The First Class Dining Room", char: "Grace", text: "No, I don't want to take you away. I'll be fine." },
      { scene: "Scene 7 - The First Class Dining Room", char: "Jeremiah", text: "Very well. I'll see you a little later." },

      // Scene 9
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Well, aren't you full of surprises?!" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "I could say the same about you." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Touché." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "Sorry, I shouldn't be touching the piano. I didn't have permission." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "It's fine by me. It's that Mr. Gardner you should worry about. He's one of our security officers." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "What are you doing here? Shouldn't you be doing what your father told you? You know, ship's business and all." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "I have a real knack for not doing what I'm supposed to." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "That's becoming apparent." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "That was a beautiful tune you were playing. What is it called?" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "It's called, Kinderszenen by Schumann. The last part was just an improvisation. I just made it up." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Can you make something else up for me?" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "No. I'm not very good at writing my own music. But, I could play some Schubert for you." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Why would I want to hear from someone I've never heard of before? I want you to play something of Grace." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "No, I can't." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Please." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "The answer is 'NO'! I'm sorry. I guess I'm fatigued. It has been too long of a day to get my brain working in that way." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Yes, well, I came looking for you. I felt poorly about the dinner table incident. You know, with my father. What say I take you on a grand tour of the ship? Show you the ins and outs?" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "I don't know. My father might not approve." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "He seems occupied enough." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "I'm sorry. I appreciate the kindness, but I must be getting to my room. I'm quite spent. Perhaps another—" },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Grace. Look. You have to come with me. I have some important information for you regarding your father and the silver." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "The silver? What business have you with my father's silver?" },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Oh, so it belongs to your father now, does it?" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "My father's. The bank's. I don't care whose it is. What important information do you have?" },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Look. We have to talk about this in private. There are things that I am privy to on this ship. Things that could get me into deep water if I told you." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "Don't worry, Peyton. I'm not going to kill the messenger." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Huh?" },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "Sophocles. Never mind. Is someone going to—" },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "Not here. Meet up with me on Boat Deck in five minutes." },
      { scene: "Scene 9 - The Music Room", char: "Grace", text: "But, what about your father? Won't he be looking for you? Won't he be upset with you shirking your duties again? I know my father would be." },
      { scene: "Scene 9 - The Music Room", char: "Peyton", text: "You leave my father to me. I have a few things I'm going to say to my father the next time I see him. Sometimes he just makes me so mad. Remember: five minutes." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "Grace. Good. You came. We have a conversation to finish." },
      { scene: "Scene 9 - The Music Room", char: "Grace", type: "song", title: "How Would That Feel", text: "Did I hear that right? / Did she just shine a spotlight / On her innermost feelings / Like it's no big deal / Say whatever, whenever you like // You'd presume with all my mastery / To pursue flights of fancy, easy / Who am I kidding, I've never found that part of me / 'Cause I'm designed to color inside the lines // Cool and methodical / Way too responsible / I can't help it / Sometimes I peek through a keyhole and see people happy / I admit // It might be time to change my paradigm / If only I can let go of the wheel / My fear replaced with total faith / I'm fiercely free and really real / Flying blind / How would that feel? // It might be time to change my paradigm / If I can only let go of the wheel / My fear replaced with total faith / I'm fiercely free and really real / Flying blind / How would that feel? // It might be time to change my paradigm / If only I can let go of the wheel / It's nice to dream that I could change my mind / Deep down, I know / I will never let go / My fear is staked / I have no faith / Contented freedom is not real / Flying blind / How would that feel?" },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "I'll say." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "Right. Look, there's a plan to steal your father's silver." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "You mean the bank's silver?" },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "Your father's silver. The bank's silver. Whoever owns the silver. It doesn't matter much. If you don't listen to me, the only people owning those silver bars will be a long ways from your father or his bank." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "How do you know this?" },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "I told you. I know this ship in and out. I've been to places that even the Captain doesn't know exist. They've been aware of your father's coming aboard for days by way of the bank's shipping manifests. They even watched the silver get loaded yesterday. That's why I had to take your father's wallet." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "I knew it!" },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "We just had to make sure we had the right person. But, I returned it. Now, listen. It's not a matter of whether the silver will be taken, but when it will be taken." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "This is all difficult to believe. I can't believe that someone aboard this ship could come up with such a plan. I mean, where would they hide the silver? There's nowhere to go." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "There are things that I would like to show you, but we don't have the luxury of time." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "Hmm. Didn't your mother say something about time? It's the coin of your life. Be careful how you spend it?" },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Eddie", text: "Good evening, Peyton." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "Eddie. This is Eddie. He's a dishwasher in the kitchen. We call 'em Fast Eddie. Grace, it's not what I want to tell you here. It's what I want to show you–it's the best way for you to understand. There are a couple of places I need to take you first. You have to trust me. Give me an hour of your time, and all will be made clear. I need to take you back inside, to our next stop." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "Our next stop on the 'let's make Grace a fool' tour? You're not giving me any answers. Only more questions." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Peyton", text: "Grace, if you are at all concerned about your father and the fortune entrusted to him, then I suggest you give me a short bit of your time. All will be clear in the end." },
      { scene: "Scene 9 - The Music Room / Boat Deck", char: "Grace", text: "Very well. Lead on." },

      // Scene 10
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Come in. Ah, Ms. Thomas. You brought guests? Isn't it a little late? I was about to go to the cafe for a coffee, and perhaps a round of cards in the lounge." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Peyton", text: "Yes. Sorry to bother you Dr. You see, it's my pal Eddie here. He works in the kitchen. He says he's not been sleeping at night. Oh, and this is Grace." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Grace, from?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Peyton", text: "Oh, she's a passenger. But, it's ok. Her father asked me to entertain her a bit." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "I see." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Grace", text: "Dr. Grant. This must be an interesting job you have here on the ship. What made you decide on it?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "It is interesting at times. I heard about experiences on the Empress from a friend of a friend. It was from a doctor named John McCrae, out of Guelph. He and I both studied at McGill for medicine." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Peyton", text: "Uh, doctor. That's very fascinating and all, but…" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Right. Now, you've had trouble sleeping?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Right. Haven't slept in years." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Months." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Days. I haven't slept in days. People have likely been eating off of filthy cutlery, and plates for all I know. I can't stay awake on the job." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Oh, dear. That does sound serious. Good thing you don't work in the engine room." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Excuse me, sir?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Nevermind. You know, your sleeplessness reminds me of a chap I went to McGill University with. The poor fellow was trying to study for his final exams, but had trouble sleeping. The young man at medical school was prescribed a drink by one of the professors which seemed to do the trick. A mixture of tea leaves and certain salts." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Can you concoct it? Will it work? Like, instantly?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Yes. Well, not instantly. But, I wouldn't recommend carrying too many dishes to the cupboard after taking it, if that's what you mean." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Peyton", text: "Great. Can you set him up?" },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Very well. Here you go. Sweet dreams." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Eddie", text: "Thanks, Dr. Grant." },
      { scene: "Scene 10 - Dr. Grant's Infirmary", char: "Dr. Grant", text: "Splendid. Now, if you don't mind. I'm off to the cafe. Wish me luck at cards." },

      // Scene 11
      { scene: "Scene 11 - The Kitchen Elevator", char: "Eddie", text: "I don't think anyone in the kitchen noticed us. Now, here's the service elevator." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Peyton", text: "Well done, Eddie. If you need something done, Eddie's the one to get it done for you— lightning fastest. Eddie, are we all set?" },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Eddie", text: "Ready to go." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Peyton", text: "Great. Now, Grace, there is one more thing that I need to ask of you before we go any further. It's going to require that you trust me." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Grace", text: "Trust you? I've only made your acquaintance a short while ago. I hardly know you. And every corner I allow you to take me deeper into the heart of this ship. Sorry, Eddie, but this is too fast for me. I neither know you, nor trust you." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Peyton", text: "Don't worry about Eddie. I've known him for weeks." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Grace", text: "Weeks? What do you need me to do?" },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Eddie", text: "We need to take you down below deck, but we can't allow you to be seen. It would arouse too much attention. We need you to—" },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Grace", text: "Wait a minute. If you think that I'm climbing onto that thing to hide, then you are mistaken." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Eddie", text: "It's all right, Miss, see. It's just a blanket over top. The lift is used all the time." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Grace", text: "What is the purpose of this?" },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Peyton", text: "Grace, everything I told you about your father's silver. All your questions. I can answer once we are beyond this door. You have to trust me, just a little further. Please." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Grace", text: "If anything goes wrong, I'm going to hurt you." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Eddie", text: "What did she say? I didn't catch that." },
      { scene: "Scene 11 - The Kitchen Elevator", char: "Peyton", text: "I don't think you want to know." },

      // Scene 12
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "It's so loud here. I don't want to be here. Take me back." },
      { scene: "Scene 12 - The Engine Room", char: "Eddie", text: "You're in the engine room. We will take you back." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "It's noisy and scary. Father would never know where to look for me. Why am I here? Why did I ever listen to you?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "But, Grace. I have shown you everything you need to know. I have shown you exactly how your father's silver will be taken. With a little help from the good doctor and his tea, the security will sleep well tonight, and we'll gain access to the safe in the purser's office and the silver. We'll bring it down here on this lift that you came down and hide it down here, until we have time to discover who is wanting to steal it, or until it is time to dock in England." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "What are you talking about?" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Let us explain. Let us help you, Grace." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "I don't even know you. Hey, I saw you up on deck earlier. You were cross with Peyton." },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "I'm Ivan Crall. These are my engines. Nice to meet you. Each of these engines is connected to one of the ship's propellers out there. That's right. You are in very deep water now." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Have you brought me here for a reason?" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "You didn't tell her the whole story?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "I told her, but she wouldn't really believe me…she needed to see. We can explain it now. Then, she'll believe." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Peyton, I want to leave." },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Leave, you shall, Miss Hathaway, but with some information and intent. You see, I have uncovered a plot by some aboard this ship to steal your father's silver, right out from under him. Do you want that to happen?" },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Of course not. But, who would be able to do that? How do you know—" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Listen very carefully. The question concerning you right now isn't who, or how, or even why. The situation is that very soon, unless you do something about it, it will happen, and your father won't be enjoying his stay in First Class, to say the least." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "What do you care of my father? Why should I believe your concern for him?" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "My concern isn't for your father, Miss Hathaway. That should be yours. My concern is that I've been a part of this ship since the first bolt of steel was pounded into her sturdy hull back at Fairfield shipping yard in Scotland before being launched in 1906. I told you—these engines are mine. This ship is mine. I'll not let some greedy lot, in search of a fast fortune, tarnish her name with a scandal of thievery." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Peyton, I–" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "Listen, Grace, you must believe us. What you need to do is to help us…acquire the silver. We must take it and hide it. Only until then, can we be assured of its safety." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "So, you say someone will steal the silver, and I am to help you steal it first. How can I be assured that it isn't you who are stealing the silver?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "You just have to trust us. I mean, do you really think we would try to steal the silver, and tell you about it first?" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Right now, she's asking herself, \"why not let my father in on the plot? Or the ships' officers?\" Grace, we don't know who to trust, really. We could be helping out the thieves, if we let on that we know. All right, then. We'll even show you where we're going to hide it." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "What is this?" },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Behind this locked door is a conduit that leads to a service area. It rarely gets opened. In fact, most people don't even know it's here. The cap'n probably wouldn't even notice it. This is where we can hide your father's silver, once we bag it in those mail sacks." },
      { scene: "Scene 12 - The Engine Room", char: "Eddie", text: "What do you think, Grace?" },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Even if what you're saying is true, how do you plan on getting into the safe in the Purser's office?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "I overheard Father talking to Mr. Gardner about the keys. There are only 2 keys to that vault where the silver is stored. Gardner has one, and your Father was given one for safekeeping." },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "That's where you come in. We need you to get it. Search his pockets–your cabin. It's got to be somewhere." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "But, you want me to deceive my own father?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "It will benefit him, in the end. The silver will be saved." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "And what about you, Peyton? Aren't you concerned about deceiving your father, too?" },
      { scene: "Scene 12 - The Engine Room", char: "Peyton", text: "It will help him in the end, too. He'll be proud of me for helping save the silver." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "I don't know. Take me back up top. I'll give it some thought." },
      { scene: "Scene 12 - The Engine Room", char: "Crall", text: "Very well. But, don't think too long. Time is running out. I suggest you hurry…and this time, take the stairs. They'll be suspicious if the lift comes back up so soon." },
      { scene: "Scene 12 - The Engine Room", char: "Grace", text: "Really? That was an option? The stairs? You made me get in the lift, like I was a bag of potatoes!" },
      { scene: "Scene 12 - The Engine Room", char: "Deckhand 1", type: "song", title: "I'm Gonna Be (500 Miles)", text: "[DH1] When I wake up, well, I know I'm gonna be / I'm gonna be the one who wakes up next to you / When I go out, yeah, I know I'm gonna be / I'm gonna be the one who goes along with you // [DH3] If I've money, well, I know I'm gonna be / I'm gonna be the one with money next to you / And if I haver, yeah, I know I'm gonna be / I'm gonna be the one who's haverin' to you // [ALL] But I would walk five hundred miles / And I would walk five hundred more / Just to be the one who walked a thousand / Miles to fall down at your door // [DH1] When I'm workin, yes, I know I'm gonna be / I'm gonna be the one who's workin' hard for you // [ALL] But I would walk five hundred miles / And I would walk five hundred more / Just to be the one who walked a thousand / Miles to fall down at your door // Da-da da da, da-da da da / Da-da dum diddy dum diddy dum diddy da da da" },
      { scene: "Scene 12 - The Engine Room", char: "Eddie", text: "Here. This way." },
      { scene: "Scene 12 - The Engine Room", char: "Jeremiah", type: "walkon", text: "Present in engine room (no lines)" },

      // Scene 13
      { scene: "Scene 13 - Grace's Cabin", char: "Jeremiah", type: "walkon", text: "Sleeping in bed (no lines)" },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "This whole plot to steal the silver–is there a plot, or is it simply your plot?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "That's quite the accusation." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "Do you blame me? First, I find out that you stole Father's wallet." },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "Temporarily borrowed." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "Whatever. Then, I find out that you're sneaking around behind your father's back." },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "I'm not…sneaking around his back. He trusts me." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "Really?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "Yes. Did you notice those t-bar looking levers we passed on the way up. Those are the levers that close the watertight doors. Father has put me in charge of one. Everyday, I have to race down there and turn that lever–make sure that door gets closed, in case of a real emergency." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "So he trusts you with that? He didn't seem too trusting in the dining saloon." },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "Well, he trusts me. Although, he usually comes to check if I turned the lever on time. I must confess, timing has always been an issue for me." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "What do you mean?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "Well, I'm no 'Fast Eddie,' I'll say that. You see, back home, I was once interested in nursing school. So much so, I thought it was a sure thing. Passed the exam and everything. I was meant to attend an interview before the college acceptance. I was hanging with the wrong crowd, lost track of time, and didn't get there in time. I stood outside the locked door of the building, knowing I had made a grave mistake. I was fourteen minutes late. A lousy fourteen minutes." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "Couldn't you try again?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "What's the point? Father was furious. Again, it was, \"time is the coin of your life. Be careful lest you let others spend it for you.\" Anyway, I've turned that page now." },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "Is this what you're looking for?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "I believe it is. So, are you in?" },
      { scene: "Scene 13 - Grace's Cabin", char: "Grace", text: "I really don't know what your intentions are, or this Mr. Crall. But, I don't believe you have ill intentions. Here you go. Let's hope you know what you're doing." },
      { scene: "Scene 13 - Grace's Cabin", char: "Peyton", text: "Here's hoping. Thanks, Grace." },

      // Scene 14
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "\"Grace. If you want Peyton Thomas to see the light of day ever again, you must get that key to the vault. Her survival will depend on it. Signed Anonymous.\" Oh my. She hasn't given the key to Crall. At least, she hadn't by the time this letter was written. What should I do? She could be in danger." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Eddie? You scared me. How did I not see you coming?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "It's in my name." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "I got this note. I don't know who sent it." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "Oh, no. It's what I thought. I'm afraid Peyton is in trouble. I think Crall was using her to get that key from you. He was afraid you wouldn't give in. I think he has Peyton captive down in the engine room." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "But, I gave the key to Peyton. Didn't she deliver it to Crall?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "No. Well, not at first. You see, she was having…guilt." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Guilt? You mean she is guilty of stealing the silver herself?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "Sort of. Well, she was being used by Crall, but yes, she was getting a small piece. She wants to start a new life back in England. She just wants her family back together." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "I guess I can relate with that." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "She even justified it for you too…that if your Father's silver had disappeared, you would get to go back home." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "I must confess, I have thought of that too." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "She was going to return the key to you, but I haven't seen her since. They must have taken her and the silver." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "So, what do we do? Perhaps we should talk to Peyton's father–Steward Thomas?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Eddie", text: "I don't know. I think I'm going to–oh no. It's Mr. Steele. Gotta go." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "Miss Hathaway? Doing a bit of sleepwalking are we?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "No, Mr. Steele. But, have you seen Steward Thomas, sir?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "Young Steward Thomas, or Chief Steward Thomas?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Chief Steward Thomas. That Steward Thomas." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "I'm afraid not. He could be anywhere at this point. Perhaps he is chasing down his wayward daughter as we speak." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "I see." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "If you don't mind me saying so, Miss Hathaway, I don't think it is a good idea you being out this late. You seem to be anxious about something. Is there anything I can assist you with?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "What makes you think that?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "Just a hunch. I know it's none of my business, but I can't help but wonder if there is something the matter. Is it about your Father rushing you off to England?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "How do you know of such things?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "I overheard your father speaking about the difficult transition as he arrived for dinner tonight. I surmised that is why you must be so bothered. It must be a difficult thing, really. Good evening, Grace." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Wait, Mr. Steele. There's…there's something I need to tell you. It's about Peyton Thomas. She's committed a terrible mistake, and she desperately needs our help." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "What has Miss Thomas done this time?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "She has gotten mixed up with a bad lot. They have stolen something valuable. Something very valuable." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "You mean, like some money or jewellery?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "No. Much more valuable. She and her people have stolen—" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "The silver? No. It's not possible. Who is behind this?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Some engine worker named Crall. It was only tonight that I…I didn't want to help, but they…" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "Crall! I should have known. He works at the heart of the ship. He's been here for years. He would know everything about this ship. Listen, Grace. No one blames you. Just tell me where they are… so I can help Miss Thomas." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "I can do better than that. I can show you." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "Please." },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Grace", text: "Shouldn't I wake Father?" },
      { scene: "Scene 14 - Grace's Cabin / Hallway", char: "Mr. Steele", text: "No, Grace. I mean, we should verify whether what you are telling me has really occurred, and if it has, we should get the silver back. I have my pride to consider. Let's go. Time is running out." },

      // Scene 15
      { scene: "Scene 15 - Engine Room", char: "Crall", text: "Get the rest of these mailbags in through the door there and load the silver." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "You seem to have missed one." },
      { scene: "Scene 15 - Engine Room", char: "Crall", text: "That's your share. See. I'm a man of my word." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "You're a real humanitarian." },
      { scene: "Scene 15 - Engine Room", char: "Crall", text: "But, you stay and help load the rest with the others. I'm in a hurry. I need to catch a ride on the Lady Evelyn when the mail gets dropped off–before the Empress heads out to open sea." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "Grace? Mr. Steele? How did you know we were here?" },
      { scene: "Scene 15 - Engine Room", char: "Mr. Steele", text: "Let's just say I had a tip from a friendly passenger." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "Grace? I trusted you. I thought you were on my side. Not his!" },
      { scene: "Scene 15 - Engine Room", char: "Grace", text: "What? I did you a favour! You just don't know it yet!" },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "A favour? Me? By squealin' to him!" },
      { scene: "Scene 15 - Engine Room", char: "Grace", text: "It's all right, Peyton. Mr. Steele is going to help us." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "Are you sure about that?" },
      { scene: "Scene 15 - Engine Room", char: "Mr. Steele", text: "Thank you Grace, for helping me solve this terrible crime. Well, I should first thank my partner, Mr. Crall. He proved to be most useful." },
      { scene: "Scene 15 - Engine Room", char: "Grace", text: "You were working for Crall?" },
      { scene: "Scene 15 - Engine Room", char: "Mr. Steele", text: "Are you serious? He works for me. He kept me informed. He told me of your hesitation to help us. That is why I had to slip that note under your door, to convince you to follow through, for Peyton's sake." },
      { scene: "Scene 15 - Engine Room", char: "Grace", text: "So, it was you?" },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "I told you, Grace. I told you there were other people working in this. I never trusted him. And you never should have, either." },
      { scene: "Scene 15 - Engine Room", char: "Mr. Steele", text: "Get in there and help them bring it all out. Now, get back in there and make sure that's all of it. The mail ship leaves soon." },
      { scene: "Scene 15 - Engine Room", char: "Peyton", text: "What are you doing? You locked Crall in there with the rest of them." },
      { scene: "Scene 15 - Engine Room", char: "Mr. Steele", text: "Very astute. I won't be sharing this fortune. I'll be taking every bag. And now, if you don't mind, I have an appointment with a Lady, and I don't want to be late. Pick up that last bag and put it with the rest." },

      // Scene 16
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Where are we going? What is your plan?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Plan? I don't really have one yet. I'm just kinda' making it up as we go." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Oh, dear. That is not good." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "No, it is not." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Wait. Rest." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Fine. It's dark enough out here. I think we should wait here for a bit. Think about what's next." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What is it?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "We're slowing down. You hear it? The engines. Stopped. We must be meeting up with the Lady Evelyn to drop off the mail. I suppose Steele's going to miss his evening rendezvous with his Lady." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Let's only hope." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "But, we shouldn't count him out, just yet." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Why is that?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "The engine room is receiving the captain's commands. Someone is down there doing their job. Someone must have found Steele. Or, he's gotten up and is looking for us. He won't find us out here. Now the engines have started again." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "We can't stay out here all night. But, maybe for a little while. It's so calm tonight. What is this place?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "It's the skylight, above the Music Room. Why, earlier you were playing on the piano just below us. It seems so peaceful up here. Too bad, I don't feel at peace. I wish my Father were here–to guide me. I'm not sure how I'll get out of this. I know he's hard on me, but deep down I feel like he wants the best for me." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Funny. I was thinking the same thing about Mother. I wish she could be here. She was always my light to guide me. Normally, I'd be writing to her in my diary about now. Guess my diary is down in my cabin." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "You said that when you close your eyes, you sometimes imagine seeing her. Can you imagine her here now? Do you see her in her purple dress? Her earrings? Her hair up?" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "No. Not this time. My heart is racing too much." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "What would you say to her if you wrote to her in your diary, like you do?" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Probably the same things you might say to your Father." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", type: "song", title: "Place in This World", text: "[GRACE] The wind is moving / But I am standing still / A life of pages / Waiting to be filled / A heart that's hopeful / A head that's full of dreams / But this becoming / Is harder than it seems // Feels like I'm / Looking for a reason / Roaming through the night to find / My place in this world / My place in this world / Not a lot to lean on / I need Your light to help me find / My place in this world / My place in this world // [PEYTON] If there are crewmen / All with their needs / Among the many / Can You still hear me? / Hear me asking / Where do I belong? / Is there a vision / That I can call my own? / Show me // [GRACE/PEYTON] I'm looking for a reason / Roaming through the night to find / My place in this world / My place in this world / Not a lot to lean on / I need Your light to help me find / My place in this world / My place in this world" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", type: "song", title: "Place in This World (Peyton's verse)", text: "If there are crewmen / All with their needs / Among the many / Can You still hear me? / Hear me asking / Where do I belong? / Is there a vision / That I can call my own? / Show me" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Grace!" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Yes. I think so." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "You scared me. Must have been quite the dream." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What is happening?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Not sure. Something's up. Something strange. I think there is another ship nearby, but I can't see a thing. We've stopped." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "You said earlier that we had to drop off the pilot. At Father Point, wasn't it?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "We've already done that, about twenty minutes ago. The Eureka came and left with Mr. Bernier." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What time is it now?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Just shy of 2 a.m." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Nice pocket watch." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "It's mine. Don't worry. It's too quiet out there. There's been several blasts of the ships' whistles. Ours and hers. She's out there, somewhere. The captain signalled with two long blasts. That's the maritime signal for 'all stop'. So the other vessel would know our intention. Not right. It's…not right. There's…" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Oh, no." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What is it? Why did the Empress blow—" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "It wasn't the Empress! That was another ship! Out there! She was giving the backing signal! I think she's heading directly for us." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Peyton!" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "No way!" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Are you all right? What happened?" },
      { scene: "Scene 16 - Boat Deck", char: "Kendall", text: "Keep ahead! Keep going ahead on your engines! Plug the hole with your ship." },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Captain! Massive breach of the hull! Through Orlop, Lower, and Upper Decks! Flooding is imminent!" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Peyton. What do we do?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "You need to get below deck. Warn people. That size of carving will bring us down in no time. And, find your father." },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "Down?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "Yes. We're going under. It won't take long. Now, hurry. Go!" },
      { scene: "Scene 16 - Boat Deck", char: "Grace", text: "What about you?" },
      { scene: "Scene 16 - Boat Deck", char: "Peyton", text: "I have a gear remember? I have to close that watertight door. Go!" },

      // Scene 17
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "Mr. Bamford. Are you aware of what's happening?" },
      { scene: "Scene 17 - The Marconi Shack", char: "Bamford", text: "Indeed, sir. I just contacted Father Point to stand by. We need to send out to all stations." },
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "Very good. We need to call to all stations and standby for an S.O.S., once I receive word from the Chief Officer." },
      { scene: "Scene 17 - The Marconi Shack", char: "Bamford", text: "There you are sir. You must have been startled in your bed." },
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "I had just gone to bed after you relieved me a short while ago. I hadn't slept yet. When I heard the other ship's whistles and felt the collision, I jumped up and looked out my port window. I saw the ship heading towards our stern." },
      { scene: "Scene 17 - The Marconi Shack", char: "Bamford", text: "Is it serious?" },
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "Afraid so. We've been struck on the starboard side. Mr. Bamford, please run to the bridge and check for orders." },
      { scene: "Scene 17 - The Marconi Shack", char: "Bamford", text: "I ran into the Chief Officer on my way to the bridge. He has confirmed. Send out an S.O.S. We are going down." },
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "Crikey. We have struck something. Sinking fast. Listing terribly. I'm purposely going slow with this…at this hour, it's likely there are junior officers on the other end. I don't want to confuse the message. Father Point has replied with, \"OK\" and are asking where we are. We're about 20 miles out from Father Point. They've answered. They're sending two boats–the Lady Evelyn and the Eureka." },
      { scene: "Scene 17 - The Marconi Shack", char: "Bamford", text: "What about the ship that struck us?" },
      { scene: "Scene 17 - The Marconi Shack", char: "Ferguson", text: "We can only hope that they are able to help us too. It looked like the other ship was still operating well. We've lost power. We can't get anymore information out or in. Now, we better get to the boats." },

      // Scene 18
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "There we go. We'll get you inside to warm you up. Come on up. Let's get you inside." },
      { scene: "Scene 18 - The Storstad", char: "Boat Passenger", text: "What ship is this?" },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "You're on the Storstad." },
      { scene: "Scene 18 - The Storstad", char: "Boat Passenger", text: "Are you the ship that hit us?" },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "We can talk about that later. Let's get you inside, out of the cold." },
      { scene: "Scene 18 - The Storstad", char: "Boat Passenger", text: "I want to stay on deck." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "You're shivering. We need to–" },
      { scene: "Scene 18 - The Storstad", char: "Boat Passenger", text: "I want to watch for my brother. I'm not sure if he got out." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "We can check back in a few moments. Come inside. We'll get hot coffee." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "Oh, dear. Let's get you up and inside. You're safe now." },
      { scene: "Scene 18 - The Storstad", char: "Mr. Burt", text: "I can't believe I made it. I caught a floating suitcase to grab onto. Swam almost a mile to your ship. I was then pulled into a lifeboat." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "Let me help you inside. You're soaking and cold." },
      { scene: "Scene 18 - The Storstad", char: "Mr. Burt", text: "Wait. The actors–the Irvings. Have you seen them?" },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "I'm not sure, really." },
      { scene: "Scene 18 - The Storstad", char: "Mr. Burt", text: "I helped them find their way up on deck. But, I lost them once I was thrown in the water." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "The main thing is to get you inside right now." },
      { scene: "Scene 18 - The Storstad", char: "Dr. Grant", text: "I'm Dr. Grant–from the Empress. Let me help with the passengers." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "A doctor? Very good. I'm Mrs. Anderson–wife of Captain Anderson. You're on board the Storstad." },
      { scene: "Scene 18 - The Storstad", char: "Dr. Grant", text: "I can be of assistance with the survivors." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "We have many injured inside. I'll lead you to them." },
      { scene: "Scene 18 - The Storstad", char: "Dr. Grant", text: "I'll be fine. It's my shoulder. I almost didn't make it out. My cabin porthole became my ceiling. I had to climb up to it. I got stuck in the porthole and a few kind people standing on the side hull pulled me through. Now, I've got to help others." },
      { scene: "Scene 18 - The Storstad", char: "Mrs. Anderson", text: "Sounds terrible. Right this way, Doctor." },
      { scene: "Scene 18 - The Storstad", char: "Grace", type: "song", title: "Already Home", text: "[GRACE] You say love is what you put into it / You say that I'm losing my will / Don't you know that you're all that I think about? / You make up a half of the whole // You say that it's hard to commit to it / You say that it's hard standing still / Don't you know that I spend all my nights / Counting backwards the days 'til I'm home? // If only New York wasn't so far away / I promise the city won't get in our way / When I'm scared and alone / Just know that I'm already home // [SOFIA] I say that we're right in the heart of it / A love only we understand / I will bend every light in this city / And make sure they're shining on you // If only New York wasn't so far away / I promise the city won't get in our way / When you're scared and alone / Just know that I'm already home // [GRACE] When life takes its own course / Sometimes we just don't get to choose // [GRACE/SOFIA] I'd rather be there next to you / Promise you'll wait for me, wait for me / Wait 'til I'm home / All I have is this feeling inside of me / The only thing I've ever known // If only New York wasn't so far away / I will be there every step of the way / And when you're scared and alone / Just know that I'm already home // Just know that I'm already home" },

      // Scene 19
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Did you start from Quebec at 4.20 p.m. Montreal time?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "About 4.20 p.m." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Having got out in the river, did you proceed down?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "We did." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Did you meet with clear weather at first?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "Clear weather." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Did you proceed down at your full speed?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "We did proceed at full speed." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Where did you land your pilot?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "About a mile north of Father Point gas buoy, on the steam tender Eureka." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Now, having dropped your pilot, on what course did you put your ship?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "North 50 east by compass." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Is that the usual course?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "Usual course." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Now, Captain, were you on the bridge continuously for the four or five hours preceding your arrival at Father Point?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "I was on the bridge practically all the time from Quebec." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "I want to know whether you were on the bridge absolutely all the time during the five hours preceding your arrival at Father Point?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "Yes, except to go into my room for a cup of coffee." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "When you went in to get your cup of coffee, was there any steamer close at hand?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "That I can't say." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "You wouldn't leave your bridge with a vessel within half a mile of you?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "No, it was a clear night and we could see a long way." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Who were the officers on watch between 10 and 12 o'clock that night?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "The officers on watch between ten and twelve were Mr. Williams and Mr. Tunstall." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Are they here?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "No, they are drowned." },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "Both of them have been lost?" },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", text: "Yes." },
      { scene: "Scene 19 - The Inquiry", char: "Kendall", type: "song", title: "Boat Song (Reprise)", text: "A voice whispers in the gales / Like in the songs and childhood tales / Where krakens raging in the sea / Crack ships into a million pieces // Oh, can we keep our bearing straight? / Or will we be blown off course? / Are we instruments of fate? / Do we really have a choice?" },
      { scene: "Scene 19 - The Inquiry", char: "Mr. Aspinall", text: "That will be all for now." },

      // Scene 20
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "When I wake up, well, I know I'm gonna be, I'm gonna be the one who wakes up next to you…" },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "Peyton. You're alive!" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", type: "song", title: "I'm Gonna Be (500 Miles) — Reprise", text: "[PEYTON] When I wake up, well, I know I'm gonna be / I'm gonna be the one who wakes up next to you / And when I go out, yeah, I know I'm gonna be / I'm gonna be the one who goes along with you // And when I come home, yeah, I know I'm gonna be / I'm gonna be the one who's coming home to you / And when I'm dreaming, well, I know I'm gonna dream / I'm gonna dream about the time when I'm with you // But I would walk 500 miles / And I would walk 500 more / Just to be the one who walks a thousand miles / To fall down at your door // [PEYTON/GRACE harmony] But I would walk 500 miles / And I would walk 500 more / Just to be the one who walked a thousand miles / To fall down at your door" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "Grace! I'm so glad you are safe." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "I didn't see you at the cemetery service! I couldn't find you on any of the CPR lists of survivors." },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "I guess they are still updating those." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "Your father? Is he…" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "It's all right. He's over there, at that ticket agent. We're heading back to England. And your father?" },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "He's here too. Seeing someone from the CPR about the arrangements for the bank's silver. There's talk of a salvage operation. It seems the ship isn't that deep down. They can get to it." },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "Then, he still works for the bank?" },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "Yes. And what about you? How did you get out? Last I saw of you, you were heading below–to operate the gear on the watertight doors." },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "I went down there–I was determined. I wanted Father to know I wasn't dodging duty again. After the whole thing with you, the silver bars, Crall–let's just say I saw clearly, despite the fog in the air. I got down to the gear, and Father met me there–forced me to leave–sent me away and he took my place." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "And you left him?" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "Yes. But, not without an argument. It was short though, and he told me he was proud of me–even saluted me–then dismissed me to the lifeboats. Only, it was too late for the gears to work–water already took over and he wasn't far behind me. Not many lifeboats got away–we were both thrown in the water. We managed to get pulled into one. What a nightmare." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "I'm very happy to see you both. Here comes Father. Oh, and don't worry, he doesn't know a thing about the silver." },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Steward Thomas, isn't it? So good to see you. And your father?" },
      { scene: "Scene 20 - CPR Office", char: "Thomas", text: "Right here. I'm pleased to see you both. What an awful tragedy. I'm sure the casualties will be over a thousand." },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Terrible. I understand from the initial reports that there was a misunderstanding of all the signals. Who should maneuver which way. It seems Captain Kendall called for \"all stop\" and the Storstad headed for the Empress' last-seen position before the fog." },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "I understand from the initial reports that there was a misunderstanding of all the signals. Who should maneuver which way. It seems Captain Kendall called for all stop and the Storstad headed for the Empress last-seen position before the fog." },
      { scene: "Scene 20 - CPR Office", char: "Thomas", text: "It is still unbelievable. Fourteen minutes–she sank in only fourteen minutes. In essence, if both Captains hadn't acted at all–hadn't adjusted their headings, the whole event never would have happened. And what of you both, now?" },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Well, like Grace's mother would say, \"sometimes the best course of action is no action at all.\" This is our home. At least, for the foreseeable future. And you?" },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Well, like Grace's mother would say, sometimes the best course of action is no action at all. This is our home. At least, for the foreseeable future. And you?" },
      { scene: "Scene 20 - CPR Office", char: "Thomas", text: "We just acquired tickets for the train to New York. There, we'll board the White Star's ship, the Alsatian and venture back to England." },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Well, I shall wish you both the best of success." },
      { scene: "Scene 20 - CPR Office", char: "Thomas", text: "Thank you. Perhaps, we should give them a minute. I have a feeling they made somewhat of a connection in a short amount of time on the Empress." },
      { scene: "Scene 20 - CPR Office", char: "Jeremiah", text: "Grace. I'll meet you over here." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "What are your plans when you get home?" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "After we reunite with Mother for a while, I will be seeing to it about getting my name on that list for nursing school again." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "Really? This time, don't be late." },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "For sure, I won't. This experience has taught me so much about time and how I spend it. I've spent too much time on myself. Father says there are rumours of a war coming. I don't know if they're true, but it's time to give, instead of take." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "Promise you'll write to me. We'll get a pen from Father and exchange information." },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "I would like that. But, first you have to promise me something." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "What is that?" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "That you're going to help me get this trunk to the train platform." },
      { scene: "Scene 20 - CPR Office", char: "Grace", text: "That I can do. Hey. What's in here that's so heavy?" },
      { scene: "Scene 20 - CPR Office", char: "Peyton", text: "Trust me. You don't want to know. I'm kidding. Let's go." },
    ]
  }
};


// ── Cue lines map ──
// Format: { "Show Key": { "Character": { "Scene name fragment": "The line text that is the cue" } } }
// The cue is the line (spoken by another character) that signals this character to enter.
// If the character starts the scene, no cue is needed (handled in render logic).
const CUE_LINES = {
  "the empress of ireland": {
    "Mr. Thorne": {
      "Scene 1": null  // starts scene
    },
    "Miss West": {
      "Scene 1": null  // starts scene
    },
    "Samuel": {
      "Scene 1": "Understood, Mr. Thorne. I'll get on it immediately."
    },
    "Henry": {
      "Scene 1": "Right. I'll make a note of it, Samuel. We'll keep you here, then."
    },
    "Edgar": {
      "Scene 1": "I see...well, I'll make sure to let you keep your sourdough in peace, Henry."
    },
    "Carl": {
      "Scene 1": "Thank you, Miss West. The world is full of great causes, but this is one that's close to my heart...well, my upper lip."
    },
    "Jeremiah": {
      "Scene 1": "Tough sell. Hey, there's Hathaway.",
      "Scene 2": null,
      "Scene 4": null,
      "Scene 5": null,
      "Scene 12": null,
      "Scene 13": null,
      "Scene 6": "Yes. I'm…fine.",
      "Scene 7": null,
      "Scene 20": null
    },
    "Grace": {
      "Scene 2": null,
      "Scene 4": null,
      "Scene 5": null,
      "Scene 6": null,
      "Scene 7": "I could speak with one of your superiors, if needed. It's just that you're the closest person in age to my Grace, and I think she would be better off with you.",
      "Scene 9": null,
      "Scene 13": null,
      "Scene 14": null,
      "Scene 15": "Let's just say I had a tip from a friendly passenger.",
      "Scene 16": null,
      "Scene 18": null,
      "Scene 20": "I guess they are still updating those."
    },
    "Train Passenger": {
      "Scene 2": "I hear the ship is quite nice. The Empress. She's been sailing since 1906. Bringing many-a-family back and forth. Many newcomers to Canada as well."
    },
    "Little Grace": {
      "Scene 2": "I don't feel strong enough.",
      "Scene 6": "What do you know? I guess it's that Canadian Staff Band. Looks like they're giving a bit of a concert on the deck over there."
    },
    "Bandmaster Hanagan": {
      "Scene 2": "I don't feel strong enough."
    },
    "Deckhand 1": {
      "Scene 3": null
    },
    "Deckhand 2": {
      "Scene 3": null
    },
    "Deckhand 3": {
      "Scene 3": null
    },
    "Deckhand 4": {
      "Scene 3": null
    },
    "Mrs. Kendall": {
      "Scene 3": "Alright, cut it out. Here comes the security officer and the captain's wife."
    },
    "Gardner": {
      "Scene 3": "Alright, cut it out. Here comes the security officer and the captain's wife.",
      "Scene 7": "Maisie?"
    },
    "Thomas": {
      "Scene 3": "Alright, cut it out. Here comes the security officer and the captain's wife.",
      "Scene 4": null,
      "Scene 7": "Maisie! That's enough. You will stay here, and start singing.",
      "Scene 20": "He's over there, at that ticket agent. We're heading back to England."
    },
    "Kendall": {
      "Scene 3": "Alright, cut it out. Here comes the security officer and the captain's wife.",
      "Scene 16": null,
      "Scene 19": null
    },
    "Bernier": {
      "Scene 3": "Alright, cut it out. Here comes the security officer and the captain's wife."
    },
    "Ferguson": {
      "Scene 3": "In Second and Third Class, we have a large delegation from The Salvation Army, including a group known as The Canadian Staff Band.",
      "Scene 7": null,
      "Scene 17": null
    },
    "Maisie": {
      "Scene 3": "STOP! Instruments? The band? I hope they'll perform for us at least, to make up for our inconvenience.",
      "Scene 7": "That's enough. You will stay here, and start singing."
    },
    "Trombone Player": {
      "Scene 3": "STOP! Instruments? The band? I hope they'll perform for us at least, to make up for our inconvenience.",
      "Scene 7": null
    },
    "Trumpet Player": {
      "Scene 3": "STOP! Instruments? The band? I hope they'll perform for us at least, to make up for our inconvenience.",
      "Scene 7": null
    },
    "Dr. Grant": {
      "Scene 3": "STOP! Instruments? The band? I hope they'll perform for us at least, to make up for our inconvenience.",
      "Scene 10": null,
      "Scene 18": "The main thing is to get you inside right now."
    },
    "Mr. Steele": {
      "Scene 3": "Mind that trunk! I don't want to damage any of my jewelry!",
      "Scene 4": "Taking Mr. Hathaway and his daughter to their rooms.",
      "Scene 6": null,
      "Scene 7": null,
      "Scene 14": "I think I'm going to–oh no. It's Mr. Steele. Gotta go.",
      "Scene 15": null
    },
    "Mrs. Paton": {
      "Scene 3": null,
      "Scene 7": null
    },
    "Peyton": {
      "Scene 3": "Ms. Thomas. Where is this trunk going?",
      "Scene 4": null,
      "Scene 5": null,
      "Scene 6": "The train was late arriving here in Quebec City.",
      "Scene 7": "I could speak with one of your superiors, if needed. It's just that you're the closest person in age to my Grace, and I think she would be better off with you.",
      "Scene 9": null,
      "Scene 10": null,
      "Scene 11": null,
      "Scene 12": null,
      "Scene 13": null,
      "Scene 14": null,
      "Scene 15": null,
      "Scene 16": null,
      "Scene 20": null
    },
    "Pianist": {
      "Scene 7": null
    },
    "Karr": {
      "Scene 3": null,
      "Scene 7": null
    },
    "Irving": {
      "Scene 6": null,
      "Scene 7": null
    },
    "Hackney": {
      "Scene 6": null,
      "Scene 7": null
    },
    "Mr. Burt": {
      "Scene 3": null,
      "Scene 7": null,
      "Scene 18": "We can talk about that later. Let's get you inside, out of the cold."
    },
    "Eddie": {
      "Scene 9": "Hmm. Didn't your mother say something about time? It's the coin of your life. Be careful how you spend it?",
      "Scene 11": null,
      "Scene 12": null,
      "Scene 14": null
    },
    "Crall": {
      "Scene 6": null,
      "Scene 12": "What are you talking about?",
      "Scene 15": null
    },
    "Bamford": {
      "Scene 17": null
    },
    "Mrs. Anderson": {
      "Scene 18": null
    },
    "Boat Passenger": {
      "Scene 18": "There we go. We'll get you inside to warm you up."
    },
    "Mr. Aspinall": {
      "Scene 19": null
    },
    "Sofia": {
      "Scene 18": null
    }
  }
};

// ── State ──
let parsedLines = [];
let selectedChar = '';
let revealed = [];
let allDetectedChars = [];
let currentShow = null;
let selectedScenes = []; // scenes chosen in scene picker

// ── Color palette ──
const CHAR_COLORS = [
  { bg: '#dbeafe', text: '#1d4ed8' },
  { bg: '#d1fae5', text: '#065f46' },
  { bg: '#fee2e2', text: '#991b1b' },
  { bg: '#fce7f3', text: '#9d174d' },
  { bg: '#fef3c7', text: '#92400e' },
  { bg: '#ede9fe', text: '#5b21b6' },
  { bg: '#ffedd5', text: '#9a3412' },
  { bg: '#e0f2fe', text: '#0369a1' },
];

function getColor(index) {
  return CHAR_COLORS[index % CHAR_COLORS.length];
}


// ── Add show ──
function openAddShow() {
  document.getElementById('add-show-overlay').style.display = 'flex';
  document.getElementById('new-show-name').focus();
}

function closeAddShow() {
  document.getElementById('add-show-overlay').style.display = 'none';
  document.getElementById('add-show-error').style.display = 'none';
  document.getElementById('new-show-name').value = '';
  document.getElementById('new-show-script').value = '';
}

function saveNewShow() {
  const nameEl = document.getElementById('new-show-name');
  const scriptEl = document.getElementById('new-show-script');
  const errorEl = document.getElementById('add-show-error');

  const showName = nameEl.value.trim().toLowerCase();
  const rawScript = scriptEl.value.trim();

  if (!showName || !rawScript) {
    errorEl.style.display = 'block';
    errorEl.textContent = 'Please fill in both fields.';
    return;
  }

  // Parse the pasted script
  const lines = rawScript.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const parsedNew = [];
  let currentScene = '';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const sceneMatch = line.match(/^\[(.+)\]$/);
    if (sceneMatch) { currentScene = sceneMatch[1]; i++; continue; }
    if (STAGE_WORDS.has(line.toLowerCase())) { i++; continue; }
    if (/^(act|scene)\s/i.test(line)) { i++; continue; }
    const nextLine = lines[i + 1];
    if (isCharName(line) && nextLine && !isCharName(nextLine) && !nextLine.startsWith('[')) {
      parsedNew.push({ scene: currentScene || 'Scene 1', char: line.trim(), text: nextLine.trim() });
      i += 2;
      continue;
    }
    i++;
  }

  if (!parsedNew.length) {
    errorEl.style.display = 'block';
    errorEl.textContent = "Couldn't find any lines. Check the format: character name on one line, dialogue on the next.";
    return;
  }

  // Add to SHOWS dynamically and save to localStorage
  const newShow = {
    title: nameEl.value.trim(),
    lines: parsedNew
  };
  SHOWS[showName] = newShow;
  saveShowToStorage(showName, newShow);

  errorEl.style.display = 'none';
  closeAddShow();

  // Auto-fill the login input with the new show name
  document.getElementById('show-input').value = nameEl.value.trim();
}


// ── Fix Panel ──
let fixEditIndex = -1;

function updateAddTypeLabels() {
  const type = document.getElementById('fix-add-type').value;
  const textLabel = document.getElementById('fix-add-text-label');
  const textArea = document.getElementById('fix-add-text');
  if (type === 'walkon') {
    textLabel.textContent = 'Stage direction';
    textArea.placeholder = 'e.g. Enters and hangs coat on rack (no lines)';
  } else if (type === 'song') {
    textLabel.textContent = 'Lyrics';
    textArea.placeholder = 'Paste the song lyrics here...';
  } else {
    textLabel.textContent = 'Line text';
    textArea.placeholder = 'The dialogue...';
  }
}


function lineAutocomplete(textareaId, sceneSelectId, suggestionsId) {
  const query = document.getElementById(textareaId).value.trim().toLowerCase();
  const scene = document.getElementById(sceneSelectId).value;
  const box = document.getElementById(suggestionsId);

  if (query.length < 2) { box.innerHTML = ''; return; }

  const matches = parsedLines
    .filter(l => l.scene === scene && l.text.toLowerCase().includes(query))
    .slice(0, 6);

  if (!matches.length) { box.innerHTML = ''; return; }

  box.innerHTML = matches.map(l => {
    const safeText = l.text.replace(/"/g, '&quot;');
    return '<div class="line-suggestion"' +
      ' data-textarea="' + textareaId + '"' +
      ' data-suggestions="' + suggestionsId + '"' +
      ' data-text="' + safeText + '"' +
      ' onclick="fillSuggestion(this)">' +
      '<span class="line-suggestion-char">' + l.char + '</span>' +
      '<span class="line-suggestion-text">' + l.text.substring(0, 90) + (l.text.length > 90 ? '\u2026' : '') + '</span>' +
    '</div>';
  }).join('');
}

function fillSuggestion(el) {
  const textareaId = el.dataset.textarea;
  const suggestionsId = el.dataset.suggestions;
  const text = el.dataset.text;
  document.getElementById(textareaId).value = text;
  document.getElementById(suggestionsId).innerHTML = '';
  document.getElementById(textareaId).focus();
}

function populateAfterLine(selectId) {
  // Find which scene select triggered this
  const sceneSelectId = selectId === 'fix-add-after' ? 'fix-add-scene' : 'fix-walkon-scene';
  const scene = document.getElementById(sceneSelectId).value;
  const select = document.getElementById(selectId);

  const sceneLines = parsedLines
    .map((l, i) => ({ l, i }))
    .filter(({ l }) => l.scene === scene);

  select.innerHTML = '<option value="-1">— At the very start of scene —</option>' +
    sceneLines.map(({ l, i }) =>
      '<option value="' + i + '">' +
        (l.type === 'walkon' ? '[Walk-on] ' : l.type === 'song' ? '[Song] ' : '') +
        l.char + ': ' + l.text.substring(0, 55) + (l.text.length > 55 ? '…' : '') +
      '</option>'
    ).join('');

  // Default to last line in scene
  if (sceneLines.length > 0) {
    select.value = sceneLines[sceneLines.length - 1].i;
  }
}

function openFixPanel() {
  // Populate scene dropdowns
  const allScenes = [];
  parsedLines.forEach(l => { if (!allScenes.includes(l.scene)) allScenes.push(l.scene); });
  const sceneOptions = allScenes.map(s => '<option value="' + s + '">' + s + '</option>').join('');
  document.getElementById('fix-add-scene').innerHTML = sceneOptions;
  document.getElementById('fix-walkon-scene').innerHTML = sceneOptions;
  // Populate after-line dropdowns for the default scene
  populateAfterLine('fix-add-after');
  populateAfterLine('fix-walkon-after');

  // Reset state
  ['fix-search-line','fix-search-walkon'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['fix-search-line-results','fix-search-walkon-results'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
  ['fix-edit-line-form','fix-edit-walkon-form'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  ['fix-edit-error','fix-add-error','fix-walkon-error','fix-edit-walkon-error'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  switchFixTab('add-line');
  fixEditIndex = -1;

  document.getElementById('fix-overlay').style.display = 'flex';
}

function closeFixPanel() {
  document.getElementById('fix-overlay').style.display = 'none';
}

function switchFixTab(tab) {
  ['add-line','edit-line','add-walkon','edit-walkon'].forEach(t => {
    document.getElementById('fix-panel-' + t).style.display = tab === t ? 'block' : 'none';
    document.getElementById('tab-' + t).classList.toggle('active', tab === t);
  });
}

function fixSearch(mode) {
  const isWalkon = mode === 'walkon';
  const inputId = isWalkon ? 'fix-search-walkon' : 'fix-search-line';
  const resultsId = isWalkon ? 'fix-search-walkon-results' : 'fix-search-line-results';
  const formId = isWalkon ? 'fix-edit-walkon-form' : 'fix-edit-line-form';

  const query = document.getElementById(inputId).value.trim().toLowerCase();
  const results = document.getElementById(resultsId);
  document.getElementById(formId).style.display = 'none';
  fixEditIndex = -1;

  if (query.length < 2) { results.innerHTML = ''; return; }

  const matches = parsedLines
    .map((l, i) => ({ l, i }))
    .filter(({ l }) => {
      const matchesType = isWalkon ? l.type === 'walkon' : l.type !== 'walkon';
      return matchesType && (
        l.text.toLowerCase().includes(query) ||
        l.char.toLowerCase().includes(query)
      );
    })
    .slice(0, 8);

  if (!matches.length) {
    results.innerHTML = '<p class="hint-text">No ' + (isWalkon ? 'walk-ons' : 'lines') + ' found.</p>';
    return;
  }

  const clickFn = isWalkon ? 'selectFixWalkon' : 'selectFixLine';
  results.innerHTML = matches.map(({ l, i }) =>
    '<div class="fix-result" onclick="' + clickFn + '(' + i + ')">' +
      '<span class="fix-result-char">' + l.char + '</span>' +
      '<span class="fix-result-scene">' + l.scene + '</span>' +
      '<span class="fix-result-text">' + l.text.substring(0, 80) + (l.text.length > 80 ? '…' : '') + '</span>' +
    '</div>'
  ).join('');
}

function selectFixLine(i) {
  fixEditIndex = i;
  const line = parsedLines[i];
  document.getElementById('fix-edit-char').value = line.char;
  document.getElementById('fix-edit-text').value = line.text;
  document.getElementById('fix-edit-line-form').style.display = 'block';
  document.getElementById('fix-edit-error').style.display = 'none';
  // Highlight selected
  document.querySelectorAll('#fix-search-line-results .fix-result').forEach(el => el.classList.remove('selected'));
  event.currentTarget?.classList.add('selected');
}

function selectFixWalkon(i) {
  fixEditIndex = i;
  const line = parsedLines[i];
  document.getElementById('fix-edit-walkon-char').value = line.char;
  document.getElementById('fix-edit-walkon-text').value = line.text;
  document.getElementById('fix-edit-walkon-form').style.display = 'block';
  document.getElementById('fix-edit-walkon-error').style.display = 'none';
  document.querySelectorAll('#fix-search-walkon-results .fix-result').forEach(el => el.classList.remove('selected'));
  event.currentTarget?.classList.add('selected');
}

function saveFixEdit() {
  if (fixEditIndex < 0) return;
  const char = document.getElementById('fix-edit-char').value.trim();
  const text = document.getElementById('fix-edit-text').value.trim();
  const type = document.getElementById('fix-edit-type').value;
  const errEl = document.getElementById('fix-edit-error');

  if (!char || !text) { errEl.style.display = 'block'; return; }
  errEl.style.display = 'none';

  parsedLines[fixEditIndex].char = char;
  parsedLines[fixEditIndex].text = text;
  if (type) parsedLines[fixEditIndex].type = type;
  else delete parsedLines[fixEditIndex].type;

  saveCurrentShowEdits();
  closeFixPanel();
  renderPractice();
  buildSceneMenu();
}

function saveFixEditWalkon() {
  if (fixEditIndex < 0) return;
  const char = document.getElementById('fix-edit-walkon-char').value.trim();
  const text = document.getElementById('fix-edit-walkon-text').value.trim();
  const errEl = document.getElementById('fix-edit-walkon-error');
  if (!char || !text) { errEl.style.display = 'block'; return; }
  errEl.style.display = 'none';
  parsedLines[fixEditIndex].char = char;
  parsedLines[fixEditIndex].text = text;
  parsedLines[fixEditIndex].type = 'walkon';
  saveCurrentShowEdits();
  closeFixPanel();
  renderPractice();
  buildSceneMenu();
}

function deleteFixLine() {
  if (fixEditIndex < 0) return;
  if (!confirm('Delete this line?')) return;
  parsedLines.splice(fixEditIndex, 1);
  revealed.splice(fixEditIndex, 1);
  saveCurrentShowEdits();
  closeFixPanel();
  renderPractice();
  buildSceneMenu();
}

function saveFixAdd(mode) {
  if (mode === 'walkon') {
    const char = document.getElementById('fix-walkon-char').value.trim();
    const text = document.getElementById('fix-walkon-text').value.trim();
    const afterIdx = parseInt(document.getElementById('fix-walkon-after').value);
    const errEl = document.getElementById('fix-walkon-error');
    if (!char || !text) { errEl.style.display = 'block'; return; }
    errEl.style.display = 'none';
    const scene = document.getElementById('fix-walkon-scene').value;
    const newLine = { scene, char, text, type: 'walkon' };
    insertLineAfter(newLine, afterIdx);
  } else {
    const char = document.getElementById('fix-add-char').value.trim();
    const text = document.getElementById('fix-add-text').value.trim();
    const afterIdx = parseInt(document.getElementById('fix-add-after').value);
    const errEl = document.getElementById('fix-add-error');
    if (!char || !text) { errEl.style.display = 'block'; return; }
    errEl.style.display = 'none';
    const scene = document.getElementById('fix-add-scene').value;
    const newLine = { scene, char, text };
    insertLineAfter(newLine, afterIdx);
  }
  // Resync selectedScenes — add any new scenes the selected character now appears in
  parsedLines.forEach(l => {
    if (l.char === selectedChar && !selectedScenes.includes(l.scene)) {
      selectedScenes.push(l.scene);
    }
  });

  console.log('selectedChar:', selectedChar);
  console.log('selectedScenes after add:', selectedScenes);
  console.log('parsedLines count:', parsedLines.length);

  saveCurrentShowEdits();
  closeFixPanel();
  renderPractice();
  buildSceneMenu();
}

function insertLineAfter(newLine, afterIdx) {
  // afterIdx === -1 means insert at very start of scene
  if (afterIdx === -1) {
    const sceneIndices = parsedLines.map((l, i) => l.scene === newLine.scene ? i : -1).filter(i => i >= 0);
    const insertAt = sceneIndices.length ? sceneIndices[0] : parsedLines.length;
    parsedLines.splice(insertAt, 0, newLine);
    revealed.splice(insertAt, 0, false);
  } else {
    // Insert after the selected line
    parsedLines.splice(afterIdx + 1, 0, newLine);
    revealed.splice(afterIdx + 1, 0, false);
  }
}

// Save edits back to localStorage for ANY show including hardcoded ones
function saveCurrentShowEdits() {
  if (!currentShow) return;
  currentShow.lines = parsedLines;
  try {
    const key = Object.keys(SHOWS).find(k => SHOWS[k] === currentShow);
    if (!key) return;
    const saved = JSON.parse(localStorage.getItem('showEdits') || '{}');
    saved[key] = { lines: JSON.parse(JSON.stringify(parsedLines)) };
    localStorage.setItem('showEdits', JSON.stringify(saved));
    console.log('Saved', parsedLines.length, 'lines for', key);
  } catch(e) { console.error('Save error:', e); }
}

// ── Load saved shows from localStorage into SHOWS on startup ──
function loadSavedShows() {
  try {
    // Load custom shows added by user
    const customShows = localStorage.getItem('customShows');
    if (customShows) {
      const parsed = JSON.parse(customShows);
      Object.keys(parsed).forEach(key => {
        SHOWS[key] = parsed[key];
      });
    }
    // Load edits made to any show (including hardcoded ones)
    const edits = localStorage.getItem('showEdits');
    if (edits) {
      const parsed = JSON.parse(edits);
      Object.keys(parsed).forEach(key => {
        if (SHOWS[key] && parsed[key].lines) {
          SHOWS[key].lines = parsed[key].lines;
        }
      });
    }
  } catch(e) { console.error('Load error:', e); }
}

// ── Save a custom show to localStorage ──
function saveShowToStorage(key, show) {
  try {
    const saved = JSON.parse(localStorage.getItem('customShows') || '{}');
    saved[key] = show;
    localStorage.setItem('customShows', JSON.stringify(saved));
  } catch(e) {}
}

// ── Login ──
function handleLogin() {
  const input = document.getElementById('show-input').value.trim().toLowerCase();
  const errorEl = document.getElementById('login-error');

  // Try exact match first, then try with "the " prefix added
  const match = SHOWS[input] || SHOWS['the ' + input];
  if (match) {
    currentShow = match;
    errorEl.style.display = 'none';
    loadShow(currentShow);
  } else {
    errorEl.style.display = 'block';
  }
}

function loadShow(show) {
  parsedLines = show.lines;
  document.getElementById('show-title-display').textContent = show.title;

  const chars = [...new Set(parsedLines.map(l => l.char))];
  allDetectedChars = chars;

  document.getElementById('login-area').style.display = 'none';
  document.getElementById('setup-area').style.display = 'block';

  renderCharPicker(allDetectedChars);
}

// ── Render character picker ──
function renderCharPicker(charArr) {
  const picker = document.getElementById('char-picker');

  if (!charArr.length) {
    picker.innerHTML = '<span class="muted">No characters found.</span>';
    return;
  }

  picker.innerHTML = charArr.map((c, idx) => {
    const col = getColor(idx);
    const isActive = c === selectedChar;
    return `<span class="pill-char ${isActive ? 'active' : ''}"
      style="background:${col.bg}; color:${col.text};"
      onclick="selectChar('${c.replace(/'/g, "\\'")}', this)">${c}</span>`;
  }).join('');

  if (!selectedChar && charArr.length > 0) {
    selectChar(charArr[0], picker.querySelector('.pill-char'));
  }
}

// ── Add manual character ──
function addManualChar() {
  const input = document.getElementById('manual-char');
  const name = input.value.trim();
  if (!name) return;
  if (!allDetectedChars.includes(name)) allDetectedChars.push(name);
  renderCharPicker(allDetectedChars);
  selectChar(name, null);
  document.querySelectorAll('.pill-char').forEach(p => {
    if (p.textContent === name) p.classList.add('active');
  });
  input.value = '';
}

// ── Select character ──
function selectChar(char, el) {
  selectedChar = char;
  document.querySelectorAll('.pill-char').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
}

// ── Start practice ──
// ── Go to scene picker ──
function goScenePicker() {
  if (!selectedChar) { alert('Please select your character first.'); return; }
  const myLines = parsedLines.filter(l => l.char === selectedChar);
  if (!myLines.length) {
    document.getElementById('no-lines-msg').style.display = 'block';
    return;
  }
  document.getElementById('no-lines-msg').style.display = 'none';
  document.getElementById('setup-area').style.display = 'none';
  document.getElementById('scene-picker-area').style.display = 'block';
  renderScenePicker();
}

// ── Render scene picker checkboxes ──
function renderScenePicker() {
  // Only show scenes this character is in
  const allScenes = [];
  parsedLines.forEach(l => { if (!allScenes.includes(l.scene)) allScenes.push(l.scene); });
  const myScenes = allScenes.filter(s => parsedLines.some(l => l.scene === s && l.char === selectedChar));

  // Default: all selected
  if (!selectedScenes.length) selectedScenes = [...myScenes];

  const list = document.getElementById('scene-picker-list');
  list.innerHTML = myScenes.map(s => {
    const checked = selectedScenes.includes(s);
    const safeId = 'sc-' + s.replace(/[^a-z0-9]/gi, '-');
    return '<label class="scene-check-item">'
      + '<input type="checkbox" id="' + safeId + '" value="' + s + '" ' + (checked ? 'checked' : '')
      + ' onchange="toggleSceneSelection(this)">'
      + '<span>' + s + '</span>'
      + '</label>';
  }).join('');
}

function toggleSceneSelection(el) {
  if (el.checked) {
    if (!selectedScenes.includes(el.value)) selectedScenes.push(el.value);
  } else {
    selectedScenes = selectedScenes.filter(s => s !== el.value);
  }
}

function selectAllScenes() {
  const allScenes = [];
  parsedLines.forEach(l => { if (!allScenes.includes(l.scene)) allScenes.push(l.scene); });
  selectedScenes = allScenes.filter(s => parsedLines.some(l => l.scene === s && l.char === selectedChar));
  renderScenePicker();
}

function deselectAllScenes() {
  selectedScenes = [];
  renderScenePicker();
}

// ── Start practice ──
function startPractice() {
  if (!selectedScenes.length) { alert('Please select at least one scene.'); return; }
  revealed = new Array(parsedLines.length).fill(false);
  renderPractice();
  buildSceneMenu();
  document.getElementById('scene-picker-area').style.display = 'none';
  document.getElementById('practice-area').style.display = 'block';
}

// ── Scene menu ──
function buildSceneMenu() {
  const list = document.getElementById('scene-menu-list');
  list.innerHTML = selectedScenes.map(s => {
    const safe = s.replace(/'/g, "\'");
    return '<button class="scene-menu-item" onclick="jumpToScene(\'' + safe + '\'); toggleMenu();">' + s + '</button>';
  }).join('');
}

function toggleMenu() {
  const menu = document.getElementById('scene-menu');
  const overlay = document.getElementById('scene-menu-overlay');
  const open = menu.style.display === 'none';
  menu.style.display = open ? 'flex' : 'none';
  overlay.style.display = open ? 'block' : 'none';
}

function jumpToScene(sceneName) {
  const el = document.getElementById('scene-anchor-' + sceneName.replace(/[^a-z0-9]/gi, '-'));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Render practice view ──
function renderPractice() {
  const myLines = parsedLines.filter(l => l.char === selectedChar);
  document.getElementById('char-label').textContent = selectedChar;
  document.getElementById('line-count-tag').textContent = myLines.length + ' lines';
  updateProgress();

  const charList = [...new Set(parsedLines.map(l => l.char))];
  const charColorMap = {};
  charList.forEach((c, i) => { charColorMap[c] = getColor(i); });

  // Build ordered list of unique scenes
  const allScenes = [];
  parsedLines.forEach(line => {
    if (!allScenes.includes(line.scene)) allScenes.push(line.scene);
  });

  // Which scenes does this character appear in?
  const myScenes = new Set(parsedLines.filter(l => l.char === selectedChar).map(l => l.scene));

  let html = '';

  allScenes.forEach((scene, sceneIdx) => {
    // Skip scenes not selected by user — but always show if char has a line here
    const charHasLineHere = myScenes.has(scene);
    if (!selectedScenes.includes(scene) && !charHasLineHere) return;
    if (!selectedScenes.includes(scene) && charHasLineHere) {
      // Auto-add to selectedScenes so it persists
      selectedScenes.push(scene);
    }
    const sceneLines = parsedLines.filter(l => l.scene === scene);
    const inThisScene = myScenes.has(scene);

    if (inThisScene) {
      const anchorId = 'scene-anchor-' + scene.replace(/[^a-z0-9]/gi, '-');
      html += `<div class="scene-header" id="${anchorId}">${scene}</div>`;

      const firstMyLineIdx = sceneLines.findIndex(l => l.char === selectedChar);
      const lastMyLineIdx = sceneLines.map(l => l.char === selectedChar).lastIndexOf(true);
      const startsScene = firstMyLineIdx === 0;

      // Look up specific cue line text from CUE_LINES map
      const showKey = currentShow ? Object.keys(SHOWS).find(k => SHOWS[k] === currentShow) : null;
      const charCues = showKey && CUE_LINES[showKey] && CUE_LINES[showKey][selectedChar] ? CUE_LINES[showKey][selectedChar] : {};
      const sceneKey = Object.keys(charCues).find(k => scene.includes(k));
      const cueText = sceneKey !== undefined ? charCues[sceneKey] : undefined;
      const hasCue = !startsScene && cueText !== null;

      // Find the index of the cue line within sceneLines
      let cueLineIdx = -1;
      if (hasCue) {
        if (cueText) {
          cueLineIdx = sceneLines.findIndex(l => l.char !== selectedChar && l.text.trim().startsWith(cueText.trim().substring(0, 40)));
        }
        if (cueLineIdx === -1) {
          // Fallback: line immediately before first my-line
          cueLineIdx = firstMyLineIdx - 1;
        }
      }

      // Only show lines from cueLineIdx (or firstMyLineIdx if starts scene) through lastMyLineIdx
      const startIdx = startsScene ? 0 : (cueLineIdx >= 0 ? cueLineIdx : firstMyLineIdx);

      sceneLines.forEach((line, sceneLineIdx) => {
        // Skip lines before the cue only — show everything from cue to end of scene
        if (sceneLineIdx < startIdx) return;

        const i = parsedLines.indexOf(line);
        const col = charColorMap[line.char];
        const isCueLine = !startsScene && sceneLineIdx === cueLineIdx && line.char !== selectedChar;

        // Walk-on block
        if (line.type === 'walkon') {
          const isMyChar = line.char === selectedChar;
          if (isMyChar) {
            html += `
              <div class="walkon-block">
                <span class="walkon-label">Walk-on</span>
                <span class="walkon-text">${line.text}</span>
              </div>`;
          }
          // Don't show other characters' walk-on notes
          return;
        }

        // Song block — always visible, styled differently
        if (line.type === 'song') {
          const isMyChar = line.char === selectedChar;
          html += `
            <div class="song-block${isMyChar ? ' song-mine' : ''}">
              <div class="song-label">🎵 ${line.title}</div>
              <div class="song-lyrics">${line.text.replace(/\/\//g, '<br><br>').replace(/\//g, '<br>')}</div>
            </div>`;
        } else if (line.char === selectedChar) {
          const isRevealed = revealed[i];
          html += `
            <div class="my-line-hidden ${isRevealed ? 'revealed' : ''}" id="line-${i}" onclick="toggleLine(${i})">
              <span>
                <span class="char-badge" style="background:${col.bg}; color:${col.text};">${line.char}</span>${line.text}
              </span>
              ${!isRevealed ? '<span class="reveal-hint">tap to reveal</span>' : ''}
            </div>`;
        } else {
          html += `
            <div class="cue-line${isCueLine ? ' is-cue' : ''}">
              ${isCueLine ? '<span class="cue-line-label">your cue</span>' : ''}
              <span class="char-badge" style="background:${col.bg}; color:${col.text};">${line.char}</span>${line.text}
            </div>`;
        }
      });
    } else {
      // Check if the character appears in the NEXT scene
      const nextSceneWithChar = allScenes.slice(sceneIdx + 1).find(s => myScenes.has(s));
      const isNextScene = nextSceneWithChar === allScenes[sceneIdx + 1];

      if (isNextScene) {
        html += `
          <div class="scene-banner backstage">
            <span class="banner-icon">🎭</span>
            <div>
              <div class="banner-title">Get backstage!</div>
              <div class="banner-sub">${scene} — you're on next</div>
            </div>
          </div>`;
      } else {
        html += `
          <div class="scene-banner rest">
            <span class="banner-icon">💤</span>
            <div>
              <div class="banner-title">Rest up</div>
              <div class="banner-sub">${scene}</div>
            </div>
          </div>`;
      }
    }
  });

  document.getElementById('script-display').innerHTML = html;
}

// ── Toggle a single line ──
function toggleLine(i) {
  revealed[i] = !revealed[i];
  const el = document.getElementById('line-' + i);
  el.classList.toggle('revealed', revealed[i]);
  const hint = el.querySelector('.reveal-hint');
  if (hint) hint.style.display = revealed[i] ? 'none' : '';
  updateProgress();
}

// ── Update progress ──
function updateProgress() {
  const myIdxs = parsedLines
    .map((l, i) => (l.char === selectedChar && l.type !== 'song' && l.type !== 'walkon') ? i : -1)
    .filter(x => x >= 0);
  const done = myIdxs.filter(i => revealed[i]).length;
  const pct = myIdxs.length ? Math.round(done / myIdxs.length * 100) : 0;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('stats').textContent =
    `${done} of ${myIdxs.length} lines revealed (${pct}%)`;
}

function revealAll() {
  parsedLines.forEach((l, i) => { if (l.char === selectedChar && l.type !== 'song' && l.type !== 'walkon') revealed[i] = true; });
  renderPractice();
}
function hideAll() {
  parsedLines.forEach((l, i) => { if (l.char === selectedChar && l.type !== 'song' && l.type !== 'walkon') revealed[i] = false; });
  renderPractice();
}
function resetPractice() {
  revealed = new Array(parsedLines.length).fill(false);
  renderPractice();
}
function goSetup() {
  document.getElementById('setup-area').style.display = 'block';
  document.getElementById('scene-picker-area').style.display = 'none';
  document.getElementById('practice-area').style.display = 'none';
}

// Load any saved shows when the page starts
loadSavedShows();
