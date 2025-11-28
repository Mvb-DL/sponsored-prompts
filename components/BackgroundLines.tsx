// components/BackgroundLines.tsx

export function BackgroundLines() {
  return (
    <div className="background-lines">
      <svg
        className="background-lines__inner"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Hauptgradient mit deinen Difficulty-Farben */}
          <linearGradient
            id="bgLinesGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            {/* easiest */}
            <stop offset="0%" stopColor="#579DFF" stopOpacity="0.9" />
            {/* easy */}
            <stop offset="14%" stopColor="#6CC3E0" stopOpacity="0.9" />
            {/* moderate-easy */}
            <stop offset="28%" stopColor="#4BCE97" stopOpacity="0.9" />
            {/* moderate */}
            <stop offset="42%" stopColor="#F5CD47" stopOpacity="0.9" />
            {/* moderate-hard */}
            <stop offset="56%" stopColor="#FEA362" stopOpacity="0.9" />
            {/* hard */}
            <stop offset="70%" stopColor="#F87168" stopOpacity="0.9" />
            {/* very-hard */}
            <stop offset="84%" stopColor="#E774BB" stopOpacity="0.9" />
            {/* hardest */}
            <stop offset="100%" stopColor="#9F8FEF" stopOpacity="0.9" />
          </linearGradient>

          {/* weichere Variante für statische Linien */}
          <linearGradient
            id="bgLinesGradientSoft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#579DFF" stopOpacity="0.35" />
            <stop offset="14%" stopColor="#6CC3E0" stopOpacity="0.35" />
            <stop offset="28%" stopColor="#4BCE97" stopOpacity="0.35" />
            <stop offset="42%" stopColor="#F5CD47" stopOpacity="0.35" />
            <stop offset="56%" stopColor="#FEA362" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#F87168" stopOpacity="0.35" />
            <stop offset="84%" stopColor="#E774BB" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9F8FEF" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* statische + animierte Linien übereinander */}

        {/* Diagonal */}
        <path
          className="line-static"
          d="M -100 150 L 150 50 L 450 120 L 750 40 L 1100 120"
          stroke="url(#bgLinesGradientSoft)"
        />
        <path
          className="line-1"
          d="M -100 150 L 150 50 L 450 120 L 750 40 L 1100 120"
          stroke="url(#bgLinesGradient)"
        />

        {/* weiche Kurve */}
        <path
          className="line-static"
          d="M -80 400 C 200 360, 380 420, 620 380 C 820 340, 980 380, 1120 360"
          stroke="url(#bgLinesGradientSoft)"
        />
        <path
          className="line-2 line-soft"
          d="M -80 400 C 200 360, 380 420, 620 380 C 820 340, 980 380, 1120 360"
          stroke="url(#bgLinesGradient)"
        />

        {/* vertikal-diagonal */}
        <path
          className="line-static"
          d="M 100 1050 L 160 780 L 260 620 L 340 480 L 460 320 L 620 200 L 840 120 L 1080 60"
          stroke="url(#bgLinesGradientSoft)"
        />
        <path
          className="line-3"
          d="M 100 1050 L 160 780 L 260 620 L 340 480 L 460 320 L 620 200 L 840 120 L 1080 60"
          stroke="url(#bgLinesGradient)"
        />

        {/* zickzack */}
        <path
          className="line-static"
          d="M -50 700 L 220 640 L 380 700 L 520 660 L 720 720 L 960 680 L 1150 720"
          stroke="url(#bgLinesGradientSoft)"
        />
        <path
          className="line-4 line-soft"
          d="M -50 700 L 220 640 L 380 700 L 520 660 L 720 720 L 960 680 L 1150 720"
          stroke="url(#bgLinesGradient)"
        />
      </svg>
    </div>
  );
}
