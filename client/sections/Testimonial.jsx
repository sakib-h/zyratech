import dynamic from "next/dynamic";
const TestimonialSlider = dynamic(() =>
    import("@components/TestimonialSlider")
);

const Testimonial = () => {
    return (
        <section id="testimonial" className="container">
            <div className="flex justify-start">
                <h3 className="text-light-primary bg-light-secondary font-semibold text-[1.25rem] px-[2rem] py-[0.5rem] rounded-[10px]">
                    Testimonial
                </h3>
            </div>

            <div className="my-20">
                <h2 className="text-light-text text-[1.5rem] lg:text-[3rem] font-semibold">
                    Customer is our Priority
                </h2>
            </div>
            <div>
                <TestimonialSlider />
            </div>
        </section>
    );
};

export default Testimonial;
