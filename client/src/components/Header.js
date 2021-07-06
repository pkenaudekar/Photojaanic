import React, { useState } from 'react';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faQrcode,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [tabSelected, setTabSelected] = useState('1');

  return (
    <div className="btn-group">
      <Link
        href="/"
        className="item"
        style={{ backgroundColor: tabSelected === '1' ? '#545454' : '#d5d0d0' }}
        setTabSelected={setTabSelected}
        num={'1'}
      >
        <FontAwesomeIcon icon={faCamera} className="header-font-awesome" />
      </Link>
      <Link
        href="/tab2"
        className="item"
        style={{ backgroundColor: tabSelected === '2' ? '#545454' : '#d5d0d0' }}
        setTabSelected={setTabSelected}
        num={'2'}
      >
        <FontAwesomeIcon icon={faQrcode} className="header-font-awesome" />
      </Link>
      <Link
        href="/tab3"
        className="item"
        style={{ backgroundColor: tabSelected === '3' ? '#545454' : '#d5d0d0' }}
        setTabSelected={setTabSelected}
        num={'3'}
      >
        <FontAwesomeIcon icon={faBarcode} className="header-font-awesome" />
      </Link>
    </div>
  );
};

export default Header;
