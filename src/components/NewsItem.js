import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let  {title , description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
          <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={
                  !imageUrl
                    ? "https://c.ndtvimg.com/2022-05/saa48568_china-covid_625x300_17_May_22.jpg"
                    : imageUrl
                }
                className="card-img-top"
                alt="Particular News "
              />
              <div className="card-body">
                <h5 className="card-title">{title}...<span class="badge bg-primary">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <div class="card-footer my-2">
                  <small class="text-muted">By {!author?"Unknown":author} on {date}</small>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={newsUrl}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default NewsItem
