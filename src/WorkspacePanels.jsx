import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Image,
  Search,
  FileText,
  Check,
  Eye,
  Save,
  Cloud,
  Users,
  Shield,
  Copyright,
  ArrowUpRight,
} from "lucide-react";
import "./workspace.css";

export const initialContent = [
  {
    id: "blog",
    title: "Ajeya solutions for your next project",
    type: "Blog",
    status: "Published",
    body: "Explore Khetan Ajeya aluminium door and window systems for contemporary spaces. Discover the architecture series in our catalogue.",
  },
  {
    id: "product",
    title: "Door & window architecture series",
    type: "Product",
    status: "Draft",
    body: "Explore the Ajeya architecture collection. Contact our team to discuss your project requirements.",
  },
  {
    id: "news",
    title: "Discover our manufacturing strength",
    type: "Company update",
    status: "In review",
    body: "Learn about our aluminium manufacturing and extrusion capabilities through the supplied company catalogue.",
  },
];
const media = [
  {
    id: "architecture",
    title: "Architecture inspiration",
    type: "Architecture",
    src: "/ajeya-page-6.png",
  },
  {
    id: "doors",
    title: "Door & window collection",
    type: "Products",
    src: "/ajeya-catalogue-page.png",
  },
  {
    id: "factory",
    title: "Manufacturing overview",
    type: "Manufacturing",
    src: "/ajeya-page-4.png",
  },
];
export function ContentWorkspace({ records, setRecords }) {
  const [selected, setSelected] = useState(null),
    [query, setQuery] = useState(""),
    [draft, setDraft] = useState(null),
    [saved, setSaved] = useState(false),
    [preview, setPreview] = useState(false);
  function open(record) {
    setSelected(record.id);
    setDraft({ ...record });
    setSaved(false);
    setPreview(false);
  }
  return (
    <div className="content-workspace">
      <div className="workspace-panel-title">
        <FileText size={18} />
        <div>
          <h4>Content library</h4>
          <p>Blog, products aur company updates</p>
        </div>
        <span>{records.length} items</span>
      </div>
      <label className="workspace-search">
        <Search size={13} />
        <input
          aria-label="Search content"
          placeholder="Search title or content type"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <div className="content-records">
        {records
          .filter((r) =>
            `${r.title} ${r.type}`.toLowerCase().includes(query.toLowerCase()),
          )
          .map((r) => (
            <button
              key={r.id}
              className={selected === r.id ? "active" : ""}
              onClick={() => open(r)}
            >
              <FileText size={17} />
              <div>
                <strong>{r.title}</strong>
                <small>{r.type} · Click to edit</small>
              </div>
              <span
                className={
                  "content-status " + r.status.toLowerCase().replace(" ", "-")
                }
              >
                {r.status}
              </span>
            </button>
          ))}
        {!records.some((r) =>
          `${r.title} ${r.type}`.toLowerCase().includes(query.toLowerCase()),
        ) && <p className="workspace-empty">No matching content.</p>}
      </div>
      {draft ? (
        <form
          className="workspace-editor"
          onSubmit={(e) => {
            e.preventDefault();
            setRecords(
              records.map((r) => (r.id === draft.id ? { ...draft } : r)),
            );
            setSaved(true);
          }}
        >
          <div className="workspace-editor-heading">
            <strong>{preview ? "Article preview" : "Edit content"}</strong>
            <button type="button" onClick={() => setPreview(!preview)}>
              <Eye size={13} />
              {preview ? "Edit" : "Preview"}
            </button>
          </div>
          {preview ? (
            <article className="workspace-article">
              <small>{draft.type}</small>
              <h3>{draft.title}</h3>
              <p>{draft.body}</p>
              <span className="content-status">{draft.status} · demo</span>
            </article>
          ) : (
            <>
              <label>
                Content title
                <input
                  required
                  maxLength={120}
                  value={draft.title}
                  onChange={(e) => {
                    setDraft({ ...draft, title: e.target.value });
                    setSaved(false);
                  }}
                />
              </label>
              <label>
                Content body
                <textarea
                  required
                  maxLength={1500}
                  value={draft.body}
                  onChange={(e) => {
                    setDraft({ ...draft, body: e.target.value });
                    setSaved(false);
                  }}
                />
              </label>
              <label>
                Publication status
                <select
                  value={draft.status}
                  onChange={(e) => {
                    setDraft({ ...draft, status: e.target.value });
                    setSaved(false);
                  }}
                >
                  <option>Draft</option>
                  <option>In review</option>
                  <option>Published</option>
                </select>
              </label>
              <button className="button" type="submit">
                <Save size={13} />
                Save demo changes
              </button>
            </>
          )}
          {saved && (
            <span className="workspace-feedback" role="status">
              <Check size={13} />
              Saved in this workspace demo.
            </span>
          )}
        </form>
      ) : (
        <div className="workspace-empty">
          <FileText size={22} />
          <p>Select an item to edit, review or preview its content.</p>
        </div>
      )}
      <p className="workspace-disclaimer">
        Demo edits stay while this dashboard is open. No live website is
        updated.
      </p>
    </div>
  );
}

export function MediaWorkspace({ settings, setSettings }) {
  const [category, setCategory] = useState("All"),
    [selected, setSelected] = useState(media[0].id);
  const item = media.find((i) => i.id === selected);
  const config = settings[selected] || {
    watermark: true,
    access: "Public preview",
  };
  function update(change) {
    setSettings({ ...settings, [selected]: { ...config, ...change } });
  }
  return (
    <div className="media-workspace">
      <div className="workspace-panel-title">
        <Image size={18} />
        <div>
          <h4>Media library</h4>
          <p>Catalogue images & brand assets</p>
        </div>
        <span>3 assets</span>
      </div>
      <div className="workspace-filters">
        {["All", "Architecture", "Products", "Manufacturing"].map((c) => (
          <button
            key={c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="workspace-media-grid">
        {media
          .filter((i) => category === "All" || i.type === category)
          .map((i) => (
            <button
              key={i.id}
              className={selected === i.id ? "active" : ""}
              onClick={() => setSelected(i.id)}
            >
              <img src={i.src} alt={i.title} />
              <strong>{i.title}</strong>
              <small>{i.type}</small>
            </button>
          ))}
      </div>
      <div className="media-detail">
        <div className="protected-preview">
          <img src={item.src} alt={item.title + " preview"} draggable={false} />
          {config.watermark && (
            <span className="watermark-demo">
              KHETAN AJEYA
              <br />
              <small>BRAND MEDIA · PREVIEW</small>
            </span>
          )}
          <span className="preview-chip">{config.access} · demo</span>
        </div>
        <h4>{item.title}</h4>
        <label className="watermark-setting">
          <input
            type="checkbox"
            checked={config.watermark}
            onChange={(e) => update({ watermark: e.target.checked })}
          />
          Show watermark preview
        </label>
        <label className="media-access">
          Planned original-file access
          <select
            value={config.access}
            onChange={(e) => update({ access: e.target.value })}
          >
            <option>Public preview</option>
            <option>Authorized team only</option>
          </select>
        </label>
        <div className="media-protection-note">
          <ShieldCheck size={15} />
          <p>
            Live setup: approved public versions, server-applied watermarks and
            restricted access to originals.
          </p>
        </div>
      </div>
      <p className="workspace-disclaimer">
        Preview settings only; these controls do not protect the files in this
        demo. Watermarks discourage reuse; public images can still be copied or
        captured.
      </p>
    </div>
  );
}

const safeguards = [
  {
    title: "Media & copy deterrence",
    Icon: Copyright,
    summary: "Watermarked previews. Controlled originals.",
    detail:
      "Public gallery mein branded previews. Original media ke liye authorized access aur time-limited download links configure karne ka proposal. Watermarking casual reuse discourage karegi; screenshots aur public content copying ko fully block nahi kiya ja sakta.",
  },
  {
    title: "Attack protection",
    Icon: Shield,
    summary: "Filter suspicious traffic and limit abuse.",
    detail:
      "Hosting ke according firewall/WAF, rate limits, secure login, input validation aur regular updates configure kiye jayenge. Monitoring aur alerts suspicious activity identify karne mein help karenge. Yeh risk reduce karte hain; zero-attack guarantee nahi.",
  },
  {
    title: "Team access control",
    Icon: Users,
    summary: "The right access for the right person.",
    detail:
      "Admin, editor aur viewer roles; server-side permission checks; MFA where supported; aur content approval workflow. Kaun media upload, edit aur publish kar sakta hai, woh clearly define hoga.",
  },
  {
    title: "Backup & recovery",
    Icon: Cloud,
    summary: "Keep a recovery plan ready.",
    detail:
      "Database aur media backups, retention schedule aur restore checks implementation scope mein define honge. Recovery time aur backup frequency deployment plan ke saath agree ki jayegi.",
  },
];
export function SecurityOverview({ compact = false }) {
  const [active, setActive] = useState(0);
  const item = safeguards[active];
  return (
    <section
      className={"security-overview " + (compact ? "security-compact" : "")}
      aria-label="Proposed website security"
    >
      <div className="security-heading">
        <span>
          <ShieldCheck size={22} />
        </span>
        <div>
          <small>PROPOSED SECURITY PLAN</small>
          <h3>Aapka content. Better protected.</h3>
          <p>Website, gallery aur team access ke liye layered protection.</p>
        </div>
      </div>
      <div className="security-cards">
        {safeguards.map(({ title, Icon, summary }, i) => (
          <button
            key={title}
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <Icon size={20} />
            <strong>{title}</strong>
            <small>{summary}</small>
          </button>
        ))}
      </div>
      <div className="security-detail">
        <item.Icon size={23} />
        <div>
          <h4>{item.title}</h4>
          <p>{item.detail}</p>
        </div>
      </div>
      <p className="security-disclaimer">
        <Lock size={12} />
        Implementation proposal — live security services are not connected in
        this presentation.
      </p>
    </section>
  );
}
