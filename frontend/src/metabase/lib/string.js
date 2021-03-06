import _ from "underscore";

// Creates a regex that will find an order dependent, case insensitive substring. All whitespace will be rendered as ".*" in the regex, to create a fuzzy search.
export function createMultiwordSearchRegex(input) {
    if (input) {
        return new RegExp(
            _.map(input.split(/\s+/), (word) => {
                return RegExp.escape(word);
            }).join(".*"),
            "i");
    }
}
