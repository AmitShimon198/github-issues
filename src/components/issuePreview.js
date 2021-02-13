import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const IssuesPreview = ({ issuePreviewData, freeText }) => {

    const renderLabel = (labels) => {
        return <div className="label">
            {labels.map(label => {
                const color = label.name.startsWith('issue') ? 'black' : 'white';
                return <span key={label.id} style={{ backgroundColor: '#' + label.color, color: color }} className="badge badge-pill badge-primary label-item" >{label.name}</span>

            })}
        </div>

    }
    return (<Card>
        <CardActionArea>
            <CardContent>
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: '400' }} to={`/issues/${issuePreviewData.number}`}>
                    <Typography className='labelContainer' variant="body2" color="textSecondary" component="div">
                        <span className='info-icon'><i className="fas fa-info-circle"></i></span>
                        {issuePreviewData.title}
                        {renderLabel(issuePreviewData.labels)}
                    </Typography>
                    <Typography className='comment-container' variant="body2" color="textSecondary" component="div">
                        <span className='comment-text'>{" " + issuePreviewData.comments}</span>
                        <i style={{ fontSize: '3vh' }} className="far fa-comment-alt"></i>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        #{issuePreviewData.number}
                        {freeText}
                    </Typography>
                </Link>
            </CardContent>
        </CardActionArea>
    </Card>)
}

export default IssuesPreview;