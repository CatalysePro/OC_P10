// v6_filter works 
// v7_ events sorted by descending dates
import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState(null); // ** type property initialized at null
  const [currentPage, setCurrentPage] = useState(1); // currentPage initialized at 1

  // ** use selected type value for filtering events
  const filteredEvents = (
    data?.events || []
  ).filter((event) => 
    !type || event.type === type) // ** filter events based on the selected type
    .sort((a, b) => 
      new Date(b.date) - new Date(a.date)); // ** sorting events by descending dates

  const changeType = (evtType) => {
    setCurrentPage(1); // reset to the first page when type changes
    setType(evtType); // set the selected type

    // eslint-disable-next-line no-console
    console.log("Type sélectionné :", evtType);
  };

  const pageNumber = Math.ceil(filteredEvents.length / PER_PAGE); // ** Math.ceil to round up to the next whole number of pageNumber

  const typeList = new Set(data?.events.map((event) => event.type)); // create a unique list of event types

  // eslint-disable-next-line no-console
  console.log(filteredEvents);

  return (
    <>
      {error && <div>An error occurred</div>} 
      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)} // convert typeList to an array and pass it to Select component
            onChange={(value) => changeType(value)} //  ** handle type change directly without prior check of its existence
          />
          <div id="events" className="ListContainer">
            {filteredEvents
              .slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE) // paginate filtered events
              .map((event) => ( 
                // next line wrap each event in a Modal
                <Modal key={event.id} Content={<ModalEvent event={event} />}> 
                  {({ setIsOpened }) => (
                    <EventCard 
                      onClick={() => setIsOpened(true)}
                      // set correct values for all necessary data
                      imageSrc={event.cover}
                      title={event.title}
                      date={new Date(event.date)}
                      label={event.type}
                    />
                  )}
                </Modal>
              ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber || 0)].map((_, n) => ( 
                // eslint-disable-next-line react/no-array-index-key
                <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}> 
                  {n + 1}
                  </a> // handle page change
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
