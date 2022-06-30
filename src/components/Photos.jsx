import { useState } from 'react';
import Logo from './Logo';
import Search from './Search';
import PhotoAlbum from 'react-photo-album';
import { getResponse, photosLayout, setElementStyle } from './utilities';

const Photos = () => {
  const [queryValue, setQueryValue] = useState('');
  const [photos, setPhotos] = useState([]);

  const changeValueHandler = event => {
    setQueryValue(event.target.value);
  };

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      getResponse(queryValue, setPhotos);
      setQueryValue('');
    }
  };

  const onSearchButtonHandler = () => {
    getResponse(queryValue, setPhotos);
    setQueryValue('');
  };

  const onImgClickHandler = event => {
    const background = document.querySelector('#root');
    setElementStyle(background, 'backgroundImage', `url(${event.target.src})`);
    setPhotos([]);
  };

  return (
    <>
      <header className="header center padding-4">
        <Logo />
        <Search
          value={queryValue}
          onChange={changeValueHandler}
          onKeyDown={keyDownHandler}
          onClick={onSearchButtonHandler}
        />
      </header>
      <main className="photos center padding-4">
        <PhotoAlbum
          photos={photosLayout(photos)}
          layout="columns"
          onClick={onImgClickHandler}
        />
      </main>
    </>
  );
};

export default Photos;
