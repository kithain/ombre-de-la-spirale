import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cc = (...classes) => twMerge(clsx(classes));
