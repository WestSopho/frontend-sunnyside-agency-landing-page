import TwoGrid from "@/app/ui/GridSection/two-grid";
import Image from 'next/image';
import TextBlock from "@/app/ui/GridSection/text-block";
import AbsoluteTextBlock from "@/app/ui/GridSection/absolute-text-block";

export default function GridSection(){
    return (
        <div>
            {/* First Two Grid */}
            <TwoGrid>
                <TextBlock title="Trasform your brand" description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." underlineColor="decoration-[#FAD40040]"/>

                <div className="order-first sm:order-last">
                    <Image
                        src="/desktop/image-transform.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="hidden size-full object-cover sm:block"
                    />
                    <Image
                        src="/mobile/image-transform.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="size-full object-cover sm:hidden"
                    />
                </div>
            </TwoGrid>

            {/* Second Two Grid */}
            <TwoGrid>
                <TextBlock title="Stand out to the right audience" description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." underlineColor="decoration-[#FE776640]"/>

                <div className="order-first">
                    <Image
                    src="/desktop/image-stand-out.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="hidden size-full object-cover sm:block"
                    />
                    <Image
                        src="/mobile/image-stand-out.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="size-full object-cover sm:hidden"
                    />
                </div>
            </TwoGrid>

            {/* Third Two Grid */}
            <TwoGrid>
                {/* First Text Block with Image Background */}
                <div className="relative">
                    <Image
                        src="/desktop/image-graphic-design.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="hidden size-full object-cover sm:block"
                    />
                    <Image
                        src="/mobile/image-graphic-design.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="size-full object-cover sm:hidden"
                    />
                    <AbsoluteTextBlock title="Graphic Design" description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
                </div>

                {/* Second Text Block with Image Background */}
                <div className="relative">
                    <Image
                        src="/desktop/image-photography.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="hidden size-full object-cover sm:block"
                    />
                    <Image
                        src="/mobile/image-photography.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="size-full object-cover sm:hidden"
                    />
                    <AbsoluteTextBlock title="Photography" description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
                </div>
            </TwoGrid>
        </div>
    );
}