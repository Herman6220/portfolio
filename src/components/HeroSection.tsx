

const HeroSection = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex gap-0 items-end justify-center">
        <div className="w-100 h-100 rounded-full transform-3d border-5 border-dashed border-blue-500" style={{ animation: "spin3d 30s linear infinite", boxShadow: "inset 0 0 50px #0000ffaa" }}>

        </div>
        <style jsx>{`
            @keyframes spin3d {
            0%   { transform: rotateX(75deg) rotateZ(0); }
            100% { transform: rotateX(75deg) rotateZ(360deg); }
            }
        `}</style>
      </div>
    </div>
  )
}

export default HeroSection