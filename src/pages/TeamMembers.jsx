import React from "react";
import { motion } from "framer-motion";
import "../styles/TeamMembers.css";

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Dharmendra Prajapati",
      position: "Managing Director & CEO",
      bio: "Infopearltech Solutions Pvt. Ltd.",
      website: "",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
      linkedinUrl: "",
      emailAddress: "",
    },
    {
      id: 2,
      name: "Dr. Kamal Sharma",
      position: "Managing Director & CEO",
      bio: "Lord-Tech Datus Solutions Pvt. Ltd.",
      website: "",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
      linkedinUrl: "",
      emailAddress: "",
    },
    {
      id: 3,
      name: "Mr. Mayank",
      position: "Data Scientist",
      bio: "Expertise in data analysis and programming.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
    {
      id: 4,
      name: "Mr. Pushpendra Prajapati",
      position: "Front-End Developer",
      bio: "Creates beautiful and intuitive user interfaces.",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
    {
      id: 5,
      name: "Mr. Prateek Bajpayee",
      position: "Full Stack Developer",
      bio: "Full-stack developer with expertise in React and Node.js.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
    {
      id: 6,
      name: "Mr. Nakul Prajapati",
      position: "Civil Engineer",
      bio: "Expertise in civil engineering and structural design.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
  ];

  return (
    <section className="team-members-container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="team-header"
      >
        <h1>Meet Our Team</h1>
        <p>
          The brilliant minds driving{" "}
          <span className="text-cyan-400 font-semibold">CodizyTech</span>’s
          innovation and success.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="team-card"
          >
            {/* Image */}
            <div className="member-image">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Info */}
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.bio}</p>

              {/* Social Links — Only if enabled */}
              {member.showSocialLinks && (
                <div className="social-links">
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} target="_blank">
                      <svg
                        className="icon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.17h.05c.53-1 1.82-2.17 3.75-2.17 4 0 4.7 2.63 4.7 6V24h-4v-7.7c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 2-2.94 4.05V24h-4V8z" />
                      </svg>
                    </a>
                  )}

                  {member.website && (
                    <a href={member.website} target="_blank">🌐</a>
                  )}

                  {member.emailAddress && (
                    <a href={`mailto:${member.emailAddress}`}>✉️</a>
                  )}
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
