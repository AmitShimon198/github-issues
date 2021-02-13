export const getPageNumber = (numberOfPages, requestedPageNumber) => {

    let calculatePageNumber = 0;
    const isPageExists = requestedPageNumber >= 0 && numberOfPages > requestedPageNumber;

    if (requestedPageNumber < 0)
        calculatePageNumber = 0;
    else if (isPageExists) {
        calculatePageNumber = requestedPageNumber;
    } else {
        calculatePageNumber = numberOfPages;
    }

    return calculatePageNumber;
}

export const getNumberOfPages = (issuesCount, issuesPerPage) => {

    if (issuesCount <= 0 || issuesPerPage <= 0) {
        return 0;
    }
    return Math.round(issuesCount / issuesPerPage);
}

export const getPageRange = (requestedPageNumber, numberOfPages, offset) => {

    let calculatedPageNumber = 0;
    if (requestedPageNumber+offset >= numberOfPages) {
        calculatedPageNumber = numberOfPages - offset + 1;
    }
    else if (requestedPageNumber <= 0) {
        calculatedPageNumber = 1;
    } else {
        calculatedPageNumber = requestedPageNumber;
    }

    return Array.from({ length: offset }, (_, i) => i + calculatedPageNumber)

}