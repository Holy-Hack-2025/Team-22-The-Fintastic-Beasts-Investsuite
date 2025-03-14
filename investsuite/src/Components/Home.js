// This is the code for the homepage of our REACT app.

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example flashcards given in the app. Should be replaced by AI generated ones in the final model.
const flashcards = [
  { id: 1, content: "Your investment grew by 5% this week!" },
  { id: 2, content: "Check out the latest trends in tech stocks!" },
  { id: 3, content: "Your portfolio beat 80% of investors!" },
  { id: 4, content: "Explore new investment opportunities!" },
];

// Main function of the page.
function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // functionality to drag the flashcards.
  const handleDragEnd = (event, info) => {
    if (info.offset.y < -100 && currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.y > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // gives the HTML and makes sure everything is animated when scrolling.
  return (
    <div className="content-area">
      {/* <div className="home-container"> */}
      <AnimatePresence mode="wait">
        {flashcards.map((card, index) =>
          index === currentIndex ? (
            <motion.div
              key={card.id}
              className="flashcard"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {card.content}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
    // </div>
  );
}

export default HomePage;
