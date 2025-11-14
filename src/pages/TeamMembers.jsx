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
      website: "https://infopearl.in",
     
      //image: "/images/t4.jpg",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800&q=80",
      showSocialLinks: true,
      linkedinUrl:
        "https://www.linkedin.com/in/dharmendra-prajapati-43b25262/",
      emailAddress: "ceo@infopearl.in",
    },
    {
      id: 2,
      name: "Dr. Kamal Sharma",
      position: "Managing Director & CEO",
      bio: "Lord-Tech Datus Solutions Pvt. Ltd.",
      website: "https://lordtechdatus.com",
      //image: "/images/t4.jpg",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",

      showSocialLinks: true,
      linkedinUrl: "https://www.linkedin.com/in/dr-kamal-sharma-63802b147/",
      emailAddress: "info@lordtechdatus.com",
    },
    
    {
      id: 3,
      name: "Mr.mayank",
      position: "Data Scientist",
      bio: "Expertise in data analysis and programming.",
      //image: "/images/t4.jpg",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
      showSocialLinks: false,
    },
    {
      id: 4,
      name: "Mr. Pushpendra Prajapati",
      position: "Front-End Developer",
      bio: "Creates beautiful and intuitive user interfaces.",
      //image: "/images/t4.jpg",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80",
      showSocialLinks: false,
    },
    {
      id: 5,
      name: "Mr. Prateek Bajpayee",
      position: "Full Stack Developer",
      bio: "Full-stack developer with expertise in React and Node.js.",
      //image: "/images/t4.jpg",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",

      showSocialLinks: false,
    },
    {
      id: 6,
      name: "Mr. Nakul Prajapati",
      position: "Civil Engineer",
      bio: "Expertise in civil engineering and structural design.",
      //image: "/images/t4.jpg",
     image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",

      showSocialLinks: false,
    },
  ];

  return (
    <section className="team-members-container">
      {/* ✨ Subtle Background */}
      <div className="galaxy-bg"></div>

      {/* 🧩 Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="team-header"
      >
        <h1>Meet Our Team</h1>
        <p>
          The brilliant minds driving{" "}
          <span className="text-cyan-400 font-semibold">CodizyTech</span>’s
          innovation and success.
        </p>
      </motion.div>

      {/* 🧑‍💻 Team Grid */}
      <motion.div
        className="team-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="team-card"
          >
            <div className="member-image">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>

            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.bio}</p>

              {member.showSocialLinks && (
                <div className="social-links">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                  {member.emailAddress && (
                    <a href={`mailto:${member.emailAddress}`}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamMembers;
