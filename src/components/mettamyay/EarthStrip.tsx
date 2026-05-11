const EarthStrip = () => (
  <div
    className="h-2"
    style={{
      background: `linear-gradient(90deg,
        hsl(var(--mm-clay-dark)) 0%,
        hsl(var(--mm-clay)) 25%,
        hsl(var(--mm-gold)) 50%,
        hsl(var(--mm-moss)) 75%,
        hsl(var(--mm-charcoal)) 100%
      )`,
    }}
  />
);

export default EarthStrip;
