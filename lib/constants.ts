export type EventItem ={
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events = [
    {
        image: "/images/event1.png",
        title: "Next.js Conf",
        slug: "nextjs-conf-2026",
        location: "San Francisco, CA",
        date: "October 21–22, 2026",
        time: "09:00 – 18:00",
    },
    {
        image: "/images/event2.png",
        title: "React Summit",
        slug: "react-summit-2026",
        location: "Amsterdam, Netherlands",
        date: "June 17–18, 2026",
        time: "10:00 – 17:30",
    },
    {
        image: "/images/event3.png",
        title: "JS World Conference",
        slug: "js-world-conference-2026",
        location: "Online / Global",
        date: "April 8–10, 2026",
        time: "12:00 – 20:00",
    },
    {
        image: "/images/event4.png",
        title: "Global Hackathon Week",
        slug: "global-hackathon-week-2026",
        location: "Berlin, Germany",
        date: "March 11–17, 2026",
        time: "All Day",
    },
    {
        image: "/images/event5.png",
        title: "AI & Web Dev Meetup",
        slug: "ai-web-dev-meetup-belgrade",
        location: "Belgrade, Serbia",
        date: "February 24, 2026",
        time: "18:00 – 21:00",
    },
];
