import { useState, useEffect } from "react";

/**
 * Avatar component
 *
 * Renders an image or fallback content if image fails to load.
 *
 * @param {string} size - Size classes for the avatar container. Defaults to "w-14 h-14".
 * @param {string} className - Additional classes for styling the avatar. Defaults to "rounded-full font-semibold bg-primary-500 text-lg text-white".
 * @param {string} ring - Ring classes for the avatar. Defaults to "ring-white".
 * @param {string} children - Fallback content for the avatar.
 * @param {string} src - source url of the image to display.
 * @param {string} alt - Alt text for the image.
 * @returns {JSX.Element} Avatar component.
 */
export default ({
   size = "w-14 h-14",
   className = "rounded-full font-semibold bg-primary-500 text-lg text-white",
   ring = "ring-white",
   children,
   src = null,
   alt = "",
}) => {
   const [imgSrc, setImgSrc] = useState(src);

   useEffect(() => {
      if (src) setImgSrc(src);
   }, [src]);

   /** Fallback function to handle image loading failure. */
   const fallback = () => setImgSrc(null);

   /**
    * Extracts fallback content.
    *
    * @param {string} alt - Alt text for the image.
    * @returns {string} Fallback content.
    */
   const extractFallbackContent = (alt) => {
      if (!alt) return;
      const words = alt.split(" ");
      const content =
         words.length > 1
            ? words[0].charAt(0) + words[1].charAt(0)
            : words[0].substring(0, 2);
      return content.toUpperCase();
   };

   return (
      <div
         className={`avatar ${size} ${className} flex items-center justify-center shrink-0 overflow-hidden ${ring} ${
            imgSrc ? "" : "!border-transparent"
         }`}
      >
         {imgSrc ? (
            <img src={imgSrc} onError={fallback} />
         ) : (
            extractFallbackContent(children || alt)
         )}
      </div>
   );
};
