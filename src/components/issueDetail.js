import React, { useEffect, useState } from 'react';
import { returnDayDiff } from '../util/dateUtil';
import api from '../services/githubAPI';
import { extractImage } from '../util/stringUtil';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

const IssueDetail = ({ match }) => {

    const { id } = match.params;
    const [listItems, setListItems] = useState([]);
    const [issue, setIssue] = useState([]);

    const fetchIssue = async () => {
        const data = await api.fetchIssueById(id);
        setIssue(data);
    }

    const fetchComments = async () => {
        const data = await api.fetchIssueComments(id)
        setListItems(data);
    }

    useEffect(() => {
        fetchIssue();
        fetchComments();
    }, []);

    const renderCommentListItems = () => {
        return listItems.map(item => {
            const dayPass = returnDayDiff(new Date, new Date(item.created_at));
            return <Card className="comment-card" key={item.id} variant="outlined">
                <div className='user-details-con'>
                    <img className='user-img' src={item.user.avatar_url} />
                    <span>{dayPass > 0 ? " opened " + dayPass + " days ago by " + item.user.login : ""}</span>
                </div>
                <hr className='line' />
                <div>
                    {item.body}
                </div>
            </Card>
        });
    }
    const renderIssueDetail = () => {
        let uiComponent = extractImage(issue.body);
        const dayPass = returnDayDiff(new Date, new Date(issue.created_at));
        return <Card className="comment-card"  variant="outlined">
            <div className='user-details-con'>
                <img className='user-img' src={issue.user.avatar_url} />
                <span>{dayPass > 0 ? " opened " + dayPass + " days ago by " + issue.user.login : ""}</span>
            </div>
            <hr className='line' />
            {
                uiComponent.map((component, index) => {
                    if (component.type === 'image') {
                        return <img key={index}className="img-issue" src={component.value} />
                    } else {
                        return <div key={index}>
                            {component.value}
                        </div>
                    }
                })
            }
        </Card>
    }

    return (
        <div style={{ padding: '2vh', backgroundColor: 'white', color: 'black' }}>
            <Link style={{ float: 'right', color: 'black' }} to='/issues'>Home</Link>
            <h2>{issue ? issue.title : ""}</h2>
            <div className='detail-container'>
                <div className='details' >
                    {
                        issue && issue.body ? renderIssueDetail() : ""
                    }
                </div>
                <div>{listItems ? renderCommentListItems() : ""}</div>
            </div>
        </div>
    )
}

export default IssueDetail;