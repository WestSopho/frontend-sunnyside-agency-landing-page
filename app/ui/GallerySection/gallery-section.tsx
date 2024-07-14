import Image from 'next/image';

export default function GallerySection(){
    return (
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1">
            {/* First Gallery Image */}
            <div>
                <Image
                    src="/mobile/image-gallery-milkbottles.jpg"
                    alt="image gallery milkbottles mobile"
                    width={376}
                    height={376}
                    quality={100}
                    className='size-full sm:hidden'
                />
                <Image
                    src="/desktop/image-gallery-milkbottles.jpg"
                    alt="image gallery milkbottles desktop"
                    width={720}
                    height={894}
                    quality={100}
                    className='hidden size-full sm:block'
                />
            </div>

            {/* Second Gallery Image */}
            <div>
                <Image
                    src="/mobile/image-gallery-orange.jpg"
                    alt="image gallery orange mobile"
                    width={376}
                    height={376}
                    quality={100}
                    className='size-full sm:hidden'
                />
                <Image
                    src="/desktop/image-gallery-orange.jpg"
                    alt="image gallery orange desktop"
                    width={720}
                    height={894}
                    quality={100}
                    className='hidden size-full sm:block'
                />
            </div>

            {/* Third Gallery Image */}
            <div>
                <Image
                    src="/mobile/image-gallery-cone.jpg"
                    alt="image gallery cone mobile"
                    width={376}
                    height={376}
                    quality={100}
                    className='size-full sm:hidden'
                />
                <Image
                    src="/desktop/image-gallery-cone.jpg"
                    alt="image gallery cone desktop"
                    width={720}
                    height={894}
                    quality={100}
                    className='hidden size-full sm:block'
                />
            </div>

            {/* Fourth Gallery Image */}
            <div>
                <Image
                    src="/mobile/image-gallery-sugar-cubes.jpg"
                    alt="image gallery sugar cubes mobile"
                    width={376}
                    height={376}
                    quality={100}
                    className='size-full sm:hidden'
                />
                <Image
                    src="/desktop/image-gallery-sugarcubes.jpg"
                    alt="image gallery sugar cubes desktop"
                    width={720}
                    height={894}
                    quality={100}
                    className='hidden size-full sm:block'
                />
            </div>
        </div>
    );
}