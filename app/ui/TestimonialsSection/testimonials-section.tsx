import TestimonialCard from "@/app/ui/TestimonialsSection/testimonial-card";

export default function TestimonialsSection(){
    return(
        <div className="py-16 px-5 sm:p-16 lg:p-36 flex justify-center items-center bg-[#F2F2F2]">
            <div className="space-y-5 sm:space-y-12">
                {/* Title */}
                <h1 className="font-fraunces font-black text-[#A7AAAD] text-base text-center tracking-[0.3em] sm:text-[20px] uppercase">Client Testimonials</h1>

                {/* Testimonials Cards Wrapper */}
                <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1">

                    {/* First Testimonial */}
                    <TestimonialCard
                        src='/image-emily.jpg'
                        name='Emily R.'
                        pos='Marketing Director'
                        review='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                    />

                    {/* Second Testimonial */}
                    <TestimonialCard
                        src='/image-thomas.jpg'
                        name='Thomas S.'
                        pos='Chief Operating Officer'
                        review='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                    />

                    {/* Third Testimonial */}
                    <TestimonialCard
                        src='/image-jennie.jpg'
                        name='Jennie F.'
                        pos='Business Owner'
                        review='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                    />
                </div>
            </div>
        </div>
    );
}