import React, { useEffect, useState } from 'react';
import { returnDayDiff } from '../util/dateUtil';
import { getPageNumber, getNumberOfPages } from '../util/pageUtil';
import ButtonsList from './buttonList';
import api from '../services/githubAPI';
import IssuesPreview from './issuePreview';

const IssuesList = () => {
    const [listItems, setListItems] = useState([]);
    const [issuesCount, setIssuesCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const issuesPerPage = 20;

    useEffect(() => {
        fetchIssuesList(0, true)
        fetchIssuesCount();
    }, []);

    const fetchIssuesCount = async () => {
        const count = await api.fetchIssuesCount();
        setIssuesCount(count);
    }

    const fetchIssuesList = async (requestedPageNumber = 0, forceFetch) => {
        const numberOfPages = getNumberOfPages(issuesCount, issuesPerPage);
        const nextPage = getPageNumber(numberOfPages, requestedPageNumber);
        if (forceFetch || nextPage !== pageNumber) {
            setPageNumber(nextPage);
            const items = await api.fetchIssuesList(nextPage, issuesPerPage);
            setListItems(items);
        }
    }

    const renderButtonsList = () => {
        const numberOfPages = getNumberOfPages(issuesCount, issuesPerPage);
        return <ButtonsList
            numberOfPages={numberOfPages}
            pageNumber={pageNumber}
            moveTo={fetchIssuesList}
        />
    }

    const renderListItems = () => {
        return listItems.map(item => {
            const dayPass = returnDayDiff(new Date, new Date(item.created_at));
            return <IssuesPreview key={item.id} issuePreviewData={item} freeText={dayPass > 0 ? " opened " + dayPass + " days ago by " + item.user.login : ""} />

        });
    }



    return (<div>
        <span className='info-icon'><i className="fas fa-info-circle"></i></span><span className='open-issues'> Open issues {issuesCount}</span>
        {
            listItems.length ? <>
                { renderListItems()}
                {renderButtonsList()}
            </> :
                "Loading..."
        }
    </div>);

}
export default IssuesList;