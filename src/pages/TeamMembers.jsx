import React from "react";
import { motion } from "framer-motion";

const pushImg = "/images/push.jpg";

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Pushpendra Prajapati",
      position: "Founder & CEO",
      bio: "CODIZYTECH",
      image: pushImg,
    },
    {
      id: 2,
      name: "Mr. Dharmendra Prajapati",
      position: "Managing Director & CEO",
      bio: "Infopearltech Solutions Pvt. Ltd.",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&w=700&q=70&fm=webp",
    },
    {
      id: 3,
      name: "Dr. Kamal Sharma",
      position: "Managing Director & CEO",
      bio: "Lord-Tech Datus Solutions Pvt. Ltd.",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&w=700&q=70&fm=webp",
    },
    {
      id: 4,
      name: "Mr. Prateek Bajpayee",
      position: "Full Stack Developer",
      bio: "Expert in React & Node.js development.",
      image: "/images/prateek.jpg",
    },
    {
      id: 5,
      name: "Mr. Nakul Prajapati",
      position: "Data Scientist",
      bio: "Expertise in AI/ML & Data Analysis.",
      image: "/images/nakul.jpg",
    },
    {
      id: 6,
      name: "Mr. Mayank",
      position: "Digital Marketing & Social Media Expert",
      bio: "Expertise in Digital Marketing & Branding.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&w=700&q=70&fm=webp",
    },
  ];

  return (
    <>
      {/* -------- INTERNAL CSS -------- */}
      <style>{`
  .team-members-container {
    padding: 40px 20px;
    max-width: 1200px;
    margin: auto;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  /* --- SAME HEIGHT CARD --- */
  .team-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 480px;            /* 🔥 FIXED HEIGHT FOR ALL CARDS */
    overflow: hidden;
    transition: 0.3s ease;
  }

  .team-card:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 28px rgba(0, 0, 0, 0.3);
  }

  /* --- FIXED IMAGE HEIGHT FOR ALL --- */
  .member-image img {
    width: 100%;
    height: 250px;           /* 🔥 SAME IMAGE HEIGHT */
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #00eaff55;
  }

  .member-info {
    text-align: center;
    margin-top: 15px;
    padding: 0 10px;
  }

  .member-info h3 {
    color: #00eaff;
    font-size: 18px;
    font-weight: 600;
  }

  .member-info h4 {
    color: #ffba00;
    margin-top: 4px;
    font-size: 15px;
  }

  .member-info p {
    margin-top: 8px;
    font-size: 14px;
    color: #d0d0d0;
    min-height: 40px;       /* 🔥 SAME TEXT BOX HEIGHT */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* --- MOBILE FIX --- */
  @media (max-width: 480px) {
    .team-card {
      height: 450px;        /* Slightly smaller for mobiles */
    }

    .member-image img {
      height: 230px;
    }
  }
`}</style>


      {/* -------- JSX CONTENT -------- */}
      <section className="team-members-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="team-header"
        >
          <h1 className="text-center text-cyan-400 text-3xl font-bold">
            Meet Our Team
          </h1>
          <p className="text-center text-neutral-300 mt-2">
            The brilliant minds behind{" "}
            <span className="text-cyan-400 font-semibold">CodizyTech</span>.
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
    </>
  );
};

export default TeamMembers;
