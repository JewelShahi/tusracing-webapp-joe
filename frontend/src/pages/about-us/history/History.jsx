import React, { useState, useEffect } from 'react';
import { FaTrophy, FaFlag, FaQuoteLeft, FaPlay, FaPause } from 'react-icons/fa';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";

const History = () => {
  const { theme } = useTheme();
  const [activeYear, setActiveYear] = useState(2018);
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate random particles for background effect
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 20 + 10}s`
    }));
    setParticles(newParticles);
  }, []);

  // Auto-play timeline
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveYear(prev => {
          if (prev >= 2023) return 2018;
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const timelineEvents = [
    {
      year: 2018,
      title: "Team Foundation",
      description: "Our racing team was founded with just 5 passionate engineering students.",
      image: "https://picsum.photos/seed/history2018/800/600.jpg",
      achievements: ["Team formed", "First concept design", "Initial sponsorship secured"]
    },
    {
      year: 2019,
      title: "First Competition",
      description: "We built our first race car and competed in the regional Formula Student competition.",
      image: "https://picsum.photos/seed/history2019/800/600.jpg",
      achievements: ["First car built", "Finished 12th in regional competition", "Expanded team to 15 members"]
    },
    {
      year: 2020,
      title: "Virtual Racing",
      description: "Due to the pandemic, we shifted to virtual competitions and simulation development.",
      image: "https://picsum.photos/seed/history2020/800/600.jpg",
      achievements: ["Won virtual design award", "Developed advanced simulation", "Online training program"]
    },
    {
      year: 2021,
      title: "Comeback Season",
      description: "Returned to in-person competitions with our most advanced car yet.",
      image: "https://picsum.photos/seed/history2021/800/600.jpg",
      achievements: ["Finished 5th in national competition", "Best engineering design award", "Team expanded to 25 members"]
    },
    {
      year: 2022,
      title: "International Debut",
      description: "We competed internationally for the first time, representing our university globally.",
      image: "https://picsum.photos/seed/history2022/800/600.jpg",
      achievements: ["Competed in 3 countries", "Top 10 finish in international event", "Major corporate sponsorship"]
    },
    {
      year: 2023,
      title: "Championship Year",
      description: "Our most successful year yet with multiple podium finishes and awards.",
      image: "https://picsum.photos/seed/history2023/800/600.jpg",
      achievements: ["National championship winners", "Innovation award", "Team of 40+ members"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founding Member & Team Lead (2018-2020)",
      quote: "Starting this team from scratch was challenging but incredibly rewarding. Seeing how far we've come makes me proud of what we built together.",
      image: "https://picsum.photos/seed/alumni1/200/200.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Chief Engineer (2020-2022)",
      quote: "The pandemic tested our resilience, but we adapted and came back stronger. Our virtual design win in 2020 was a turning point for the team.",
      image: "https://picsum.photos/seed/alumni2/200/200.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Team Captain (2022-2023)",
      quote: "Leading the team to our first championship was the highlight of my university experience. The skills I gained have been invaluable in my career.",
      image: "https://picsum.photos/seed/alumni3/200/200.jpg"
    }
  ];

  return (
    <div className="min-h-[100vh] pt-14 bg-base-100 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: `${Math.random() * 100}%`,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  OUR JOURNEY
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Racing Through History
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                From a small group of passionate students to a championship-winning team, discover our journey of innovation, teamwork, and racing excellence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <AnimatedSection direction="up" delay={100}>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Timeline</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Navigate through our history to see key milestones and achievements
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Year Selector */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Years</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn btn-circle btn-sm btn-primary"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div className="space-y-2">
                {timelineEvents.map((event) => (
                  <button
                    key={event.year}
                    onClick={() => setActiveYear(event.year)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeYear === event.year
                        ? 'bg-primary text-primary-content shadow-lg'
                        : 'bg-base-200 hover:bg-base-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <FaFlag className="mr-3" />
                      <span className="font-bold">{event.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:w-3/4">
            <AnimatedSection key={activeYear} direction="right" delay={200}>
              <div className="card bg-base-200 shadow-xl overflow-hidden">
                <div className="h-64 sm:h-80">
                  <img
                    src={timelineEvents.find(e => e.year === activeYear).image}
                    alt={timelineEvents.find(e => e.year === activeYear).title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="card-body p-6">
                  <h3 className="card-title text-2xl font-bold mb-2">
                    {timelineEvents.find(e => e.year === activeYear).title}
                  </h3>
                  <p className="text-base-content/80 mb-4">
                    {timelineEvents.find(e => e.year === activeYear).description}
                  </p>
                  <div className="divider"></div>
                  <h4 className="font-bold text-lg mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {timelineEvents.find(e => e.year === activeYear).achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <FaTrophy className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

    </div>
  );
};

export default History;