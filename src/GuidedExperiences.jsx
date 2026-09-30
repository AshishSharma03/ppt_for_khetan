import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Globe,
  FileText,
  Check,
  ArrowRight,
  ArrowUpRight,
  Play,
  RefreshCw,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Bot,
  MapPin,
  Phone,
  Image,
  Search,
  X,
  Building2,
  Calendar,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { PlatformPreview } from "./ClientPreviews";
import "./guided.css";
import { assistantLanguages } from './assistantLanguages';

const defaultTitle = "A strong foundation for your next project.";
const defaultBody =
  "Explore Khetan Ajeya aluminium door and window systems. Designed for contemporary spaces, built around your next project.";
export function PublishingJourney({ Head, Brand }) {
  const [phase, setPhase] = useState("edit"),
    [title, setTitle] = useState(""),
    [body, setBody] = useState(""),
    [typing, setTyping] = useState(true),
    [channel, setChannel] = useState(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!typing) return;
    if (reduced) {
      setTitle(defaultTitle);
      setBody(defaultBody);
      setTyping(false);
      return;
    }
    let n = 0;
    const timer = setInterval(() => {
      n += 3;
      setTitle(defaultTitle.slice(0, n));
      setBody(defaultBody.slice(0, Math.max(0, n - defaultTitle.length)));
      if (n >= defaultTitle.length + defaultBody.length) setTyping(false);
    }, 28);
    return () => clearInterval(timer);
  }, [typing, reduced]);
  useEffect(() => {
    if (phase !== "publishing") return;
    const t = setTimeout(() => setPhase("published"), 1500);
    return () => clearTimeout(t);
  }, [phase]);
  return (
    <div className="publishing-journey">
      <Head
        tag="05 / CONTENT AUTOMATION"
        title="Ek great story."
        accent="Har jagah, connected."
        desc="Pehle blog edit karein. Phir website par publish karein. Social channel par click karke dekhein wahi story wahan kaise dikhegi."
      />
      <div className="publish-steps">
        {["Write & edit", "Publish to website", "Preview on social"].map(
          (s, i) => (
            <div
              key={s}
              className={
                (phase === "edit" ? 0 : phase === "publishing" ? 1 : 2) >= i
                  ? "active"
                  : ""
              }
            >
              <span>{i + 1}</span>
              {s}
              {i < 2 && <ArrowRight size={15} />}
            </div>
          ),
        )}
      </div>
      <div className="publish-stage">
        <div className="publish-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={channel || phase}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {channel ? (
                <>
                  <button
                    className="back-to-site"
                    onClick={() => setChannel(null)}
                  >
                    ← Back to published website
                  </button>
                  <PlatformPreview
                    channel={channel}
                    title={title}
                    body={body}
                  />
                </>
              ) : phase === "edit" ? (
                <div className="blog-editor mock">
                  <div className="editor-top">
                    <FileText size={17} />
                    <strong>Blog editor</strong>
                    <span>
                      {typing ? "Writing your story…" : "Draft saved · demo"}
                    </span>
                  </div>
                  <div className="editor-toolbar">
                    <b>B</b>
                    <i>I</i>
                    <span>H1</span>
                    <span>↗ Link</span>
                    <span>▧ Cover image</span>
                  </div>
                  <div className="editor-cover">
                    <img
                      src="/ajeya-page-6.png"
                      alt="Ajeya architecture catalogue"
                    />
                    <span>FEATURED IMAGE</span>
                  </div>
                  <div className="editor-fields">
                    <label>
                      Blog title
                      <input
                        aria-label="Blog title"
                        value={title}
                        onChange={(e) => {
                          setTyping(false);
                          setTitle(e.target.value);
                        }}
                        placeholder="Write a title…"
                        maxLength={120}
                      />
                    </label>
                    <label>
                      Your story
                      <textarea
                        aria-label="Blog body"
                        value={body}
                        onChange={(e) => {
                          setTyping(false);
                          setBody(e.target.value);
                        }}
                        placeholder="Tell your story…"
                        maxLength={1000}
                      />
                    </label>
                    <div className="editor-tags">
                      <span>Architecture</span>
                      <span>Product stories</span>
                      <span>Ajeya systems</span>
                    </div>
                  </div>
                </div>
              ) : phase === "publishing" ? (
                <div className="publish-loading mock">
                  <motion.span
                    animate={reduced ? {} : { rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  >
                    <RefreshCw size={35} />
                  </motion.span>
                  <h3>Publishing your story…</h3>
                  <p>Blog → Website → Connected channel previews</p>
                  <div className="loading-track">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.3 }}
                    />
                  </div>
                </div>
              ) : (
                <div className="published-blog mock">
                  <div className="window-bar">
                    <Globe size={14} />
                    <span>KHETAN AJEYA · WEBSITE PREVIEW</span>
                    <span className="status">Published in demo</span>
                  </div>
                  <div className="published-nav">
                    <Brand />
                    <span>Products &nbsp; Stories &nbsp; Contact</span>
                  </div>
                  <div className="published-cover">
                    <img
                      src="/ajeya-page-6.png"
                      alt="Ajeya door and window architecture"
                    />
                  </div>
                  <article>
                    <span className="tiny">PRODUCT STORIES / ARCHITECTURE</span>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <a
                      href="/ajeya-catalogue.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore the catalogue <ArrowUpRight size={14} />
                    </a>
                  </article>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <aside className="publish-actions">
          <span className="eyebrow">ONE STORY. EVERY TOUCHPOINT.</span>
          <h3>
            {phase === "edit"
              ? "Your story starts here."
              : phase === "publishing"
                ? "Connecting the dots…"
                : "Your website story is ready."}
          </h3>
          <p>
            {phase === "edit"
              ? "Editor mein text khud change karke publish karein. Wahi title aur story social previews mein bhi dikhegi."
              : "Neeche kisi channel par click karein aur us platform par apna post dekhein."}
          </p>
          {phase === "edit" ? (
            <button
              className="button"
              disabled={typing || !title.trim() || !body.trim()}
              onClick={() => setPhase("publishing")}
            >
              <Globe size={16} />
              Publish & distribute
            </button>
          ) : phase === "published" ? (
            <button
              className="text-button"
              onClick={() => {
                setChannel(null);
                setPhase("edit");
                setTyping(false);
              }}
            >
              <FileText size={14} />
              Edit this blog
            </button>
          ) : null}
          <div className="publish-channels">
            {[
              ["LinkedIn", Linkedin],
              ["Instagram", Instagram],
              ["Facebook", Facebook],
              ["Email", Mail],
            ].map(([c, I]) => (
              <button
                className={"channel-card " + (channel === c ? "chosen" : "")}
                key={c}
                disabled={phase !== "published"}
                aria-pressed={channel === c}
                onClick={() => setChannel(c)}
              >
                <span className={"channel-logo " + c}>
                  <I size={22} />
                </span>
                <div>
                  <strong>{c}</strong>
                  <small>
                    {phase === "published"
                      ? "Ready in distribution workflow"
                      : "Available after publishing"}
                  </small>
                </div>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <small className="fineprint">
            Demo publishing only. Live distribution needs approved content and
            connected accounts.
          </small>
        </aside>
      </div>
    </div>
  );
}

const galleryItems = [
  {
    title: "Contemporary living",
    category: "Architecture",
    image: "/ajeya-page-6.png",
  },
  {
    title: "Door & window inspiration",
    category: "Architecture",
    image: "/ajeya-catalogue-page.png",
  },
  {
    title: "Our manufacturing strength",
    category: "Manufacturing",
    image: "/ajeya-page-4.png",
  },
];
export const locationAddress =
  "Plot No. M-20(p), 6th Phase, Adityapur Industrial Area, Gamharia, Jamshedpur";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Khetan Ajinkya " + locationAddress);
export function LocationDemo({ language = 'en' }) {
  const t = assistantLanguages[language];
  return (
    <div className="location-demo">
      <div
        className="map-preview"
        aria-label={t.mapLabel}
      >
        <div className="map-river" />
        <div className="map-road r1" />
        <div className="map-road r2" />
        <div className="map-road r3" />
        <span className="map-area">ADITYAPUR INDUSTRIAL AREA</span>
        <span className="map-pin">
          <MapPin size={29} fill="#008d92" color="white" />
          <b>Khetan Ajinkya</b>
        </span>
        <small>{t.mapNote}</small>
      </div>
      <div className="location-info">
        <span className="pill">{t.unit}</span>
        <h3>Khetan Ajinkya</h3>
        <p>
          <MapPin size={16} />
          {locationAddress}
        </p>
        <p>
          <Mail size={16} />
          sales@khetangroup.net
        </p>
        <a
          className="catalogue-link"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.maps} <ArrowUpRight size={15} />
        </a>
        <small>{t.source}</small>
      </div>
    </div>
  );
}
export function GalleryDemo() {
  const [filter, setFilter] = useState("All"),
    [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  return (
    <div className="gallery-demo">
      <div className="gallery-heading">
        <span className="tiny">EXPLORE AJEYA</span>
        <h3>Spaces. Systems. Possibilities.</h3>
        <p>Catalogue images, organized for your customers.</p>
      </div>
      <div className="gallery-filters">
        {["All", "Architecture", "Manufacturing"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="gallery-tiles">
        {galleryItems
          .filter((i) => filter === "All" || i.category === filter)
          .map((item) => (
            <button key={item.title} onClick={() => setSelected(item)}>
              <img src={item.image} alt={item.title} />
              <span>
                <strong>{item.title}</strong>
                <small>
                  {item.category} <ArrowUpRight size={12} />
                </small>
              </span>
            </button>
          ))}
      </div>
      <dialog
        className="gallery-lightbox"
        ref={dialog}
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setSelected(null);
        }}
      >
        {selected && (
          <>
            <button onClick={() => setSelected(null)} aria-label="Close image">
              <X size={23} />
            </button>
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>Image from the supplied Ajeya catalogue.</p>
          </>
        )}
      </dialog>
    </div>
  );
}
export function WebsiteDemo({ selected, ecosystem, Brand }) {
  return (
    <div className="website-preview mock">
      <div className="window-bar">
        <Globe size={13} />
        <span>KHETAN AJEYA · WEBSITE PREVIEW</span>
      </div>
      <div className="site-nav">
        <Brand />
        <span>Products &nbsp; Gallery &nbsp; Locations</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {selected === 0 ? (
            <GalleryDemo />
          ) : selected === 1 ? (
            <LocationDemo />
          ) : (
            <>
              <div className="site-hero">
                <span>KHETAN ALUMINIUM SOLUTIONS</span>
                <h2>
                  Built on trust.
                  <br />
                  Designed for tomorrow.
                </h2>
                <div className="building-lines" />
              </div>
              <div className="site-detail">
                {React.createElement(ecosystem[selected][2], { size: 28 })}
                <h3>{ecosystem[selected][0]}</h3>
                <p>{ecosystem[selected][1]}</p>
                <span className="pill">
                  Managed through your admin workspace
                </span>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function GuidedAssistant({ Head }) {
  const [language, setLanguage] = useState(() => {
    try { return sessionStorage.getItem('ajeya-assistant-language') === 'hi' ? 'hi' : 'en'; } catch { return 'en'; }
  });
  const t = assistantLanguages[language];
  useEffect(() => { try { sessionStorage.setItem('ajeya-assistant-language', language); } catch {} }, [language]);
  const [choice, setChoice] = useState(null),
    [product, setProduct] = useState(null),
    [submitted, setSubmitted] = useState(false);
  return (
    <div className="split-section">
      <div>
        <Head
          tag="09 / WEBSITE ASSISTANCE"
          title="Every visitor deserves"
          accent="a helpful hello."
          desc="Simple options. Clear next steps. Customer ko type karne ki zaroorat nahi — select karein aur relevant information dekhein."
        />
        <div className="assistant-flow">
          {[
            [Globe, "Website visitor"],
            [Bot, "Choose an option"],
            [FileText, "Capture enquiry"],
            [Building2, "Sales handoff"],
          ].map(([I, t]) => (
            <div key={t}>
              <span>
                <I size={22} />
              </span>
              <strong>{t}</strong>
            </div>
          ))}
        </div>
        <p className="fineprint">
          Guided demonstration. Callback details stay in this preview; no
          request is sent.
        </p>
      </div>
      <div className="assistant-window mock guided-assistant" lang={language}>
        <div className="assistant-header">
          <span>
            <Bot size={27} />
          </span>
          <div>
            <strong>Khetan Assistant</strong>
            <small>
              <i />
              {t.status}
            </small>
          </div>
          <button
            aria-label={t.restart}
            onClick={() => {
              setChoice(null);
              setProduct(null);
              setSubmitted(false);
            }}
          >
            <RefreshCw size={18} />
          </button>
        </div>
        <div className="assistant-language-bar">
          <label htmlFor="assistant-language"><Globe size={15}/>{t.language}</label>
          <select id="assistant-language" aria-label="Assistant language" value={language} onChange={e=>setLanguage(e.target.value)}>
            <option value="en">English</option><option value="hi">हिन्दी</option>
          </select>
        </div>
        <div className="guided-chat">
          <div className="bot-welcome">
            <span>✦</span>
            <h3>{t.hello}</h3>
            <p>{t.help}</p>
          </div>
          <div className="bot-options">
            {t.options.map((t, i) => (
              <button
                key={t}
                className={choice === i ? "active" : ""}
                onClick={() => {
                  setChoice(i);
                  setProduct(null);
                  setSubmitted(false);
                }}
              >
                {t}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={choice}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {choice === 0 ? (
                <div className="guided-result">
                  <p>{t.productIntro}</p>
                  <div className="bot-options">
                    {t.products.map((p, index) => (
                      <button key={index} onClick={() => setProduct(index)}>
                        {p}
                        <ArrowRight size={14} />
                      </button>
                    ))}
                  </div>
                  {product !== null && (
                    <div className="bot-product">
                      <strong>{t.products[product]}</strong>
                      <p>{t.catalogueInfo}</p>
                      <a
                        href="/ajeya-catalogue.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.catalogue} <ArrowUpRight size={14} />
                      </a>
                      <button onClick={() => setChoice(2)}>
                        {t.sales} <Phone size={13} />
                      </button>
                    </div>
                  )}
                </div>
              ) : choice === 1 ? (
                <div className="guided-result">
                  <LocationDemo language={language}/>
                </div>
              ) : choice === 2 ? (
                <div className="guided-result">
                  {submitted ? (
                    <div className="callback-success" role="status">
                      <CheckCircle2 size={32} />
                      <h3>{t.success}</h3>
                      <p>{t.successInfo}</p>
                      <button
                        className="text-button"
                        onClick={() => {
                          setChoice(null);
                          setSubmitted(false);
                        }}
                      >
                        {t.back} <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <form
                      className="callback-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <p>{t.formInfo}</p>
                      <label>
                        {t.name}
                        <input required name="name" maxLength={60} />
                      </label>
                      <label>
                        {t.phone}
                        <input
                          required
                          type="tel"
                          name="phone"
                          pattern="[0-9+ ()-]{8,20}"
                        />
                      </label>
                      <label>
                        {t.city}
                        <input required name="city" maxLength={60} />
                      </label>
                      <label className="callback-consent">
                        <input type="checkbox" required />{t.consent}
                      </label>
                      <button className="button">
                        {t.submit} <ArrowRight size={15} />
                      </button>
                    </form>
                  )}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
        <small className="assistant-note">
          {t.note}
        </small>
      </div>
    </div>
  );
}
