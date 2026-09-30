import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Search,
  MoreVertical,
  Globe,
  ThumbsUp,
  MessageCircle,
  Send,
  Heart,
  Bookmark,
  Repeat2,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  Users,
  Calendar,
  FileText,
} from "lucide-react";
import "./previews.css";
import { EmailDesign } from "./EmailDesign";

export const demoLeads = [
  {
    name: "Ananya Mehta",
    role: "Architect",
    company: "Studio Arc",
    email: "ananya@studioarc.example",
    phone: "+91 98XXX 12001",
    location: "Ahmedabad, Gujarat",
    source: "QR form",
    stage: "New lead",
    interest: "Door & window systems",
    consent: "Enquiry follow-up approved",
  },
  {
    name: "Rohan Shah",
    role: "Dealer",
    company: "Shah Building Solutions",
    email: "rohan@shahbuild.example",
    phone: "+91 97XXX 24002",
    location: "Surat, Gujarat",
    source: "Website",
    stage: "Contacted",
    interest: "Dealership & product catalogue",
    consent: "Email updates approved",
  },
  {
    name: "Vikram Patel",
    role: "Builder",
    company: "Patel Projects",
    email: "vikram@patelprojects.example",
    phone: "+91 99XXX 36003",
    location: "Vadodara, Gujarat",
    source: "WhatsApp",
    stage: "Follow-up",
    interest: "Residential project consultation",
    consent: "Callback requested",
  },
];
const postText =
  "A strong foundation for your next project. Discover Khetan Ajeya aluminium door and window systems — designed for contemporary spaces. Connect with our team to explore the catalogue.";
function PostArtwork() {
  return (
    <div className="post-artwork">
      <img
        className="post-architecture"
        src="/ajeya-catalogue-page.png"
        alt="Door and window architecture shown in the Ajeya catalogue"
      />
      <div className="post-art-overlay">
        <span>KHETAN AJEYA</span>
        <strong>
          Open up to
          <br />
          what’s next.
        </strong>
        <small>DOOR & WINDOW ARCHITECTURE SERIES</small>
      </div>
    </div>
  );
}
function PostIdentity({ channel }) {
  return (
    <div className="post-identity">
      <img src="/ajeya-original-logo.png" alt="Khetan Ajeya" />
      <div>
        <strong>
          {channel === "Instagram" ? "khetan.ajeya" : "Khetan Ajeya"}
        </strong>
        <small>
          {channel === "LinkedIn"
            ? "Aluminium door & window systems"
            : channel === "Instagram"
              ? "Original catalogue story"
              : "2h · Public"}{" "}
          {channel !== "Instagram" && <Globe size={10} />}
        </small>
      </div>
      <MoreVertical size={18} />
    </div>
  );
}
export function PlatformPreview({ channel, title, body }) {
  const displayText = body ? `${title}${/[.!?]$/.test(title) ? '' : '.'} ${body}` : postText;
  const [liked, setLiked] = useState(false),
    [saved, setSaved] = useState(false),
    [comment, setComment] = useState(""),
    [comments, setComments] = useState([]);
  const I = { LinkedIn: Linkedin, Facebook, Instagram, Email: Mail }[channel];
  return (
    <div
      className={"platform-preview platform-" + channel.toLowerCase()}
      aria-label={channel + " post preview"}
    >
      <div className="platform-bar">
        <I size={23} />
        <strong>{channel === "Email" ? "Email newsletter" : channel}</strong>
        <span className="platform-search">
          <Search size={12} /> {channel === "Email" ? "Inbox" : "Search"}
        </span>
        <span className="demo-label">DEMO PREVIEW</span>
      </div>
      {channel === "Email" ? (
        <>
          <div className="newsletter-meta">
            <strong>
              {title || "A strong foundation for your next project"}
            </strong>
            <small>From: Khetan Ajeya &lt;updates@khetan.example&gt;</small>
            <small>To: subscriber@example.com</small>
          </div>
          <div className="newsletter-intro">
            <img src="/ajeya-original-logo.png" alt="Khetan Ajeya" />
            <span>
              PRODUCT STORIES
              <br />
              <strong>A new perspective for your space.</strong>
            </span>
          </div>
          <PostArtwork />
          <div className="newsletter-body">
            <p>Hello,</p>
            <p>{displayText}</p>
            <a
              className="catalogue-link"
              href="/ajeya-catalogue.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Explore the catalogue <ArrowUpRight size={14} />
            </a>
            <small>You’re viewing a sample newsletter. No email is sent.</small>
          </div>
        </>
      ) : (
        <>
          <PostIdentity channel={channel} />
          {channel !== "Instagram" && (
            <p className="post-copy">
              {displayText} <span>#KhetanAjeya #AluminiumSystems</span>
            </p>
          )}
          <PostArtwork />
          {channel === "LinkedIn" && (
            <div className="post-link-card">
              <strong>Explore the Ajeya architecture series</strong>
              <span>Product catalogue · Khetan Ajeya</span>
            </div>
          )}
          {channel === "Instagram" ? (
            <>
              <div className="instagram-actions">
                <button
                  onClick={() => setLiked(!liked)}
                  aria-label="Like Instagram post"
                  aria-pressed={liked}
                >
                  <Heart
                    size={23}
                    fill={liked ? "#e44965" : "none"}
                    color={liked ? "#e44965" : "currentColor"}
                  />
                </button>
                <MessageCircle size={22} />
                <Send size={21} />
                <button
                  onClick={() => setSaved(!saved)}
                  aria-label="Save Instagram post"
                  aria-pressed={saved}
                >
                  <Bookmark size={22} fill={saved ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="instagram-caption">
                <strong>{liked ? "129" : "128"} likes</strong>
                <p>
                  <b>khetan.ajeya</b> {displayText}
                </p>
                <span>#KhetanAjeya #Architecture #Aluminium</span>
              </div>
            </>
          ) : (
            <>
              <div className="post-reactions">
                <span>👍 {liked ? "25" : "24"} reactions</span>
                <span>{comments.length} comments · Demo activity</span>
              </div>
              <div className="social-actions">
                <button onClick={() => setLiked(!liked)} aria-pressed={liked}>
                  <ThumbsUp size={16} />
                  {liked ? "Liked" : "Like"}
                </button>
                <button
                  onClick={() =>
                    document.getElementById("post-comment")?.focus()
                  }
                >
                  <MessageCircle size={16} />
                  Comment
                </button>
                <a href="/ajeya-catalogue.pdf" target="_blank" rel="noreferrer">
                  <FileText size={16} />
                  Catalogue
                </a>
              </div>
            </>
          )}
          {comments.map((c, i) => (
            <div className="preview-comment" key={i}>
              <strong>You</strong> {c}
            </div>
          ))}
          <form
            className="post-comment-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (comment.trim()) {
                setComments([...comments, comment.trim()]);
                setComment("");
              }
            }}
          >
            <input
              id="post-comment"
              aria-label={"Comment on " + channel + " post"}
              placeholder="Write a demo comment…"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={180}
            />
            <button disabled={!comment.trim()} aria-label="Add demo comment">
              <Send size={15} />
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export function LeadWorkspace({ compact = false }) {
  const [selected, setSelected] = useState(0),
    [query, setQuery] = useState("");
  const current = demoLeads[selected];
  const filtered = demoLeads.filter((l) =>
    `${l.name} ${l.role} ${l.location} ${l.email}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <div className={"lead-workspace " + (compact ? "compact-leads" : "")}>
      <div className="lead-directory-head">
        <strong>{compact ? "Recent enquiries" : "Lead directory"}</strong>
        <span className="tiny">Illustrative contact details</span>
      </div>
      {!compact && (
        <label className="lead-search">
          <Search size={13} />
          <input
            aria-label="Search leads"
            placeholder="Search name, role, email or city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      )}
      <div className="lead-records">
        {filtered.map((l) => (
          <button
            key={l.email}
            className={
              "lead-record " + (current.email === l.email ? "active" : "")
            }
            onClick={() => setSelected(demoLeads.indexOf(l))}
          >
            <span className="avatar">{l.name[0]}</span>
            <span>
              <strong>{l.name}</strong>
              <small>
                {l.role} · {l.company}
              </small>
            </span>
            <span className="status">{l.stage}</span>
          </button>
        ))}
        {!filtered.length && (
          <p className="lead-empty">
            No matching leads. Try a name, role or city.
          </p>
        )}
      </div>
      {filtered.some((l) => l.email === current.email) && (
        <motion.div
          key={current.email}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="lead-contact-detail"
        >
          <div className="lead-detail-heading">
            <strong>{current.name}</strong>
            <span>
              {current.role} · {current.source}
            </span>
          </div>
          <div>
            <Mail size={13} />
            <span>
              <small>Email address</small>
              {current.email}
            </span>
          </div>
          <div>
            <Phone size={13} />
            <span>
              <small>Phone number</small>
              {current.phone}
            </span>
          </div>
          <div>
            <MapPin size={13} />
            <span>
              <small>Location</small>
              {current.location}
            </span>
          </div>
          {!compact && (
            <>
              <div>
                <FileText size={13} />
                <span>
                  <small>Product interest</small>
                  {current.interest}
                </span>
              </div>
              <p>
                <Check size={12} />
                {current.consent}
              </p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

const templates = {
  introduction: {
    label: "Introduction",
    description: "Role ke according first business introduction.",
    subject: (r) =>
      `Aluminium solutions for your ${r === "Architect" ? "design vision" : r === "Dealer" ? "business" : r === "Builder" ? "next development" : "next project"}`,
    headline: "A better beginning.",
    body: {
      Architect:
        "Explore Ajeya door and window systems for your architectural concepts. Share your design requirements so our team can help you review the relevant catalogue and product information.",
      Dealer:
        "Thank you for your interest in Khetan Ajeya. Let’s discuss your market, product requirements and potential dealership opportunities with our business team.",
      Builder:
        "Discover Ajeya aluminium door and window solutions for your upcoming development. Share your project scope and requirements to begin a consultation.",
      Customer:
        "Discover Khetan Ajeya aluminium door and window systems for your space. Tell us what you are planning and our team will help you explore the relevant options.",
    },
    cta: "Explore product catalogue",
  },
  greeting: {
    label: "Greeting",
    description: "Naye contact ko personalized welcome.",
    subject: (r) =>
      `Welcome to Khetan Ajeya — ${r === "Dealer" ? "let’s grow together" : "let’s create something great"}`,
    headline: "A warm welcome.",
    body: {
      Architect:
        "It is a pleasure to connect with your studio. We look forward to understanding your design vision and helping you explore Ajeya systems for your projects.",
      Dealer:
        "Welcome to the Khetan Ajeya conversation. Our business team looks forward to learning about your market and discussing your product needs.",
      Builder:
        "Thank you for connecting with Khetan Ajeya. We look forward to hearing about your upcoming projects and understanding how we can assist.",
      Customer:
        "Thank you for your interest in Khetan Ajeya. We are happy to help you discover door and window systems for your space.",
    },
    cta: "Get to know Ajeya",
  },
  enquiry: {
    label: "Lead acknowledgement",
    description: "Enquiry milte hi context ke saath response.",
    subject: () => "We received your enquiry | Khetan Ajeya",
    headline: "Your enquiry matters.",
    body: {
      Architect:
        "Thank you for sharing your interest in architectural door and window systems. Our team will review your enquiry and connect to understand your design requirements.",
      Dealer:
        "We have received your dealership enquiry. Our team will connect to understand your location, business profile and product interests.",
      Builder:
        "We have received your project enquiry. Our team will connect to discuss your project location, requirements and planned schedule.",
      Customer:
        "We have received your enquiry. Our team will connect with you to understand your requirements and guide you through the relevant product information.",
    },
    cta: "Review the product range",
  },
  followup: {
    label: "Follow-up",
    description: "Pehli conversation ke baad relevant next step.",
    subject: (r) =>
      `Following up on your ${r === "Dealer" ? "dealership" : r === "Architect" ? "design" : "project"} enquiry`,
    headline: "Let’s take the next step.",
    body: {
      Architect:
        "Following up on our introduction: would you like to discuss a specific door or window requirement for your current project? Share your drawings or product questions with our team.",
      Dealer:
        "Following up on your interest in Khetan Ajeya. Please share a convenient time to discuss your business requirements and next steps with our team.",
      Builder:
        "Following up on your project enquiry. Please share any updated requirements or a suitable time for a project discussion with our team.",
      Customer:
        "Have you had a chance to explore the catalogue? Let us know your questions or a convenient time for our team to discuss your requirements.",
    },
    cta: "Revisit the catalogue",
  },
};
export function EmailExperience({ Head, Brand }) {
  const [role, setRole] = useState("Architect"),
    [kind, setKind] = useState("introduction"),
    [scheduled, setScheduled] = useState({});
  const template = templates[kind],
    key = role + kind,
    sent = !!scheduled[key];
  const person = demoLeads.find((l) => l.role === role) || {
    name: "Priya Desai",
    email: "priya@example.com",
    location: "Mumbai, Maharashtra",
  };
  return (
    <div className="split-section email-experience">
      <div>
        <Head
          tag="06 / BUSINESS EMAIL"
          title="Professional emails."
          accent="Purposeful follow-ups."
          desc="Har role ke liye relevant message. Role aur template select karein — personalized email turant preview mein dekhein."
        />
        <div className="template-controls">
          <label htmlFor="email-role">01 / CHOOSE RECIPIENT ROLE</label>
          <select
            id="email-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {["Architect", "Dealer", "Builder", "Customer"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <label>02 / CHOOSE EMAIL TEMPLATE</label>
          <div className="template-options">
            {Object.entries(templates).map(([id, t]) => (
              <button
                key={id}
                className={kind === id ? "active" : ""}
                onClick={() => setKind(id)}
                aria-pressed={kind === id}
              >
                <span
                  className={"template-thumb thumb-" + id}
                  aria-hidden="true"
                />
                <span>
                  {id === "greeting" ? (
                    <Heart size={17} />
                  ) : id === "followup" ? (
                    <Calendar size={17} />
                  ) : id === "enquiry" ? (
                    <Users size={17} />
                  ) : (
                    <FileText size={17} />
                  )}
                </span>
                <strong>{t.label}</strong>
                {kind === id && <Check size={14} />}
              </button>
            ))}
          </div>
          <p className="template-description">{template.description}</p>
          <div className="personalization-note">
            <Check size={14} /> Name, role aur location ke saath personalized
            demo.
          </div>
        </div>
        <p className="fineprint">
          16 role/template combinations. Illustrative contacts. Live outreach
          requires consent, approved templates and provider limits.
        </p>
      </div>
      <div className="email-window mock">
        <div className="email-top">
          <span className="hostinger">H</span>
          <strong>Business mail</strong>
          <span className="demo-label">
            {template.label.toUpperCase()} PREVIEW
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          >
            <div className="email-meta">
              <h3>{template.subject(role)}</h3>
              <div>
                <span className="avatar">K</span>
                <div>
                  <strong>Khetan Ajeya Sales</strong>
                  <small>From: sales@khetan.example</small>
                  <small>
                    To: {person.name} &lt;{person.email}&gt;
                  </small>
                </div>
              </div>
              <div className="recipient-context">
                <span>{role}</span>
                <span>
                  <MapPin size={11} />
                  {person.location}
                </span>
              </div>
            </div>
            <EmailDesign
              kind={kind}
              template={template}
              role={role}
              person={person}
              Brand={Brand}
            />
          </motion.div>
        </AnimatePresence>
        <div className="email-footer">
          <button
            className="button"
            disabled={sent}
            onClick={() => setScheduled({ ...scheduled, [key]: true })}
          >
            {sent ? <Check size={17} /> : <Send size={17} />}{" "}
            {sent ? "Added to demo sequence" : "Simulate scheduled outreach"}
          </button>
          <small>
            {sent
              ? `${template.label} for ${role} added to this demo sequence.`
              : "No email will be sent. Preview updates with your selection."}
          </small>
        </div>
      </div>
    </div>
  );
}
