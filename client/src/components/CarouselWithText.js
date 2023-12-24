import { Carousel } from 'flowbite-react';

 
export default function CarouselWithContent() {
  return (
    <div className="h-70 sm:h-80 ">
      <Carousel>
        
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/4_reduced.jpg"
        alt="image 1"
        
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/10_reduced.jpg"
        alt="image 1"
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/DJI_0012_reduced.jpg"
        alt="image 1"
      />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img
        src="https://pedes2024.org/static/img/main_building_reduced.jpg"
        alt="image 1"
      />
        </div>
      </Carousel>
    </div>
  );
}