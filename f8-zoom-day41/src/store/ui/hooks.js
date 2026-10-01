import { useSelector } from "react-redux";

import { getLoading } from "./selectors";

export function useLoading() {
    return useSelector(getLoading);
}
