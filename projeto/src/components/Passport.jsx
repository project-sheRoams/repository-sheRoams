import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "@/styles/Passport.module.css";

const STAMP_WIDTH = 100;
const STAMP_HEIGHT = 100;
const MAX_PLACEMENT_ATTEMPTS = 30;

// Verifica se dois carimbos (posição top/left em px) se sobrepõem
const doStampsOverlap = (posA, posB) => {
  const aTop = parseFloat(posA.top);
  const aLeft = parseFloat(posA.left);
  const bTop = parseFloat(posB.top);
  const bLeft = parseFloat(posB.left);

  return (
    aLeft < bLeft + STAMP_WIDTH &&
    aLeft + STAMP_WIDTH > bLeft &&
    aTop < bTop + STAMP_HEIGHT &&
    aTop + STAMP_HEIGHT > bTop
  );
};

// Gera uma posição aleatória que não sobrepõe nenhum carimbo já existente na página
const getNonOverlappingPosition = (pageWidth, pageHeight, existingStamps) => {
  const maxLeft = pageWidth - STAMP_WIDTH;
  const maxTop = pageHeight - STAMP_HEIGHT;

  for (let attempt = 0; attempt < MAX_PLACEMENT_ATTEMPTS; attempt++) {
    const candidate = {
      top: `${Math.random() * maxTop}px`,
      left: `${Math.random() * maxLeft}px`,
    };

    const overlaps = existingStamps.some((stamp) =>
      doStampsOverlap(candidate, stamp.position),
    );

    if (!overlaps) {
      return candidate;
    }
  }

  // Se a página já estiver muito cheia e não achar espaço livre em 30 tentativas,
  // usa a última posição tentada mesmo assim, para não travar a aplicação.
  return {
    top: `${Math.random() * maxTop}px`,
    left: `${Math.random() * maxLeft}px`,
  };
};

const PageFlip = forwardRef((props, ref) => {
  const bookRef = useRef();
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [stamps, setStamps] = useState({}); // Carimbos guardados por página
  const [showStampsContainer, setShowStampsContainer] = useState(false);

  useImperativeHandle(ref, () => ({
    nextPage: () => {
      if (currentPageIndex < pages.length - 1) {
        setCurrentPageIndex(currentPageIndex + 1);
      }
    },
    previousPage: () => {
      if (currentPageIndex > 0) {
        setCurrentPageIndex(currentPageIndex - 1);
      }
    },
  }));

  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch("/api/passport");
      const data = await response.json();
      setPages(data.pages);
    };

    fetchPages();
  }, []);

  // Lista de carimbos disponíveis.
  // IMPORTANTE: cada ficheiro precisa existir em public/passportAssets/
  const availableStamps = [
    "/passportAssets/portugal-stamp.svg",
    "/passportAssets/brasil-stamp.svg",
    "/passportAssets/china-stamp.svg",
    "/passportAssets/germany-stamp.svg",
    "/passportAssets/morocco-stamp.svg",
    "/passportAssets/japan-stamp.svg",
    "/passportAssets/france-stamp.svg",
    "/passportAssets/italy-stamp.svg",
    "/passportAssets/spain-stamp.svg",
    "/passportAssets/usa-stamp.svg",
    "/passportAssets/canada-stamp.svg",
    "/passportAssets/australia-stamp.svg",
  ];

  const handleAddStamp = (stamp) => {
    setStamps((prevStamps) => {
      const currentStamps = prevStamps[currentPageIndex] || [];
      const position = getNonOverlappingPosition(354, 524, currentStamps);

      return {
        ...prevStamps,
        [currentPageIndex]: [...currentStamps, { url: stamp, position }],
      };
    });
  };

  return (
    <div className={styles["container"]}>
      <HTMLFlipBook width={354} height={524} ref={bookRef}>
        <div className={`${styles["page"]}`}>
          <img src="/passportAssets/passportCover.svg" alt="Passport Cover" />
        </div>
        {pages.map((page, index) => (
          <div
            key={index}
            className={`page ${
              currentPageIndex === index ? styles["active-page"] : ""
            }`}
          >
            <h2>{page.title}</h2>
            <p>{page.content}</p>

            {(stamps[index] || []).map((stamp, stampIndex) => (
              <div
                key={stampIndex}
                className={`${styles.stamp}`}
                style={{
                  backgroundImage: `url(${stamp.url})`,
                  ...stamp.position,
                }}
              />
            ))}
          </div>
        ))}
      </HTMLFlipBook>
      <button
        onClick={() => setShowStampsContainer(!showStampsContainer)}
        className={styles["add-stamp-button"]}
      >
        {showStampsContainer ? "Hide Stamps" : "Show Stamps"}
      </button>
      {showStampsContainer && (
        <div className={styles["stamps-container"]}>
          {availableStamps.map((stamp, index) => (
            <img
              key={index}
              src={stamp}
              alt={`Stamp ${index + 1}`}
              className={styles["stamp-image"]}
              onClick={() => handleAddStamp(stamp)}
            />
          ))}
        </div>
      )}
    </div>
  );
});

PageFlip.displayName = "PageFlip";

export default PageFlip;
