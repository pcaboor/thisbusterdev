
import AIInput_03 from '../marketplace/input';
import { BentoGridThirdDemo } from './bentogrid';
import { AppleCardsCarouselDemo } from './Carousel';
import { FeaturesSectionDemo } from './FeaturesBento';

const Feature1 = () => {
    return (
        <section className="">
            <div className="container">
                <AIInput_03 />
                <BentoGridThirdDemo />
                <FeaturesSectionDemo />
                <AppleCardsCarouselDemo />
            </div>
        </section>
    );
};

export default Feature1;
