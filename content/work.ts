export type WorkItem = {
  title: string;
  category: string;
  role: string;
  summary: string;
  size: "large" | "medium" | "small";
  featured?: boolean;
  image?: string;
  slug: string;
  body?: string[]; // paragraphs for the detail page
  media?: {
    type: "image" | "video" | "youtube" | "instagram";
    src: string;
    title?: string;
    imageFit?: "cover" | "contain";
  }[];
  imageBg?: string;
  imageFit?: "cover" | "contain";
  scale?: number;
  award?: string;
  objectPositionY?: string;
  imageWidth?: number;
  imageHeight?: number;
  client?: string;
  website?: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Meals on Wheels America",
    category: "Social impact · Talent",
    role: "Talent Partnerships · Campaign Support",
    summary:
      "Celebrity and influencer talent strategy supporting Meals on Wheels America's mission to expand reach and build connection around aging and food insecurity.",
    size: "medium",
    featured: true,
    image: "/images/clients/meals-on-wheels.jpg",
    imageWidth: 2048,
    imageHeight: 1266,
    slug: "meals-on-wheels",
    client: "Meals on Wheels America",
    body: [
      "Meals on Wheels America works to ensure that older adults across the country have access to nutritious meals, human connection, and the support they need to live independently.",
      "Over a multi-year partnership, Pilot Collective has built and led Meals on Wheels America’s in-kind celebrity and influencer talent strategy. By orchestrating mission-driven campaigns, content initiatives, and strategic talent alignments, we have expanded the organization's reach and connected its cause with broader audiences.",
      "Through authentic storytelling and high-impact partnerships, the work continues to give a human voice to a critical national issue and amplify the scale of Meals on Wheels' mission.",
    ],
    website: "https://www.mealsonwheelsamerica.org/",
    media: [
      {
        type: "video",
        src: "/images/clients/meals-on-wheels/video-1.mp4",
        title: "Meals on Wheels Celebrity Support Sizzle",
      },
      {
        type: "video",
        src: "/images/clients/meals-on-wheels/video-5.mp4",
        title: "Hall of Fame Jerry Rice · Meals on Wheels America Ambassador",
      },
      {
        type: "video",
        src: "/images/clients/meals-on-wheels/video-3.mp4",
        title: "Tiffani Thiessen · Meals on Wheels America Ambassador",
      },
      {
        type: "video",
        src: "/images/clients/meals-on-wheels/video-6.mp4",
        title:
          "Olympic Champion Jordan Chiles  · Meals on Wheels America Ambassador",
      },
    ],
  },
  {
    title: "Zion Forever Project",
    category: "Conservation · Nonprofit · Talent",
    role: "Talent Partnerships · Strategy",
    summary:
      "Talent partnerships connecting Zion Forever Project's conservation mission with broader audiences and authentic voices.",
    size: "large",
    featured: true,
    image: "/images/clients/zion-forever1.jpg",
    imageWidth: 1080,
    imageHeight: 1350,
    slug: "zion-forever-project",
    imageFit: "cover",
    objectPositionY: "48%",
    client: "Zion Forever Project",
    body: [
      "Zion Forever Project is the official nonprofit partner of Zion National Park, working to protect, preserve, and enhance the park for generations to come.",
      "Pilot Collective partners with the Zion Forever Project to build talent partnerships that bring greater visibility to the organization's conservation work and deepen connections to Zion National Park. By pairing the project's mission with authentic voices and creators, the partnership introduces conservation to broader audiences while celebrating the landscapes, stories, and experiences that make Zion so significant.",
    ],
    website: "https://www.zionpark.org/",
    media: [
      {
        type: "video",
        src: "/images/clients/zion-forever-video-1.mp4",
        title: "Ty Burrell · Zion Forever Spotlight",
      },
    ],
  },
  {
    title: "Climate Podcast",
    category: "Climate · Media · Strategy",
    role: "Visual Branding · Video Post-Production · Digital Strategy",
    summary:
      "Visual branding, video post-production, and digital strategy for a climate-focused video podcast.",
    size: "medium",
    image: "/images/clients/fighting-chance.jpg",
    imageWidth: 1277,
    imageHeight: 541,
    slug: "climate-podcast",
    imageFit: "contain",
    scale: 1.1,
    imageBg: "#ffffff",
    client: "NorCal Public Media",
    body: [
      "NorCal Public Media partnered with Pilot Collective to expand the organization's environmental storytelling through A Fighting Chance, a video podcast companion to PBS's Climate California focused on climate solutions and visionary leaders.",
      "Pilot Collective provides visual branding, video post-production, and digital strategy to bring the series to life and connect its stories with broader audiences.",
    ],
    website: "https://norcalpublicmedia.org/a-fighting-chance",
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/GrNLgGmYzqs",
        title: "A Fighting Chance · Teaser",
      },
    ],
  },
  {
    title: "Path of Liberty",
    category: "Public art · Storytelling · Culture",
    role: "Story Producer · Creative Lead",
    summary:
      "A six-acre public art installation exploring the many perspectives and experiences that shape American identity.",
    size: "large",
    featured: true,
    image: "/images/clients/path-of-liberty.jpg",
    imageWidth: 1024,
    imageHeight: 683,
    slug: "path-of-liberty",
    client: "Soloviev Foundation",
    body: [
      "Path of Liberty: That Which Unites US is an immersive public art installation created by C&G Partners in partnership with artist and filmmaker Daniella Vale and commissioned by the Soloviev Foundation. Spanning more than six acres in Manhattan, the installation brought together large-scale portraits, video, personal stories, and original music to explore the many perspectives and experiences that shape American identity.",
      "As Story Producer, Jessica Pilot helped shape the storytelling behind the project, working with Daniella Vale and the production team to bring personal voices and experiences from across the country into the installation. The resulting work features portraits and firsthand stories from more than 40 participants, transforming individual perspectives into an immersive exploration of what it means to be American.",
    ],
    media: [
      {
        type: "image",
        src: "/images/clients/path-of-liberty1.jpg",
        title: "Path of Liberty",
      },
      {
        type: "image",
        src: "/images/clients/path-of-liberty2.jpg",
        title: "Path of Liberty",
      },
      {
        type: "image",
        src: "/images/clients/path-of-liberty5.jpg",
        title: "Path of Liberty",
      },
      {
        type: "image",
        src: "/images/clients/path-of-liberty4.jpg",
        title: "Path of Liberty",
      },
      {
        type: "video",
        src: "/images/clients/POL-video-1.mp4",
        title: "Path of Liberty · Participant Interviews",
      },
      {
        type: "video",
        src: "/images/clients/POL-video-2.mp4",
        title: "Amos Paul Kennedy, Jr. · Artist & Printer",
      },
      {
        type: "video",
        src: "/images/clients/POL-video-3.mp4",
        title: "Kelkiyana Yazzie · Grand Canyon National Park Ranger",
      },
      {
        type: "video",
        src: "/images/clients/POL-video-4.mp4",
        title: "Jose Alfaro · Community Justice Action Fund",
      },
    ],
    website: "https://pathoflibertynyc.com/",
  },
  {
    title: "EMERGE125",
    category: "Dance · Culture · Community",
    role: "Talent Partnerships · Strategy",
    summary:
      "Talent and creative strategy supporting a Black female-led dance company expanding access to contemporary dance and the arts.",
    size: "small",
    imageWidth: 1080,
    imageHeight: 540,
    slug: "emerge125",
    body: [
      "EMERGE125 is a Black female-led dance company based in Harlem, New York, expanding the reach and impact of contemporary dance through performance, creation, and education. Led by Artistic Director and choreographer Tiffany Rea-Fisher, the company creates expressive, athletic work that explores identity, community, and the experiences that connect us.",
      "Beyond the stage, EMERGE125 brings dance into multidisciplinary and nontraditional spaces, while its education programs serve students and emerging artists through classes, workshops, residencies, and performance experiences. The company's work is rooted in community building and creating greater access to dance and the arts.",
      "Pilot Collective partners with EMERGE125 on talent and creative strategy, supporting the company and its work at the intersection of performance, culture, and community.",
    ],
    image: "/images/clients/emerge-125.webp",
    imageFit: "contain",
    scale: 1,
    imageBg: "#ffffff",
    client: "EMERGE125",
    website: "https://emerge125.org/",
  },
  {
    title: "The Soloviev Foundation",
    category: "Philanthropy · Culture · Sustainability",
    role: "Guest Booking · Talent Partnerships",
    summary:
      "Guest booking and talent partnerships for Sustainability, Inc., a podcast exploring global sustainability and climate impact solutions.",
    size: "medium",
    image: "/images/clients/soloviev-foundation.webp",
    imageWidth: 1912,
    imageHeight: 1123,
    slug: "soloviev-foundation",
    body: [
      "The Soloviev Foundation is the philanthropic arm of the Soloviev Group, supporting organizations and initiatives across humanitarian, environmental, educational, and cultural causes. The Foundation also maintains an art collection and public gallery in New York City, creating opportunities for audiences to engage with art, history, and cultural programming.",
      "Pilot Collective collaborated with FORTUNE Brand Studio to lead guest booking and talent partnerships for Sustainability, Inc., a podcast produced in partnership with Boston Consulting Group. By sourcing and securing high-profile innovators, industry leaders, and climate experts, we curated compelling conversations around global sustainability, bringing essential climate impact solutions to business audiences nationwide.",
    ],
    imageFit: "contain",
    scale: 0.85,
    imageBg: "#ffffff",
    client: "FORTUNE Brand Studio",
    website:
      "https://brand-studio.fortune.com/bcg/sustainability-inc/?prx_t=2QEHAAAAAAJRcRA",
    media: [
      {
        type: "image",
        src: "/images/clients/substainability-inc-image.png",
        title: "Sustainability, Inc.",
        imageFit: "contain",
      },
    ],
  },
  {
    title: "Los Angeles Clippers",
    category: "Sports · Media · Talent",
    role: "Talent Production · Broadcast Strategy",
    summary:
      "End-to-end talent production and broadcast strategy supporting ClipperVision and its interactive, multi-stream experience.",
    size: "medium",
    featured: true,
    image: "/images/clients/la-clippers.webp",
    imageWidth: 1024,
    imageHeight: 715,
    slug: "los-angeles-clippers",
    imageFit: "contain",
    scale: 0.7,
    imageBg: "#ffffff",
    client: "Los Angeles Clippers",
    body: [
      "In 2022, the LA Clippers launched ClipperVision, a direct-to-consumer streaming service delivering live regional games across multiple custom broadcast feeds. Among its primary features is BallerVision, an alternative, ManningCast-style stream featuring NBA legends like Paul Pierce, Baron Davis, Jamal Crawford, and Quentin Richardson delivering real-time commentary, analysis, and banter.",
      "Pilot Collective provided end-to-end talent production support, developing the live digital assets and broadcast strategy to bring ClipperVision's interactive, multi-stream experience to life.",
    ],
    media: [
      {
        type: "video",
        src: "/images/clients/clippers.mp4",
        title: "ClipperVision · Preview",
      },
    ],
  },
  {
    title: "American Immigration Council",
    category: "Nonprofit · Advocacy",
    role: "Talent Partnerships · Strategy",
    summary:
      "Supporting the American Immigration Council's work to bring immigration stories and research into the public conversation.",
    size: "medium",
    image: "/images/clients/american-immigration-council.jpg",
    imageWidth: 1080,
    imageHeight: 1080,
    slug: "american-immigration-council",
    client: "American Immigration Council",
    body: [
      "The American Immigration Council is a nonprofit organization working across research, legal advocacy, communications, and community engagement to shape how immigration is understood and addressed in the United States. Its work includes bringing research and stories into the public conversation, supporting immigrants and their advocates, and developing initiatives that connect people and communities around immigration.",
    ],
  },
  {
    title: "American Public Media",
    category: "Media · Broadcast",
    role: "Talent Partnerships · Creative Strategy",
    summary:
      "Talent, storytelling, and creative strategy supporting American Public Media's programming and audience-facing work.",
    size: "medium",
    image: "/images/clients/american-public-media.webp",
    imageWidth: 845,
    imageHeight: 159,
    slug: "american-public-media",
    body: [
      "American Public Media is a public media organization producing and distributing radio programming, podcasts, and other storytelling across a wide range of subjects, from news and business to culture, entertainment, and investigative journalism. Its portfolio includes nationally distributed programs and APM Studios podcasts reaching audiences across the country.",
      "Pilot Collective works with American Public Media on campaigns and content initiatives, bringing together talent, storytelling, and creative strategy to support the organization's programming and audience-facing work.",
    ],
    imageFit: "contain",
    scale: 0.85,
    imageBg: "#ffffff",
    client: "American Public Media",
  },
  {
    title: "Keep The Meter Running",
    category: "Media · Talent · Production",
    role: "Talent · Production Support",
    summary:
      "Production support and on-camera talent for the “Irish John” episode of Keep The Meter Running.",
    size: "medium",
    image: "/images/clients/keep-the-meter-running.png",
    imageWidth: 1646,
    imageHeight: 926,
    slug: "keep-the-meter-running",
    client: "Keep The Meter Running",
    body: [
      "Pilot Collective provided production support and on-camera talent for the “Irish John” episode of Keep The Meter Running, featuring John McDonagh, a New York City cabbie and playwright. The viral episode captured millions of views across social feeds.",
    ],
    website: "https://www.instagram.com/ktmr/",
  },
  {
    title: "National Comedy Center x CNN",
    category: "Culture · Comedy · Media",
    role: "Content Curation · Licensing · Rights Clearance",
    summary:
      "Sourcing, curating, and securing comedy media and archival content for permanent museum exhibits.",
    size: "medium",
    image: "/images/clients/national-comedy-center.webp",
    imageWidth: 1920,
    imageHeight: 1080,
    slug: "national-comedy-center-cnn",
    imageFit: "contain",
    scale: 1.1,
    imageBg: "#ffffff",
    client: "CNN + National Comedy Center",
    body: [
      "The National Comedy Center in Jamestown, NY, is the United States' official cultural institution dedicated to the art of comedy, featuring interactive exhibits, archival artifacts, and historical retrospectives. In partnership with CNN, the Center developed permanent installations showcasing comedy's impact on American culture, journalism, news satire, and free speech.",
      "Pilot worked directly alongside CNN and National Comedy Center leadership to source, curate, and secure iconic comedy media and archival content. The team managed content licensing, asset acquisition, and rights clearance to help build permanent, interactive digital exhibits for the museum's core collection.",
    ],
    website: "https://comedycenter.org/",
  },
  {
    title: "Bachelors Abroad",
    category: "Television · Unscripted · Travel",
    role: "Creator · Format Development",
    summary:
      "An original unscripted television concept created by Jessica Pilot for National Geographic.",
    size: "medium",
    image: "/images/clients/bachelors-abroad1.png",
    imageWidth: 3420,
    imageHeight: 1760,
    slug: "bachelors-abroad",
    client: "National Geographic",
    body: [
      "Bachelors Abroad was an original unscripted television concept created by Jessica Pilot for National Geographic, combining adventure, international travel, romance, and character-driven storytelling.",
      "The series followed a group of eligible bachelors as they traveled abroad in search of love, immersing themselves in new cultures and unfamiliar environments while navigating the highs, lows, and unexpected twists of dating on the road.",
      "Jessica created the concept around the idea of using travel as a catalyst for romance and personal discovery. Rather than placing participants in a traditional dating environment, Bachelors Abroad brought them into the world, allowing destinations, cultural experiences, and the unpredictability of international travel to become part of the story.",
      "As creator, Jessica developed the show's core premise and format for National Geographic, drawing on her background in entertainment, talent, casting, and unscripted storytelling to create a format that combined the emotional appeal of dating television with the sense of adventure and discovery associated with National Geographic.",
    ],
  },
  {
    title: "REFLECTIONS: Processing the Pandemic",
    category: "Public Art · Storytelling · Culture",
    role: "Co-Creator · Creative Direction",
    summary:
      "A public art and storytelling installation inviting New Yorkers to reflect on the lasting impact of the pandemic.",
    size: "medium",
    image: "/images/clients/reflections.png",
    imageWidth: 1566,
    imageHeight: 882,
    slug: "reflections-processing-the-pandemic",
    client: "Single Palm Tree Productions",
    body: [
      "REFLECTIONS: Processing the Pandemic is a public art and storytelling installation created by Pilot and Single Palm Tree Productions to mark the fifth anniversary of COVID-19.",
      "The project invited New Yorkers to speak to a two-way mirror, sharing their pandemic experiences while in conversation with their own reflection. The installation created space for people to process, reflect, and heal from a life-altering period.",
      "The resulting stories were presented at City Lore Gallery in New York City, bringing together personal experiences and reflections on how the pandemic changed our lives, relationships, creativity, and sense of community.",
    ],
    website: "https://www.instagram.com/reflections_2020/",
  },
  {
    title: "Hi Anxiety",
    category: "Social Impact · Media · Mental Health",
    role: "Co-Creator · Talent Booking",
    summary:
      "A social impact media initiative pairing candid celebrity conversations with practical mental health resources for young people.",
    size: "medium",
    image: "/images/clients/hi-anxiety.jpg",
    imageFit: "cover",
    imageWidth: 1005,
    imageHeight: 827,
    slug: "hi-anxiety",
    objectPositionY: "12%",
    client: "Pivotal Ventures + Teen Vogue",
    body: [
      "Hi Anxiety is a social impact media initiative co-created by producer Jessica Pilot and campaign strategist Trina DasGupta, with support from Melinda French Gates' investment company, Pivotal Ventures, and Teen Vogue.",
      "The digital series features candid interviews with prominent actors, comedians, and public figures including Awkwafina and Lana Condor, discussing their personal struggles with anxiety, panic, and mental health.",
      "By pairing relatable celebrity stories with practical coping strategies, the project aims to destigmatize mental illness and empower young people with actionable mental health resources.",
      "Jessica co-created the series and led talent booking, bringing prominent voices to the project and helping create a more open, relatable conversation around mental health.",
    ],
    website: "https://www.hianxiety.org/",
    media: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/O2FE_htVAL4",
        title: "Hi Anxiety · Awkwafina",
      },
    ],
  },
  {
    title: "CBS",
    category: "Media · Broadcast · Comedy",
    role: "Talent Production · Campaigns",
    summary:
      "Talent production and campaign work across CBS programming, including The Late Show with Stephen Colbert.",
    size: "medium",
    image: "/images/clients/cbs.webp",
    imageWidth: 2400,
    imageHeight: 870,
    slug: "cbs",
    body: [
      "CBS is one of America's major television and entertainment networks, spanning scripted and unscripted programming, comedy, late night, news, sports, and other original content.",
      "Jessica Pilot's work with CBS has included campaigns and content initiatives across the network. From 2015–2021, she served as the Lead Talent Comedy Producer for The Late Show with Stephen Colbert, helping shape the show's comedy and cultural voice while championing emerging talent.",
    ],
    imageFit: "contain",
    scale: 0.8,
    imageBg: "#ffffff",
    client: "CBS",
  },
  {
    title: "Dangerous World of Comedy",
    category: "Television · Comedy · Documentary",
    role: "Consulting Producer",
    summary:
      "Talent, research, and strategy supporting Larry Charles' Netflix docuseries exploring comedy in high-stakes environments around the world.",
    size: "medium",
    image: "/images/clients/dangerous-world-of-comedy.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    slug: "dangerous-world-of-comedy",
    imageFit: "contain",
    scale: 1.1,
    imageBg: "#ffffff",
    client: "Netflix",
    body: [
      "Directed by comedy auteur Larry Charles (Seinfeld, Borat) and executive produced by Joe and Anthony Russo through AGBO, Dangerous World of Comedy is a Netflix docuseries exploring the power of humor in some of the world's most unexpected and high-stakes environments, from war zones and conflict areas to oppressive regimes.",
      "Pilot delivered high-level talent, research, and strategy to support the docuseries, helping distill complex global field footage into a polished, high-impact narrative for a global streaming audience.",
    ],
    website: "https://www.netflix.com/title/80188051",
  },
  {
    title: "What a Mother!",
    category: "Film · Documentary · Comedy",
    role: "Talent Booking",
    summary:
      "Talent booking for Loki Films' feature documentary exploring the realities of modern motherhood through comedy and candid storytelling.",
    size: "medium",
    image: "/images/clients/loki-films.png",
    imageWidth: 548,
    imageHeight: 171,
    slug: "what-a-mother",
    imageFit: "contain",
    scale: 0.9,
    imageBg: "#000000",
    client: "Loki Films",
    body: [
      "Produced by acclaimed documentary outfit Loki Films (Jesus Camp, The Square, Enron: The Smartest Guys in the Room), What a Mother! is a feature documentary that blends sharp comedy, candid commentary, and real-life stories to explore the messy realities of modern motherhood.",
      "The film brings together stand-up comedians, writers, and cultural commentators to share unvarnished, hilarious perspectives on parenting and societal expectations.",
      "Pilot worked with Loki Films on talent booking for the documentary, helping bring together voices that shaped its candid and comedic exploration of modern motherhood.",
    ],
    website: "https://lokifilms.com/",
  },
];
