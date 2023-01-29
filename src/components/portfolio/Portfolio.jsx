import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/11.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";import {FiGithub} from 'react-icons/fi'
import {Pagination,Navigation,Scrollbar} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination'

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Disney-Hotstar Landing Page",
      github:"https://github.com/Anushka561/Disney-Hotstar-landing-page",
      demo:"https://anushka561.github.io/Disney-Hotstar-landing-page/"
    },
    {
      id:2,
      image:Img2,
      title:"Todo List",
      github:"https://github.com/Anushka561/todo-list",
      demo:"https://anushka561.github.io/todo-list/"
    },
    {
      id:3,
      image:Img3,
      title:"Netflix Landing Page",
      github:"https://github.com/Anushka561/Netflix",
      demo:"https://anushka561.github.io/Netflix/"
    }
   
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper className="container portfolio__container"
      modules={[Pagination,Navigation,Scrollbar]}
      spaceBetween={40}
      // scrollbar={{draggable:true}}
      // Navigation
      // Scrollbar
      slidesPerView={1}
      
      pagination={{clickable:true}}>

      
        {data.map(({id,image,title,github,demo})=>{
          return(
              <SwiperSlide className="portfolio__item">
              <div className="portfolio__item-image" style={{backgroundImage:{image}}} >
           <img className="portfolio_img"src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a  href={github} className="github_link" target="_blank">
            <FiGithub/>
                </a>
                <a
                  href={demo}
                  className="k"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;