// v_7 slider working and no more uncaught errors due to setTimeout + getMonth function corrected in DateHelpers component
// radio button click disabled, erase onChange()
import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date"; // necessary for test (date text rendering)
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  // eslint-disable-next-line no-console
  // console.log(data);

  const nextCard = () => {
    if (byDateDesc && byDateDesc.length > 0) { // add this condition make sure byDateDesc is set and not empty 
                                                // before trying to access its length property
      setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        5000
      );
    }
  };

  useEffect(() => {
    nextCard();
  }, [index, byDateDesc]); // Add byDateDesc as a dependency to avoid stale/obsolete closures

  // eslint-disable-next-line no-console
  // console.log("event id Slider", byDateDesc);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <React.Fragment key={event.id || `fallback-key-${idx}`}> {/*  migrate the unique key at the parent level (slide and buttons) */} 
              {/* If event.id is undefined, use of a fallback-key-${idx}) based on the element index. */}
              {/* This ensures that each element has a unique key. */}
              {/* React.Fragment or <>  </> is used to group the elements of each slide without adding an additional DOM node. */}
          <div
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div> {/* display date in text */}
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`radio-${event.id || `fallback-radio-key-${radioIdx}`}`} // same as for previous unique key
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  // onChange={() => setIndex(radioIdx)} // Add an onChange handler to make the button editable
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
