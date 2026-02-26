import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CERTIFICATIONS } from "@/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certifications() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section id="certifications" className="section-container relative">
            <h2 className="section-title text-center mb-10">Certifications</h2>

            <div className="relative px-12">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {CERTIFICATIONS.map((cert, index) => (
                        <SwiperSlide key={index}>
                            <div className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50">
                                {/* Main Logo - Clicking this opens the popup */}
                                <div
                                    className="cursor-zoom-in overflow-hidden rounded-lg mb-6 bg-white p-6 shadow-inner"
                                    onClick={() => setSelectedImg(cert.logo)}
                                >
                                    <img
                                        src={cert.logo}
                                        alt={cert.title}
                                        className="h-40 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <h3 className="font-bold text-foreground line-clamp-2 min-h-[3rem]">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">{cert.issuer}</p>
                                <p className="text-xs text-muted-foreground/60">{cert.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Slider Navigation */}
                <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-accent hover:scale-110 transition-transform">
                    <ChevronLeft size={32} />
                </button>
                <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-accent hover:scale-110 transition-transform">
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl w-full flex flex-col items-center"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute -top-14 right-0 flex items-center gap-2 text-white hover:text-accent transition-colors bg-white/10 px-4 py-2 rounded-full"
                            >
                                <span className="text-sm font-medium">Close</span>
                                <X size={24} />
                            </button>

                            <img
                                src={selectedImg}
                                alt="Certification"
                                className="max-h-[80vh] w-auto rounded-lg border border-border bg-white p-4 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}