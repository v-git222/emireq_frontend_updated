import React from "react";
import "./DashboardStatsCard.css";

export default function DashboardStatsCard() {
  return (
    <div className="dashboard-container" role="region" aria-label="dashboard stats">
      {/* Card 1 - Yellow ROI (wrapped so badge can overflow cleanly) */}
      <div className="card-wrapper">
        <section className="card card--yellow" aria-labelledby="roi-title">
          <div className="card__content card__content--center-left">
            <h3 id="roi-title" className="card__label">Avg. ROI</h3>
            <div className="card__headline">24.8%</div>
            <div className="card__sub">Above market avg</div>
          </div>

          {/* bottom decorative circle stays inside and will be clipped by the card */}
          <div className="card__decor-circle" aria-hidden="true"></div>
        </section>

        {/* badge placed as sibling to the card so it can overflow the rounded corner */}
        <div className="badge" aria-hidden="true">
          <div className="badge__inner">
            <svg viewBox="0 0 24 24" className="badge__icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M4 14L10 8L14 12L20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M20 6V12H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Card 2 - Dark center (updated markup) */}
      <section className="card card--dark" aria-labelledby="trusted-title">
        {/* Background art div — CSS will apply the transformed image here */}
        <div className="bg-art" aria-hidden="true" />

        <div className="stat-headline">
          <div className="stat-number">
            500<span className="plus">+</span>
          </div>

          <p id="trusted-title" className="stat-sub">
            Trusted by over 500+ investors and buyers around the globe, we've built a solid reputation!
          </p>
        </div>

        <div className="stat-avatars" aria-hidden="true">
          {/* Dummy avatars from Unsplash — replace with real images in production */}
          <img className="avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop" alt="Investor 1" />
          <img className="avatar" src="https://images.unsplash.com/photo-1545996124-6b3c9f4ea6eb?w=800&q=80&auto=format&fit=crop" alt="Investor 2" />
          <img className="avatar" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80&auto=format&fit=crop" alt="Investor 3" />
          <img className="avatar" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop" alt="Investor 4" />
          <div className="avatar-plus" aria-hidden="true">+</div>
        </div>
      </section>

      {/* Card 3 - Volume */}
      <section className="card card--white" aria-labelledby="volume-title">
        <div className="card__content card__content--top-left">
          <div className="muted">Total Volume</div>
          <div id="volume-title" className="card__headline card__headline--large">$130.80M</div>

          <div className="badge-small" aria-hidden="true">▲ 810%</div>
        </div>

        <div className="chart" aria-hidden="true">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="chart__svg">
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3ea1ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <path d="M0,130 C40,120 80,110 120,115 C160,120 200,90 240,95 C280,100 320,110 360,100 C400,90 440,120 480,125 C520,132 560,110 600,80 L600,160 L0,160 Z" fill="url(#grad)" />
            <g stroke="#cfcfcf" strokeDasharray="6 8" strokeWidth="1" opacity="0.55">
              <line x1="0" y1="40" x2="600" y2="40" />
              <line x1="0" y1="80" x2="600" y2="80" />
              <line x1="0" y1="120" x2="600" y2="120" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
}
