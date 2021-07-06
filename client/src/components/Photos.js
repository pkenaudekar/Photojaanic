import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faPen,
  faCheck,
  faTimes,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import GalleryList from './GalleryList';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: 'false',
      selectedFile: null,
    };
  }

  fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div className="tab-section">
        <div className="tab-content">
          <h4>Photos</h4>
          <div className="tab-row">
            <button className="tab-row-btn">
              <FontAwesomeIcon icon={faAngleLeft} size="1x" />
              Back
            </button>
            <input
              type="text"
              value={
                'Album-' +
                new Date().getDate() +
                '-' +
                new Date().toLocaleString('en-US', { month: 'long' }) +
                '-' +
                new Date().getFullYear()
              }
              style={{ border: '2px solid' }}
              disabled={this.state.edit === 'false' ? 'disabled' : ''}
            />
            {this.state.edit === 'false' ? (
              <button
                className="tab-row-btn"
                onClick={() => this.setState({ edit: 'true' })}
              >
                <FontAwesomeIcon icon={faPen} size="1x" />
              </button>
            ) : (
              <div>
                <button
                  className="tab-row-btn"
                  onClick={() => this.setState({ edit: 'false' })}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ color: 'green' }}
                  />
                </button>
                <button
                  className="tab-row-btn"
                  onClick={() => this.setState({ edit: 'false' })}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="1x"
                    style={{ color: 'red' }}
                  />
                </button>
              </div>
            )}
          </div>
          <div className="tab-row">
            <div className="tab-item">
              <input
                name="file"
                type="file"
                id="actual-btn"
                hidden
                onChange={this.fileSelectedHandler}
              />
              <label htmlFor="actual-btn" className="tab-icon">
                <FontAwesomeIcon icon={faPlusSquare} size="2x" />
                <br /> <b>Add Photo</b>
              </label>
            </div>
            <div className="gallery-section">
              <GalleryList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
