import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
    return (
        <Svg
            width={17}
            height={32}
            viewBox="0 0 17 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.886 17.864l.881-5.748h-5.511V8.389c0-1.572.77-3.106 3.238-3.106H17V.388S14.726 0 12.552 0c-4.54 0-7.506 2.753-7.506 7.736v4.38H0v5.748h5.046v13.894c2.057.323 4.152.323 6.21 0V17.864h4.63z"
                fill="#1877F2"
            />
        </Svg>
    )
}

export default SvgComponent
