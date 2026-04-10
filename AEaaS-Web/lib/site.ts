import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Contact2,
  DatabaseZap,
  FolderKanban,
  MessagesSquare,
  Rocket,
  Sparkles,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "AI workflows designed", value: 18, suffix: "+" },
  { label: "Business roles targeted", value: 9, suffix: "" },
  { label: "Avg. workflow compression", value: 72, suffix: "%" },
  { label: "Founder-led execution", value: 100, suffix: "%" },
];

export const featureCards = [
  {
    title: "AI Interview Employee",
    description:
      "Autonomous candidate screening with role-aware questions, signal extraction, and decision-ready summaries.",
    icon: MessagesSquare,
  },
  {
    title: "AI Marketing Employee",
    description:
      "Researches competitors, generates positioning, and turns market noise into structured growth intelligence.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Multi-Agent Control Layer",
    description:
      "Routes tasks between specialized agents, memory systems, and evaluation loops for dependable execution.",
    icon: BrainCircuit,
  },
  {
    title: "Ops-Ready Integrations",
    description:
      "Designed to plug into CRMs, interview stacks, and internal tools so AI employees can act, not just chat.",
    icon: DatabaseZap,
  },
];

export const workflowSteps = [
  {
    title: "Map the role",
    description:
      "Translate a business function into repeatable decisions, inputs, and measurable outputs.",
    icon: FolderKanban,
  },
  {
    title: "Train the agent system",
    description:
      "Compose prompts, tools, memory, and evaluation logic into a role-specific AI employee.",
    icon: Bot,
  },
  {
    title: "Deploy autonomous execution",
    description:
      "Launch workflows that interview, analyze, report, and improve with every operating cycle.",
    icon: Rocket,
  },
];

export const testimonials = [
  {
    quote:
      "AEaaS feels less like software and more like hiring a digital operations layer for the company.",
    author: "Aarav Mehta",
    role: "Founder, Fintech Studio",
  },
  {
    quote:
      "The product direction is sharp: clear business roles, strong AI orchestration, and founder-grade speed.",
    author: "Nisha Kapoor",
    role: "Operator, Growth Consultancy",
  },
  {
    quote:
      "Hari is building around outcomes, not hype. That is what makes the system architecture compelling.",
    author: "Ritika Sharma",
    role: "Product Advisor, B2B SaaS",
  },
];

export const projects = [
  {
    title: "AI Interview Employee",
    description:
      "Automates first-round screening with adaptive questioning, candidate evaluation, and structured hiring summaries.",
    status: "Active Development",
    tech: ["Next.js", "LLM orchestration", "Evaluation loops"],
    demoHref: "/demo",
    githubHref: "https://github.com/harimilanarora",
  },
  {
    title: "AI Marketing Employee",
    description:
      "Monitors category signals, generates campaign insights, and keeps brand strategy continuously up to date.",
    status: "Active Development",
    tech: ["Agent pipelines", "Prompt systems", "Analytics"],
    demoHref: "/product",
    githubHref: "https://github.com/harimilanarora",
  },
  {
    title: "AI e-Consultation Analyzer",
    description:
      "Transforms expert consultation transcripts into structured findings, recommendations, and next-step actions.",
    status: "Prototype",
    tech: ["NLP", "Summarization", "Workflow automation"],
    demoHref: "/projects",
    githubHref: "https://github.com/harimilanarora",
  },
  {
    title: "AI Loan Navigator",
    description:
      "Guides users through complex loan pathways with explainable decision support and process automation.",
    status: "Concept Validation",
    tech: ["Decision systems", "Conversational UI", "Fintech flows"],
    demoHref: "/projects",
    githubHref: "https://github.com/harimilanarora",
  },
];

export const architectureLayers = [
  {
    title: "Input Layer",
    description: "Role briefs, user context, workflow triggers, and structured business objectives.",
  },
  {
    title: "Orchestration Layer",
    description: "Agent routing, prompt chains, evaluation loops, memory, and tool execution.",
  },
  {
    title: "Decision Layer",
    description: "Scoring models, confidence checks, risk flags, and outcome recommendations.",
  },
  {
    title: "Action Layer",
    description: "Reports, alerts, CRM updates, interview summaries, and operational next steps.",
  },
];

export const socialLinks = [
  {
    label: "Email",
    href: "mailto:aeaas.ailabs@gmail.com",
    icon: Contact2,
  },
  {
    label: "GitHub",
    href: "https://github.com/hari-milan-arora",
    icon: Sparkles,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aeaaslabs-ai/",
    icon: Contact2,
  },
];
