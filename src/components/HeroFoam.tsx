/** Bule care urcă + reflex luminos în hero (doar CSS, decorativ). */
const BUBBLES = [
  { left: '6%', size: 18, dur: 11, delay: -2, sway: 18 },
  { left: '14%', size: 34, dur: 15, delay: -9, sway: -24 },
  { left: '23%', size: 12, dur: 9, delay: -4, sway: 14 },
  { left: '34%', size: 26, dur: 13, delay: -11, sway: 26 },
  { left: '46%', size: 14, dur: 10, delay: -6, sway: -16 },
  { left: '55%', size: 40, dur: 17, delay: -3, sway: 30 },
  { left: '64%', size: 16, dur: 12, delay: -8, sway: -20 },
  { left: '73%', size: 22, dur: 14, delay: -1, sway: 22 },
  { left: '82%', size: 10, dur: 8, delay: -5, sway: -12 },
  { left: '90%', size: 30, dur: 16, delay: -12, sway: 18 },
  { left: '40%', size: 8, dur: 7, delay: -3, sway: 10 },
  { left: '96%', size: 14, dur: 11, delay: -7, sway: -14 },
];

export default function HeroFoam({ count = BUBBLES.length }: { count?: number }) {
  return (
    <>
      <div className="shimmer" aria-hidden="true" />
      <div className="foam" aria-hidden="true">
        {BUBBLES.slice(0, count).map((b, i) => (
          <span
            key={i}
            style={
              {
                left: b.left,
                width: b.size,
                height: b.size,
                '--dur': `${b.dur}s`,
                '--delay': `${b.delay}s`,
                '--sway': `${b.sway}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}
