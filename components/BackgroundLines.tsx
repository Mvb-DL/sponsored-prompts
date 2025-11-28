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
        {/* Alle Linien sind jetzt Kurven (C / S) statt eckiger L-Segmente */}

        {/* Obere Wellenlinie */}
        <path
          className="line-static"
          d="M -120 140
             C  80  60, 280  60, 480 130
             S  880 200, 1120  80"
          stroke="url(#bgLinesGradientSoft)"
          fill="none"
        />
        <path
          className="line-1"
          d="M -120 140
             C  80  60, 280  60, 480 130
             S  880 200, 1120  80"
          stroke="url(#bgLinesGradient)"
          fill="none"
        />

        {/* Mittlere weiche Kurve */}
        <path
          className="line-static"
          d="M -80 400
             C 120 360, 320 440, 520 380
             S  920 340, 1120 360"
          stroke="url(#bgLinesGradientSoft)"
          fill="none"
        />
        <path
          className="line-2 line-soft"
          d="M -80 400
             C 120 360, 320 440, 520 380
             S  920 340, 1120 360"
          stroke="url(#bgLinesGradient)"
          fill="none"
        />

        {/* Vertikal geschwungene Linie von unten nach oben */}
        <path
          className="line-static"
          d="M 80 1040
             C 160 880, 280 720, 380 560
             S  720 260, 1080  80"
          stroke="url(#bgLinesGradientSoft)"
          fill="none"
        />
        <path
          className="line-3"
          d="M 80 1040
             C 160 880, 280 720, 380 560
             S  720 260, 1080  80"
          stroke="url(#bgLinesGradient)"
          fill="none"
        />

        {/* Untere Wellenlinie */}
        <path
          className="line-static"
          d="M -120 720
             C  40 680, 260 640, 420 700
             S  820 780, 1160 720"
          stroke="url(#bgLinesGradientSoft)"
          fill="none"
        />
        <path
          className="line-4 line-soft"
          d="M -120 720
             C  40 680, 260 640, 420 700
             S  820 780, 1160 720"
          stroke="url(#bgLinesGradient)"
          fill="none"
        />
      </svg>
    </div>
  );
}
