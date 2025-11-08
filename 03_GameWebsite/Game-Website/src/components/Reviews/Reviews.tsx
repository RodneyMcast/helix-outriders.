import React from "react";
import "./Reviews.css";
import ignBg from "../../Images/reviews-ign.png";

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        

        <article className="reviews__card" aria-label="IGN Review for Helix Outriders">
          {/* background image */}
          <div className="reviews__bg" style={{ backgroundImage: `url(${ignBg})` }} />

          {/* slight darken so the image doesn't blow out */}
          <div className="reviews__imageShade" />

          {/* RIGHT PANEL (like Figma) */}
          <aside className="reviews__panel">
            <div className="reviews__panelInner">
              <h3 className="reviews__headline font-couture">
                <span>EXTRACTION</span>
                <span>SHOOTER LIKE</span>
                <span>NEVER SEEN</span>
                <span>BEFORE</span>
              </h3>

              <div className="reviews__source">
                <span className="reviews__dash" />
                <span className="reviews__ign font-couture">IGN</span>
              </div>
            </div>
          </aside>
        </article>

       
      </div>
    </section>
  );
};

export default Reviews;
