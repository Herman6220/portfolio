
const SvgAnimation = () => {
    return (
        <div className="absolute top-30 left-0 w-68 h-30 -z-10 md:block hidden">
            <svg
                viewBox="0 0 68 40"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="dashGradient" gradientUnits="userSpaceOnUse" x1="-10" y1="20" x2="5" y2="20">
                        <stop stop-color="#ff0000" stop-opacity="0"></stop>
                        <stop stop-color="#ff0000ee"></stop>
                        <stop offset="1" stop-color="#ff0099" stop-opacity="0"></stop>

                        <animate
                            attributeName="x1"
                            from="70"
                            to="-20"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="x2"
                            from="85"
                            to="-5"
                            dur="4s"
                            repeatCount="indefinite"
                        />

                        <animate
                            attributeName="y1"
                            from="10"
                            to="0"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="y2"
                            from="20"
                            to="10"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                </defs>

                <path
                    d="
                M 65 40 
                v -10
                q 0 -1 -1 -1
                h -15 
                q -1 0 -1 -1
                v -10
                q 0 -1 -1 -1
                h -20
                q -1 0 -1 -1
                v -10
                q 0 -1 -1 -1
                h -30
              "
                    fill="none"
                    stroke="url(#dashGradient)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                >
                </path>
            </svg>
        </div>
    )
}

export default SvgAnimation