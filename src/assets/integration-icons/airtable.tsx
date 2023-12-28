import * as React from "react";
import { SVGProps } from "react";

const SvgAirtable = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={48}
        height={41}
        viewBox="0 0 48 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21.423.506 3.536 7.908c-.995.412-.984 1.824.017 2.221l17.962 7.123a6.664 6.664 0 0 0 4.913 0l17.963-7.123c1-.397 1.011-1.81.016-2.221L26.52.506a6.665 6.665 0 0 0-5.097 0Z"
            fill="#FFBF00"
        />
        <path
            d="M25.565 21.142v17.795c0 .846.854 1.425 1.64 1.114l20.016-7.77c.457-.18.756-.622.756-1.113V13.373c0-.846-.853-1.425-1.64-1.114l-20.015 7.77a1.199 1.199 0 0 0-.757 1.113Z"
            fill="#26B5F8"
        />
        <path
            d="m20.892 22.06-5.94 2.868-.604.292L1.81 31.228C1.015 31.61 0 31.032 0 30.149V13.448c0-.32.164-.595.383-.803.092-.092.196-.168.304-.228.3-.18.727-.227 1.09-.084l19.015 7.534c.966.384 1.042 1.738.1 2.193Z"
            fill="#ED3049"
        />
        <path
            d="m20.892 22.06-5.94 2.868L.382 12.645c.092-.092.196-.168.304-.228.3-.18.727-.227 1.09-.084l19.015 7.534c.966.384 1.042 1.738.1 2.193Z"
            fill="#000"
            fillOpacity={0.25}
        />
    </svg>
);

export default SvgAirtable;
