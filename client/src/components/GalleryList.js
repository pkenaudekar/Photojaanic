import React from 'react';
import { connect } from 'react-redux';
import { fetchPics } from '../actions';

class GalleryList extends React.Component {
  componentDidMount() {
    this.props.fetchPics();
  }

  renderList() {
    return this.props.pics.map((pic) => {
      return (
        <div className="gallery-item" key={pic.id}>
          <img
            src={pic.pictureUrl}
            alt="gallery_pic"
            style={{
              maxWidth: '12vw',
              maxHeight: '19vh',
              margin: 'auto',
              display: 'block',
              verticalAlign: 'middle',
            }}
          />
        </div>
      );
    });
  }

  render() {
    console.log(this.props.pics);
    return (
      <React.Fragment>
        <div className="gallery-section">{this.renderList()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { pics: state.pics };
};

export default connect(mapStateToProps, { fetchPics })(GalleryList);
