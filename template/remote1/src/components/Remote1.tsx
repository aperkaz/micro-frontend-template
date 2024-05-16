/** Simple component that renders an image */
const Remote1 = ({ src }: { src: string }) => (
  <>
  <h1>Remote 1</h1>
  <br />
  <img
    className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
    src={src}
    alt="image description"
  />
  </>
);

export default Remote1;
