import React from 'react';

interface ScrollingGalleryProps {
  onSelectCategory?: (category: string) => void;
}

export const ScrollingGallery: React.FC<ScrollingGalleryProps> = ({ onSelectCategory }) => {
  // Grid 1 from Nishorama live site (exact matched order)
  // item-1 (span 2 cols, 5 rows): 5_7c16a3dc.png (5 women friends laughing in festive kurtis with sweets)
  // item-2 (col 3, row 1-2): DSC01893.jpg (2 women on bed)
  // item-3 (col 3, row 3-5): 4_a5ba5478.png (2 women in white pants)
  // item-4 (col 4, row 1-3): 1_cd52efd0.png (group laughing)
  // item-5 (col 4, row 4-5): DSC02412.jpg (2 women in auto/car)
  const grid1 = [
    { className: 'item item-1', img: '/images/gallery/5_7c16a3dc.png', cat: 'Kurtis' },
    { className: 'item item-2', img: '/images/gallery/DSC01893.jpg', cat: 'dresses' },
    { className: 'item item-3', img: '/images/gallery/4_a5ba5478.png', cat: 'pants' },
    { className: 'item item-4', img: '/images/gallery/1_cd52efd0.png', cat: 'Kurtis' },
    { className: 'item item-5', img: '/images/gallery/DSC02412.jpg', cat: 'sets' },
  ];

  // Grid 2 from Nishorama live site
  // item-1: 1_5_dd925f13.png (close-up models smiling in white floral dress)
  // item-2: 3_4_a49fc10f.png (2 women in blue/black printed kurtis)
  // item-3: 7_1_71490700.png (woman in black corset leaning back)
  // item-4: 16_140db61c.png (2 models party shots)
  // item-5: DSC01893.jpg (bedroom celebration)
  const grid2 = [
    { className: 'item item-1', img: '/images/gallery/1_5_dd925f13.png', cat: 'dresses' },
    { className: 'item item-2', img: '/images/gallery/3_4_a49fc10f.png', cat: 'Kurtis' },
    { className: 'item item-3', img: '/images/gallery/7_1_71490700.png', cat: 'corset-tops' },
    { className: 'item item-4', img: '/images/gallery/16_140db61c.png', cat: 'sets' },
    { className: 'item item-5', img: '/images/gallery/DSC01893.jpg', cat: 'sleeveless' },
  ];

  return (
    <section className="gallery-grid-wrapper desktop" style={{ width: '100%', overflow: 'hidden', padding: '2vw 0', background: '#FFFFFF' }}>
      <style>{`
        /* EXACT NISHORAMA CUST-GALLERY STYLING */
        .gallery-grid-wrapper {
          width: 100%;
          height: calc(100vh + 4vw);
          max-height: 980px;
          min-height: 600px;
          display: flex;
          overflow-x: hidden;
          overflow-y: hidden;
          padding: 2vw 0;
          position: relative;
        }

        .gallery-grid-main {
          width: max-content;
          height: 100%;
          display: flex;
          animation: home-gallery-move 40s linear infinite;
        }

        .gallery-grid-wrapper:hover .gallery-grid-main {
          animation-play-state: paused;
        }

        @keyframes home-gallery-move {
          0% {
            transform: translate(0);
          }
          to {
            transform: translate(-50%);
          }
        }

        .gallery-grid {
          flex: 0 0 100%;
          width: calc(100vw - 14px);
          max-width: calc(100vw - 14px);
          height: 100%;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          grid-template-rows: repeat(5, 1fr);
          gap: 1.2vw;
          padding-right: 1.2vw;
        }

        .gallery-grid-wrapper::-webkit-scrollbar {
          display: none;
        }

        .gallery-grid-main .item {
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .gallery-grid-main .item:hover {
          transform: scale(1.012);
          z-index: 5;
          box-shadow: 0 12px 30px rgba(72, 41, 34, 0.15);
        }

        .gallery-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gallery-grid .item-1 {
          grid-column: 1 / 3;
          grid-row: 1 / 6;
        }

        .gallery-grid .item-2 {
          grid-column: 3;
          grid-row: 1 / 3;
        }

        .gallery-grid .item-3 {
          grid-column-start: 3;
          grid-row: 3 / 6;
        }

        .gallery-grid .item-4 {
          grid-column: 4;
          grid-row: 1 / 4;
        }

        .gallery-grid .item-5 {
          grid-column: 4;
          grid-row: 4 / 6;
        }

        .gallery-grid .item-1 img {
          border-radius: 72px;
        }

        .gallery-grid .item-2 img,
        .gallery-grid .item-3 img,
        .gallery-grid .item-4 img,
        .gallery-grid .item-5 img {
          border-radius: 48px;
        }

        @media screen and (max-width: 950px) {
          .gallery-grid-wrapper {
            height: 75vh;
            min-height: 480px;
          }
          .gallery-grid {
            width: 92vw;
            max-width: 92vw;
            gap: 8px;
            padding-right: 8px;
          }
          .gallery-grid .item-1 img {
            border-radius: 36px;
          }
          .gallery-grid .item-2 img,
          .gallery-grid .item-3 img,
          .gallery-grid .item-4 img,
          .gallery-grid .item-5 img {
            border-radius: 24px;
          }
        }
      `}</style>

      <main className="gallery-grid-main">
        {/* Gallery Grid 1 */}
        <div className="gallery-grid">
          {grid1.map((item, index) => (
            <div
              key={`g1-${index}`}
              className={item.className}
              onClick={() => onSelectCategory && onSelectCategory(item.cat)}
            >
              <img src={item.img} alt="Taanvi Festive Campaign" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Gallery Grid 2 */}
        <div className="gallery-grid">
          {grid2.map((item, index) => (
            <div
              key={`g2-${index}`}
              className={item.className}
              onClick={() => onSelectCategory && onSelectCategory(item.cat)}
            >
              <img src={item.img} alt="Taanvi Lookbook" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Duplicate Grid 1 for Infinite Seamless 50% translation */}
        <div className="gallery-grid">
          {grid1.map((item, index) => (
            <div
              key={`g1-dup-${index}`}
              className={item.className}
              onClick={() => onSelectCategory && onSelectCategory(item.cat)}
            >
              <img src={item.img} alt="Taanvi Festive Campaign" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Duplicate Grid 2 for Infinite Seamless 50% translation */}
        <div className="gallery-grid">
          {grid2.map((item, index) => (
            <div
              key={`g2-dup-${index}`}
              className={item.className}
              onClick={() => onSelectCategory && onSelectCategory(item.cat)}
            >
              <img src={item.img} alt="Taanvi Lookbook" loading="lazy" />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};
