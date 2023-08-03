import React, { useEffect, useState } from 'react';
import style from './style.css';
import { fetchApiData } from 'app/actions/deals';
import storeIcon from '../../../assets/images/storeIcon.png';
import rightArrow from '../../../assets/images/right-arrow.png';
import { MainHeader } from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Pagination from 'react-mui-pagination';

export const DealList = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { payload } = useSelector((d: any) => d?.dealDataList);
  const [activePage] = useState(0);
 
  const [page, setMyPage] = useState(1); 
  const setPage = (event: any, value: any) => {
    setMyPage(value);
    if (value) {
      dispatch(fetchApiData(value));
    }
  }; 
  useEffect(() => {
    dispatch(fetchApiData(activePage));
  }, []);
  return (
    <>
      <MainHeader />
      {payload?.dealData?.records?.map((item: any) => {
        return (
          <>
            <div className={style.listBox}>
              <div className={style.listItems}>
                <img src={item.image} alt="image" />
                <div className={style.listContent}>
                  <h2>{item.title}</h2>
                  <h3>
                    <img src={storeIcon} alt="storeIcon" />
                    {item.store_title}
                  </h3>
                </div>
              </div>
              <img
                className={style.arrowIcon}
                src={rightArrow}
                alt="Arrow"
                onClick={() => history.push(`/${item?.id}`)}
              />
            </div>
          </>
        );
      })}
      <div className={style.paginationalign}>
      <Pagination numOfLinks={payload?.dealData?.length} page={page} setPage={setPage} total={100}  /> 
      </div>
    </>
  );
};
