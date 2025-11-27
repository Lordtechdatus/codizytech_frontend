import React from "react";
import { motion } from "framer-motion";
import "../styles/TeamMembers.css";

// Public folder image → use direct URL
const pushImg = "/images/push.jpg";

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Pushpendra Prajapati",
      position: "Founder & CEO",
      bio: "CODIZYTECH",
      website: "",
      image: pushImg, // 👈 Correct
      showSocialLinks: false,
      linkedinUrl: "",
      emailAddress: "",
    },
    {
      id: 2,
      name: "Mr. Dharmendra Prajapati",
      position: "Managing Director & CEO",
      bio: "Infopearltech Solutions Pvt. Ltd.",
      website: "",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
    {
      id: 3,
      name: "Dr. Kamal Sharma",
      position: "Managing Director & CEO",
      bio: "Lord-Tech Datus Solutions Pvt. Ltd.",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
    {
      id: 4,
      name: "Mr. Prateek Bajpayee",
      position: "Full Stack Developer",
      bio: "Full-stack developer with expertise in React and Node.js.",
      image: "/images/prateek.jpg", 
      showSocialLinks: false,
    },
    {
      id: 5,
      name: "Mr. Nakul Prajapati",
      position: "Data Scientist",
      bio: "Expertise in (AI,ML),data analysis and programming.",
      image: "/images/nakul.jpg",   // 👈 your local image
      showSocialLinks: false,
    },
    
    {
      id: 6,
      name: "Mr. Mayank",
     
      position: "Digital Marketing & Social Media Expert",
      bio: "Expertise in Digital Marketing & Social Media.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&w=700&q=70&fm=webp",
      showSocialLinks: false,
    },
  ];

  return (
    <section className="team-members-container">
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
            <div className="member-image">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                draggable={false}
              />
            </div>

            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
