'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ProjectImageCarousel({ images, image, title, aiHint }) {
    // Support both single image (string) and multiple images (array)
    const imageArray = images || (image ? [image] : ['/projects/placeholder.png']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Only set up rotation if there are multiple images
        console.log('Carousel Effect:', { length: imageArray.length, images: imageArray });
        if (imageArray.length <= 1) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);

            // Wait for fade out, then change image
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
                setIsTransitioning(false);
            }, 300); // 300ms fade out duration
        }, 5000); // 5 second interval

        return () => clearInterval(interval);
    }, [imageArray.length]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <Image
                src={imageArray[currentIndex]}
                alt={title}
                width={600}
                height={400}
                className={`w-full h-auto object-cover aspect-video transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                data-ai-hint={aiHint}
                priority={currentIndex === 0}
            />

            {/* Indicator dots for multiple images */}
            {imageArray.length > 1 && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {imageArray.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary w-6'
                                : 'bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
