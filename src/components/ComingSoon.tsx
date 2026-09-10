const PLATFORMS = [
	"Workers",
	"Workers AI",
	"Pages",
	"R2",
	"D1",
	"KV",
	"Queues",
	"Hyperdrive",
	"Realtime",
	"Agents SDK",
];

export default function ComingSoon() {
	return (
		<div className="cf-page">
			<header className="cf-nav">
				<a className="cf-brand" href="/" aria-label="justusecloudflare.dev home">
					<span className="cf-wordmark">JUSTUSECLOUDFLARE</span>
				</a>
			</header>

			<main className="cf-hero-wrap">
				<section className="cf-hero">
					<p className="cf-pill">justusecloudflare.dev&nbsp;&middot;&nbsp;Launching soon</p>

					<h1 className="cf-title">
						Built on Cloudflare.
						<br />
						Show it off.
					</h1>

					<p className="cf-sub">
						A community showcase of projects running on the
						<br />
						Cloudflare developer platform.
					</p>

					<a className="cf-cta" href="#submit">
						Submit a project
					</a>
				</section>
			</main>

			<section className="cf-platforms" aria-label="Cloudflare platform products">
				<div className="cf-chips">
					{PLATFORMS.map((platform) => (
						<span key={platform} className="cf-chip">
							{platform}
						</span>
					))}
				</div>
			</section>

			<section id="submit" className="cf-submit-wrap">
				<div className="cf-submit">
					<h2>Have something to show off?</h2>
					<p>
						Project submissions open at launch. If it runs on Cloudflare,
						it belongs here.
					</p>
					<span className="cf-submit-note">Check back soon.</span>
				</div>
			</section>

			<footer className="cf-footer">
				<div className="cf-footer-row">
					<span>justusecloudflare.dev</span>
					<span>&copy; 2026</span>
				</div>
				<p className="cf-disclaimer">
					justusecloudflare.dev is an independent community project and is not
					affiliated with or endorsed by Cloudflare, Inc. Cloudflare and related
					marks are trademarks of Cloudflare, Inc.
				</p>
			</footer>

			<style>{`
				.cf-page {
					min-height: 100dvh;
					display: flex;
					flex-direction: column;
					background: #0b0b0c;
					color: #fff;
					font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					-webkit-font-smoothing: antialiased;
				}
				.cf-nav {
					display: flex;
					align-items: center;
					padding: 1.1rem 1.75rem;
				}
				.cf-brand {
					display: flex;
					align-items: center;
					gap: 0.6rem;
					text-decoration: none;
				}
				.cf-wordmark {
					color: #fff;
					font-weight: 800;
					font-size: 0.82rem;
					letter-spacing: 0.14em;
					white-space: nowrap;
				}
				.cf-hero-wrap {
					display: flex;
					padding: 0 0.65rem 0.65rem;
				}
				.cf-hero {
					position: relative;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
					overflow: hidden;
					border-radius: 22px;
					padding: 5rem 1.5rem 6rem;
					background:
						radial-gradient(60% 45% at 50% 108%, rgba(255, 224, 178, 0.9), rgba(255, 224, 178, 0) 70%),
						linear-gradient(180deg, #f56624 0%, #f97316 55%, #fb8b2e 100%);
				}
				.cf-hero::before {
					content: "";
					position: absolute;
					inset: 0;
					background-image: radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1.4px);
					background-size: 15px 15px;
					mask-image: radial-gradient(75% 75% at 50% 45%, black 20%, transparent 78%);
					pointer-events: none;
				}
				.cf-pill {
					position: relative;
					margin: 0 0 2.2rem;
					font-size: 0.85rem;
					color: rgba(255, 255, 255, 0.92);
					border: 1px solid rgba(255, 255, 255, 0.35);
					background: rgba(255, 255, 255, 0.08);
					padding: 0.55rem 1.1rem;
					border-radius: 999px;
				}
				.cf-title {
					position: relative;
					margin: 0;
					font-size: clamp(2.6rem, 6.5vw, 4.6rem);
					line-height: 1.04;
					letter-spacing: -0.03em;
					font-weight: 600;
					text-wrap: balance;
				}
				.cf-sub {
					position: relative;
					margin: 1.6rem 0 0;
					font-size: clamp(1rem, 2.2vw, 1.2rem);
					line-height: 1.55;
					color: rgba(255, 255, 255, 0.9);
				}
				.cf-cta {
					position: relative;
					margin-top: 2.6rem;
					background: #fff;
					color: #111;
					font-weight: 600;
					font-size: 1rem;
					padding: 0.95rem 2.1rem;
					border-radius: 999px;
					text-decoration: none;
				}
				.cf-platforms {
					padding: 2.5rem 1.75rem 0.5rem;
				}
				.cf-chips {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 0.6rem;
					max-width: 56rem;
					margin: 0 auto;
				}
				.cf-chip {
					font-size: 0.82rem;
					color: #d6d3d1;
					border: 1px solid rgba(255, 255, 255, 0.14);
					background: rgba(255, 255, 255, 0.03);
					padding: 0.45rem 0.95rem;
					border-radius: 999px;
					white-space: nowrap;
				}
				.cf-submit-wrap {
					padding: 2.5rem 1.75rem;
				}
				.cf-submit {
					max-width: 56rem;
					margin: 0 auto;
					text-align: center;
					border: 1px solid rgba(255, 255, 255, 0.1);
					border-radius: 18px;
					padding: 3rem 1.5rem;
					background: rgba(255, 255, 255, 0.02);
				}
				.cf-submit h2 {
					margin: 0;
					font-size: clamp(1.5rem, 3.5vw, 2rem);
					letter-spacing: -0.02em;
					font-weight: 600;
				}
				.cf-submit p {
					margin: 0.9rem auto 0;
					max-width: 30rem;
					color: #a8a29e;
					line-height: 1.6;
				}
				.cf-submit-note {
					display: inline-block;
					margin-top: 1.4rem;
					font-size: 0.82rem;
					color: #f6a54c;
					border: 1px dashed rgba(246, 130, 31, 0.5);
					padding: 0.45rem 1rem;
					border-radius: 999px;
				}
				.cf-footer {
					padding: 0.9rem 1.75rem 1.1rem;
					color: #a8a29e;
					font-size: 0.82rem;
				}
				.cf-footer-row {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.cf-disclaimer {
					margin: 0.75rem 0 0;
					font-size: 0.75rem;
					line-height: 1.5;
					color: #78716c;
					max-width: 42rem;
				}
				@media (max-width: 860px) {
					.cf-wordmark { font-size: 0.72rem; }
				}
			`}</style>
		</div>
	);
}
