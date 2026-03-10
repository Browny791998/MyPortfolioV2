"use client";
import Image from "next/image";
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
// import Slider from "react-slick";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Work() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <section className="inset-0 h-full w-full bg-white dark:bg-[#121212] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] py-24" id="work">
          
       <ProjectCarousel/>
        </section>
    );
}
