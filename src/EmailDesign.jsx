import React from "react";
import {
  Building2,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Check,
} from "lucide-react";
export function EmailDesign({ kind, template, role, person, Brand }) {
  const greeting = <p>Hello {person.name.split(" ")[0]},</p>,
    copy = <p>{template.body[role]}</p>,
    link = (
      <a
        className="email-cta template-cta"
        href="/ajeya-catalogue.pdf"
        target="_blank"
        rel="noreferrer"
      >
        {template.cta}
        <ArrowUpRight size={14} />
      </a>
    );
  return (
    <div
      className={"email-content designed-email design-" + kind}
      data-template-layout={kind}
    >
      <Brand />
      {kind === "introduction" ? (
        <>
          <div className="intro-email-art">
            <img src="/ajeya-page-6.png" alt="Ajeya architectural systems" />
            <div>
              <small>THE AJEYA COLLECTION</small>
              <h2>
                Built for
                <br />
                your next vision.
              </h2>
            </div>
          </div>
          {greeting}
          {copy}
          <div className="email-product-grid">
            <div>
              <Building2 size={22} />
              <strong>Architecture</strong>
              <small>Door & window systems</small>
            </div>
            <div>
              <FileText size={22} />
              <strong>Product discovery</strong>
              <small>Explore our catalogue</small>
            </div>
          </div>
          {link}
        </>
      ) : kind === "greeting" ? (
        <div className="greeting-email-card">
          <div className="greeting-rays">✦</div>
          <span>A NEW CONNECTION. A NEW POSSIBILITY.</span>
          <h2>
            A warm
            <br />
            <em>welcome.</em>
          </h2>
          {greeting}
          {copy}
          <div className="welcome-signature">
            With warm regards,
            <br />
            <strong>Team Khetan Ajeya</strong>
          </div>
          {link}
        </div>
      ) : kind === "enquiry" ? (
        <>
          <div className="enquiry-email-title">
            <CheckCircle2 size={37} />
            <div>
              <small>ENQUIRY RECEIVED</small>
              <h2>Thank you for reaching out.</h2>
            </div>
          </div>
          {greeting}
          {copy}
          <div className="email-receipt">
            <div>
              <span>Contact</span>
              <strong>{person.name}</strong>
            </div>
            <div>
              <span>Profile</span>
              <strong>{role}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{person.location}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Ready for team review · demo</strong>
            </div>
          </div>
          <div className="receipt-next">
            <span>1 · Enquiry captured</span>
            <span>2 · Team review</span>
            <span>3 · Personal follow-up</span>
          </div>
          {link}
        </>
      ) : (
        <>
          <div className="followup-email-title">
            <span>LET’S CONTINUE THE CONVERSATION</span>
            <h2>
              Your next step,
              <br />
              made simple.
            </h2>
          </div>
          {greeting}
          {copy}
          <div className="email-agenda">
            <Calendar size={29} />
            <div>
              <strong>A focused project conversation</strong>
              <small>Requirements · Product questions · Next steps</small>
            </div>
          </div>
          <div className="followup-checklist">
            <p>
              <Check size={14} />
              Revisit the product catalogue
            </p>
            <p>
              <Check size={14} />
              Prepare your project requirements
            </p>
            <p>
              <Check size={14} />
              Reply to arrange a conversation
            </p>
          </div>
          {link}
          <div className="personal-signature">
            <img src="/ajeya-original-logo.png" alt="Ajeya" />
            <span>
              Here to help you move forward.
              <br />
              <strong>Team Khetan Ajeya</strong>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
