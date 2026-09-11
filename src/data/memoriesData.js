/**
 * Centralized Data Structure
 * =================================
 * Updated with authentic personal details:
 * - 4 years of engineering together (Group of 4)
 * - Janhavi: 4-year bench partner, topper, Nashik first job, master explainer
 * - Prajakta: M.Tech & teaching in same college, lost in her own world, 4 years of being annoyed
 * - Siddhi: M.Tech in Pune, ultimate "chalable" friend, hangs out that feel suspiciously like dates
 */

export const memoriesData = {
  globalInfo: {
    siteTitle: "Four Years. Group of 4. One Unforgettable Chapter.",
    siteSubtitle: "Made with love for our squad: Janhavi, Prajakta, & Siddhi.",
    characterPrompt: "Choose your character 👀",
    musicPrompt: "♫ Play our memories",
    bgMusicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
  },

  friends: [
    {
      id: "janhavi",
      name: "Janhavi",
      title: "CEO of 'Let Me Explain'",
      emoji: "😂",
      subtitle: "Engineering topper, master explainer, & Nashik's newest CEO.",
      themeColor: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
      accentBorder: "border-amber-400/40",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
      cardPhoto: "/janhavi/photo-9.jpg",
      musicTrack: "Janhavi's Topper Anthem 🎓",
      
      // Opening Intro
      introTitle: "4 years of memories...",
      introHighlight: "LET ME EXPLAIN.",
      introSubtext: "— Topper, sensible, & permanently explanatory 😂",

      // Group 1: College Days & Hangouts
      group1Title: "College Days & Hangouts",
      group1Subtitle: "Unfiltered smiles, goofy moments, and everyday routines",
      group1Memories: [
        {
          id: "m1",
          photo: "/janhavi/photo-2.jpg",
          heading: "Under the Canopy",
          caption: "Under the Canopy",
          subcaption: "Some of the best days are the simplest ones. Surrounded by greenery and the best company, these are the quiet, happy moments we always want to hold onto.",
          details: "Some of the best days are the simplest ones. Surrounded by greenery and the best company, these are the quiet, happy moments we always want to hold onto.",
          song: "Tera Yaar Hoon Main (Sonu Ke Titu Ki Sweety)",
          audioUrl: "/audio/song-1.mp3",
          songReason: "It is the ultimate squad anthem for our group of four together.",
          youtubeId: "EazPX7i8538",
          spotifyUrl: "https://open.spotify.com/search/Tera%20Yaar%20Hoon%20Main",
          youtubeUrl: "https://www.youtube.com/watch?v=EazPX7i8538",
          tag: "The Squad"
        },
        {
          id: "m2",
          photo: "/janhavi/photo-3.jpg",
          heading: "Courtyard Smiles",
          caption: "Courtyard Smiles",
          subcaption: "Catching some shade and sharing a laugh. It’s the effortless, everyday moments like these that build the foundation of our favorite memories together.",
          details: "Catching some shade and sharing a laugh. It’s the effortless, everyday moments like these that build the foundation of our favorite memories together.",
          song: "Dil Chahta Hai (Dil Chahta Hai)",
          audioUrl: "/audio/song-2.mp3",
          songReason: "Nothing matches an effortless, sunny hangout session like this classic nostalgia track.",
          youtubeId: "m13b2V95y40",
          spotifyUrl: "https://open.spotify.com/search/Dil%20Chahta%20Hai",
          youtubeUrl: "https://www.youtube.com/watch?v=m13b2V95y40",
          tag: "Hangout"
        },
        {
          id: "m3",
          photo: "/janhavi/photo-4.jpg",
          heading: "Unapologetically Us",
          caption: "Unapologetically Us",
          subcaption: "Never taking ourselves too seriously! This picture perfectly captures the goofy, chaotic, and wonderful energy that happens whenever we get together.",
          details: "Never taking ourselves too seriously! This picture perfectly captures the goofy, chaotic, and wonderful energy that happens whenever we get together.",
          song: "Matargashti (Tamasha)",
          audioUrl: "/audio/song-3.mp3",
          songReason: "Fun, high-energy, and completely unbothered—perfect for a chaotic, tongue-out photo!",
          youtubeId: "VbxgYlcNxE8",
          spotifyUrl: "https://open.spotify.com/search/Matargashti",
          youtubeUrl: "https://www.youtube.com/watch?v=VbxgYlcNxE8",
          tag: "Pure Joy"
        },
        {
          id: "m4",
          photo: "/janhavi/photo-7.jpg",
          heading: "Blue Skies & Campus Days",
          caption: "Blue Skies & Campus Days",
          subcaption: "A quick snap between everything else going on. A reminder of the busy days, the shared routines, and always finding time to smile for the camera.",
          details: "A quick snap between everything else going on. A reminder of the busy days, the shared routines, and always finding time to smile for the camera.",
          song: "Pasoori",
          audioUrl: "/audio/song-4.mp3",
          songReason: "Energetic, soulful, and vibrant rhythm.",
          youtubeId: "vt4iXb4q3_o",
          spotifyUrl: "https://open.spotify.com/search/Kho%20Gaye%20Hum%20Kahan",
          youtubeUrl: "https://www.youtube.com/watch?v=vt4iXb4q3_o",
          tag: "Campus Vibe"
        }
      ],

      // Group 2: Milestones & Adventures
      group2Title: "Milestones & Adventures",
      group2Subtitle: "Proud achievements, mountain viewpoints, and exploring together",
      group2Memories: [
        {
          id: "m5",
          photo: "/janhavi/photo-5.jpg",
          heading: "A Moment of Pride",
          caption: "A Moment of Pride",
          subcaption: "Celebrating hard work, dedication, and a well-deserved milestone. Dressed up for the occasion and receiving this honor is a memory that will forever stand out.",
          details: "Celebrating hard work, dedication, and a well-deserved milestone. Dressed up for the occasion and receiving this honor is a memory that will forever stand out.",
          song: "Kar Har Maidaan Fateh (Sanju)",
          audioUrl: "/audio/song-5.mp3",
          songReason: "Holds the right weight and inspirational tone for celebrating a proud academic or professional milestone.",
          youtubeId: "9ypn_w4j8S0",
          spotifyUrl: "https://open.spotify.com/search/Kar%20Har%20Maidaan%20Fateh",
          youtubeUrl: "https://www.youtube.com/watch?v=9ypn_w4j8S0",
          tag: "Milestone 🏆"
        },
        {
          id: "m6",
          photo: "/janhavi/photo-6.jpg",
          heading: "Views from the Top",
          caption: "Views from the Top",
          subcaption: "Adventures are always better when shared. Reaching the viewpoint with friends makes the journey totally worth it—a perfect snapshot of exploring together.",
          details: "Adventures are always better when shared. Reaching the viewpoint with friends makes the journey totally worth it—a perfect snapshot of exploring together.",
          song: "Ilahi (Yeh Jawaani Hai Deewani)",
          audioUrl: "/audio/song-6.mp3",
          songReason: "Captures the pure spirit of travel, scenic viewpoints, and stepping out into nature with your crew.",
          youtubeId: "fdubeMFwuGs",
          spotifyUrl: "https://open.spotify.com/search/Ilahi",
          youtubeUrl: "https://www.youtube.com/watch?v=fdubeMFwuGs",
          tag: "Adventure ⛰️"
        },
        {
          id: "m7",
          photo: "/janhavi/photo-10.jpg",
          heading: "Riverside in the Rain",
          caption: "Riverside in the Rain",
          subcaption: "Embracing the weather down by the water. Whether the sun is shining or it's pouring rain, every outing turns into its own unique adventure.",
          details: "Embracing the weather down by the water. Whether the sun is shining or it's pouring rain, every outing turns into its own unique adventure.",
          song: "Barso Re (Guru)",
          audioUrl: "/audio/song-7.mp3",
          songReason: "High-spirited monsoon energy tailored for standing by the water in a rain jacket.",
          youtubeId: "4T3vQ4Qe7W8",
          spotifyUrl: "https://open.spotify.com/search/Barso%20Re",
          youtubeUrl: "https://www.youtube.com/watch?v=4T3vQ4Qe7W8",
          tag: "Monsoon 🌧️"
        }
      ],

      // Group 3: Everyday Hangouts
      group3Title: "Everyday Hangouts",
      group3Subtitle: "Cafe chats, quiet pauses, and movie traditions",
      group3Memories: [
        {
          id: "m8",
          photo: "/janhavi/photo-8.jpg",
          heading: "Cafe Diaries",
          caption: "Cafe Diaries",
          subcaption: "Good food, great ambiance, and even better company. These cozy cafe dates are where the best stories are shared and the deepest laughs are had.",
          details: "Good food, great ambiance, and even better company. These cozy cafe dates are where the best stories are shared and the deepest laughs are had.",
          song: "Iktara (Wake Up Sid)",
          audioUrl: "/audio/song-8.mp3",
          songReason: "Warm and comforting, giving off exact relaxed cafe date vibes.",
          youtubeId: "fSS_R91Nimw",
          spotifyUrl: "https://open.spotify.com/search/Iktara",
          youtubeUrl: "https://www.youtube.com/watch?v=fSS_R91Nimw",
          tag: "Cafe Date ☕"
        },
        {
          id: "m9",
          photo: "/janhavi/photo-9.jpg",
          heading: "Taking a Pause",
          caption: "Taking a Pause",
          subcaption: "Just sitting back and taking it all in. Sometimes you just need to pause on the steps, relax, and appreciate the day as it unfolds.",
          details: "Just sitting back and taking it all in. Sometimes you just need to pause on the steps, relax, and appreciate the day as it unfolds.",
          song: "O Maahi (Dunki)",
          audioUrl: "/audio/song-9.mp3",
          songReason: "Matches the gentle, simple pause in the middle of a busy day.",
          youtubeId: "a9HIaoieir4",
          spotifyUrl: "https://open.spotify.com/search/Love%20You%20Zindagi",
          youtubeUrl: "https://www.youtube.com/watch?v=a9HIaoieir4",
          tag: "Chill Time"
        },
        {
          id: "m10",
          photo: "/janhavi/photo-1.jpg",
          heading: "Movie Magic",
          caption: "Movie Magic",
          subcaption: "Settling into the theater seats, waiting for the lights to dim. Movie nights are a classic tradition, filled with popcorn, anticipation, and shared reactions.",
          details: "Settling into the theater seats, waiting for the lights to dim. Movie nights are a classic tradition, filled with popcorn, anticipation, and shared reactions.",
          song: "Sooraj Dooba Hain (Roy)",
          audioUrl: "/audio/song-10.mp3",
          songReason: "Has the upbeat night-out energy needed for catching a film together.",
          youtubeId: "nJZcbIdBZCc",
          spotifyUrl: "https://open.spotify.com/search/Sooraj%20Dooba%20Hain",
          youtubeUrl: "https://www.youtube.com/watch?v=nJZcbIdBZCc",
          tag: "Movie Night 🎬"
        }
      ],

      // Emotional Shift
      emotionalTitle: "A Heartfelt Note",
      emotionalMessage: "Janhavi, these four years have been filled with so many cherished memories—from adventurous viewpoints and proud celebrations to simple cafe talks and laughter under the trees. Having you in our lives has made the whole journey unforgettable. Here's to you and all the amazing adventures ahead in Nashik!",
      emotionalPhoto: "/janhavi/photo-3.jpg",
      endingStatus: "Forever Part of the Story. ✨"
    },

    {
      id: "prajakta",
      name: "Prajakta",
      title: "Present, Ma'am",
      emoji: "😭",
      subtitle: "Future Professor, master of living in her own world, & our beloved teacher-scholar.",
      themeColor: "from-emerald-500/20 via-teal-500/10 to-amber-500/20",
      accentBorder: "border-emerald-400/40",
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
      cardPhoto: "/prajakta/photo-1.jpg",
      musicTrack: "Prajakta's Memories 📚",

      // Opening Intro
      introTitle: "4 years of memories...",
      introHighlight: "PRESENT, MA'AM.",
      introSubtext: "— M.Tech scholar, teaching in our own college, lost in her own cute world 😭",

      // Group 1: Sunny Moments & Campus Life
      group1Title: "Sunny Moments & Campus Life",
      group1Subtitle: "Unfiltered paths, sun-kissed smiles, and proud milestones",
      group1Memories: [
        {
          id: "p1",
          photo: "/prajakta/photo-1.jpg",
          heading: "Golden Hour & Warm Smiles",
          caption: "Golden Hour & Warm Smiles",
          subcaption: "Sunkissed faces and genuine laughter under the green trees. These spontaneous outdoor moments capture pure joy.",
          details: "Sunkissed faces and genuine laughter under the green trees. These spontaneous outdoor moments capture pure joy.",
          song: "Tumhi Ho Bandhu (Cocktail)",
          audioUrl: "/prajakta/audio/song-1.mp3",
          tag: "Golden Hour"
        },
        {
          id: "p2",
          photo: "/prajakta/photo-2.jpg",
          heading: "Stage Accomplishments",
          caption: "Stage Accomplishments",
          subcaption: "A proud achievement moment caught on camera. Draped in an elegant blue saree, receiving honor for hard work and dedication.",
          details: "A proud achievement moment caught on camera. Draped in an elegant blue saree, receiving honor for hard work and dedication.",
          song: "Badal Pe Paon Hain (Chak De! India)",
          audioUrl: "/prajakta/audio/song-2.mp3",
          tag: "Milestone 🏆"
        },
        {
          id: "p3",
          photo: "/prajakta/photo-3.jpg",
          heading: "Campus Walkway Chronicles",
          caption: "Campus Walkway Chronicles",
          subcaption: "Taking a quick breather along the tree-lined paths. Unfiltered chats and catching up between busy schedules.",
          details: "Taking a quick breather along the tree-lined paths. Unfiltered chats and catching up between busy schedules.",
          song: "Woh Din (Chhichhore)",
          audioUrl: "/prajakta/audio/song-3.mp3",
          tag: "Campus Path"
        }
      ],

      // Group 2: Trip Fun & Goofy Banter
      group2Title: "Trip Fun & Goofy Banter",
      group2Subtitle: "Hotel mirror rituals, chaotic dance energy, and cozy hoodie silliness",
      group2Memories: [
        {
          id: "p4",
          photo: "/prajakta/photo-4.jpg",
          heading: "Unfiltered Hotel Energy",
          caption: "Unfiltered Hotel Energy",
          subcaption: "Mid-spin, mid-laugh, and full of chaotic fun! Capturing the real excitement of getting ready during a trip.",
          details: "Mid-spin, mid-laugh, and full of chaotic fun! Capturing the real excitement of getting ready during a trip.",
          song: "London Thumakda (Queen)",
          audioUrl: "/prajakta/audio/song-4.mp3",
          tag: "Trip Energy"
        },
        {
          id: "p5",
          photo: "/prajakta/photo-5.jpg",
          heading: "Mirror Selfie Rituals",
          caption: "Mirror Selfie Rituals",
          subcaption: "Before heading out, a quick mirror photo is non-negotiable. Dressed up, throwing peace signs, and enjoying the trip.",
          details: "Before heading out, a quick mirror photo is non-negotiable. Dressed up, throwing peace signs, and enjoying the trip.",
          song: "Softly (Karan Aujla)",
          audioUrl: "/prajakta/audio/song-5.mp3",
          tag: "Mirror Selfie"
        },
        {
          id: "p6",
          photo: "/prajakta/photo-6.jpg",
          heading: "Partner in Goofiness",
          caption: "Partner in Goofiness",
          subcaption: "There’s always that one friend making silly faces while you try to strike a nice pose! Unmatched banter in cozy pink hoodies.",
          details: "There’s always that one friend making silly faces while you try to strike a nice pose! Unmatched banter in cozy pink hoodies.",
          song: "Drama Queen (Hasee Toh Phasee)",
          audioUrl: "/prajakta/audio/song-6.mp3",
          tag: "Pure Banter"
        },
        {
          id: "p7",
          photo: "/prajakta/photo-7.jpg",
          heading: "Event Passports",
          caption: "Event Passports",
          subcaption: "Wristbands strapped on, high energy, and excitement for the day ahead. Marking the start of another great event.",
          details: "Wristbands strapped on, high energy, and excitement for the day ahead. Marking the start of another great event.",
          song: "Gallan Goodiyaan (Dil Dhadakne Do)",
          audioUrl: "/prajakta/audio/song-7.mp3",
          tag: "Event Day"
        }
      ],

      // Group 3: Traditions, Sunshine & Live Motion
      group3Title: "Traditions, Sunshine & Live Motion",
      group3Subtitle: "Saree elegance, everyday laughter, and memories in motion",
      group3Memories: [
        {
          id: "p8",
          photo: "/prajakta/photo-8.jpg",
          heading: "Traditional Grace",
          caption: "Traditional Grace",
          subcaption: "Draped in classic sarees and radiating warmth. Festive and traditional days always feel special when spent together.",
          details: "Draped in classic sarees and radiating warmth. Festive and traditional days always feel special when spent together.",
          song: "Navrai Majhi (English Vinglish)",
          audioUrl: "/prajakta/audio/song-8.mp3",
          tag: "Traditional"
        },
        {
          id: "p9",
          photo: "/prajakta/photo-9.jpg",
          heading: "Everyday Sunshine",
          caption: "Everyday Sunshine",
          subcaption: "Bright light, comfortable outfit, and familiar smiles. The best memories are often woven out of ordinary afternoons.",
          details: "Bright light, comfortable outfit, and familiar smiles. The best memories are often woven out of ordinary afternoons.",
          song: "Nachde Ne Saare",
          audioUrl: "/prajakta/audio/song-9.mp3",
          tag: "Sunshine"
        },
        {
          id: "p10",
          video: "/prajakta/video_1.mp4",
          photo: "/prajakta/photo-1.jpg",
          heading: "Memories in Motion",
          caption: "Memories in Motion",
          subcaption: "Static pictures capture a moment, but short video clips bring back the live laughter, movement, and exact mood of the day.",
          details: "Static pictures capture a moment, but short video clips bring back the live laughter, movement, and exact mood of the day.",
          song: "Heeriye (Jasleen Royal & Arijit Singh)",
          audioUrl: "/prajakta/audio/song-10.mp3",
          tag: "Live Video 🎥"
        }
      ],

      // Emotional Tribute
      emotionalTitle: "A Heartfelt Note",
      emotionalMessage: "Prajakta, whether it was dressing up in traditional sarees, silly hotel mirror poses, or sharing everyday laughs across campus, having you with us made every single year richer. Watching you step up as an M.Tech scholar and teacher in our college makes us so incredibly proud. Professor Prajakta forever!",
      emotionalPhoto: "/prajakta/photo-8.jpg",
      endingStatus: "Professor Status: Permanent. 👩‍🏫"
    },

    {
      id: "siddhi",
      name: "Siddhi",
      title: "Let's Go",
      emoji: "✈️",
      subtitle: "The ultimate 'chalable' friend, spontaneous explorer, & partner-in-crime.",
      themeColor: "from-sky-500/20 via-indigo-500/10 to-cyan-500/20",
      accentBorder: "border-sky-400/40",
      badgeColor: "bg-sky-400/20 text-sky-300 border-sky-400/30",
      cardPhoto: "/siddhi/photo-1.jpg",
      musicTrack: "Siddhi's Spontaneous Anthems 🎧",

      // Opening Intro
      introTitle: "Engineering Adventures • The 'Chalable' Bestie",
      introHighlight: "LET’S GO. ✈️",
      introSubtext: "— From spontaneous escapes to accidental cafe dates and endless laughs",

      // Group 1: Spontaneous Escapes & Cafe Dates
      group1Title: "Spontaneous Escapes & Cafe Dates",
      group1Subtitle: "Fresh air, cozy cafe moments, and lunchtime canteen chatter",
      group1Memories: [
        {
          id: "s1",
          photo: "/siddhi/photo-1.jpg",
          heading: "Nature's Frame",
          caption: "Nature's Frame",
          subcaption: "Leaning into fresh air and bright smiles. Finding spontaneous outdoor spots to snap picture-perfect friendship moments.",
          details: "Leaning into fresh air and bright smiles. Finding spontaneous outdoor spots to snap picture-perfect friendship moments.",
          song: "Jaane Kyun (Dostana)",
          audioUrl: "/siddhi/audio/song-1.mp3",
          tag: "Sunny Vibe 🌿"
        },
        {
          id: "s2",
          photo: "/siddhi/photo-2.jpg",
          heading: "Sweet Indulgence",
          caption: "Sweet Indulgence",
          subcaption: "Decadent chocolate shakes, outdoor breezes, and catching up over sweet cafe treats.",
          details: "Decadent chocolate shakes, outdoor breezes, and catching up over sweet cafe treats.",
          song: "Gulabi (Shuddh Desi Romance)",
          audioUrl: "/siddhi/audio/song-2.mp3",
          tag: "Cafe Treats 🍫"
        },
        {
          id: "s3",
          photo: "/siddhi/photo-3.jpg",
          heading: "Cafeteria Conversations",
          caption: "Cafeteria Conversations",
          subcaption: "Gathered around the table, taking a well-deserved break for endless stories and shared laughs.",
          details: "Gathered around the table, taking a well-deserved break for endless stories and shared laughs.",
          song: "Senorita (Zindagi Na Milegi Dobara)",
          audioUrl: "/siddhi/audio/song-3.mp3",
          tag: "Canteen Chitchat ☕"
        }
      ],

      // Group 2: Polaroids, Park Days & Monsoon Rides
      group2Title: "Polaroids, Park Days & Monsoon Rides",
      group2Subtitle: "Tight hugs, sunlit park shadows, and rain-ready adventure mode",
      group2Memories: [
        {
          id: "s4",
          photo: "/siddhi/photo-4.jpg",
          heading: "Polaroid Warmth",
          caption: "Polaroid Warmth",
          subcaption: "A tight embrace captured retro-style. Unconditional warmth and bonds that feel timeless.",
          details: "A tight embrace captured retro-style. Unconditional warmth and bonds that feel timeless.",
          song: "Subhanallah (Yeh Jawaani Hai Deewani)",
          audioUrl: "/siddhi/audio/song-4.mp3",
          tag: "Retro Warmth 📸"
        },
        {
          id: "s5",
          photo: "/siddhi/photo-5.jpg",
          heading: "Sunlit Shadows",
          caption: "Sunlit Shadows",
          subcaption: "Wandering through tree-shaded paths with the absolute best companion by your side.",
          details: "Wandering through tree-shaded paths with the absolute best companion by your side.",
          song: "Behti Hawa Sa Tha Woh (3 Idiots)",
          audioUrl: "/siddhi/audio/song-5.mp3",
          tag: "Park Walks 🍃"
        },
        {
          id: "s6",
          photo: "/siddhi/photo-6.jpg",
          heading: "Monsoon Rider Vibes",
          caption: "Monsoon Rider Vibes",
          subcaption: "Raincoat zipped, helmet secured, and pure excitement! Ready to take on rainy days with a huge smile.",
          details: "Raincoat zipped, helmet secured, and pure excitement! Ready to take on rainy days with a huge smile.",
          song: "Baarishein (Anuv Jain)",
          audioUrl: "/siddhi/audio/song-6.mp3",
          tag: "Rain Ready 🌧️"
        },
        {
          id: "s7",
          photo: "/siddhi/photo-7.jpg",
          heading: "Overcast Outings",
          caption: "Overcast Outings",
          subcaption: "Crisp air, cozy jackets, and easygoing strolls through the green side of town.",
          details: "Crisp air, cozy jackets, and easygoing strolls through the green side of town.",
          song: "Jaane Kyun (Dostana)",
          audioUrl: "/siddhi/audio/song-7.mp3",
          tag: "Cozy Strolls ☁️"
        }
      ],

      // Group 3: Joy, Whispers & Live Motion
      group3Title: "Joy, Whispers & Live Motion",
      group3Subtitle: "Carefree playgrounds, inside giggles, and captured moments in motion",
      group3Memories: [
        {
          id: "s8",
          photo: "/siddhi/photo-8.jpg",
          heading: "Carefree Playground Days",
          caption: "Carefree Playground Days",
          subcaption: "Arms stretched wide to welcome the breeze, bringing back uninhibited playground joy.",
          details: "Arms stretched wide to welcome the breeze, bringing back uninhibited playground joy.",
          song: "Hawayein (Jab Harry Met Sejal)",
          audioUrl: "/siddhi/audio/song-8.wav",
          tag: "Pure Freedom 🎈"
        },
        {
          id: "s9",
          photo: "/siddhi/photo-9.jpg",
          heading: "Inside Jokes & Giggles",
          caption: "Inside Jokes & Giggles",
          subcaption: "Whispering secrets and hiding bashful smiles. The best laughter comes from unspoken inside jokes.",
          details: "Whispering secrets and hiding bashful smiles. The best laughter comes from unspoken inside jokes.",
          song: "Choomantar (Mere Brother Ki Dulhan)",
          audioUrl: "/siddhi/audio/song-9.mp3",
          tag: "Secret Laughs ✨"
        },
        {
          id: "s10",
          photo: "/siddhi/photo-1.jpg",
          video: "/siddhi/video_1.mp4",
          heading: "Reel Life Snaps",
          caption: "Reel Life Snaps",
          subcaption: "Bringing static photos to life with live movement, candid giggles, and real-time fun.",
          details: "Bringing static photos to life with live movement, candid giggles, and real-time fun.",
          song: "Choo Lo (The Local Train)",
          audioUrl: "/siddhi/audio/song-10.mp3",
          tag: "Live Movement 🎥"
        }
      ],

      // Emotional Tribute
      emotionalTitle: "A Heartfelt Note",
      emotionalMessage: "Siddhi, having a friend who is as 'chalable' and on the exact same crazy wavelength as me made these four years pure joy. Going out with you never felt routine — it felt like an adventure (or a date 😭😂). Wherever future steps take us, having you by my side was one of the best parts of college!",
      emotionalPhoto: "/siddhi/photo-4.jpg",
      endingStatus: "Always 'Chalable': Let's Go! ✈️"
    }
  ],

  // Shared Final Page Content
  sharedFinalPage: {
    heading: "Four Years.\nOne Squad.\nOne Unforgettable Chapter.",
    subtitle: "The 4 of us — Engineering degree done, lifelong bond permanent.",
    
    // 9 Shared Memories
    memories: [
      {
        id: "all-1",
        photo: "/all/photo-1.jpg",
        heading: "Rooftop Catch-ups",
        caption: "Rooftop Catch-ups",
        subcaption: "Open air, tiled roofs, and endless table talk. Taking a well-deserved breather to catch up on everything.",
        details: "Open air, tiled roofs, and endless table talk. Taking a well-deserved breather to catch up on everything.",
        song: "Dil Chahta Hai",
        audioUrl: "/all/audio/song-1.mp3",
        tag: "Rooftop Vibes ☕"
      },
      {
        id: "all-2",
        photo: "/all/photo-2.jpg",
        heading: "Open Skies & Free Spirits",
        caption: "Open Skies & Free Spirits",
        subcaption: "Bright smiles under the canopy of green. Feeling completely unbound and grateful for this bond.",
        details: "Bright smiles under the canopy of green. Feeling completely unbound and grateful for this bond.",
        song: "Ilahi",
        audioUrl: "/all/audio/song-2.mp3",
        tag: "Nature Strolls 🌿"
      },
      {
        id: "all-3",
        photo: "/all/photo-3.jpg",
        heading: "Traditional Grace",
        caption: "Traditional Grace",
        subcaption: "Draped in vibrant colors, festive smiles, and timeless elegance. Celebrating special days together in style.",
        details: "Draped in vibrant colors, festive smiles, and timeless elegance. Celebrating special days together in style.",
        song: "Gallan Goodiyaan",
        audioUrl: "/all/audio/song-3.mp3",
        tag: "Festive Glam ✨"
      },
      {
        id: "all-4",
        photo: "/all/photo-4.jpg",
        heading: "Casual Afternoon Hangs",
        caption: "Casual Afternoon Hangs",
        subcaption: "No fuss, no plans—just cozy room hangouts, random jokes, and making ordinary hours feel special.",
        details: "No fuss, no plans—just cozy room hangouts, random jokes, and making ordinary hours feel special.",
        song: "Hey Kasoor",
        audioUrl: "/all/audio/song-4.mp3",
        tag: "Lazy Afternoons 🛋️"
      },
      {
        id: "all-5",
        photo: "/all/photo-5.jpg",
        heading: "Evening Blossoms",
        caption: "Evening Blossoms",
        subcaption: "Fresh flowers, lively city lights, and crisp evening air. Creating memories out on the town.",
        details: "Fresh flowers, lively city lights, and crisp evening air. Creating memories out on the town.",
        song: "Matargashti",
        audioUrl: "/all/audio/song-5.mp3",
        tag: "City Lights 🌹"
      },
      {
        id: "all-6",
        photo: "/all/photo-6.jpg",
        heading: "Cinema & Side Jokes",
        caption: "Cinema & Side Jokes",
        subcaption: "Reclining back in red cinema seats, sharing popcorn, and giggling through the pre-movie trailers.",
        details: "Reclining back in red cinema seats, sharing popcorn, and giggling through the pre-movie trailers.",
        song: "Sooraj Dooba Hain",
        audioUrl: "/all/audio/song-6.mp3",
        tag: "Movie Nights 🎬"
      },
      {
        id: "all-7",
        photo: "/all/photo-7.jpg",
        heading: "Unfiltered Squad Drama",
        caption: "Unfiltered Squad Drama",
        subcaption: "A touch of drama, heart-on-sleeve laughter, and pure candid energy whenever the camera turns on.",
        details: "A touch of drama, heart-on-sleeve laughter, and pure candid energy whenever the camera turns on.",
        song: "Drama Queen",
        audioUrl: "/all/audio/song-7.mp3",
        tag: "Pure Drama 😂"
      },
      {
        id: "all-8",
        photo: "/all/photo-8.jpg",
        heading: "Park Bench Stories",
        caption: "Park Bench Stories",
        subcaption: "Sitting along shaded garden pathways, watching the world go by, and enjoying easy everyday company.",
        details: "Sitting along shaded garden pathways, watching the world go by, and enjoying easy everyday company.",
        song: "Tum Hi Ho Bandhu",
        audioUrl: "/all/audio/song-8.mp3",
        tag: "Bench Talks 🍃"
      },
      {
        id: "all-9",
        photo: "/all/photo-9.jpg",
        heading: "Campus Chronicles",
        caption: "Campus Chronicles",
        subcaption: "Squeezing in quick selfies between classes. The little moments that turn busy schedules into fond memories.",
        details: "Squeezing in quick selfies between classes. The little moments that turn busy schedules into fond memories.",
        song: "Woh Din",
        audioUrl: "/all/audio/song-9.mp3",
        tag: "College Life 🎓"
      }
    ],

    // The 4th member: Riddhi
    author: {
      id: "riddhi",
      name: "Riddhi",
      title: "The Annoying Troublemaker",
      emoji: "😎",
      subtitle: "The memory keeper & squad instigator.",
      accentBorder: "border-rose-400/40",
      cardPhoto: "/me.jpg"
    },

    commonMessage: "Here’s to four years of laughter, shared struggles, and a friendship that time will never change. Wishing us all the brightest futures, unstoppable success, and continuous joy in everything we do next. New journeys begin now, but the four of us are forever.",
    
    // Squad Members Formal Sign-Off for the wax-sealed boxes on the finale page
    squadSignOff: [
      {
        id: "janhavi",
        shortName: "Janhavi",
        fullName: "Janhavi Sonar",
        collegeId: "KBTUG22003",
        rollNo: "64",
        batch: "2022–2026",
        status: "Currently working at Dreamwares IT Solutions, Nashik",
        stampColor: "from-amber-600 to-amber-800",
        sealBorder: "border-amber-400",
        sealInitial: "JS"
      },
      {
        id: "prajakta",
        shortName: "Prajakta",
        fullName: "Prajakta Jejurkar",
        collegeId: "KBTUG22159",
        rollNo: "31",
        batch: "2022–2026",
        status: "Currently perusing M. Tech along with Teaching to diploma students in the same college at Matoshri College of Engineering & Research Centre (Data Science), Nashik",
        stampColor: "from-emerald-600 to-emerald-800",
        sealBorder: "border-emerald-400",
        sealInitial: "PJ"
      },
      {
        id: "siddhi",
        shortName: "Siddhi",
        fullName: "Siddhi Kale",
        collegeId: "KBTUG22057",
        rollNo: "33",
        batch: "2022–2026",
        status: "Currently perusing M. Tech at D. Y. Patil College Akurdi (Computer Engineering), Pune",
        stampColor: "from-sky-600 to-sky-800",
        sealBorder: "border-sky-400",
        sealInitial: "SK"
      },
      {
        id: "riddhi",
        shortName: "Riddhi",
        fullName: "Riddhi Bafna",
        collegeId: "KBTUG22064",
        rollNo: "04",
        batch: "2022–2026",
        status: "Currently perusing M. Tech at VJTI (AIDS), Mumbai",
        stampColor: "from-rose-600 to-rose-800",
        sealBorder: "border-rose-400",
        sealInitial: "RB"
      }
    ],

    oneLastThing: {
      buttonText: "THE 4 OF US FOREVER ✨",
      modalHeading: "To Janhavi, Prajakta & Siddhi",
      finalNote: "Engineering ended.\nNashik, Pune, Mumbai & Teaching began.\n\nOur friendship never ends.",
      floatingMemories: [
        "Bench Partner Janhavi 😂 (Nashik CEO)",
        "Professor Prajakta 😭 (Annoyed for 4 yrs)",
        "Siddhi 'Let's Go' ✈️ (Pune Bound)",
        "Riddhi 😎 (Mumbai Bound)",
        "The 4 of Us Forever ❤️",
        "Engineering Legends 🎓"
      ],
      closingGroupPhoto: "/all/photo-3.jpg"
    }
  }
};
