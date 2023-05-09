import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { events } from "../constants";
import "./styles/EventsTimeline.css"



const EventCard = ({ event }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff'
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631'
    }}
    date={event.date}
    iconStyle={{
      background: event.iconBg
    }}
    >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {event.title}
      </h3>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {event.points.map((point, index) => (
        <li
          key={`event-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
);


function Timeline() {
  return (
    <div
      id="Team"
      className="my-[10%]"
      >

      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="1-column">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </VerticalTimeline>
      </div>


</div>

);
}

export default Timeline
