import { HiArrowDown } from "react-icons/hi"


const ResumeDownloader = () => {
  return (
    <>
        <div className="fixed scale-80 sm:scale-100 bottom-0 right-0">
        <div className="w-64 h-16 fixed bottom-4 right-4 ">
          <svg
            viewBox="0 0 64 16"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0f0" floodOpacity="1" />
              </filter>
            </defs>

            <polygon
              points="1,4 4,1 63,1 63,12 59,15 1,15"
              stroke="red"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              fill="black"
            />

            <text
              x="55%"
              y="65%"
              fill="#b9f8cf"
              fontSize="8"
              fontFamily="Share Tech Mono"
              textAnchor="middle"
              filter="url(#glow)"
            >

              <a href="/api/downloadResume" download="Sankalp_Kumar_Resume.pdf">Resume</a>
            </text>
          </svg>

        </div>
        <div className="w-20 h-20 fixed bottom-6 right-47 hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="3"
              strokeDasharray="8 3"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="black"
              stroke="red"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              transform="scale(0.90)"
              transform-origin="center"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeDasharray="30 20"
              vectorEffect="non-scaling-stroke"
              transform-origin="center"
              className="scroll-rotate scale-78"
            />
          </svg>
          <a href="/api/downloadResume" download="Sankalp_Kumar_Resume.pdf">
            <HiArrowDown className="absolute inset-0 m-auto w-5 h-5 text-green-200" filter="drop-shadow(0 0 5px #0f0)" />
          </a>
        </div>
        <style>
          {`
          .scroll-rotate{
            transform-box: fill-box;
            transform-origin: center;
            animation: spin linear both;
            animation-timeline: scroll();
            animation-range: entry 0% exit 100%;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(720deg);
            }
          }
        `}
        </style>
      </div>
    </>
  )
}

export default ResumeDownloader