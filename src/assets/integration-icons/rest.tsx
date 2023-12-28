import clsx from "clsx";
import * as React from "react";
import { SVGProps } from "react";

const SvgRest = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        width={48}
        height={40}
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("dark:text-gray-100 text-[#273646]", className)}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m40.155 2.777 1.012 1.332c.265.352.199.855-.153 1.121l-1.074.817c.195.52.32 1.074.371 1.64l1.223.168a.801.801 0 0 1 .684.903l-.227 1.66a.799.799 0 0 1-.902.684l-1.336-.184c-.239.52-.543.996-.903 1.422l.75.984a.802.802 0 0 1-.156 1.121l-1.332 1.012a.805.805 0 0 1-1.121-.152l-.817-1.074a6.282 6.282 0 0 1-1.644.37l-.168 1.223a.801.801 0 0 1-.903.684l-1.66-.226a.801.801 0 0 1-.684-.903l.184-1.336a6.439 6.439 0 0 1-1.422-.898l-.984.746a.802.802 0 0 1-1.122-.153l-1.011-1.332a.802.802 0 0 1 .152-1.12l1.074-.817a6.29 6.29 0 0 1-.37-1.641l-1.224-.168a.799.799 0 0 1-.683-.902l.226-1.66a.804.804 0 0 1 .903-.684l1.336.183a6.44 6.44 0 0 1 .898-1.422l-.746-.984a.797.797 0 0 1 .152-1.117l1.333-1.012a.802.802 0 0 1 1.12.152l.817 1.075a6.262 6.262 0 0 1 1.64-.372l.169-1.222a.804.804 0 0 1 .902-.688l1.66.227a.799.799 0 0 1 .684.902l-.183 1.336c.52.238.996.543 1.425.903l.985-.747a.803.803 0 0 1 1.125.149ZM11.59 26.22v-6.446h3.32c.617 0 1.086.05 1.41.16.325.106.59.3.786.586.199.29.3.637.3 1.047 0 .355-.078.668-.23.926a1.774 1.774 0 0 1-.629.633 2.382 2.382 0 0 1-.7.254c.24.082.411.156.516.238.075.055.18.168.317.34.137.172.23.308.277.402l.97 1.864h-2.251l-1.063-1.965c-.136-.254-.254-.422-.359-.497a.857.857 0 0 0-.488-.148h-.176v2.61h-2v-.004Zm7.024 11.223h-3.72l-.534 1.75h-3.352l3.996-10.622h3.594l3.98 10.622h-3.437l-.527-1.75Zm-.696-2.301-1.16-3.82-1.164 3.82h2.324Zm5.434-6.57h5.461c1.192 0 2.083.28 2.672.847.59.566.887 1.375.887 2.418 0 1.074-.324 1.914-.969 2.52-.644.605-1.633.906-2.957.906h-1.8v3.93h-3.294V28.571Zm3.293 4.539h.809c.637 0 1.086-.11 1.344-.332.258-.22.387-.504.387-.844a1.18 1.18 0 0 0-.336-.848c-.223-.23-.645-.348-1.262-.348h-.942v2.372Zm7.055-4.54h3.294v10.622H33.7V28.571Zm-20.11-6.18h.84c.09 0 .265-.031.527-.09a.523.523 0 0 0 .324-.203.587.587 0 0 0 .125-.375c0-.207-.066-.37-.199-.48-.133-.113-.379-.168-.742-.168h-.875v1.316Zm4.719-2.617h5.332v1.375H20.31v1.027h3.09v1.313h-3.09v1.27h3.43v1.457h-5.43v-6.442Zm5.903 4.313 1.89-.117c.04.308.125.539.25.699.207.258.5.39.88.39.28 0 .503-.066.656-.199a.605.605 0 0 0 .23-.465c0-.168-.074-.316-.219-.449-.144-.133-.484-.254-1.02-.375-.87-.195-1.491-.457-1.867-.781a1.569 1.569 0 0 1-.562-1.242c0-.333.098-.645.289-.938.191-.293.48-.527.867-.695.387-.168.914-.25 1.586-.25.824 0 1.45.152 1.883.46.43.31.688.794.77 1.465l-1.871.114c-.051-.293-.157-.508-.313-.637-.16-.133-.383-.2-.66-.2-.23 0-.406.052-.524.15a.453.453 0 0 0-.175.359c0 .101.05.191.144.277.094.082.313.164.664.238.871.188 1.496.38 1.871.57.375.192.653.43.82.716.173.28.259.601.259.953 0 .414-.114.793-.344 1.14a2.134 2.134 0 0 1-.957.793c-.41.18-.926.27-1.551.27-1.094 0-1.856-.211-2.278-.633-.422-.43-.66-.965-.718-1.613Zm6.137-4.313h6.059v1.594h-2.032v4.852h-1.992v-4.852H30.35v-1.594ZM23.646 4.476a12.38 12.38 0 0 0-2.152.024c-2.2.21-4.337 1.011-6.102 2.383-2.043 1.582-3.594 3.949-4.192 7.086l-.187.98-.977.172c-.957.168-1.813.399-2.563.692a8.568 8.568 0 0 0-1.941 1.039 6.437 6.437 0 0 0-1.176 1.094c-1.027 1.23-1.504 2.773-1.492 4.336a7.84 7.84 0 0 0 1.48 4.504 7.36 7.36 0 0 0 1.235 1.328 6.2 6.2 0 0 0 1.613.97c.34.14.703.257 1.082.35v2.927c-.781-.141-1.5-.352-2.172-.63a9.051 9.051 0 0 1-2.363-1.417 10.086 10.086 0 0 1-1.72-1.844A10.743 10.743 0 0 1 0 22.29c-.015-2.211.672-4.41 2.157-6.192a9.23 9.23 0 0 1 1.695-1.578 11.43 11.43 0 0 1 2.594-1.387 15.7 15.7 0 0 1 2.149-.656c.859-3.415 2.691-6.044 5.047-7.868 2.203-1.707 4.855-2.703 7.586-2.965a15.482 15.482 0 0 1 4.309.191 3.286 3.286 0 0 0-.074.391l-.004.023c-.028.223-.04.446-.028.672-.3.118-.582.278-.836.473l-.011.008c-.38.285-.7.652-.938 1.074Zm20.67 7.5a10.71 10.71 0 0 1 1.82 2.153c1.25 1.922 1.89 4.489 1.863 7-.027 2.465-.691 4.919-2.05 6.723-.887 1.176-2.024 2.137-3.388 2.9-.933.523-1.984.956-3.129 1.308v-3.028c.617-.23 1.192-.488 1.72-.781 1.026-.574 1.866-1.274 2.495-2.113.977-1.301 1.458-3.141 1.477-5.028.023-1.98-.461-3.969-1.402-5.414a8.109 8.109 0 0 0-1.247-1.497c.02-.195.028-.394.016-.593.3-.118.582-.278.836-.473l.012-.008c.402-.309.738-.7.976-1.148ZM34.407 5a3.293 3.293 0 0 1-.895 6.524 3.287 3.287 0 0 1-2.812-3.708A3.295 3.295 0 0 1 34.408 5Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgRest;