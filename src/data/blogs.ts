export type BlogEntry = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  accent: string;
  glow: string;
  tags: string[];
  content?: string[];
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
};

export const blogEntries: BlogEntry[] = [
  {
    id: "aurora-canvas",
    title: "Designing volumetric product canvases that adapt in realtime",
    excerpt:
      "How we prototyped a spatial interface for financial data that adapts to user intent, mixing 3D storytelling with hard analytics.",
    category: "Design Systems",
    publishedAt: "Oct 12, 2025",
    readTime: "7 min",
    image: "/blog/aurora-canvas.svg",
    accent: "from-sky-400/80 via-violet-500/60 to-indigo-500/70",
    glow: "bg-sky-500/20",
    tags: ["Spatial UX", "Figma tokens", "Data viz"],
    author: {
      name: "Alex Chen",
      role: "Lead Product Designer",
    },
    content: [
      "When we set out to build a financial dashboard for a Series B fintech client, we knew traditional 2D charts wouldn't cut it. The data was complex, multi-dimensional, and needed to tell a story that users could explore intuitively.",
      "We started with a simple hypothesis: what if financial data could live in a spatial canvas that responds to user intent? Instead of static bar charts, we prototyped volumetric visualizations that expand, contract, and reorient based on what the user is exploring.",
      "The breakthrough came when we combined three-dimensional data representation with real-time adaptation. As users drill into specific metrics, the canvas morphs—pulling relevant context forward while maintaining spatial relationships between data points.",
      "We built this using WebGL and React Three Fiber, creating a component library that could handle both traditional analytics and immersive exploration. The result? A 40% increase in user engagement and a 60% reduction in time-to-insight for complex queries.",
      "The key was balancing information density with visual clarity. We used depth cues, color gradients, and subtle animations to guide attention without overwhelming users. Every interaction feels intentional, every transition smooth.",
    ],
  },
  {
    id: "copilot-legibility",
    title: "Legibility patterns for copilots inside operational workflows",
    excerpt:
      "We break down interface heuristics that keep AI assistants trustworthy when decisions impact fraud, lending, and customer support.",
    category: "AI Ops",
    publishedAt: "Sep 28, 2025",
    readTime: "6 min",
    image: "/blog/copilot-legibility.svg",
    accent: "from-cyan-400/70 via-emerald-400/60 to-slate-900/60",
    glow: "bg-cyan-500/15",
    tags: ["Applied AI", "LLM", "Product strategy"],
    author: {
      name: "Samira Patel",
      role: "AI Product Lead",
    },
    content: [
      "Trust is the currency of AI copilots in high-stakes environments. When a lending desk uses an AI assistant to evaluate credit risk, or a fraud team relies on automated flagging, the interface must communicate confidence, reasoning, and limitations transparently.",
      "We've identified five core legibility patterns that make AI decisions understandable without overwhelming operators:",
      "First, confidence visualization. Every AI recommendation includes a confidence score, but we display it contextually—high confidence gets subtle indicators, while uncertain decisions get prominent attention and require human review.",
      "Second, reasoning traces. Instead of black-box outputs, we show the key factors that influenced the decision. For a loan application, operators see: 'Approved based on strong credit history (850), stable employment (3+ years), and low debt-to-income ratio (18%).'",
      "Third, uncertainty handling. When the AI isn't confident, the interface shifts to a collaborative mode—highlighting what it knows, what it's uncertain about, and what additional information would help.",
      "Fourth, audit trails. Every decision is logged with full context, making it easy to review, understand, and improve the system over time.",
      "Fifth, graceful degradation. When the AI can't make a decision, the interface smoothly transitions to a human workflow without breaking the operator's flow.",
      "These patterns aren't just about transparency—they're about building systems that operators actually trust and use. In our deployments, we've seen 85% operator adoption rates and 30% faster decision-making when AI and humans work together.",
    ],
  },
  {
    id: "streaming-intents",
    title: "Orchestrating streaming intents across product and growth surfaces",
    excerpt:
      "A peek into our orchestration layer that syncs marketing, product, and service signals to keep multi-surface experiences coherent.",
    category: "Platform Engineering",
    publishedAt: "Sep 10, 2025",
    readTime: "9 min",
    image: "/blog/streaming-intents.svg",
    accent: "from-fuchsia-400/70 via-purple-500/60 to-blue-500/60",
    glow: "bg-fuchsia-500/15",
    tags: ["Integration", "Automation", "Analytics"],
    author: {
      name: "Jordan Kim",
      role: "Platform Architect",
    },
    content: [
      "Modern products live across multiple surfaces—web, mobile, email, push notifications, in-app messages. Each surface has its own context, constraints, and user expectations. The challenge? Keeping experiences coherent as users move between them.",
      "We built an intent orchestration layer that streams user signals across all surfaces in real-time. When a user abandons a cart on mobile, the web experience knows. When they engage with a feature on desktop, their mobile app reflects that context.",
      "The architecture is event-driven. Every user action generates an intent signal—not just what they did, but what they're trying to accomplish. These signals flow through a central orchestrator that routes them to the right surfaces at the right times.",
      "For example, when a user starts a checkout flow on mobile but doesn't complete it, we don't just send a generic 'complete your purchase' email. Instead, the orchestrator analyzes their intent, checks their behavior patterns, and routes a personalized message that acknowledges where they left off and offers relevant incentives.",
      "The key insight: intents are more valuable than actions. A click is just a click, but understanding that a user is 'exploring pricing options' or 'comparing features' enables much smarter orchestration.",
      "We use a combination of real-time event streaming (Kafka), intent classification (ML models), and routing logic (custom orchestration engine) to make this work at scale. The system processes millions of intent signals per day with sub-100ms latency.",
      "The result? A 25% increase in cross-surface engagement and a 40% improvement in conversion rates for multi-step flows. Users feel like the product understands them, regardless of which surface they're using.",
    ],
  },
  {
    id: "ai-brand-sprints",
    title: "Running brand identity sprints with generative moodboards",
    excerpt:
      "A sprint structure for leveraging AI moodboards and narrative frameworks to ship brand systems in days, not quarters.",
    category: "Brand Lab",
    publishedAt: "Aug 24, 2025",
    readTime: "5 min",
    image: "/blog/ai-brand-sprints.svg",
    accent: "from-amber-300/70 via-rose-400/60 to-slate-900/60",
    glow: "bg-amber-400/15",
    tags: ["Branding", "Generative AI", "Storytelling"],
    author: {
      name: "Maya Rodriguez",
      role: "Creative Director",
    },
    content: [
      "Traditional brand identity projects take months. We've compressed that to days using AI-assisted moodboards and structured narrative frameworks.",
      "Here's how our 5-day brand sprint works:",
      "Day 1: Discovery and narrative mapping. We interview stakeholders, map brand values, and define the emotional territory the brand should occupy. Instead of starting with visuals, we start with story.",
      "Day 2: AI moodboard generation. Using Midjourney and custom prompts, we generate hundreds of visual directions in hours. The AI doesn't replace creative judgment—it amplifies exploration, letting us test more directions faster.",
      "Day 3: Curation and synthesis. We narrow from hundreds to 3-5 directions, then use AI to generate variations, color palettes, and typography explorations. The human creative team focuses on strategic choices, not manual execution.",
      "Day 4: System design. We build out the chosen direction—logo variations, color systems, typography scales, component libraries. AI helps with consistency and generates variations for edge cases.",
      "Day 5: Documentation and handoff. We create brand guidelines, asset libraries, and implementation specs. Everything is ready for the product team to use immediately.",
      "The key is treating AI as a creative amplifier, not a replacement. It handles the tedious exploration and generation, freeing humans to focus on strategy, curation, and craft. We've run this sprint for 12 brands, and every one shipped on time with higher quality than traditional processes.",
    ],
  },
  {
    id: "playbook-lens",
    title: "Building a shared knowledge lens for distributed product squads",
    excerpt:
      "Why we built a structured knowledge graph powering every squad's discovery, synthesis, and week-to-week decision-making.",
    category: "Org Design",
    publishedAt: "Aug 02, 2025",
    readTime: "8 min",
    image: "/blog/playbook-lens.svg",
    accent: "from-indigo-400/70 via-slate-500/50 to-slate-900/60",
    glow: "bg-indigo-400/15",
    tags: ["Knowledge management", "No-code", "Playbooks"],
    author: {
      name: "David Park",
      role: "Head of Product Ops",
    },
    content: [
      "As we scaled from 3 to 30 product squads, knowledge became fragmented. Decisions made in one squad weren't visible to others. Patterns that worked weren't captured. Lessons learned were lost.",
      "We built a knowledge graph—not a wiki, not a document store, but a structured system that connects insights, decisions, patterns, and outcomes across all squads.",
      "Every playbook, decision, experiment, and outcome gets tagged with structured metadata: problem space, solution approach, outcome metrics, related work. The graph automatically surfaces connections.",
      "When a squad starts a new project, they query the graph: 'What have we learned about onboarding flows?' The system surfaces relevant playbooks, past experiments, and related decisions from across the org.",
      "The magic is in the connections. A playbook about 'reducing signup friction' connects to experiments about 'email verification flows' and decisions about 'password requirements.' Squads see the full context, not just isolated documents.",
      "We built this on top of Notion's API, using custom schemas and automated tagging. Every week, squads update their playbooks with new learnings. The graph grows smarter over time.",
      "The impact? 60% reduction in duplicate work, 40% faster onboarding for new squads, and a 3x increase in cross-squad knowledge sharing. Knowledge isn't just stored—it's actively used to make better decisions.",
    ],
  },
  {
    id: "synthetic-users",
    title: "Testing with synthetic user clouds before launch day",
    excerpt:
      "Simulating user cohorts with AI-generated personas to stress-test onboarding, pricing, and retention loops—in a single afternoon.",
    category: "Growth",
    publishedAt: "Jul 18, 2025",
    readTime: "6 min",
    image: "/blog/synthetic-users.svg",
    accent: "from-teal-400/70 via-sky-400/60 to-slate-900/60",
    glow: "bg-teal-400/15",
    tags: ["Experimentation", "Prototyping", "Customer research"],
    author: {
      name: "Taylor Morgan",
      role: "Growth Lead",
    },
    content: [
      "Before launching a new pricing tier, we used to wait weeks for user research, run small beta tests, and hope we got it right. Now we simulate thousands of synthetic users in hours.",
      "Here's how it works: we use GPT-4 to generate diverse user personas based on our actual customer segments. Each persona has demographics, goals, pain points, and behavioral patterns. Then we simulate their journey through our product.",
      "For a pricing test, we generate 500 synthetic users across different segments. We simulate their decision-making process: how they evaluate the pricing, what objections they have, how they compare options. The AI personas behave like real users because they're trained on our actual customer data.",
      "We run these simulations in parallel—testing multiple pricing structures, messaging variations, and feature bundles. In a single afternoon, we can test what would take months with real users.",
      "The key is grounding the personas in reality. We feed the AI our customer interviews, support tickets, and behavioral data. The synthetic users aren't generic—they're specific to our product and customer base.",
      "We've used this for onboarding flows (testing 20 variations in one day), feature prioritization (simulating which features drive retention), and messaging tests (finding the language that resonates with each segment).",
      "The results? We catch 80% of issues before launch, iterate faster, and make data-driven decisions without waiting for real user feedback. Synthetic users don't replace real users—they help us test smarter so real users get better experiences.",
    ],
  },
];

