import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'maroon' | 'gold' | 'dark' | 'badge';
  height?: number | string;
  style?: React.CSSProperties;
}

/**
 * Taanvi Official Logo Component
 * Reproduces the authentic serif typography from the brand identity:
 * - 'gold': Gold lettering on transparent background (ideal for maroon/dark backgrounds)
 * - 'maroon': Royal Maroon lettering on transparent background (ideal for white header)
 * - 'dark': Deep Espresso/Charcoal lettering on transparent background
 * - 'badge': Full brand crest featuring the original golden serif lettering on rich maroon
 */
export const TaanviLogo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = "maroon",
  height = 36,
  style = {}
}) => {
  // Map variant to corresponding high-res asset
  let src = "/taanvi-logo-maroon.png";
  if (variant === "gold") {
    src = "/taanvi-logo-gold.png";
  } else if (variant === "dark") {
    src = "/taanvi-logo-dark.png";
  } else if (variant === "badge") {
    src = "/taanvi-logo-badge.jpg";
  }

  return (
    <div 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        ...style 
      }}
      className={className}
    >
      <img
        src={src}
        alt="Taanvi Logo"
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: 'auto',
          maxWidth: '100%',
          display: 'block',
          objectFit: 'contain',
          borderRadius: variant === 'badge' ? '4px' : undefined
        }}
        onError={(e) => {
          // Fallback to high-contrast serif font rendering if image is loading
          const target = e.currentTarget;
          target.style.display = 'none';
          if (target.parentElement) {
            target.parentElement.innerHTML = `<span style="font-family:'Cinzel Decorative','Playfair Display',Georgia,serif;font-size:1.75rem;font-weight:700;color:${variant === 'gold' ? '#E1A144' : '#510C1A'};letter-spacing:0.04em;">Taanvi</span>`;
          }
        }}
      />
    </div>
  );
};
