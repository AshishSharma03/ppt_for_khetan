import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  Maximize,
  Minimize,
  LayoutDashboard,
  Users,
  Mail,
  Globe,
  BarChart3,
  MessageCircle,
  QrCode,
  Check,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Mic,
  Smile,
  Send,
  Search,
  Bell,
  ChevronRight,
  MapPin,
  Image,
  FileText,
  ShieldCheck,
  Cloud,
  Database,
  Linkedin,
  Instagram,
  Facebook,
  MousePointer2,
  Building2,
  Bot,
  RefreshCw,
  X,
  Menu,
  Download,
  Calendar,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import "./style.css";
import {
  ContentWorkspace,
  MediaWorkspace,
  SecurityOverview,
  initialContent,
} from "./WorkspacePanels";
import {
  PublishingJourney,
  WebsiteDemo,
  GuidedAssistant,
} from "./GuidedExperiences";
import {
  PlatformPreview,
  LeadWorkspace,
  EmailExperience,
} from "./ClientPreviews";

const chapters = [
  ["The big picture", "One connected ecosystem"],
  ["Control center", "Your business, at a glance"],
  ["Customer journey", "From scan to sales"],
  ["WhatsApp", "Conversations that convert"],
  ["Content & social", "Create once. Go further."],
  ["Business email", "Make every email count"],
  ["Website ecosystem", "More than a website"],
  ["Analytics", "Clarity in every number"],
  ["Smart assistant", "A helpful first conversation"],
  ["The complete system", "Everything, working together"],
  ["Let’s connect it", "Your next digital chapter"],
];
const icons = [
  Globe,
  LayoutDashboard,
  QrCode,
  MessageCircle,
  FileText,
  Mail,
  Building2,
  BarChart3,
  Bot,
  Database,
  ArrowUpRight,
];
const enter = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.45 },
};
function WA({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-label="WhatsApp"
    >
      <path d="M16 .9A14.8 14.8 0 0 0 3.2 23L1 31l8.2-2.2A14.8 14.8 0 1 0 16 .9Zm0 27a12.2 12.2 0 0 1-6.3-1.7l-.5-.3-4.9 1.3 1.3-4.8-.3-.5A12.3 12.3 0 1 1 16 27.9Zm6.7-9.2c-.4-.2-2.2-1.1-2.6-1.2-.3-.2-.6-.2-.8.2l-1.2 1.4c-.2.2-.4.3-.8.1-1.8-.9-3.3-2.2-4.3-3.9-.3-.4 0-.6.2-.8l.6-.8c.2-.2.2-.4.3-.6.1-.3 0-.5-.1-.7l-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-1 1-1.5 2.4-1.1 3.8.4 2.1 2 4 3.6 5.4 2 1.8 4.4 3.2 7 3.5 1 .1 2.3-.5 2.9-1.3.4-.6.7-1.5.6-1.8-.1-.3-.3-.4-.7-.6Z" />
    </svg>
  );
}
function Brand({ light = false }) {
  return (
    <div className={"brand " + (light ? "light" : "")}>
      <img
        className="brand-logo"
        src="/ajeya-original-logo.png"
        alt="Khetan Ajeya — Redefining System Aluminium"
      />
    </div>
  );
}
function Tag({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
function Head({ tag, title, accent, desc }) {
  return (
    <div className="section-head">
      <Tag>{tag}</Tag>
      <h1>
        {title} <em>{accent}</em>
      </h1>
      <p>{desc}</p>
    </div>
  );
}
function Action({ children, onClick, secondary = false }) {
  return (
    <button
      className={secondary ? "button secondary" : "button"}
      onClick={onClick}
    >
      {children}
      <ArrowUpRight size={17} />
    </button>
  );
}
function Hero({ go }) {
  return (
    <div className="hero">
      <div className="hero-copy">
        <Tag>EFFRED × KHETAN GROUP</Tag>
        <h1>
          One dashboard.
          <br />
          Every connection.
          <br />
          <em>Endless possibility.</em>
        </h1>
        <p>
          Aapka poora digital business, ek jagah.
          <br />
          Website se enquiry tak. Conversation se conversion tak.
        </p>
        <div className="hero-actions">
          <Action onClick={() => go(2)}>Experience the journey</Action>
          <button className="text-button" onClick={() => go(1)}>
            <Play size={15} fill="currentColor" /> Explore dashboard
          </button>
        </div>
        <div className="hero-proof">
          <div className="mini-avatars">
            <span>W</span>
            <span>
              <WA size={15} />
            </span>
            <span>@</span>
            <span>in</span>
          </div>
          <span>Connected. Automated. Measurable.</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="orbital orbit1" />
        <div className="orbital orbit2" />
        <div className="art-label">YOUR DIGITAL ECOSYSTEM</div>
        <motion.div
          className="core"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Brand light />
          <span>One intelligent center</span>
          <div className="core-status">
            <i /> All touchpoints connected
          </div>
        </motion.div>
        {[
          { name: "Website", Icon: Globe, c: "web", text: "Your digital home" },
          { name: "WhatsApp", Icon: WA, c: "wa", text: "Always connected" },
          {
            name: "Analytics",
            Icon: BarChart3,
            c: "analytics",
            text: "Insights that matter",
          },
          {
            name: "Email",
            Icon: Mail,
            c: "email",
            text: "Meaningful outreach",
          },
          {
            name: "Social media",
            Icon: Instagram,
            c: "social",
            text: "One consistent voice",
          },
          {
            name: "QR & leads",
            Icon: QrCode,
            c: "qr",
            text: "Every enquiry captured",
          },
        ].map((a, i) => (
          <motion.button
            key={a.c}
            className={"satellite " + a.c}
            onClick={() => go([6, 3, 7, 5, 4, 2][i])}
            animate={{ y: [0, i % 2 ? 7 : -7, 0] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
          >
            <span className={"sat-icon " + a.c}>
              <a.Icon size={22} />
            </span>
            <div>
              <strong>{a.name}</strong>
              <small>{a.text}</small>
            </div>
            <ArrowUpRight size={13} />
          </motion.button>
        ))}
        <div className="art-caption">
          <span>01</span> A smarter way to stay connected
        </div>
      </div>
      <div className="hero-bottom">
        <span>BUILT AROUND YOUR BUSINESS</span>
        <div>
          <ShieldCheck size={16} /> Secure foundation
        </div>
        <div>
          <RefreshCw size={16} /> Connected workflows
        </div>
        <div>
          <Users size={16} /> Better customer experience
        </div>
      </div>
    </div>
  );
}
function Dashboard({ analytics = false, lead }) {
  const [tab, setTab] = useState(analytics ? "Analytics" : "Dashboard");
  const [contentRecords, setContentRecords] = useState(initialContent);
  const [mediaSettings, setMediaSettings] = useState({});
  return (
    <div className="dashboard mock">
      <div className="window-bar">
        <div className="dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          <ShieldCheck size={11} /> Khetan · Admin workspace
        </span>
        <span className="demo-label">SAMPLE DATA</span>
      </div>
      <div className="dash-layout">
        <aside>
          <Brand />
          <div className="workspace">WORKSPACE</div>
          {[
            "Dashboard",
            "Visitors",
            "Leads",
            "Content",
            "Media",
            "Analytics",
            "Security",
          ].map((t, i) => {
            let I = [
              LayoutDashboard,
              Users,
              Users,
              FileText,
              Image,
              BarChart3,
              ShieldCheck,
            ][i];
            return (
              <button
                key={t}
                className={tab === t ? "selected" : ""}
                onClick={() => setTab(t)}
              >
                <I size={15} />
                {t}
              </button>
            );
          })}
          <div className="sidebar-bottom">
            <span className="avatar">KA</span>
            <span>
              Khetan Admin<small>Business workspace</small>
            </span>
          </div>
        </aside>
        <div className="dash-body">
          <div className="dash-top">
            <span>
              Workspace <ChevronRight size={12} /> {tab}
            </span>
            <Bell size={16} />
          </div>
          <div className="dash-title">
            <div>
              <h3>
                {tab === "Dashboard" ? "Your business, at a glance" : tab}
              </h3>
              <p>Har digital touchpoint ki clear picture.</p>
            </div>
            <span className="pill">This month</span>
          </div>
          {tab === "Content" ? (
            <ContentWorkspace
              records={contentRecords}
              setRecords={setContentRecords}
            />
          ) : tab === "Media" ? (
            <MediaWorkspace
              settings={mediaSettings}
              setSettings={setMediaSettings}
            />
          ) : tab === "Security" ? (
            <SecurityOverview compact />
          ) : (
            <>
              <div className="stats">
                {[
                  ["Visitors", "1,248", Users],
                  ["Leads", lead ? "87" : "86", MousePointer2],
                  ["Emails", "312", Mail],
                ].map(([label, value, I]) => (
                  <div key={label}>
                    <I size={17} />
                    <small>{label}</small>
                    <strong>{value}</strong>
                    <span>Illustrative activity</span>
                  </div>
                ))}
              </div>
              {["Dashboard", "Analytics", "Visitors"].includes(tab) ? (
                <div className="chart-card">
                  <div className="row-between">
                    <strong>
                      {tab === "Analytics"
                        ? "Traffic & enquiry insights"
                        : "Visitor activity"}
                    </strong>
                    <span className="legend">● Website visitors</span>
                  </div>
                  <div className="chart">
                    <div className="chart-lines">
                      <span>1,500</span>
                      <span>1,000</span>
                      <span>500</span>
                    </div>
                    <svg viewBox="0 0 600 145" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id="chart-fill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#a2d9dc"
                            stopOpacity=".8"
                          />
                          <stop
                            offset="100%"
                            stopColor="#a2d9dc"
                            stopOpacity=".05"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 125 C40 125 35 95 75 103 S130 125 170 80 S215 90 265 65 S315 95 360 45 S410 60 450 34 S510 47 555 16 L600 8 V145 H0Z"
                        fill="url(#chart-fill)"
                      />
                      <motion.path
                        d="M0 125 C40 125 35 95 75 103 S130 125 170 80 S215 90 265 65 S315 95 360 45 S410 60 450 34 S510 47 555 16 L600 8"
                        fill="none"
                        stroke="#008d92"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                    </svg>
                  </div>
                  <div className="chart-axis">
                    <span>01 Sep</span>
                    <span>07 Sep</span>
                    <span>14 Sep</span>
                    <span>21 Sep</span>
                    <span>28 Sep</span>
                  </div>
                </div>
              ) : null}
              {tab !== "Analytics" ? (
                <div className="leads-table">
                  <LeadWorkspace compact={tab !== "Leads"} />
                </div>
              ) : (
                <div className="leads-table">
                  <div className="row-between">
                    <strong>
                      {tab === "Analytics"
                        ? "Acquisition sources"
                        : "Recent enquiries"}
                    </strong>
                    <span className="tiny">Demo records</span>
                  </div>
                  {(tab === "Analytics"
                    ? [
                        ["Google search", "Website", "Organic"],
                        ["Instagram", "Social", "Referral"],
                        ["Catalogue QR", "Offline", "QR form"],
                      ]
                    : [
                        [lead || "Architect A", "QR form", "New lead"],
                        ["Dealer B", "Website", "Contacted"],
                        ["Builder C", "WhatsApp", "Follow-up"],
                      ]
                  ).map(([n, s, st], i) => (
                    <div className="lead-row" key={n}>
                      <span className="avatar">{n.slice(0, 1)}</span>
                      <strong>{n}</strong>
                      <span>{s}</span>
                      <span className={"status s" + i}>{st}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function Control({ analytics = false }) {
  return (
    <div className="split-section">
      <div>
        <Head
          tag={
            analytics ? "08 / ANALYTICS & INSIGHTS" : "02 / YOUR CONTROL CENTER"
          }
          title={analytics ? "Guesswork kam." : "Aapka business."}
          accent={analytics ? "Clarity zyada." : "Aapke control mein."}
          desc={
            analytics
              ? "Kaun aaya, kahan se aaya, aur kis product mein interest dikhaya — ab sab samajhna easy hai."
              : "Visitors, leads, content aur enquiries. Alag-alag jagah check karne ki jagah, ek simple admin panel."
          }
        />
        <div className="feature-list">
          {(analytics
            ? [
                [
                  TrendingUp,
                  "Traffic & sources",
                  "Google, social aur direct visits ki visibility.",
                ],
                [
                  MousePointer2,
                  "Product interest",
                  "Kaunse pages aur products dekhe gaye.",
                ],
                [
                  Users,
                  "Enquiry performance",
                  "Forms, campaigns aur customer activity.",
                ],
              ]
            : [
                [
                  Users,
                  "Every lead, in one place",
                  "QR, website aur enquiries ka central view.",
                ],
                [
                  FileText,
                  "Content at your fingertips",
                  "Products, blogs aur media ko manage karein.",
                ],
                [
                  BarChart3,
                  "A clear business picture",
                  "Visitors, emails aur activity ki visibility.",
                ],
              ]
          ).map(([I, t, d]) => (
            <div key={t}>
              <span>
                <I size={19} />
              </span>
              <div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hint">
          <MousePointer2 size={15} /> Dashboard ke menu par click karke explore
          karein.
        </div>
      </div>
      <Dashboard analytics={analytics} />
    </div>
  );
}
const journeySteps = [
  "QR scan",
  "Enquiry form",
  "Lead captured",
  "WhatsApp greeting",
  "Sales follow-up",
];
function Journey() {
  const [step, setStep] = useState(0),
    [name, setName] = useState("Rahul Sharma"),
    [consent, setConsent] = useState(false),
    [interest, setInterest] = useState("Aluminium solutions");
  return (
    <div className="journey-section">
      <Head
        tag="03 / THE CUSTOMER JOURNEY"
        title="Ek scan se shuru."
        accent="Ek relationship tak."
        desc="Exhibition, catalogue ya visiting card — dekhiye ek enquiry kaise connected experience ban jaati hai."
      />
      <div className="stepper">
        {journeySteps.map((s, i) => (
          <button
            key={s}
            onClick={() => setStep(i)}
            className={step === i ? "active" : step > i ? "done" : ""}
          >
            <span>
              {step > i ? <Check size={17} /> : String(i + 1).padStart(2, "0")}
            </span>
            {s}
            {i < 4 && <ChevronRight size={16} />}
          </button>
        ))}
      </div>
      <div className="journey-stage">
        <AnimatePresence mode="wait">
          <motion.div key={step} {...enter} className="journey-inner">
            <div className="journey-story">
              <span className="big-number">0{step + 1}</span>
              <h2>
                {
                  [
                    "Interest ko ek easy entry point.",
                    "Bas ek chhota sa introduction.",
                    "Enquiry ab team ke saamne.",
                    "Conversation ki perfect shuruaat.",
                    "Right lead. Right team.",
                  ][step]
                }
              </h2>
              <p>
                {
                  [
                    "Customer exhibition mein product dekhta hai. QR unhe directly enquiry form tak le jaata hai.",
                    "Customer apni details aur product interest share karta hai. Consent bhi isi step par capture hota hai.",
                    "Form ki details dashboard mein aati hain. Sales team ko manual entry ki zaroorat nahi.",
                    "Consent aur approved template ke basis par customer ko greeting aur product information mil sakti hai.",
                    "Team context ke saath follow-up karti hai, product discuss karti hai aur lead ko aage badhati hai.",
                  ][step]
                }
              </p>
              {step !== 1 && (
                <Action onClick={() => setStep(step === 4 ? 0 : step + 1)}>
                  {step === 4 ? "Replay the journey" : "See what happens next"}
                </Action>
              )}
            </div>
            <div className="journey-visual">
              {step === 0 ? (
                <div className="qr-card">
                  <Brand />
                  <div className="qr-illustration">
                    <QrCode size={155} strokeWidth={1.1} />
                    <motion.div
                      className="scan-line"
                      animate={{ top: ["10%", "85%", "10%"] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    />
                  </div>
                  <h3>Discover your next possibility.</h3>
                  <p>Scan to explore aluminium solutions</p>
                  <span className="tiny">
                    Illustrative QR · use the button to simulate
                  </span>
                </div>
              ) : step === 1 ? (
                <form
                  className="enquiry-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                >
                  <span className="pill">KHETAN ENQUIRY</span>
                  <h3>Let’s build something great.</h3>
                  <label>
                    Your name
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      maxLength={60}
                    />
                  </label>
                  <label>
                    Phone number
                    <input
                      type="tel"
                      required
                      pattern="[0-9+ ()-]{8,20}"
                      placeholder="Enter your phone number"
                    />
                  </label>
                  <label>
                    Interested in
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      <option>Aluminium solutions</option>
                      <option>Product catalogue</option>
                      <option>Dealer enquiry</option>
                      <option>Project consultation</option>
                    </select>
                  </label>
                  <label className="consent">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />{" "}
                    I agree to be contacted about this enquiry.
                  </label>
                  <button className="button" disabled={!consent}>
                    Submit demo enquiry <ArrowRight size={16} />
                  </button>
                  <small>Demo only. Details are not saved or sent.</small>
                </form>
              ) : step === 2 ? (
                <div className="capture-card">
                  <div className="success-icon">
                    <Check size={30} />
                  </div>
                  <h3>New lead captured</h3>
                  <div className="captured">
                    <span className="avatar">{name[0] || "R"}</span>
                    <div>
                      <strong>{name || "Rahul Sharma"}</strong>
                      <small>{interest} · QR enquiry</small>
                    </div>
                    <span className="status">New</span>
                  </div>
                  <p>Visible in your admin dashboard</p>
                  <div className="notification">
                    <Bell size={18} /> Sales team ko follow-up ke liye ready
                  </div>
                </div>
              ) : step === 3 ? (
                <WhatsApp compact name={name} />
              ) : (
                <div className="capture-card">
                  <span className="success-icon">
                    <Users size={30} />
                  </span>
                  <h3>A warm handoff to sales.</h3>
                  {[
                    "Customer details available",
                    "Product interest captured",
                    "Conversation context ready",
                    "Personal follow-up by your team",
                  ].map((t) => (
                    <div className="check-line" key={t}>
                      <CheckCircle2 size={18} />
                      {t}
                    </div>
                  ))}
                  <span className="pill">
                    Better context. Better conversations.
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
function WhatsApp({ compact = false, name = "Rahul" }) {
  const [stage, setStage] = useState(0);
  return (
    <div className={"phone-frame " + (compact ? "compact" : "")}>
      <div className="phone-status">
        <strong>9:41</strong>
        <span>••• ▰</span>
      </div>
      <div className="wa-header">
        <ArrowLeft size={19} />
        <span className="wa-avatar">
          <img src="/ajeya-original-logo.png" alt="Khetan Ajeya" />
        </span>
        <div>
          <strong>Khetan Ajeya</strong>
          <small>Business account</small>
        </div>
        <Video size={19} />
        <Phone size={17} />
        <MoreVertical size={18} />
      </div>
      <div className="wa-chat">
        <span className="chat-day">TODAY</span>
        <div className="chat-encryption">
          Messages in this preview are illustrative.
        </div>
        <motion.div {...enter} className="bubble incoming">
          Hello {name.split(" ")[0]}! 👋
          <br />
          <br />
          Thank you for your enquiry about Khetan Aluminium Solutions.
          <br />
          <br />
          Our team will connect with you shortly.
          <small>
            9:41 <CheckCheck size={13} />
          </small>
          <button onClick={() => setStage(1)}>
            <ExternalLink size={14} /> View Products
          </button>
        </motion.div>
        {stage >= 1 && (
          <motion.div {...enter} className="bubble outgoing">
            I’d like to explore aluminium solutions for my project.
            <small>
              9:42 <CheckCheck size={13} />
            </small>
          </motion.div>
        )}
        {stage >= 1 && (
          <motion.div {...enter} className="bubble incoming">
            Absolutely! Explore our product range and tell us what you need.
            <div className="product-message">
              <Building2 size={29} />
              <div>
                <strong>Aluminium solutions</strong>
                <span>Built for your next project</span>
              </div>
            </div>
            <button onClick={() => setStage(2)}>
              Request a sales callback <ArrowRight size={14} />
            </button>
            <small>9:42</small>
          </motion.div>
        )}
        {stage >= 2 && (
          <motion.div {...enter} className="bubble outgoing">
            Callback request captured in this demo. ✓
            <small>
              9:43 <CheckCheck size={13} />
            </small>
          </motion.div>
        )}
      </div>
      <div className="wa-input">
        <Smile size={21} />
        <span>Message</span>
        <Paperclip size={20} />
        <span className="mic">
          <Mic size={19} />
        </span>
      </div>
    </div>
  );
}
function WhatsAppSection() {
  return (
    <div className="split-section whatsapp-section">
      <div>
        <Head
          tag="04 / WHATSAPP BUSINESS"
          title="An enquiry today."
          accent="A conversation, instantly."
          desc="Jis app par customer comfortable hai, wahin se relationship ki shuruaat. Familiar experience. Timely response."
        />
        <div className="feature-list numbered">
          {[
            ["A warm welcome", "Enquiry ke baad approved greeting."],
            [
              "Products, one tap away",
              "Catalogue aur product links share karein.",
            ],
            ["Thoughtful follow-ups", "Lead stage ke according updates."],
            [
              "A human when it matters",
              "Interested customer ko sales team tak route karein.",
            ],
          ].map(([t, d], i) => (
            <div key={t}>
              <span>0{i + 1}</span>
              <div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="fineprint">
          Proposed integration requires WhatsApp Business approval, approved
          templates and applicable customer consent.
        </p>
      </div>
      <div className="phone-scene">
        <div className="phone-halo" />
        <span className="floating-label wa-label">
          <WA size={20} /> WhatsApp Business
        </span>
        <WhatsApp />
        <span className="floating-label delivered">
          <CheckCheck size={18} /> Better conversations start here
        </span>
      </div>
    </div>
  );
}
function Social() {
  return <PublishingJourney Head={Head} Brand={Brand} />;
}
function Email() {
  return <EmailExperience Head={Head} Brand={Brand} />;
}
const ecosystem = [
  ["Media & gallery", "Projects, products aur company media.", Image],
  [
    "Company locations",
    "Maps aur location details se easy navigation.",
    MapPin,
  ],
  ["Content management", "Product information aur website updates.", FileText],
  [
    "Creative support",
    "Banners, graphics aur promotional creatives.",
    Building2,
  ],
  ["Blog & updates", "Company news, articles aur useful stories.", Globe],
  ["Search visibility", "Technical SEO se discoverability ko support.", Search],
];
function Website() {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <Head
        tag="07 / WEBSITE ECOSYSTEM"
        title="Sirf ek website nahi."
        accent="Your digital home."
        desc="Customers ko information mile. Team ko control mile. Aur brand ko ek strong, consistent presence."
      />
      <div className="website-layout">
        <WebsiteDemo selected={selected} ecosystem={ecosystem} Brand={Brand} />
        <div className="ecosystem-grid">
          {ecosystem.map(([t, d, I], i) => (
            <button
              key={t}
              className={selected === i ? "selected" : ""}
              onClick={() => setSelected(i)}
            >
              <I size={23} />
              <h4>{t}</h4>
              <p>{d}</p>
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
function Assistant() {
  return <GuidedAssistant Head={Head} />;
}
function Complete({ go }) {
  return (
    <div className="complete-section">
      <Head
        tag="10 / THE COMPLETE SYSTEM"
        title="Many moving parts."
        accent="One connected system."
        desc="Client ko practically kya milega? Ek managed digital ecosystem, business ke har important touchpoint ke liye."
      />
      <div className="system-grid">
        {[
          [Users, "Visitors & leads", 1],
          [QrCode, "QR + forms", 2],
          [WA, "WhatsApp", 3],
          [Mail, "Business email", 5],
          [BarChart3, "Analytics", 7],
          [Instagram, "Social media", 4],
          [FileText, "Blog & content", 6],
          [MapPin, "Media & maps", 6],
        ].map(([I, t, n]) => (
          <button key={t} onClick={() => go(n)}>
            <I size={24} />
            <strong>{t}</strong>
            <ArrowUpRight size={17} />
          </button>
        ))}
      </div>
      <div className="system-hub">
        <span className="core-icon">
          <LayoutDashboard size={28} />
        </span>
        <div>
          <small>THE SINGLE SOURCE OF VISIBILITY</small>
          <h2>Khetan Admin Dashboard</h2>
        </div>
        <span className="pill">Connected by design</span>
      </div>
      <div className="foundation">
        {[
          [Cloud, "Cloud infrastructure"],
          [Database, "Central database"],
          [ShieldCheck, "Backup & security"],
          [Globe, "Website support"],
        ].map(([I, t]) => (
          <div key={t}>
            <I size={20} />
            {t}
          </div>
        ))}
      </div>
      <SecurityOverview />
    </div>
  );
}
function Closing({ go }) {
  return (
    <div className="closing">
      <Tag>EFFRED × KHETAN GROUP</Tag>
      <h1>
        Less complexity.
        <br />
        More connection.
        <br />
        <em>One digital business.</em>
      </h1>
      <p>
        Visitor aata hai. Data capture hota hai. Automation follow-up karti hai.
        <br />
        Aur aapki sales team relationship ko aage badhati hai.
      </p>
      <div className="closing-flow">
        {["Attract", "Capture", "Connect", "Convert"].map((t, i) => (
          <React.Fragment key={t}>
            <span>
              <small>0{i + 1}</small>
              {t}
            </span>
            {i < 3 && <ArrowRight size={22} />}
          </React.Fragment>
        ))}
      </div>
      <Action onClick={() => go(2)}>Replay the customer journey</Action>
      <button className="text-button" onClick={() => go(9)}>
        Explore the complete system <ArrowRight size={16} />
      </button>
      <div className="closing-footer">
        YOUR BUSINESS. CONNECTED.
        <span>Crafted for Khetan. Presented by Effred.</span>
      </div>
    </div>
  );
}
function App() {
  const [page, setPage] = useState(0),
    [menu, setMenu] = useState(false),
    [auto, setAuto] = useState(false),
    [full, setFull] = useState(false);
  const go = (n) => {
    setPage(Math.max(0, Math.min(10, n)));
    setMenu(false);
  };
  useEffect(() => {
    function key(e) {
      if (
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(
          document.activeElement?.tagName,
        )
      )
        return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setPage((p) => Math.min(10, p + 1));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPage((p) => Math.max(0, p - 1));
      }
      if (e.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(
      () =>
        setPage((p) => {
          if (p === 10) {
            setAuto(false);
            return p;
          }
          return p + 1;
        }),
      18000,
    );
    return () => clearInterval(t);
  }, [auto]);
  useEffect(() => {
    const f = () => setFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", f);
    return () => document.removeEventListener("fullscreenchange", f);
  }, []);
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      setFull(false);
    }
  }
  const slides = [
    <Hero go={go} />,
    <Control />,
    <Journey />,
    <WhatsAppSection />,
    <Social />,
    <Email />,
    <Website />,
    <Control analytics />,
    <Assistant />,
    <Complete go={go} />,
    <Closing go={go} />,
  ];
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <header>
          <a
            className="brand-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              go(0);
            }}
            aria-label="Go to opening"
          >
            <Brand />
          </a>
          <div className="header-center">
            <span /> THE CONNECTED BUSINESS EXPERIENCE
          </div>
          <div className="header-right">
            <span className="effred">
              effred<span>®</span>
            </span>
            <span className="header-divider" />
            <button
              className="chapter-toggle"
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
            >
              <Menu size={17} /> Chapters
            </button>
            <button
              className="icon-button"
              onClick={fullscreen}
              aria-label={full ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {full ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </header>
        <main>
          <AnimatePresence mode="wait">
            <motion.section
              key={page}
              {...enter}
              className="slide"
              aria-label={chapters[page][0]}
            >
              {slides[page]}
            </motion.section>
          </AnimatePresence>
        </main>
        <footer>
          <div className="footer-chapter">
            <span>
              {String(page + 1).padStart(2, "0")}
              <small> / 11</small>
            </span>
            <div>
              <strong>{chapters[page][0]}</strong>
              <small>{chapters[page][1]}</small>
            </div>
          </div>
          <div className="progress-dots">
            {chapters.map(([t], i) => (
              <button
                key={t}
                onClick={() => go(i)}
                className={page === i ? "active" : i < page ? "visited" : ""}
                aria-label={`Chapter ${i + 1}: ${t}`}
                aria-current={page === i ? "step" : undefined}
              />
            ))}
          </div>
          <div className="footer-controls">
            <button
              className={"autoplay " + (auto ? "on" : "")}
              onClick={() => setAuto(!auto)}
              aria-label={auto ? "Pause autoplay" : "Start autoplay"}
            >
              {auto ? <Pause size={15} /> : <Play size={15} />}
              <span>{auto ? "Pause" : "Auto play"}</span>
            </button>
            <button
              className="nav-arrow"
              disabled={page === 0}
              onClick={() => go(page - 1)}
              aria-label="Previous chapter"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="nav-arrow next"
              disabled={page === 10}
              onClick={() => go(page + 1)}
              aria-label="Next chapter"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </footer>
        <div
          className="bottom-progress"
          style={{ width: `${((page + 1) / 11) * 100}%` }}
        />
        <AnimatePresence>
          {menu && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="menu-backdrop"
                onClick={() => setMenu(false)}
              />
              <motion.nav
                {...enter}
                className="chapter-menu"
                aria-label="Presentation chapters"
              >
                <div className="row-between">
                  <Tag>EXPLORE THE EXPERIENCE</Tag>
                  <button
                    className="icon-button"
                    onClick={() => setMenu(false)}
                    aria-label="Close chapters"
                  >
                    <X size={19} />
                  </button>
                </div>
                {chapters.map(([t, d], i) => {
                  const I = icons[i];
                  return (
                    <button
                      key={t}
                      className={page === i ? "selected" : ""}
                      onClick={() => go(i)}
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <I size={18} />
                      <div>
                        <strong>{t}</strong>
                        <small>{d}</small>
                      </div>
                      <ArrowUpRight size={15} />
                    </button>
                  );
                })}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
createRoot(document.getElementById("root")).render(<App />);
