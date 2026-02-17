import type { Project } from "./types";

export interface DeveloperMeta {
  role: string;
  stack: string;
  timeline: string;
  liveUrl?: string;
  liveLabel?: string;
}

export interface DeveloperArchitectureCard {
  title: string;
  items: string[];
}

export interface DeveloperArchitectureSection {
  title: string;
  subtitle: string;
  tabs: { icon: string; label: string }[];
  cards: DeveloperArchitectureCard[];
}

export interface DeveloperFeature {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  /** If true, image is on the right (default: left) */
  imageRight?: boolean;
  /** If true, show image inside a white thin phone frame */
  usePhoneFrame?: boolean;
  /** Optional: multiple images (e.g. 3 modals); when set, shown as a row with click-to-enlarge */
  images?: string[];
  imageAlts?: string[];
}

export interface DeveloperImpactStat {
  value: string;
  label: string;
}

export interface DeveloperCaseStudyContent {
  /** e.g. "Full Stack & Product Management" */
  tag?: string;
  subtitle?: string;
  coverImage?: string;
  coverImageAlt?: string;
  meta?: DeveloperMeta;
  /** Who it's for (Overview) */
  audience?: string;
  challengeParagraph?: string;
  /** Optional 4-part challenge (problem, vision, ownership, results). When set, overrides challengeParagraph. */
  challengeSections?: { heading: string; body: string }[];
  /** Research & insights (key insights, constraints, success criteria) — optional; distinct from Challenge narrative */
  researchInsights?: { heading: string; body: string }[];
  architecture?: DeveloperArchitectureSection;
  features?: DeveloperFeature[];
  impactTitle?: string;
  impactSubtitle?: string;
  impactStats?: DeveloperImpactStat[];
  /** Reflection (what you'd improve, what you learned) */
  reflection?: string;
  nextProjectTitle?: string;
  nextProjectSlug?: string;
}

const DEVELOPER_CONTENT: Record<string, DeveloperCaseStudyContent> = {
  coco: {
    tag: "Hardware & IoT",
    subtitle:
      "A cute, interactive AI companion robot in Phase 3 development — embedded systems (ESP32), voice interaction, and cloud AI (OpenAI + Next.js) for learning, emotional regulation, and stress relief.",
    coverImage: "https://placehold.co/1200x800/6366f1/faf5ff?text=COCO",
    coverImageAlt:
      "COCO — interactive AI companion robot with ESP32, OLED expressions, and cloud AI",
    meta: {
      role: "Embedded Systems, Backend & Frontend",
      stack: "ESP32, Arduino, Next.js, TypeScript, OpenAI",
      timeline: "2024 — Present",
    },
    audience: "Students and young users who want a warm, physical AI companion for learning, emotional regulation, and stress relief—not just a screen-based chatbot.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Students and young users need emotional support and learning help, but existing AI interfaces feel cold and screen-only. There was no single system that combined physical presence, voice, and cloud AI in one companion.",
      },
      {
        heading: "Product vision",
        body: "A warm, interactive AI companion: physical robot (ESP32, sensors, servos, OLED expressions), voice-based interaction, and cloud AI for learning, emotional regulation, and stress relief.",
      },
      {
        heading: "What I owned",
        body: "Embedded systems, backend, and frontend: ESP32 firmware (I2S, Wi‑Fi, HTTP, OLED, camera), 9+ hardware components (mic, speaker, ultrasonic, servos, 4WD, power). Next.js backend with OpenAI (GPT + Whisper) for voice and responses; REST API for device ↔ cloud; real-time audio pipelines. Protocol design, power management, and under-2s response latency.",
      },
      {
        heading: "Results",
        body: "Phase 3 prototype: physical presence, voice interaction, and cloud AI in one device. Sub-2s voice response; coordinated hardware and software stack.",
      },
    ],
    challengeParagraph:
      "Students and young users need emotional support and educational assistance, but existing AI interfaces feel cold and impersonal. COCO combines physical presence (ESP32, sensors, servos, OLED), voice-based interaction, and cloud AI to create a warm, responsive companion.",
    architecture: {
      title: "System Architecture",
      subtitle:
        "ESP32 coordinates sensors, actuators, and display; Next.js cloud handles AI and conversation. Client–server with Wi‑Fi, REST, and real-time audio.",
      tabs: [
        { icon: "fa-solid fa-microchip", label: "Hardware" },
        { icon: "fa-solid fa-server", label: "Software" },
        { icon: "fa-solid fa-wifi", label: "Communication" },
      ],
      cards: [
        {
          title: "Hardware Components",
          items: [
            "ESP32 USB-C dev board as central MCU; ESP32-CAM (OV2640) for facial expression recognition.",
            "INMP441 I2S mic, PAM8403 amp + speaker; 0.96\" OLED (I2C) for expressions and status.",
            "HC-SR04P ultrasonic proximity; SG-90 servos ×2; 4WD chassis + L298N driver; power management.",
          ],
        },
        {
          title: "Software Stack",
          items: [
            "ESP32 firmware (Arduino): I2S, Wi-Fi, HTTP, OLED driver, camera libs.",
            "Next.js 15+ with TypeScript; OpenAI GPT + Whisper for voice and responses.",
            "RESTful API for ESP32 ↔ backend; audio streaming and conversation history.",
          ],
        },
        {
          title: "Communication & Flows",
          items: [
            "I2S (audio), I2C (display), Wi-Fi 802.11; HTTP/REST, PWM (servos), GPIO.",
            "Voice flow: mic → ESP32 → Next.js → OpenAI → ESP32 → audio + OLED + servo.",
            "Proximity flow: HC-SR04P detect → wake-up expression → listening mode.",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Voice interaction & cloud intelligence",
        description:
          "Real-time voice I/O via I2S mic and amplifier; OpenAI GPT for natural language and supportive, educational responses. Achieved under-2s latency from speech to AI output with conversation history and scalable multi-device support.",
        tags: ["OpenAI", "Whisper", "Next.js", "I2S"],
        image: "https://placehold.co/800x600/6366f1/faf5ff?text=Voice+%26+AI",
        imageAlt: "Voice interaction and cloud AI pipeline",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Emotional display & physical interaction",
        description:
          "OLED facial expressions (10+ patterns) with status indicators (listening, thinking, speaking). Ultrasonic proximity detection triggers wake-up and engagement; servo animations and 4WD movement for expressive, companion-focused interaction.",
        tags: ["OLED", "ESP32-CAM", "Servos", "HC-SR04P"],
        image: "https://placehold.co/800x600/8b5cf6/faf5ff?text=Expressions+%26+Movement",
        imageAlt: "Emotional display and physical interaction",
        imageRight: true,
      },
    ],
    impactTitle: "Project impact",
    impactSubtitle:
      "Phase 3 full-stack integration: hardware, firmware, backend, frontend, and UI/UX. Companion-focused design with reliable Wi-Fi and automatic reconnection.",
    impactStats: [
      { value: "<2s", label: "Voice-to-AI latency" },
      { value: "9+", label: "Hardware components" },
      { value: "99%+", label: "Wi-Fi reliability" },
      { value: "10+", label: "OLED expression patterns" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Screen-only AI feels impersonal; young users need both emotional presence and learning support; no single product combined physical robot, voice, and cloud AI." },
      { heading: "Constraints", body: "ESP32 compute and power limits; sub-2s voice latency; Wi-Fi reliability; coordinating mic, speaker, OLED, servos, and 4WD in one firmware stack." },
      { heading: "Success criteria", body: "Deliver a warm, companion-style AI robot; differentiate with physical presence and voice; achieve reliable cloud connectivity and expression feedback." },
    ],
    reflection: "I’d add offline fallbacks for when Wi-Fi drops and more robust power profiling for battery use. Bridging embedded (I2S, I2C, PWM) with cloud AI and keeping latency under 2s was a great learning experience.",
    nextProjectTitle: "AWS Content Moderation System",
    nextProjectSlug: "aws-content-moderation",
  },

  "aws-content-moderation": {
    tag: "Backend & Infrastructure",
    subtitle:
      "Real-time video content moderation platform powered by AWS Rekognition, with serverless architecture (CDK, Lambda, Kinesis, DynamoDB, CloudWatch). Processes video at 30 FPS with under 200ms latency and 50+ content categories.",
    coverImage:
      "https://placehold.co/1200x800/232f3e/fff?text=AWS+Content+Moderation",
    coverImageAlt:
      "AWS Content Moderation System — real-time video moderation dashboard and serverless architecture",
    meta: {
      role: "Backend & Infrastructure Engineer",
      stack: "AWS CDK, Lambda, Rekognition, Flask, Python, Node.js",
      timeline: "2024.08 — 2024.11",
      liveUrl: "https://github.com/2024PBL-AWS-project/ContentModeration",
      liveLabel: "GitHub",
    },
    audience: "Platforms and organizations that need real-time video content moderation at scale—catching inappropriate content before it reaches users, without relying on human reviewers alone.",
    challengeSections: [
      {
        heading: "The core problem",
        body: "Organizations need to moderate video content in real time—catching inappropriate material before it reaches users. Human review is slow, expensive, and doesn’t scale for live streams.",
      },
      {
        heading: "Product vision",
        body: "A serverless, automated system that processes video frames at scale with low latency and manageable cost—so moderation happens in real time without a human in the loop.",
      },
      {
        heading: "What I owned",
        body: "Architecture and implementation: AWS Rekognition for frame analysis, serverless pipeline (Lambda, step functions or similar), frame-sampling strategy to hit 30 FPS and sub-200ms latency while controlling cost. Designed for scale and reliability.",
      },
      {
        heading: "Results",
        body: "Real-time video moderation without human reviewers. Sub-200ms latency; scalable serverless design; lower cost than manual review.",
      },
    ],
    challengeParagraph:
      "Organizations need automated, scalable solutions to moderate video content in real-time. Traditional moderation relies on human reviewers, which is slow, expensive, and doesn't scale for live streams.",
    architecture: {
      title: "System Architecture",
      subtitle:
        "Serverless, event-driven pipeline: video ingestion (Kinesis), ML moderation (Rekognition), storage (DynamoDB), and monitoring (CloudWatch).",
      tabs: [
        { icon: "fa-solid fa-code", label: "Frontend" },
        { icon: "fa-solid fa-server", label: "Backend & API" },
        { icon: "fa-brands fa-aws", label: "AWS" },
      ],
      cards: [
        {
          title: "Frontend",
          items: [
            "ES6+ JavaScript with event-driven updates (CustomEvent API).",
            "Chart.js for confidence metrics and moderation trends.",
            "Responsive dashboard with live video feed and results panel.",
            "REST integration with Flask backend; 1s refresh for real-time metrics.",
          ],
        },
        {
          title: "Backend & API",
          items: [
            "Flask app for video capture (OpenCV) and API endpoints.",
            "AWS SDK (boto3): Rekognition, DynamoDB, CloudWatch, SNS.",
            "Lambda (Node.js/TypeScript) for Rekognition and stream management.",
            "API Gateway for stream create/delete; EventBridge for scheduled processing.",
          ],
        },
        {
          title: "AWS Services",
          items: [
            "Amazon Rekognition: 50+ moderation labels, confidence scores.",
            "Kinesis Video Streams, DynamoDB (GSI on timestamp), CloudWatch, SNS.",
            "AWS CDK (TypeScript) for IaC; multi-stack (KVS/Rekognition + API/Lambda).",
          ],
        },
      ],
    },
    features: [
      {
        id: "1",
        label: "Feature 01",
        title: "Real-Time Moderation Dashboard",
        description:
          "Live video feed with frame-by-frame processing display, real-time moderation results with color-coded confidence levels, and Chart.js visualizations for confidence trends. Alert notifications for flagged content with detailed labels.",
        tags: ["Chart.js", "CustomEvent API", "Flask", "Rekognition"],
        image: "/assets/images/projects/aws/awsmod.png",
        imageAlt: "Real-time moderation dashboard with video feed and charts",
        imageRight: false,
      },
      {
        id: "2",
        label: "Feature 02",
        title: "Serverless Pipeline & Stream Management",
        description:
          "AWS CDK Infrastructure as Code with multi-stack architecture. EventBridge-triggered Lambda for stream processing; Kinesis Video Streams for ingestion. Create/delete streams via API Gateway with automatic cleanup of EventBridge rules.",
        tags: ["AWS CDK", "Lambda", "EventBridge", "Kinesis"],
        image: "/assets/images/projects/aws/aws-architecture.png",
        imageAlt: "Serverless architecture and stream management",
        imageRight: true,
      },
    ],
    impactTitle: "Project Impact",
    impactSubtitle:
      "Real-time content analysis with high accuracy and low latency; serverless design for scale and cost efficiency.",
    impactStats: [
      { value: "<200ms", label: "Latency per frame" },
      { value: "99.9%", label: "Uptime (serverless)" },
      { value: "80%", label: "Infra setup time reduced (CDK)" },
      { value: "50+", label: "Content categories detected" },
    ],
    researchInsights: [
      { heading: "Key insights", body: "Human review is slow and doesn’t scale for live video; manual moderation is expensive and inconsistent; teams need real-time alerts and confidence metrics." },
      { heading: "Constraints", body: "Target 30 FPS and sub-200ms latency; control Rekognition cost via frame sampling; serverless for scale and reliability; CDK for reproducible infra." },
      { heading: "Success criteria", body: "Automate video moderation; reduce cost vs human review; provide real-time dashboard and alerts; demonstrate serverless + ML pipeline design." },
    ],
    reflection: "I’d add configurable sensitivity thresholds and retention policies for flagged content, plus more granular cost dashboards per stream. Designing the Kinesis–Lambda–Rekognition pipeline with CDK was very instructive for serverless ML systems.",
    nextProjectTitle: "COCO",
    nextProjectSlug: "coco",
  },
};

function defaultMeta(project: Project): DeveloperMeta {
  return {
    role: "Lead Engineer",
    stack: "Next.js, Node.js, PostgreSQL",
    timeline: project.date,
  };
}

export function getDeveloperContent(
  slug: string,
  project: Project
): DeveloperCaseStudyContent {
  const custom = DEVELOPER_CONTENT[slug];
  return {
    tag: custom?.tag ?? project.category,
    subtitle:
      custom?.subtitle ??
      "An enterprise-grade system built for scale, reliability, and maintainability.",
    coverImage: custom?.coverImage ?? project.image,
    coverImageAlt: custom?.coverImageAlt ?? project.imageAlt,
    meta: custom?.meta ?? defaultMeta(project),
    challengeParagraph:
      custom?.challengeParagraph ??
      "Delivering a robust, scalable solution that meets both technical and product goals.",
    challengeSections: custom?.challengeSections,
    audience: custom?.audience,
    researchInsights: custom?.researchInsights,
    architecture: custom?.architecture,
    features: custom?.features,
    impactTitle: custom?.impactTitle ?? "Project Impact",
    impactSubtitle:
      custom?.impactSubtitle ??
      "Measurable results delivered through engineering excellence.",
    impactStats: custom?.impactStats ?? [
      { value: "—", label: "Results" },
    ],
    reflection: custom?.reflection,
    nextProjectTitle: custom?.nextProjectTitle,
    nextProjectSlug: custom?.nextProjectSlug,
  };
}
