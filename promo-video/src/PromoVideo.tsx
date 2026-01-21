import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const colors = {
  bg: "#0a0a0b",
  bgSecondary: "#111113",
  text: "#fafafa",
  textSecondary: "#a1a1aa",
  border: "#27272a",
  codeBg: "#18181b",
};

// Title Scene
const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = spring({ frame, fps, from: 50, to: 0, durationInFrames: 30 });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = spring({ frame: frame - 15, fps, from: 30, to: 0, durationInFrames: 30 });

  const badgeOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" });
  const badgeScale = spring({ frame: frame - 40, fps, from: 0.8, to: 1, durationInFrames: 20 });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      {/* Grid background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        opacity: 0.3,
      }} />

      {/* Badge */}
      <div style={{
        position: "absolute",
        top: 200,
        opacity: badgeOpacity,
        transform: `scale(${badgeScale})`,
        backgroundColor: colors.bgSecondary,
        border: `1px solid ${colors.border}`,
        borderRadius: 50,
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: colors.text }} />
        <span style={{ color: colors.textSecondary, fontSize: 24, fontFamily: "Inter, sans-serif" }}>
          Claude Code Skill
        </span>
      </div>

      {/* Title */}
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center" }}>
        <h1 style={{
          fontSize: 120,
          fontWeight: 800,
          color: colors.text,
          fontFamily: "Inter, sans-serif",
          margin: 0,
          letterSpacing: -3,
        }}>
          Roier SEO
        </h1>
      </div>

      {/* Subtitle */}
      <div style={{
        opacity: subtitleOpacity,
        transform: `translateY(${subtitleY}px)`,
        textAlign: "center",
        marginTop: 30,
      }}>
        <p style={{
          fontSize: 48,
          color: colors.textSecondary,
          fontFamily: "Inter, sans-serif",
          margin: 0,
        }}>
          AI-Powered Technical SEO
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Problem Scene
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [
    "Missing meta descriptions",
    "No structured data",
    "Poor accessibility scores",
    "Slow Core Web Vitals",
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{
          fontSize: 64,
          color: colors.text,
          fontFamily: "Inter, sans-serif",
          marginBottom: 60,
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          SEO issues slowing you down?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {items.map((item, i) => {
            const delay = 20 + i * 15;
            const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });
            const x = spring({ frame: frame - delay, fps, from: -50, to: 0, durationInFrames: 20 });

            return (
              <div key={i} style={{
                opacity,
                transform: `translateX(${x}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
                justifyContent: "center",
              }}>
                <span style={{ color: "#ef4444", fontSize: 32 }}>✗</span>
                <span style={{ color: colors.textSecondary, fontSize: 36, fontFamily: "Inter, sans-serif" }}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Solution Scene
const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const titleScale = spring({ frame, fps, from: 0.9, to: 1, durationInFrames: 20 });

  const features = [
    { icon: "🔍", text: "Lighthouse Audits" },
    { icon: "🔧", text: "Auto-Fix Issues" },
    { icon: "⚡", text: "Framework Aware" },
    { icon: "📊", text: "Core Web Vitals" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{
          fontSize: 72,
          color: colors.text,
          fontFamily: "Inter, sans-serif",
          marginBottom: 80,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}>
          One skill. Everything fixed.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 900 }}>
          {features.map((feature, i) => {
            const delay = 25 + i * 12;
            const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });
            const scale = spring({ frame: frame - delay, fps, from: 0.8, to: 1, durationInFrames: 15 });

            return (
              <div key={i} style={{
                opacity,
                transform: `scale(${scale})`,
                backgroundColor: colors.bgSecondary,
                border: `1px solid ${colors.border}`,
                borderRadius: 16,
                padding: "30px 40px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}>
                <span style={{ fontSize: 48 }}>{feature.icon}</span>
                <span style={{ color: colors.text, fontSize: 28, fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Install Scene
const InstallScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const commandOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: "clamp" });
  const commandScale = spring({ frame: frame - 15, fps, from: 0.95, to: 1, durationInFrames: 20 });

  // Typing effect
  const command = "npx skills add kemenystudio/roier-skill";
  const typedLength = Math.min(Math.floor((frame - 30) / 1.5), command.length);
  const displayCommand = frame > 30 ? command.slice(0, typedLength) : "";
  const showCursor = frame > 30 && frame % 15 < 10;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize: 32,
          color: colors.textSecondary,
          fontFamily: "Inter, sans-serif",
          marginBottom: 40,
          opacity: labelOpacity,
          textTransform: "uppercase",
          letterSpacing: 4,
        }}>
          One-Click Install
        </p>

        <div style={{
          opacity: commandOpacity,
          transform: `scale(${commandScale})`,
          backgroundColor: colors.codeBg,
          border: `1px solid ${colors.border}`,
          borderRadius: 16,
          padding: "40px 60px",
          display: "inline-block",
        }}>
          <code style={{
            fontSize: 42,
            fontFamily: "JetBrains Mono, monospace",
            color: colors.text,
          }}>
            <span style={{ color: colors.textSecondary }}>$ </span>
            {displayCommand}
            {showCursor && <span style={{ borderRight: `3px solid ${colors.text}`, marginLeft: 2 }}>&nbsp;</span>}
          </code>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// CTA Scene
const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const logoScale = spring({ frame, fps, from: 0.8, to: 1, durationInFrames: 25 });

  const textOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });
  const urlOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)`,
      }} />

      <div style={{ textAlign: "center" }}>
        {/* Logo */}
        <div style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          marginBottom: 40,
        }}>
          <div style={{
            width: 120,
            height: 120,
            backgroundColor: colors.bgSecondary,
            border: `2px solid ${colors.border}`,
            borderRadius: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}>
            <span style={{ fontSize: 64, fontWeight: 800, color: colors.text, fontFamily: "Inter, sans-serif" }}>R</span>
          </div>
        </div>

        {/* Text */}
        <h2 style={{
          fontSize: 72,
          color: colors.text,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          margin: 0,
          opacity: textOpacity,
        }}>
          Fix your SEO today
        </h2>

        {/* URL */}
        <p style={{
          fontSize: 32,
          color: colors.textSecondary,
          fontFamily: "Inter, sans-serif",
          marginTop: 40,
          opacity: urlOpacity,
        }}>
          github.com/kemenystudio/roier-skill
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Main Video Component
export const PromoVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Sequence from={0} durationInFrames={90}>
        <TitleScene />
      </Sequence>

      <Sequence from={90} durationInFrames={90}>
        <ProblemScene />
      </Sequence>

      <Sequence from={180} durationInFrames={90}>
        <SolutionScene />
      </Sequence>

      <Sequence from={270} durationInFrames={90}>
        <InstallScene />
      </Sequence>

      <Sequence from={360} durationInFrames={90}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};
