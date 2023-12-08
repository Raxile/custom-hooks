"use client";

import { useRouter } from "next/navigation";

/**
 * Custom hook for handling navigation with query parameters in Next.js.
 * @returns {Object} An object containing functions for navigation operations.
 */
function useQueryParam() {
  const router = useRouter();

  /**
   * Updates the provided query object with values from the current URL's query string.
   * If a key from the query object already exists in the URL's query string, it retains the original value.
   * @param {Object} query - The query object to be updated.
   */

  const returnOldQuery = (query) => {
    const oldQuery = window.location.search.substring(1);
    const keyValuePair = oldQuery.split("&");
    keyValuePair.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (!query[key]) {
        query[key] = value;
      }
    });
  };

  /**
   * Validates the type of pathName and query parameters.
   * @param {string} pathName - The path name to navigate to.
   * @param {Object} query - The query parameters.
   * @throws Will throw an error if pathName is not a string or if query is not an object.
   * @returns {boolean} Returns true if the parameters pass type validation.
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
   * Constructs a URL with query parameters.
   * @param {string} pathName - The path name to navigate to.
   * @param {Object} query - The query parameters.
   * @param {boolean} [isReplace=true] - If true, replaces the current URL; otherwise, appends to it.
   * @returns {string} The constructed URL.
   */
  const getUrl = (pathName, query, isReplace = true) => {
    const initialValue = "";
    if (!query) {
      return `${pathName}`;
    }
    if (!isReplace) {
      returnOldQuery(query);
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
   * Navigates to a new URL with the specified path and query parameters.
   * @param {Object} params - An object containing pathName and query parameters.
   * @param {Object} [obj] - An optional object with additional configuration options.
   */

  const push = (params, obj) => {
    const { pathName, query } = params;
    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query, obj?.isReplace);
      router.push(url, {
        scroll: obj?.scroll === undefined ? true : obj?.scroll,
      });
    }
  };

  /**
   * Replaces the current URL with the specified path and query parameters.
   * @param {Object} params - An object containing pathName and query parameters.
   * @param {Object} [obj] - An optional object with additional configuration options.
   */
  const replace = (params, obj) => {
    const { pathName, query } = params;

    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query, obj?.isReplace);
      router.replace(url, {
        scroll: obj?.scroll === undefined ? true : obj?.scroll,
      });
    }
  };
  /**
   * Navigates back to the previous page in the browser's history.
   */
  const back = () => {
    router.back();
  };
  /**
   * Navigates forward to the next page in the browser's history.
   */
  const forward = () => {
    router.forward();
  };

  /**
   * Prefetches the specified URL with path and query parameters.
   * @param {Object} params - An object containing pathName and query parameters.
   */

  const prefetch = (params) => {
    const { pathName, query } = params;

    if (typeCheckOfParams(pathName, query)) {
      const url = getUrl(pathName, query);
      router.prefetch(url);
    }
  };

  return { push, replace, back, forward, prefetch };
}
export default useQueryParam;
