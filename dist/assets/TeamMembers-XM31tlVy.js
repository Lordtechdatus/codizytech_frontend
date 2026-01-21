import{j as e,m as i}from"./index-6YMAI-Pg.js";const n="/images/push.jpg",o=()=>{const t=[{id:1,name:"Mr. Pushpendra Prajapati",position:"Founder & CEO",bio:"CODIZYTECH",image:n},{id:2,name:"Mr. Dharmendra Prajapati",position:"Managing Director & CEO",bio:"Infopearltech Solutions Pvt. Ltd.",image:"https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&w=700&q=70&fm=webp"},{id:3,name:"Dr. Kamal Sharma",position:"Managing Director & CEO",bio:"Lord-Tech Datus Solutions Pvt. Ltd.",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&w=700&q=70&fm=webp"},{id:4,name:"Mr. Prateek Bajpayee",position:"Full Stack Developer",bio:"Expert in React & Node.js development.",image:"/images/prateek.jpg"},{id:5,name:"Mr. Nakul Prajapati",position:"Data Scientist",bio:"Expertise in AI/ML & Data Analysis.",image:"/images/nakul.jpg"},{id:6,name:"Mr. Mayank",position:"Digital Marketing & Social Media Expert",bio:"Expertise in Digital Marketing & Branding.",image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&w=700&q=70&fm=webp"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
`}),e.jsxs("section",{className:"team-members-container",children:[e.jsxs(i.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.6},className:"team-header",children:[e.jsx("h1",{className:"text-center text-cyan-400 text-3xl font-bold",children:"Meet Our Team"}),e.jsxs("p",{className:"text-center text-neutral-300 mt-2",children:["The brilliant minds behind"," ",e.jsx("span",{className:"text-cyan-400 font-semibold",children:"CodizyTech"}),"."]})]}),e.jsx("div",{className:"team-grid",children:t.map(a=>e.jsxs(i.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"team-card",children:[e.jsx("div",{className:"member-image",children:e.jsx("img",{src:a.image,alt:a.name,loading:"lazy",draggable:!1})}),e.jsxs("div",{className:"member-info",children:[e.jsx("h3",{children:a.name}),e.jsx("h4",{children:a.position}),e.jsx("p",{children:a.bio})]})]},a.id))})]})]})};export{o as default};
