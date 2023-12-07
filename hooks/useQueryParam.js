"use client";

import { useRouter } from "next/navigation";

/**
 * Custom hook for managing query parameters in Next.js.
 * @returns {object} An object with functions to manipulate the router.
 */
function useQueryParam() {
  // Accessing the Next.js router
  const router = useRouter();

  /**
   * Function to check the type of parameters.
   * @param {string} pathName - The path name for the URL.
   * @param {object} query - The query parameters.
   * @throws Will throw an error if the parameters are not valid.
   * @returns {boolean} Returns true if parameters are valid.
   */
  const typeCheckOfParams = (pathName, query) => {
    if (typeof pathName !== "string") {
      throw new Error("pathName is required to be string");
    }
    if (query && typeof query !== "object") {
      throw new Error("query is to be object");
    }
    return true;
  };

  /**
   * Function to construct the URL with query parameters.
   * @param {string} pathName - The path name for the URL.
   * @param {object} query - The query parameters.
   * @returns {string} The constructed URL with query parameters.
   */
  const getUrl = (pathName, query) => {
    const initialValue = "";
    if (!query) {
      return `${pathName}`;
    }
    const arrOfKeys = Object.keys(query);
    const queryString = arrOfKeys.reduce((accumulator, currentValue) => {
      if (
        typeof query[currentValue] === "string" ||
        typeof query[currentValue] === "number" ||
        typeof query[currentValue] === "boolean"
      ) {
        if (accumulator === initialValue) {
          if (query[currentValue] !== "") {
            return accumulator + `${currentValue}=${query[currentValue]}`;
          }
          return accumulator;
        } else {
          if (query[currentValue] !== "")
            return accumulator + `&${currentValue}=${query[currentValue]}`;
        }
        return accumulator;
      }
      return accumulator;
    }, initialValue);
    if (queryString) {
      return `${pathName}?${queryString}`;
    }
    return `${pathName}`;
  };

  /**
   * Function to push a new route to the history stack.
   * @param {object} params - An object containing pathName and query parameters.
   * @param {object} obj - Additional options (e.g., scroll behavior).
   */
  const push = (params, obj) => {
    const { pathName, query } = params;

    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query);
      router.push(url, {
        scroll: obj?.scroll === undefined ? true : obj?.scroll,
      });
    }
  };

  /**
   * Function to replace the current route in the history stack.
   * @param {object} params - An object containing pathName and query parameters.
   * @param {object} obj - Additional options (e.g., scroll behavior).
   */
  const replace = (params, obj) => {
    const { pathName, query } = params;

    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query);
      router.replace(url, {
        scroll: obj?.scroll === undefined ? true : obj?.scroll,
      });
    }
  };
  /**
   * Function to navigate back in the history stack.
   */
  const back = () => {
    router.back();
  };
  /**
   * Function to navigate forward in the history stack.
   */

  const forward = () => {
    router.forward();
  };
  /**
   * Function to prefetch a page with the given parameters.
   * @param {object} params - An object containing pathName and query parameters.
   */
  const prefetch = (params) => {
    const { pathName, query } = params;

    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query);
      router.prefetch(url);
    }
  };

  // Returning an object with the exposed functions
  return { push, replace, back, forward, prefetch };
}
// Exporting the custom hook
export default useQueryParam;
