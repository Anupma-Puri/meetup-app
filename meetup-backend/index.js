const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const events = [
  {
    id: 1,
    title: "Tech Conference",
    date: "Thu Jul 13 2023 7:00:00 AM IST",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    topic: "Technology and Innovation",
    description:
      "Join industry experts to explore trends in AI, cloud computing, frontend engineering, and startup innovation. This conference features keynote talks, networking sessions, and panel discussions designed for professionals and students.",
    sessionTimings: "7:00 AM - 10:00 AM",
    speakers: [
      {
        name: "Rohit Mehta",
        role: "Senior Software Engineer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Ananya Shah",
        role: "Cloud Architect",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    ],
    price: "₹1,200",
    venue: "Ahmedabad Convention Hall",
    address: "21 Riverfront Road, Ahmedabad",
    dressCode: "Business Casual",
    ageRestrictions: "18 and above",
    tags: ["tech", "conference", "networking"]
  },
  {
    id: 2,
    title: "Design Workshop",
    date: "Mon Jul 10 2023 2:00:00 PM IST",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    topic: "UI/UX and Product Design",
    description:
      "A hands-on design workshop focused on wireframing, design systems, typography, color hierarchy, and portfolio-quality UI screens. Great for beginners and junior designers.",
    sessionTimings: "2:00 PM - 5:00 PM",
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Product Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ],
    price: "₹900",
    venue: "Design Studio Hub",
    address: "44 CG Road, Ahmedabad",
    dressCode: "Smart Casual",
    ageRestrictions: "16 and above",
    tags: ["design", "uiux", "workshop"]
  },
  {
    id: 3,
    title: "Marketing Seminar",
    date: "Tue Aug 15 2023 10:00:00 AM IST",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    topic: "Digital Marketing Growth",
    description:
      "Stay ahead in digital marketing with sessions on content strategy, paid campaigns, personal branding, SEO, and analytics. Includes networking time and Q&A.",
    sessionTimings: "10:00 AM - 12:00 PM",
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/50.jpg"
      },
      {
        name: "Michael Brown",
        role: "SEO Specialist",
        image: "https://randomuser.me/api/portraits/men/52.jpg"
      }
    ],
    price: "₹3,000",
    venue: "Marketing City",
    address: "789 Marketing Avenue, City",
    dressCode: "Smart Casual",
    ageRestrictions: "18 and above",
    tags: ["marketing", "digital", "growth"]
  },
  {
    id: 4,
    title: "Online Photography Meetup",
    date: "Sat Aug 19 2023 6:30:00 PM IST",
    type: "Online",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    topic: "Street and Travel Photography",
    description:
      "An online meetup for photography lovers. Learn about composition, storytelling through visuals, editing workflow, and building an Instagram-worthy portfolio.",
    sessionTimings: "6:30 PM - 8:00 PM",
    speakers: [
      {
        name: "Nina Verma",
        role: "Travel Photographer",
        image: "https://randomuser.me/api/portraits/women/22.jpg"
      }
    ],
    price: "Free",
    venue: "Zoom",
    address: "Online Event",
    dressCode: "No Dress Code",
    ageRestrictions: "No restriction",
    tags: ["photography", "online", "creative"]
  },
  {
    id: 5,
    title: "Startup Networking Night",
    date: "Fri Aug 25 2023 7:30:00 PM IST",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80",
    topic: "Founders, Builders and Investors",
    description:
      "Meet startup founders, aspiring entrepreneurs, designers, and developers in an evening of networking, pitch sharing, and collaboration opportunities.",
    sessionTimings: "7:30 PM - 10:00 PM",
    speakers: [
      {
        name: "Karan Patel",
        role: "Startup Founder",
        image: "https://randomuser.me/api/portraits/men/71.jpg"
      }
    ],
    price: "₹700",
    venue: "The Hub Cafe",
    address: "12 Startup Street, Ahmedabad",
    dressCode: "Casual",
    ageRestrictions: "18 and above",
    tags: ["startup", "networking", "founders"]
  },
  {
    id: 6,
    title: "Frontend Friday",
    date: "Fri Sep 01 2023 5:00:00 PM IST",
    type: "Online",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    topic: "React and Modern UI Development",
    description:
      "A frontend-focused session covering React patterns, component architecture, styling strategy, reusable UI, and portfolio-level project building.",
    sessionTimings: "5:00 PM - 7:00 PM",
    speakers: [
      {
        name: "Dev Kapoor",
        role: "Frontend Engineer",
        image: "https://randomuser.me/api/portraits/men/41.jpg"
      }
    ],
    price: "Free",
    venue: "Google Meet",
    address: "Online Event",
    dressCode: "No Dress Code",
    ageRestrictions: "No restriction",
    tags: ["react", "frontend", "online"]
  }
];

app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

app.get("/events", (req, res) => {
  res.json(events);
});

app.get("/events/:eventId", (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const event = events.find((event) => event.id === eventId);

  if (!event) {
    res.status(404).json({
      error: "Event not found"
    });
  } else {
    res.json(event);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});