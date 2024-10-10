/* eslint-disable react/prop-types */
// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button } from "@mui/material";
// import { mens_kurta } from "../../../Data/mens_kurta";

// const HomeSectionCarosel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const responsive = {
//     0: {
//       items: 1, //for width >0px 1 item
//     },
//     720: {
//       items: 3, //for width >720px 2 item
//     },
//     1024: {
//       items: 5.5, //for width >1024px 4 item
//     },
//   };

//   // for button functionality
//   const slidePrev = () => {
//     setActiveIndex(activeIndex - 1);
//     // setActiveIndex((prevIndex) => prevIndex - 1);
//   };
//   const slideNext = () => {
//     setActiveIndex(activeIndex + 1);
//     // setActiveIndex((prevIndex) => prevIndex + 1);
//   };

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const items = mens_kurta
//     .slice(0, 15)
//     .map((item) => <HomeSectionCard product={item} />);
//   return (
//     <div className="border">
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           responsive={responsive} //for responsive
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== items.length - 5 && (
//           <Button
//             onClick={slideNext}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== 0 && (
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(-90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="prev"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarosel;


// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button } from "@mui/material";
// import { mens_kurta } from "../../../Data/mens_kurta";

// const HomeSectionCarousel = () => {
//   const carouselRef = React.useRef(null); // Create a ref to access AliceCarousel's methods

//   const responsive = {
//     0: {
//       items: 1, // for width >0px 1 item
//     },
//     720: {
//       items: 3, // for width >720px 3 items
//     },
//     1024: {
//       items: 5.5, // for width >1024px 5.5 items
//     },
//   };

//   const slidePrev = () => {
//     carouselRef.current.slidePrev(); // Use AliceCarousel's slidePrev method
//   };

//   const slideNext = () => {
//     carouselRef.current.slideNext(); // Use AliceCarousel's slideNext method
//   };

//   const items = mens_kurta.slice(0, 15).map((item, index) => (
//     <HomeSectionCard key={index} product={item} />
//   ));

//   return (
//     <div className="border">
//       <div className="relative p-5">
//         <AliceCarousel
//           ref={carouselRef} // Attach ref to the AliceCarousel component
//           items={items}
//           responsive={responsive}
//           disableDotsControls // Disable dots below the carousel
//           controlsStrategy="responsive" // Better control strategy for responsiveness
//           autoWidth
//         />
//         <Button
//           onClick={slideNext}
//           variant="contained"
//           className="z-50 bg-white"
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="next"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>

//         <Button
//           onClick={slidePrev}
//           variant="contained"
//           className="z-50 bg-white"
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(-90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="prev"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = React.useRef(null);

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5.5,
    },
  };

  const maxVisibleItems = responsive[1500].items;
  const totalItems = data.slice(0, 10).length;

  const slidePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.slidePrev();
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < totalItems - maxVisibleItems) {
      carouselRef.current.slideNext();
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-bold text-gray-900 py-5">{sectionName}</h2>
    <div className="relative border" style={{ padding: "0 20px" }}>
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        controlsStrategy="responsive"
      />

      {activeIndex > 0 && (
        <Button
          onClick={slidePrev}
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%) rotate(-90deg)",
            bgcolor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            minWidth: "40px",
            minHeight: "40px",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}

      {activeIndex < totalItems - maxVisibleItems && (
        <Button
          onClick={slideNext}
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%) rotate(90deg)",
            bgcolor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            minWidth: "40px",
            minHeight: "40px",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}
    </div>
    </div>
  );
};

export default HomeSectionCarousel;



